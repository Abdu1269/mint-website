import React from 'react'
import SectorCard from './sector_card/sector-card'

export default function Sectors() {
  const mock = [
    {
      id: 1,
      name: "name 1",
      desc: "desc 1",
      image: "https://images.unsplash.com/photo-1718215005618-ca55ae919d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "name 2",
      desc: "desc 2",
      image: "https://plus.unsplash.com/premium_photo-1705808668720-30680abf0854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "name 3",
      desc: "desc 3",
      image: "https://images.unsplash.com/photo-1718301162350-fddcdafa19bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  return (
    <div className='px-20'>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 py-5">
      {
        mock.map((item) => {
          return (
            <SectorCard key={item.id} name={item.name} desc={item.desc} image={item.image}/>
          )
        })
      }
    </div>
    </div>
  )
}
