import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import React from 'react';


const PrivateLayout = () => {
  return (
    <div className='flex w-screen h-screen'>
       <Sidebar /> 
       <main className='flex-w-full bg-blue-400 overflow-y-scroll'></main>
        <Outlet />
      </div>
  );
};


//const PrivateLayout = () => {
  //return (
    //<div className='flex w-screen h-screen'>
      //<Sidebar />
      //<Outlet/>
    //</div>
 // )
//}

export default PrivateLayout;
