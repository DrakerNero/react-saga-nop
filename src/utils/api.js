const API_SERVER = 'http://api.ittp.co.th'

const getJSON = url => (
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
)

const postJSON = (url, json) => (
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
)

export {
  API_SERVER,
  getJSON,
  postJSON,
}
