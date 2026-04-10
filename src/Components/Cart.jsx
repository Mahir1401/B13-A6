import React from 'react';

const Cart = ({ carts }) => {
  console.log(carts)
  return (
    <div>
      <h1 className='font-bold text-3xl'>Your Cart</h1>
      <div className='flex flex-col gap-2'>
        {
          carts.map(item => <div key={item.id} className='bg-gray-200 py-4 px-3 rounded-3xl flex justify-between'>
            <div className='flex'>
              <div className="flex items-center justify-center border-2 border-transparent bg-white rounded-full p-2 w-12 h-12">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className='font-bold'>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
            <p className='text-red-400 font-bold text-2xl hover:text-red-600'>Remove</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Cart;