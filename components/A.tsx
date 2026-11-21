import NextLink from 'next/link';
import type { ComponentProps } from 'react';

/**
 * Link wrapper. In the normal build it's next/link.
 * In the portable preview build (NEXT_PUBLIC_PREVIEW=1) pages are flat .html files
 * that can be hosted under any sub-path, so links become plain relative anchors.
 */
export const PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === '1';

export function toRel(href: string) {
  const [pathQuery, hash] = href.split('#');
  const [path, query] = pathQuery.split('?');
  const clean = path.replace(/^\/|\/$/g, '');
  const file = (clean ? `${clean}.html` : 'index.html') + (query ? `?${query}` : '');
  return path === '' ? `#${hash}` : hash ? `${file}#${hash}` : file;
}

/** Path to a file in /public that also resolves in the flat preview build. */
export const asset = (p: string) => (PREVIEW ? `.${p}` : p);

export default function Link({ href, ...rest }: Omit<ComponentProps<typeof NextLink>, 'href'> & { href: string }) {
  if (PREVIEW) {
    const { prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, onNavigate, ...a } = rest as any;
    return <a href={toRel(href)} {...a} />;
  }
  return <NextLink href={href} {...rest} />;
}
