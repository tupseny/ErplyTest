export const environment = {
  production: false,
  vatApi: {
    protocol: 'https',
    host: 'vat.erply.com',
    paths: {
      numbers: {
        pathname: 'numbers',
        params: {
          vatNumber: 'vatNumber',
        }
      }
    },
  }
};


