// import React from 'react'
import { Card } from './Card';
import {data} from "../../assets/data"
import { IProperty } from '../../interface';
export const Cards = () => {
  return (
    <div className='flex gap-7 flex-wrap justify-center'> 
        {
          data.map((property:IProperty, id:number) => <Card property={property} key={id}/>)
        }
    </div>
  )
}
