import GroupImg from "../assets/ImageAndIcons/group2.png";
import MemberImg from "../assets/ImageAndIcons/member.png";
import WhatWeProvide from "../components/HomeComponents/WhatWeProvide";
import LatestPorject from "../components/HomeComponents/LatestProject";
import WhyWorkWithUs from "../components/HomeComponents/WhyWorkWithUs";
import Reviews from "../components/HomeComponents/Reviews";
import WriteToUs from "../components/HomeComponents/WriteToUs";

function Home(){
return (
    <>
      
        <div className="overflow-hidden">
          <div className="bg-background-3 w-full h-[450px] bg-center bg-cover "></div>
          <div className="w-full h-full -mt-64 flex justify-center p-3 md:p-0  ">
          <div className="w-full md:w-[870px] h-full md:h-[450px]   border-2 flex flex-col items-center justify-center  border-slate-900 rounded-full ">
          <div className="flex  justify-center mt-2">
                  <span className="flex  text-xs text-muted-foreground">
                    <img src={MemberImg} alt="" className="mr-2 w-12" /> 510+
                    Trusted Members
                  </span>
                 
                </div>
                <h1 className="font-sans font-bold text-nowrap text-3xl md:text-6xl">Shaping Digital</h1>
                <h1 className="font-sans font-bold text-nowrap text-3xl md:text-6xl mt-2">Futures <span className="text-[#3B5EE9]">Together</span></h1>
                <h1 className="text-xs mt-5 text-center">Empowering Businesses with Scalable, Future-Ready Web, App, ERP, & CRM Solutions – Crafted for </h1>
                  <h1 className="text-xs text-center"> Excellence and Designed to Drive Results in a Dynamic Digital Landscape.</h1>
                  <button className="bg-black text-white px-4 py-1 mt-3 text-sm rounded-md mb-2" onClick={()=>window.location.href="/allprojects"}>Explore Our Work</button>
            </div>
            </div>
        {/* <div className="bg-[#EDF2FF] rounded-2xl p-6">
          <div className="bg-white rounded-2xl p-3 pb-0 space-y-10">
            <div className="flex items-center justify-center  ">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center">
                  <span className="flex items-center text-xs text-muted-foreground">
                    <img src={MemberImg} alt="" className="mr-2 w-12" /> 510+
                    Trusted Members
                  </span>
                </div>

                <h1 className="text-4xl font-bold">
                  Shaping <span className="text-blue-500">Digital</span> Futures
                </h1>
                <p className="mt-2 text-sm text-center w-4/5 mx-auto">
                  Empowering Businesses with Scalable, Future-Ready Web, App,
                  ERP & CRM Solutions – Crafted for Excellence and Designed to
                  Drive Results in a Dynamic Digital Landscape.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img src={GroupImg} alt="" className="w-full max-w-3xl" />
            </div>
          </div>
        </div> */}
        <div>
          <div className="flex flex-wrap justify-between p-10 gap-1">
            <div className="bg-card p-6 rounded-lg shadow-lg  sm:w-1/2 md:w-1/3 lg:w-1/5">
              <h2 className="text-4xl  text-foreground">1K</h2>
              <p className="font-bold">Satisfied Clients</p>
              <p className="text-xs">
                Empowering over a thousand clients with reliable solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/4 lg:w-1/5">
              <h2 className="text-4xl text-foreground">40+</h2>
              <p className="font-bold">Successful Projects</p>
              <p className="text-xs">
                Bringing expertise and dedication to every project we deliver.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/4 lg:w-1/5">
              <h2 className="text-5xl text-foreground">4+</h2>
              <p className="font-bold">Industry Awards Won</p>
              <p className="text-xs">
                Proudly recognized for our excellence and innovation.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/4 lg:w-1/5">
              <h2 className="text-5xl text-foreground">10+</h2>
              <p className="font-bold">Skilled Experts on Team</p>
              <p className="text-xs">
                A team of experts committed to driving your success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-[#EDF2FF] rounded-3xl">
          <div className="bg-white rounded-2xl p-7 text-center">
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-500 ">About</span> Us
            </h1>
            <p className="text-[14px] w-3/4 mx-auto mb-6">
              At Dharma Tech solution, we are a team of passionate and skilled
              software engineers dedicated to crafting high-quality, innovative,
              and user-centric solutions. With a diverse range of expertise
              spanning frontend development, full-stack engineering, UI/UX
              design, and data analysis, we bring together the best minds to
              turn your ideas into reality.
            </p>
            <div class="flex justify-center items-center ">
              <div class="flex space-x-4">
                <button class="bg-black text-white px-3 py-1 rounded text-sm">
                  Read More
                </button>
                <button class="border border-black px-3 py-1 rounded text-sm">
                  Meet Dhara Team
                </button>
              </div>
            </div>
          </div>
          <WhatWeProvide />
          <LatestPorject />
          <WhyWorkWithUs />
          <Reviews/ >
          <WriteToUs />
        </div>
        </div>
    </>

)
}
export default Home