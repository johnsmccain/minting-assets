//  process.env.PINATA_JWT

export async function pinFileToIPFS(file:any, setImage:any) {
  try {
    // const text = "Hello World!";
    // const blob = new Blob([text], { type: "text/plain" });
    // const file = new File([blob], "hello-world.txt")
    console.log(process.env.PINATA_JWT as string)
    const data = new FormData();
    data.append("file", file);
// console.log(process.env.WAGMI_KEY as string)

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyMDA5NmUzMC0xNTBkLTQ0OTUtODNlYi0zNDM2YjllMzUwYTAiLCJlbWFpbCI6ImpvaG5zZGFubGFtaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNzE3NzgwYTQzMDgzNzYyMTRhNzYiLCJzY29wZWRLZXlTZWNyZXQiOiI4MjM3NWIwMGQzNzdjN2JjNWY2OGM5YmY3Y2U0ZmU5YThiZjI1YzA4NzcxYjYyNTc1NDc2Yzg0NDgyMTlhNzQ1IiwiZXhwIjoxNzUyOTI2NDQxfQ.nJKReJ4x4spYbAgPgNqffEViGWzNQTxulamHwgZsmhM`
      },
      body: data,
    });
    const resData = await res.json();
    

    setImage(`https://jade-just-rhinoceros-52.mypinata.cloud/ipfs/${resData.IpfsHash}`)
  } catch (error) {
    console.log(error);
    return error;
  }
};


