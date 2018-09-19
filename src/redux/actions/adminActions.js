export const ADMIN_ACTIONS = {
  GET_ALL_APPLICATIONS: 'GET_ALL_APPLICATIONS',
  SET_ALL_APPLICATIONS: 'SET_ALL_APPLICATIONS',
  SAVE_APPLICATION: 'SAVE_APPLICATION_COMMENT',
};

export const getAllApplications = () => ({
  type: ADMIN_ACTIONS.GET_ALL_APPLICATIONS,
});

export const saveApplication = (data) => ({
  type: ADMIN_ACTIONS.SAVE_APPLICATION,
  payload: data,
})
