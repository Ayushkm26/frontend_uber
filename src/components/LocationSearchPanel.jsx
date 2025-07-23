import React from 'react'

function LocationSearchPanel() {
    // This component is used to display a list of locations
      const locations = [
        "234B, near bank colony cambridge school,Buxar Bihar",
        "123A, near city center,Buxar Bihar",
        "456C, near railway station,Buxar Bihar",
        "789D, near bus stand,Buxar Bihar"
      ];
  return (
    <div>
        {locations.map(function(element){
            return (
                <div key={Math.random()} className='flex justify-start my-2 items-center border-2 p-3 rounded-xl border-gray-100 active:border-black gap-2'>
                <h2 className='bg-white p-2 text-3xl rounded-full flex items-center justify-center'><i className="ri-map-pin-user-fill "></i></h2>
                <h4 className='font-medium'>{element}</h4>
                </div>
            );
        })}
     
   
    </div>
  )
}

export default LocationSearchPanel