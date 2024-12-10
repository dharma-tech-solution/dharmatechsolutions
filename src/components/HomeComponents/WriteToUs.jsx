import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
function WriteToUs() {
  return (
    <div className="bg-white p-6 rounded-lg w-full">
    <h1 className="font-bold text-xl md:text-3xl text-left ml-10">Write To Us Anytime</h1>
  
    <div className="p-4 flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8 md:p-8">
      {/* Left Form Section */}
      <div className="w-full md:w-4/5">
        <form className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            className="p-2 md:p-3 rounded-lg border-2 border-slate-600"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="p-2 md:p-3 rounded-lg border-2 border-slate-600"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="phonenumber"
            className="p-2 md:p-3 rounded-lg border-2 border-slate-600"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="subject"
            className="p-2 md:p-3 rounded-lg border-2 border-slate-600"
            placeholder="Subject"
          />
          <textarea
            className="p-2 md:p-3 rounded-lg border-2 border-slate-600 md:col-span-2"
            placeholder="Write A Message"
          ></textarea>
          <button className="p-2 md:p-3 w-full md:w-52 rounded-lg bg-black text-white md:col-span-2">
            Send Message
          </button>
        </form>
      </div>
  
      {/* Right Info Section */}
      <div className="bg-[#0040FF] w-full md:w-80 rounded-lg p-6 md:p-8 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-white font-bold text-lg md:text-2xl">Don't Forget to</h1>
        <h1 className="text-white font-bold text-lg md:text-2xl">Contact Us</h1>
  
        {/* Call Section */}
        <div className="flex items-center mt-4">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <IoCallOutline className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-sm md:text-base">Call Us</h1>
            <h1 className="text-white text-sm md:text-base">+9630533562</h1>
          </div>
        </div>
  
        {/* Email Section */}
        <div className="flex items-center mt-4">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <MdOutlineMail className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-sm md:text-base">Send Email</h1>
            <h1 className="text-white text-sm md:text-base">@dharmatech@gmail.com</h1>
          </div>
        </div>
  
        {/* Availability Section */}
        <div className="flex items-center mt-4">
          <div className="border-2 border-slate-100 rounded-full p-2">
            <Ri24HoursFill className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </div>
          <div className="ml-3 md:ml-5">
            <h1 className="text-white text-sm md:text-base">Available</h1>
            <h1 className="text-white text-sm md:text-base">24 Hours</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
export default WriteToUs;
