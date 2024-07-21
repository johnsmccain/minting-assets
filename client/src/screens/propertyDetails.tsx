import {data} from "../assets/data";
import { useParams } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
export const PropertyDetails = () => {
    const {id} = useParams();
    const property = data[id as any];
  return (
    <div className='overflow-hidden shadow-lg p-5'>
        <div className="max-w-[1200px] mx-auto  w-full min-w-64 rounded-lg ">
            <div className="flex justify-end gap-9 my-5">
                <button className="">Save</button>
                <button className="">Share</button>
                <button className="">Hide</button>
            </div>
            <div className="">
                <img src= {property.image}  alt="Property" className='aspect-video  object-cover' />
            </div>
        </div>
        <div className="flex">

        <ScrollArea className="mt-5  w-[70%]">
            <div className="">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">{property.attributes[0].value} ETH</h3>
                    <div className="flex  gap-5">
                        <div className="">
                            <h3 className="text-2xl font-bold">{property.attributes[2].value}</h3>
                            <p className="">beds</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-bold">{property.attributes[3].value}</h3>
                            <p className="">baths</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-bold">{property.attributes[4].value}</h3>
                            <p className="">sqft</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </ScrollArea>
        <div className="sticky">
            
            <div className="overflow-hidden rounded-xl mx-2  my-5">
                <Button variant={"default"} className="rounded-none">Contect a team</Button>
                <Button variant={"ghost"} className="rounded-none">Buy now</Button>
                <Button variant={"destructive"} className="rounded-none">Request a tour</Button>
            </div>
        </div>
        </div>
    </div>
  )
}
