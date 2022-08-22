const title = 'Moot'
const description =
  'This is the front end challenge for Moot'

const SEO = {
  title,
  description,
  canonical: 'trymoot.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'trymoot.com',
    title,
    description,
    images: [
      {
        url: '/images/logo',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@moot_hq',
    site: '@moot_hq',
    cardType: 'summary_large_image',
  },
}

export default SEO
