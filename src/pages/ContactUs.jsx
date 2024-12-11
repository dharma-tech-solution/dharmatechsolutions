
import dharma from "../assets/services/dharma.png"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
function ContactUs(){
    return(
        <div className="p-5">
            <div className="w-full h-full p-3 block md:flex space-x-0 md:space-x-2">
                    <div className="w-full md:w-4/6  p-2">

                    <h1 className="text-4xl font-semibold mt-3 text-center">Get in Touch with Us</h1>
                    <form className="mt-20 p-10 ">
                        <div className="flex flex-col  space-y-2">
                        <label className="text-xl font-semibold">Your Name</label>
                        <input type="text" name='name' placeholder="Enter Your Full Name" 
                        className="p-5 border-2 rounded-xl"
                        />
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">Enter E-Mail</label>
                        <input type="email" name='email' placeholder="Enter Your Email Address" 
                        className="p-5 border-2 rounded-xl"
                        />
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">Phone Number</label>
                        <input type="email" name='email' placeholder="Enter Your Phone Number" 
                        className="p-5 border-2 rounded-xl"
                        />
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">Company Name</label>
                        <input type="text" name='company' placeholder="Enter Your Company Name" 
                        className="p-5 border-2 rounded-xl"
                        />
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">Project Type</label>
                        <select className="p-5 border-2 rounded-xl">
                            <option className="p-5 border-2 rounded-xl">Project Type</option>
                            <option className="p-5 border-2 rounded-xl">Web Development</option>
                            <option className="p-5 border-2 rounded-xl">App Development</option>
                            <option className="p-5 border-2 rounded-xl">CRM/ERP Solutions</option>
                            <option className="p-5 border-2 rounded-xl">E Commerce Platform</option>
                            <option className="p-5 border-2 rounded-xl">Others</option>
                        </select>
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">Message / Project Details</label>
                        <textarea className="p-5 border-2 rounded-xl" rows="10"></textarea>
                        </div>

                        <div className="flex flex-col  space-y-2 mt-10">
                        <label className="text-xl font-semibold">File Attachements</label>
                        <input type="file" name='file'
                        className="p-5 border-2 rounded-xl"
                        />
                        </div>

                        <div className="flex space-x-3 mt-10">
                        <button className="px-8 py-3 rounded-md text-white bg-blue-600">Submit</button>
                        <button className="px-8 py-3 rounded-md text-white bg-slate-600">Reset</button>
                        
                        </div>
                    </form>
                    </div>
                    <div className="w-full md:w-2/6 p-3">
                    <img 
                    src={dharma}
                    className="w-full rounded-full mt-2"
                    />
                    <div className="bg-[#0040FF] mx-auto w-full text-center rounded-lg p-6 md:p-8  md:text-left flex flex-col items-center md:items-start">
                    <div className="p-20 ">
        <h1 className="text-white font-bold text-lg md:text-4xl">Don't Forget to</h1>
        <h1 className="text-white font-bold text-lg md:text-4xl">Contact Us</h1>
  
        {/* Call Section */}
        <div className="flex items-center mt-10">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <IoCallOutline className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-sm md:text-2xl">Call Us</h1>
            <h1 className="text-white text-sm md:text-2xl">+9630533562</h1>
          </div>
        </div>
  
        {/* Email Section */}
        <div className="flex items-center mt-10">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <MdOutlineMail className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-left text-sm md:text-2xl">Send Email</h1>
            <h1 className="text-white text-sm md:text-2xl">@dharmatech@gmail.com</h1>
          </div>
        </div>
  
        {/* Availability Section */}
        <div className="flex items-center mt-10">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <Ri24HoursFill className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-sm md:text-2xl">Available</h1>
            <h1 className="text-white text-sm md:text-2xl">24 Hours</h1>
          </div>
        </div>
        </div>
      </div>
                    </div>
                </div>
        </div>
    )
}
export default ContactUs