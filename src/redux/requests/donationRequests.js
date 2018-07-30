import axios from 'axios';

export function postDonationRequest() {
  return axios.get(`/api/donation/`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}
