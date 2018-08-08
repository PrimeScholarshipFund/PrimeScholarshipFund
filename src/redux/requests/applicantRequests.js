import axios from 'axios';

export function getApplicantRequest(userId) {
  return axios.post('/api/application/new', {
    userId
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
};
