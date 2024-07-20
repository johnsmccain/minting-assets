import { DotSquare, Heart, HeartIcon} from "lucide-react"
import { useState } from "react"
import { IProperty } from "../../interface"

export const Card = ({property}: any) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className='min-w-56 max-w-96 w-80 rounded-md overflow-hidden relative hover:shadow-lg cursor-pointer transition-all ease-in-out animate-out hover:scale-105'>

   
      <div className="flex justify-between absolute top-0 left-0 right-0 z-50">
        <div className="bg-white text-black p-2"><span className="">8 days on GA-RWA</span></div>
        <button className=" p-2" onClick={() => {setIsLiked(!isLiked)}}>{isLiked ?<Heart color="red" fill="red"/>: <HeartIcon />}</button>
      </div>
        <img src={property.image} alt="" className="aspect-video" />
      <div className="p-2">
        <div className="flex justify-between">
          <span className="font-bold">{property.attributes[0].value} ETH</span>
          <DotSquare/>
        </div>
        {/* {property.attributes.map((attr:any, id:number) => {
          return (<div className="">
            <p className="font-light text-sm text-start py-1">3 bd | 3 ba | 1,500 sqft - house for sale</p>
          </div>)
        })} */}
        <div className="">
          <p className="font-light text-sm text-start py-1">{property.description}</p>
        </div>
        <div className="">
          <p className="font-light text-sm text-start py-1">{property.address} </p>
        </div>
        <div className="">
          <span className="font-light text-xs text-start pb-1">{property.name}</span>
        </div>
      </div>
    </div>
  )
}
