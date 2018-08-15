const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    // Insert live publishable key here when you get it. 
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_B0AOv1jnESX5c8FW6m1ABpAc';

export default STRIPE_PUBLISHABLE;