const options = {
    method: 'PUT',
    headers: {Authorization: 'Bearer ', 'Content-Type': 'application/json'},
    body: '{"name":"NFT-Project-updated"}'
  };
  
fetch('https://api.pinata.cloud/groups/{id}', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));