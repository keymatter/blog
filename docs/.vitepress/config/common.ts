export const BASE_URL: string = '/blog/' as const
export const withBase = (path: string): string => `${BASE_URL + path}`.replace(/\/+/g, '/')
