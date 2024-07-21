// import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog"
import { Card } from './Card';
import {data} from "../../assets/data"
import { IProperty } from '../../interface';
import { useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [propertyId, setpropertyId] = useState();
  return (

      <div className='flex gap-7 flex-wrap justify-center'> 
    
          {
            data.map((property:IProperty, id:number) => <Link to={`/property/${id}`} key={id}><Card property={property} /></Link>)
          }
         
      </div>
    
  )
}
