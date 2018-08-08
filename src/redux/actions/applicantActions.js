export const APPLICANT_ACTIONS = {
  GET_APPLICANT: 'GET_APPLICANT',
  FILL_DATA: 'FILL_FORM',
};

export const getApplicant = (userId) => ({
  type: APPLICANT_ACTIONS.GET_APPLICANT,
  payload: {
    userId,
  }
});

export const setGame = () => ({
  type: APPLICANT_ACTIONS.FILL_FORM,
});
