import axios from 'axios';

export function updateApplication(payload) {
  const body = {
    comments: payload.comments,
    status: payload.status,
    form_id: payload.form_id
  }

  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.put('api/admin/save', body, config)
    .then(response => response.data)
    .catch(error => { throw error.response || error; });
}

export function getAllApplicationsRequest() {
  return axios.get(`api/application/admin`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}
