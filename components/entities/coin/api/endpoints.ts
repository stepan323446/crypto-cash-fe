export const coinEndpoints = {
  list: '/api/v1/crypto/coins/',
  detail: (slug: string) => `/api/v1/crypto/coins/${slug}/`,
}