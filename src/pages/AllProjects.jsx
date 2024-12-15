
import Pawsitive from "../assets/ImageAndIcons/PawsitiveIMG.png"
import UrbanStudio from "../assets/ImageAndIcons/urbanStudioIMG.png";
import JesicaFlat from "../assets/ImageAndIcons/jasicaflatIMG.png";
import SolarCRM from "../assets/ImageAndIcons/solarCRmIMG.png";
import { useState } from "react";
import WriteToUs from "../components/HomeComponents/WriteToUs";
import { useNavigate } from "react-router-dom";
function AllProjects(){
  const navigate=useNavigate()
  function redirect(link){
    navigate(link)
    window.scrollTo(0, 0);
  }
  const arrWeb = [
    {
      img: Pawsitive,
      name: "WEB-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "WEB-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "WEB-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "WEB-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/petcare'
    },
  ];
  const arrApp = [
    {
      img: Pawsitive,
      name: "APP-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "APP-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "APP-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "APP-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/solar'
    },
  ];
  const arrERP = [
    {
      img: Pawsitive,
      name: "ERP-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "ERP-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "ERP-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "ERP-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/petcare'
    },
  ];
  const arrCRM = [
    {
      img: Pawsitive,
      name: "CRM-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "CRM-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "CRM-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "CRM-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/solar'
    },
  ];
      const change=(id)=>{
    if(id==1){
      setDiv(
        <div className=" grid grid-cols-1 md:grid-cols-4 p-6 w-full  mt-6">
            {arrWeb.map((item, index) => {
              return (
                <div
                onClick={()=>redirect(item.link)}
                  key={index}
                  className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
                >
                  <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
                    <img src={item.img} className="h-46" />
                  </div>
                  <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
                  <h2 className="text-[10px] mt-2">{item.discription}</h2>
                </div>
              );
            })}
          </div>
      )
    }
    
    if(id==2){
      setDiv(
        <div className=" grid grid-cols-1 md:grid-cols-4 p-6 w-full  mt-6">
            {arrApp.map((item, index) => {
              return (
                <div
                onClick={()=>redirect(item.link)}
                  key={index}
                  className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
                >
                  <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
                    <img src={item.img} className="h-46" />
                  </div>
                  <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
                  <h2 className="text-[10px] mt-2">{item.discription}</h2>
                </div>
              );
            })}
          </div>
      )
    }
    
    if(id==3){
      setDiv(
        <div className=" grid grid-cols-1 md:grid-cols-4 p-6 w-full  mt-6">
            {arrERP.map((item, index) => {
              return (
                <div
                onClick={()=>redirect(item.link)}
                  key={index}
                  className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
                >
                  <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
                    <img src={item.img} className="h-46" />
                  </div>
                  <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
                  <h2 className="text-[10px] mt-2">{item.discription}</h2>
                </div>
              );
            })}
          </div>
      )
    }
    
    if(id==4){
      setDiv(
        <div className=" grid grid-cols-1 md:grid-cols-4 p-6 w-full  mt-6">
            {arrCRM.map((item, index) => {
              return (
                <div
                onClick={()=>redirect(item.link)}
                  key={index}
                  className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
                >
                  <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
                    <img src={item.img} className="h-46" />
                  </div>
                  <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
                  <h2 className="text-[10px] mt-2">{item.discription}</h2>
                </div>
              );
            })}
          </div>
      )
    }
    if(id==5){
        setDiv(
<div className=" grid grid-cols-4 p-6 w-full  mt-6">
    {arrWeb.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
{arrApp.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
    

{arrERP.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}

{arrCRM.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
    
  </div>
        )
    }
}
const [divs,setDiv]=useState(<div className=" grid grid-cols-1 md:grid-cols-4 p-6 w-full  mt-6">
    {arrWeb.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
{arrApp.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}

{arrERP.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}

{arrCRM.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] mx-auto mt-3 p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-52 place-items-center">
            <img src={item.img} className="h-46" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
    
  </div>)
return(
    <div>
        <div className="bg-background-4 w-full h-[750px] bg-center bg-cover flex items-center">
            <div className="text-white p-10">
                <h1 className="font-bold text-4xl">Discover Our Expertise in Action</h1>
                <h1 className="mt-2">Explore all our projects and see how Dharma Tech Solution has delivered</h1>
                    <h1> innovative solutions, from e-commerce platforms to custom CRM and ERP</h1>
                        <h1> systems, tailored to meet diverse business needs</h1>
                </div>

        </div>
    <div className="p-5">
        <div className="border-2 border-solid border-slate-950  rounded-md p-3 mt-5 mx-auto flex-wrap flex items-center justify-center">
        <div onClick={()=>change(1)} className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">
          {" "}
          Web Development
        </div>
        <div onClick={()=>change(2)} className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">
          App Development
        </div>
        <div onClick={()=>change(3)} className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">
          ERP
        </div>
        <div onClick={()=>change(4)} className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">
          CRM
        </div>
        <div onClick={()=>change(5)} className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">
          All Projects
        </div>
      </div>
      </div>
      {divs}
<WriteToUs />
    </div>
)
}
export default AllProjects