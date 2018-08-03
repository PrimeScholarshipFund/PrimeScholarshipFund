export const APPLICANT_ACTIONS = {
  GET_APPLICANT: 'GET_APPLICANTS',
  FILL_DATA: 'FILL_FORM',
};

export const getApplicant = () => ({
  type: APPLICANT_ACTIONS.GET_APPLICANT,
  payload: {
    // userId,
  }
});

export const setGame = () => ({
  type: APPLICANT_ACTIONS.FILL_FORM,
});
