

import {Link} from 'react-router-dom'
const Header = () => {
const nav = [{id:'00',text:"Home",path:'/'},{id:'01',text:"Services",path:"/services"},{id:"03",text:"Hire Us",path:"/hire"},{id:"04",text:'Contact',path:"/contact"}];


  return (
    <div className="flex justify-between   w-[98%] mt-2 md:w-[95%] md:mt-4">
      <div className="  flex items-center gap-4 ">
        <img
          src="/assets/logo.png"
          alt=""
          width={50}
          className="object-cover rounded-full border-2 border-cyan-800"
        />
        <span className='font-[poppins]'>forgetech-africa</span>
      </div>
      <div className="hidden md:flex items-center">
        <hr className="h-0.5 w-48 bg-gray-700" />
        <div
          className="bg-cyan-800 sticky  h-10 w-[500px] rounded-2xl text-white flex gap-4 justify-evenly items-center"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" ,backdropFilter:'blur(10px)'}}
        >
          {nav.map((list, index) => (
            <Link to={list.path} key={index.id} className="flex gap-2 hover:cursor-pointer hover:-translate-y-1 transition-all duration-75">
              <span>{list.id}</span>
              <span>{list.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header
