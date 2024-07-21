const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer ', 'Content-Type': 'application/json'},
    body: '{"name":"NFT-Project"}'
  };
  
  fetch('https://api.pinata.cloud/groups', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));