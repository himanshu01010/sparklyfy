import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const customizeCatalog = ()=>{
        navigate('/Campaign/Create/customize')
    }

    const landingPage = ()=>{
        navigate('/Campaign/Create/landingPage')
    }
  return (
    <div className="bg-black text-white p-10 min-h-screen">
      <h1 className="text-4xl font-semibold mb-20">Create Campaign</h1>
      
      <h2 className="text-3xl mb-5">Campaign Details</h2>
      
      <div className="space-y-10">
        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold">Name Your Campaign</h3>
            <p className=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <input
            type="text"
            placeholder="Write Campaign Name"
            className="bg-white text-black rounded-full px-6 py-5 w-1/4 text-2xl"
          />
        </div>

        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold">Customize Catalog</h3>
            <p className=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          
          <button className="btn rounded-full text-xl px-10 hover:bg-amber-500" onClick={customizeCatalog}>Customize</button>
        </div>

        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold" >Landing Page</h3>
            <p className=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          
          <button className="btn rounded-full text-xl px-10 hover:bg-amber-500" onClick={landingPage}>Add</button>
        </div>
      </div>

      <div className="mt-40 flex justify-end space-x-4">
        <button className="btn rounded-full text-xl px-10 hover:bg-amber-500">Cancel</button>
        <button className="btn rounded-full px-10 text-xl hover:bg-amber-500">Save</button>
      </div>
    </div>
  );
};

export default CreateCampaign;
