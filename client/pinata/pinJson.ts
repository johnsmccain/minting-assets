const JWT = 'YOUR_PINATA_JWT';

async function pinJSONToIPFS() {
  try {
    const data = JSON.stringify({
      pinataContent: {
        name: "Pinnie",
        description: "A really sweet NFT of Pinnie the Pinata",
        image: "ipfs://bafkreih5aznjvttude6c3wbvqeebb6rlx5wkbzyppv7garjiubll2ceym4",
        external_url: "https://pinata.cloud"
      },
      pinataMetadata: {
        name: "metadata.json"
      }
    })
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`,
      },
      body: data,
    });
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
};

await pinJSONToIPFS()
