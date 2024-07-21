const options = {method: 'GET', headers: {Authorization: 'Bearer '}};

fetch('https://api.pinata.cloud/groups/{id}', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));