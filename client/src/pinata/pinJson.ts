const JWT = process.env.JWT;
console.log(JWT)
export async function pinJSONToIPFS(meta:any) {

  // console.log(...meta)
  try {
    const data = JSON.stringify({
      pinataContent: {
        ...meta
      },
      pinataMetadata: {
        name: "metadata.json"
      }
    })
    console.log(data)
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyMDA5NmUzMC0xNTBkLTQ0OTUtODNlYi0zNDM2YjllMzUwYTAiLCJlbWFpbCI6ImpvaG5zZGFubGFtaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNzE3NzgwYTQzMDgzNzYyMTRhNzYiLCJzY29wZWRLZXlTZWNyZXQiOiI4MjM3NWIwMGQzNzdjN2JjNWY2OGM5YmY3Y2U0ZmU5YThiZjI1YzA4NzcxYjYyNTc1NDc2Yzg0NDgyMTlhNzQ1IiwiZXhwIjoxNzUyOTI2NDQxfQ.nJKReJ4x4spYbAgPgNqffEViGWzNQTxulamHwgZsmhM"}`,
      },
      body: data,
    });
    return await res.json();
    // console.log(resData);
  } catch (error) {
    console.log(error);
  }
};


