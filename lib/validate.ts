export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
// Australian landline/mobile/1300/1800, with or without +61 and spaces
export const isAuPhone = (v: string) => {
  const d = v.replace(/[\s()-]/g, '').replace(/^\+61/, '0');
  return /^(0[2-478]\d{8}|1[38]00\d{6}|13\d{4})$/.test(d);
};
export const isPostcode = (v: string) => /^\d{4}$/.test(v.trim());

export type Errors<T> = Partial<Record<keyof T, string>>;
