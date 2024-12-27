import {Store} from './store';

export const Formdt1: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '$',
  labels: {
    // captcha: {
    //   container: 'p',
    //   text: ['Das ging uns leider zu schnell.'],
    // },
    outOfStock: [
      {
    container: 'button.product-form__submit[disabled] > span',
    text: ['Restocking'], // Match the specific text indicating out of stock
      },
      {
        container: '#root',
        text: ['Restocking'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://formdt1.com/products/t1titanium?variant=47314104058174',
    },
    {
      brand: 'formd',
      model: 't1',
      series: 'titanium-black',
      cartUrl: 'https://formdt1.com/cart/add?id=47314104058174&quantity=1',
      url: 'https://formdt1.com/products/t1titanium?variant=47314104058174',
    },
    {
      brand: 'formd',
      model: 't1',
      series: 'titanium-titanium',
      cartUrl: 'https://formdt1.com/cart/add?id=47959309156670&quantity=1',
      url: 'https://formdt1.com/products/t1titanium?variant=47959309156670',
    },
  ],
  name: 'formdt1',
};
