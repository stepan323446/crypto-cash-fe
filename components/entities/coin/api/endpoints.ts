export const coinEndpoints = {
  list: '/api/v1/crypto/coins/',
  detail: (slug: string) => `/api/v1/crypto/coins/${slug}/`,
  categories: '/api/v1/crypto/categories/',
  networks: '/api/v1/crypto/networks/'
}