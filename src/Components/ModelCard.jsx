import React, { useState } from 'react';
import { Check } from 'lucide-react';




const ModelCard = ({model,carts,setCart}) => {
  const [isBought,setIsBought] = useState(false);
  const handlePurchase = () => {
    setIsBought(true)
    setCart([...carts,model])
  }

  return (
    <div key={model.id} className='border border-gray-300 shadow-md rounded-3xl p-8 grid gap-4'>
            <div className='flex justify-between items-center'>
              <div className="flex items-center justify-center border-2 border-gray-300 rounded-full p-2 w-12 h-12">
                <img
                  src={model.image}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className='badge rounded-full px-3 py-2'>{model.badge}</span>
            </div>
            <h1 className='text-3xl font-extrabold'>{model.title}</h1>
            <p>{model.description}</p>
            <div className='flex items-end'>
              <h2 className='text-3xl font-bold'>{model.price}</h2>
              <p>{model.billing}</p>
            </div>
            <ul>
              {
                model.features.map((feature, index) => <li className='flex items-center gap-3 mb-2 text-gray-700' key={index}>
                  <Check className='text-green-400'></Check>
                  <span>{feature}</span>
                </li>)
              }
            </ul>
            <button onClick={handlePurchase} className='btn btn-lg font-extrabold text-white bg-gradient-to-r from-purple-700 to-purple-500 w-full rounded-full'>
              {isBought? "Purchased" : "Buy Now" }</button>
          </div>
  );
};

export default ModelCard;