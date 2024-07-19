// import React from 'react'
import { Card } from './Card';

const arr = [1,2,2,3,3,4,23,23,2]
export const Cards = () => {
  return (
    <div className='flex gap-5 flex-wrap justify-center'> 
        {
          arr.map((data:any, id:number) => <Card key={id}/>)
        }
    </div>
  )
}
