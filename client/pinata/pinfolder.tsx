import React, { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile]: any = useState();
  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files);
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      Array.from(selectedFile).forEach((file) => {
        formData.append("file", file as any);
      });
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label className="form-label"> Choose File</label>
      <input
        directory={`${1}/`}
        webkitdirectory=""
        type="file"
        onChange={changeHandler}
      />
      <button onClick={handleSubmission}>Submit</button>
    </>
  );
}

export default App;
