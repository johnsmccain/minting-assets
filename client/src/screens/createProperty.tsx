import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { Button } from "../components/ui/button"
import { toast } from "../components/ui/use-toast"

import RealEstateABI from "../../contractsData/RealEstate.json";
import RealEstateAddress from "../../contractsData/RealEstate-address.json";
import {config, configx, realEstateConfig} from "../store/config";
import { useState } from "react";
import { pinFileToIPFS } from "../pinata/pinFIle";
import { pinJSONToIPFS } from "../pinata/pinJson";
export const CreateProperty = () => {
  const [name, setName] = useState<string>()
  const [zip, setZip] = useState(0)
  const [state, setState] = useState<string>()
  const [image, setImage] = useState<any>();
  const [region, setRegion] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [description, setDescription] = useState<string>()
  const [purchasePrice, setPurchasePrice] = useState()
  const [propertyAddress, setPropertyAddress] = useState<string>()




  const { 
    data: hash, 
    isPending, 
    writeContract 
  } = useWriteContract() 
 const xxxx = useAccount();

  async function mintAsset(e:any){

    e.preventDefault()
    if(name){

      const meta = {image, name, description, purchasePrice, zip, country, state, region, propertyAddress};
      // console.log()
      try {
        const res = await pinJSONToIPFS(meta)
       
        const x = writeContract({
          address: RealEstateAddress.address as any,
          abi: RealEstateABI.abi,
          functionName: 'safeMint',
          args: [`${xxxx.address}`,res],
        })
        console.log(x)
      } catch (error) {
        console.log(error)
      }
    }
      
      
      // toast("")
    // console.log(readContract.data)
  } 
  console.log(image)
  const handleFileChange = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];

    const res = pinFileToIPFS(file, setImage);
    // console.log('res.IpfsHash', )

    // setImage(`https://jade-just-rhinoceros-52.mypinata.cloud/ipfs/${res.ipfsHash}`)
    // console.log(process.env.JWT)
    // console.log(res?.IpfsHash as any);
    // const res = await pinata.testAuthentication()
    // const res = await pinata.pinFileToIPFS(file)
    // console.log(res)
// "message": "Congratulations! You are communicating with the Pinata API"!"

    if (file) {
      try {
        // const fileRes = await uploadFileToPinata(file);
        // setImage(`https://jade-just-rhinoceros-52.mypinata.cloud/ipfs/${fileRes.IpfsHash}`);
      } catch (error) {
        console.error("IPFS image upload error: ", error);
      }
    }

  }

  const handleSubmit = async ()=> {

  }
  return (
   <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    
    <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
        </label>
    </div> 

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Name
      </label>
      <input onChange={(e:any) => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Luxury NYC Penthouse"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      Address
      </label>
      <input onChange={(e:any) => setPropertyAddress(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="157 W 57th St APT 49B, New York, NY 10019"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
      Description
      </label>
      <input onChange={(e:any) => setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Luxury Penthouse located in the heart of NYC"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <input onChange={(e:any) => setState(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Region"/>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input onChange={(e:any) => setZip(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Country
      </label>
      <input onChange={(e:any) =>setRegion(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Region
      </label>
      <div className="relative">
        <input onChange={(e:any) => setRegion(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Region"/>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Price
      </label>
      <input onChange={(e:any) => setPurchasePrice(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="90 ETH"/>
    </div>
  </div>
  <Button onClick={mintAsset} >Mint</Button>
</form>
  )
}
