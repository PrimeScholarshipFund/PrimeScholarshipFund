import axios from 'axios';

export function getAllApplicationsRequest() {
  return axios.get(`api/application/admin`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}
