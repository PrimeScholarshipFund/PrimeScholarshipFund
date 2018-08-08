export const APPLICANT_ACTIONS = {
  GET_APPLICANT: 'GET_APPLICANT',
  SET_DATA: 'SET_DATA',
};

export const getApplicant = (userId) => ({
  type: APPLICANT_ACTIONS.GET_APPLICANT,
  payload: {
    userId,
  }
});
