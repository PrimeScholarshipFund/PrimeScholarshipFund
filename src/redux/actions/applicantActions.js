export const APPLICANT_ACTIONS = {
  GET_APPLICANTS: 'GET_APPLICANTS',
  FILL_DATA: 'FILL_FORM',
};

export const getApplicants = () => ({
  type: APPLICANT_ACTIONS.GET_APPLICANTS,
  payload: {
    // userId,
  }
});

export const setGame = () => ({
  type: APPLICANT_ACTIONS.FILL_FORM,
});
