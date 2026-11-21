import type { ReactNode } from 'react';

export default function Field({ id, label, error, required, hint, children, full }: {
  id: string; label: string; error?: string; required?: boolean; hint?: string; children: ReactNode; full?: boolean;
}) {
  return (
    <div className={`field ${error ? 'has-error' : ''} ${full ? 'field--full' : ''}`}>
      <label htmlFor={id}>{label}{required && <span className="req" aria-hidden> *</span>}</label>
      {children}
      {error ? <small id={`${id}-err`} className="field__error" role="alert">{error}</small> : hint ? <small className="field__hint">{hint}</small> : null}
    </div>
  );
}
