import axios from 'axios';

export function getApplicantRequest(userId) {
  return axios.get(`/table/getHandInfo/${userId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}
