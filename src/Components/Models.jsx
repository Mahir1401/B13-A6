import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelsPromise,carts,setCart }) => {
  const models = use(modelsPromise);
  
  return (
    <div className='max-w-7xl mx-auto my-20 px-6 grid gap-8'>
      <div className='text-center flex flex-col gap-6'>
        <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2 max-w-4xl mx-auto lg:grid-cols-3 max-w-7xl mx-auto'>
        {models.map(model => (
          <ModelCard key={model.id} model={model} carts={carts} setCart={setCart}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;