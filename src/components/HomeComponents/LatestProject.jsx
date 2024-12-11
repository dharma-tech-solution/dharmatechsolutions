import Pawsitive from "../../assets/ImageAndIcons/PawsitiveIMG.png";
import UrbanStudio from "../../assets/ImageAndIcons/urbanStudioIMG.png";
import JesicaFlat from "../../assets/ImageAndIcons/jasicaflatIMG.png";
import SolarCRM from "../../assets/ImageAndIcons/solarCRmIMG.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LatestPorject() {
  const navigate=useNavigate()
  function redirect(link){
    navigate(link)
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
    <div className=" flex p-6 w-full flex-wrap mt-6">
        {arrWeb.map((item, index) => {
          return (
            <div
            onClick={()=>redirect(item.link)}
              key={index}
              className="w-[240px] ml-5 mt-3 p-4 bg-white rounded-2xl cursor-pointer"
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
    <div className=" flex p-6 w-full flex-wrap mt-6">
        {arrApp.map((item, index) => {
          return (
            <div
            onClick={()=>redirect(item.link)}
              key={index}
              className="w-[240px] ml-5 mt-3 p-4 bg-white rounded-2xl cursor-pointer"
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
    <div className=" flex p-6 w-full flex-wrap mt-6">
        {arrERP.map((item, index) => {
          return (
            <div
            onClick={()=>redirect(item.link)}
              key={index}
              className="w-[240px] ml-5 mt-3 p-4 bg-white rounded-2xl cursor-pointer"
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
    <div className=" flex p-6 w-full flex-wrap mt-6">
        {arrCRM.map((item, index) => {
          return (
            <div
            onClick={()=>redirect(item.link)}
              key={index}
              className="w-[240px] ml-5 mt-3 p-4 bg-white rounded-2xl cursor-pointer"
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
  navigate("/allprojects")
}
  }
  const [divs,setDiv]=useState(<div className=" flex p-6 w-full flex-wrap mt-6">
    {arrWeb.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="w-[240px] ml-5 mt-3 p-4 bg-white rounded-2xl cursor-pointer"
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
  return (
    <div className="p-8 bg-[#EDF2FF]">
      <h3 className="text-lg font-semibold text-[#0040FF] text-center mb-3">
        Latest Project
      </h3>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-center mb-8">
          Our Recent Launched Projects
        </h3>
        <h3 className="text-3xl -mt-5 font-bold text-center mb-8">
          Available Into Market
        </h3>
      </div>
      <div className="border-2 border-solid border-slate-950  rounded-md p-3 w-fit mx-auto flex-wrap flex items-center justify-center">
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
      {divs}
      
    </div>
  );
}
export default LatestPorject;
