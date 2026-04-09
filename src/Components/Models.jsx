import { Check } from 'lucide-react';
import React, { use } from 'react';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  console.log(models);

  return (
    <div className='my-20 mx-70 grid gap-8'>
      <div className='text-center flex flex-col gap-6'>
        <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {models.map(model => (
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
            <button className='btn btn-lg font-extrabold text-white bg-gradient-to-r from-purple-700 to-purple-500 w-full rounded-full'>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;