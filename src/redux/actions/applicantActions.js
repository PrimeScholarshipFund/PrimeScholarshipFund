export const APPLICANT_ACTIONS = {
  GET_APPLICANT: 'GET_APPLICANT',
  EDIT_APPLICATION: 'EDIT_APPLICATION',
  SAVE_APPLICATION: 'SAVE_APPLICATION',
  FILL_FORM: 'FILL_FORM',
};
// Checks if there is an open application, retrieves application info, else, make a new one. Either way sends a form Id
export const getApplicant = () => ({
  type: APPLICANT_ACTIONS.GET_APPLICANT,
});

// Used on the save and continue button, pushes data in store to server.
export const saveApplication = (data) => ({
  type: APPLICANT_ACTIONS.SAVE_APPLICATION,
  payload: data,
});

// Makes changes to redux store on user input changes
export const editApplication = (data) => ({
  type: APPLICANT_ACTIONS.EDIT_APPLICATION,
  payload: data,
})



// export const fillForm = () => ({
//   type: APPLICANT_ACTIONS.FILL_FORM,
// })
