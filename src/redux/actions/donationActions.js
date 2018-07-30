export const DONATION_ACTIONS = {
  POST_DONATION: 'POST_DONATION',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const postDonation = () => ({
  type: DONATION_ACTIONS.POST_DONATION,
});
