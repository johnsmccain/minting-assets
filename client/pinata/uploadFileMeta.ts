const options = {
    method: 'PUT',
    headers: {Authorization: 'Bearer ', 'Content-Type': 'application/json'},
    body: '{"ipfsPinHash":"QmTYTVXrHeePozENTRMApK621NFdVac9vbp6k4BeiMFtwm","name":"Another test","keyvalues":"<string>"}'
  };
  
  fetch('https://api.pinata.cloud/pinning/hashMetadata', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));