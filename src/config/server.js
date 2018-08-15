

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
    //Insert the domain that you are going to use for the website here. 
  ? 'putApiDomainHere'
  : '/api/donation';

export default PAYMENT_SERVER_URL;
