import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts,setCart }) => {

  const handlePayment = () => {
    setCart([])
    toast.success("Payment successful!")
  }
  const handleRemove = (item) => {
    const filterArray = carts.filter(e => e.id !== item.id)
    setCart(filterArray)
    toast.success("Item removed!")
  }

  const totalPrice = carts.reduce((sum,item) => Number(sum) + Number(item.price), 0)

  return (
    <div className='max-w-7xl mx-auto my-20 px-20 grid gap-8'>
      <h1 className='font-bold text-3xl'>Your Cart</h1>
      {
        carts.length === 0 ? 
        <p className='font-extrabold text-4xl text-center bg-gray-200 py-20 rounded-3xl'>
          Cart is Empty
        </p> :
        <>
        <div className='flex flex-col gap-2'>
        {
          carts.map(item => 
          <div key={item.id} className='bg-gray-200 py-4 px-7 rounded-3xl flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className="flex items-center justify-center border-2 border-transparent bg-white rounded-full p-2 w-13 h-13">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className='font-bold'>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>
            <p onClick={()=>handleRemove(item)} className='text-red-400 font-bold text-xl hover:text-red-600 cursor-pointer'>Remove</p>
          </div>)
        }
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-gray-300'>Total:</p>
        <p className='font-bold text-black text-2xl'>${totalPrice}</p>
      </div>
      <button onClick={handlePayment} className='btn text-white bg-gradient-to-r from-purple-700 to-purple-500 text-xl font-bold rounded-full'>Proceed To Checkout</button>
      </>
      } 
    </div>
  );
};

export default Cart;