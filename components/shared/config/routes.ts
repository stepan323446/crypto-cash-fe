export const routes = {
  home: () => '/',
  market: () => '/market',
  news: () => '/news',
  newsItem: (id: string) => `/news/${id}`,
  about: () => '/about',
  coin: (slug: string) => `/coins/${slug}`,
  wallet: () => '/wallet',
}