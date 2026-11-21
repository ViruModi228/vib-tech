'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CircleAlert, CircleCheck, Send } from 'lucide-react';
import Field from './Field';
import { company, jobs, services } from '@/lib/data';
import { sendForm } from '@/lib/submit';
import { isAuPhone, isEmail, type Errors } from '@/lib/validate';

type F = { name: string; company: string; email: string; phone: string; topic: string; message: string; consent: boolean };
const empty: F = { name: '', company: '', email: '', phone: '', topic: '', message: '', consent: false };

const extraTopics = [
  { value: 'quote', label: 'Request a quote' },
  { value: 'support', label: 'Existing customer support' },
  { value: 'careers', label: 'Careers enquiry' },
  { value: 'other', label: 'Something else' },
];
const topicLabel = (v: string) => services.find((s) => s.slug === v)?.title ?? extraTopics.find((t) => t.value === v)?.label ?? v;

function validate(f: F): Errors<F> {
  const e: Errors<F> = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!f.email.trim()) e.email = 'Email is required.';
  else if (!isEmail(f.email)) e.email = 'That email doesn’t look right.';
  if (f.phone.trim() && !isAuPhone(f.phone)) e.phone = 'Enter a valid Australian number, e.g. 0412 345 678.';
  if (!f.topic) e.topic = 'Please choose what you need help with.';
  if (f.message.trim().length < 20) e.message = 'Tell us a little more (at least 20 characters).';
  if (!f.consent) e.consent = 'Please agree so we can contact you.';
  return e;
}

export default function ContactForm() {
  const [f, setF] = useState<F>(empty);
  const [errors, setErrors] = useState<Errors<F>>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Links like /contact/?topic=quote or ?topic=careers&role=field-engineer pre-fill the form
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const topic = q.get('topic');
    if (!topic || !(services.some((s) => s.slug === topic) || extraTopics.some((t) => t.value === topic))) return;
    const role = jobs.find((j) => j.slug === q.get('role'))?.title;
    setF((p) => ({ ...p, topic, message: role && !p.message ? `I’m interested in the ${role} role.` : p.message }));
  }, []);

  const set = <K extends keyof F>(k: K, v: F[K]) => {
    const next = { ...f, [k]: v };
    setF(next);
    if (touched) setErrors(validate(next));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const topic = topicLabel(f.topic);
      await sendForm(`Website enquiry: ${topic} (${f.name})`, {
        form: 'Contact',
        name: f.name,
        company: f.company,
        email: f.email,
        phone: f.phone,
        topic,
        message: f.message,
      });
      setStatus('sent');
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  };

  const err = (k: keyof F) => errors[k];
  const aria = (k: keyof F) => ({ 'aria-invalid': !!err(k), 'aria-describedby': err(k) ? `c-${k}-err` : undefined });

  return (
    <div className="form-card">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div key="ok" className="form-success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <CircleCheck size={56} />
            <h3>Thanks, {f.name.split(' ')[0]}. Message received.</h3>
            <p>One of our team will get back to you within one business day. For anything urgent, call us on {company.phone}.</p>
            <button className="btn btn--ghost" onClick={() => { setF(empty); setStatus('idle'); setTouched(false); setErrors({}); }}>Send another message</button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3>Send us a message</h3>
            <p className="form-card__sub">Fields marked * are required.</p>
            <div className="form-grid">
              <Field id="c-name" label="Full name" required error={err('name')}>
                <input id="c-name" autoComplete="name" value={f.name} onChange={(e) => set('name', e.target.value)} {...aria('name')} />
              </Field>
              <Field id="c-company" label="Company">
                <input id="c-company" autoComplete="organization" value={f.company} onChange={(e) => set('company', e.target.value)} />
              </Field>
              <Field id="c-email" label="Work email" required error={err('email')}>
                <input id="c-email" type="email" autoComplete="email" value={f.email} onChange={(e) => set('email', e.target.value)} {...aria('email')} />
              </Field>
              <Field id="c-phone" label="Phone" error={err('phone')} hint="Optional, Australian numbers">
                <input id="c-phone" type="tel" autoComplete="tel" placeholder="04xx xxx xxx" value={f.phone} onChange={(e) => set('phone', e.target.value)} {...aria('phone')} />
              </Field>
              <Field id="c-topic" label="How can we help?" required error={err('topic')} full>
                <select id="c-topic" value={f.topic} onChange={(e) => set('topic', e.target.value)} {...aria('topic')}>
                  <option value="">Select a topic…</option>
                  <optgroup label="General">
                    {extraTopics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </optgroup>
                  <optgroup label="Services">
                    {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </optgroup>
                </select>
              </Field>
              <Field id="c-message" label="Message" required error={err('message')} full>
                <textarea id="c-message" rows={5} value={f.message} maxLength={1000} onChange={(e) => set('message', e.target.value)} {...aria('message')} />
                <span className="counter">{f.message.length}/1000</span>
              </Field>
              <div className={`field field--full check ${err('consent') ? 'has-error' : ''}`}>
                <label className="checkbox">
                  <input id="c-consent" type="checkbox" checked={f.consent} onChange={(e) => set('consent', e.target.checked)} {...aria('consent')} />
                  <span>I agree to VIB Tech contacting me about this enquiry, in line with the privacy policy.</span>
                </label>
                {err('consent') && <small id="c-consent-err" className="field__error" role="alert">{err('consent')}</small>}
              </div>
            </div>
            {status === 'error' && (
              <p className="form-error" role="alert">
                <CircleAlert size={18} />
                <span>Sorry, your message couldn’t be sent. Please try again, or call us on {company.phone}.</span>
              </p>
            )}
            <button className="btn btn--primary btn--block" disabled={status === 'sending'}>
              {status === 'sending' ? <span className="spinner" /> : <Send size={18} />}
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
