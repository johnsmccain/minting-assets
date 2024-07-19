const JWT = 'YOUR_PINATA_JWT';

async function pinFileToIPFS() {
  try {
    const text = "Hello World!";
    const blob = new Blob([text], { type: "text/plain" });
    const file = new File([blob], "hello-world.txt")
    const data = new FormData();
    data.append("file", file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
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

await pinFileToIPFS()
