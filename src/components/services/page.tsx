import React from 'react'
import ServiceCard from './service-card/page';

import icon4 from '/public/services/icons/broker.png';
import icon6 from '/public/services/icons/consult.png';
import icon3 from '/public/services/icons/cross-border.png';
import icon2 from '/public/services/icons/dedicated.png';
import icon1 from '/public/services/icons/freight.png';
import icon5 from '/public/services/icons/track.png';

export default function ServicesPage() {

  const mockdata = [
    {
      id: 1,
      image: icon1,
      title: 'Freight Transportation',
      description: 'Reliable and efficient freight transportation solutions tailored to your logistics needs',
    },
  
    {
      id: 2,
      image: icon2,
      title: 'Dedicated Fleet Services',
      description: 'Provision of dedicated vehicles and drivers for exclusive use by a single client.',
    },
    {
      id: 3,
      image: icon3,
      title: 'Cross-Border Transportation',
      description: 'nternational shipping, including customs clearance and regulatory compliance.',
    },
    {
      id: 4,
      image: icon4,
      title: 'Freight Brokerage',
      description: 'Acting as intermediaries to match shippers with carriers',
    },
    {
      id: 5,
      image: icon5,
      title: 'Tracking and Monitoring',
      description: 'Real-time tracking of shipments, providing transparency and security',
    },
    {
      image: icon6,
      title: 'Consulting Services',
      description: 'Fans obsess over the particular length and angle of its arms ',
    },
  ];

  return (
    <div className='p-20 w-full flex justify-center'>

    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 justify-center bg-blue-300">
      {
        mockdata.map((item) => {
          return (
            <div key={item.id} className='mx-5'>

              <ServiceCard  name={item.title} desc={item.description} image={item.image}/>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}
