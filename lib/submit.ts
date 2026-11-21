import { formspreeId } from './data';

type Value = string | number | boolean | null | undefined;

/**
 * Sends a form to Formspree, which emails it to the address set on the Formspree form.
 * `subject` becomes the email subject; an `email` field becomes the reply-to address.
 * Throws if the form isn't configured or Formspree rejects the submission.
 */
export async function sendForm(subject: string, fields: Record<string, Value>) {
  if (!formspreeId) throw new Error('Formspree form ID is not set in lib/data.ts');

  const body = new FormData();
  body.append('_subject', subject);
  for (const [k, v] of Object.entries(fields)) {
    if (v === null || v === undefined || v === '') continue;
    body.append(k, typeof v === 'boolean' ? (v ? 'Yes' : 'No') : String(v));
  }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: 'POST',
    body,
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.errors?.map((e: { message: string }) => e.message).join(', ') || `Formspree error ${res.status}`);
  }
}
