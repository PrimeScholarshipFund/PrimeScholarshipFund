import axios from 'axios';

export function checkApplicantRequest() {
  return axios.post('/api/application/new', {
  })
  .then(response => response.data)
  .catch((error) => { throw error.response || error; });
}

export function getApplicationRequest(formId) {
  return axios.get(`/api/application/applicant/${formId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function saveApplicationRequest(data) {
  return axios.put(`/api/application/${data.url}`, {
    data: data.data,
  })
  .then(response => response.data)
  .catch((error) => { throw error.response || error; });
}
