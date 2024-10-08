import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import ToggleSwitch from "../Reusables/ToggleSwitch";
const SignUpForm = () => {
  return (
    <div className="text-white w-[500px] flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <p className="mt-5 mb-10 font-semibold">
          Use these awesome forms to login or create new
          <br />
          account in you project for free.
        </p>
      </div>
      <form action="" className="border-2 p-5 rounded-xl w-full h-[650px]">
        <div>
          <p className="text-center font-bold mt-3">Register with</p>
          <div className=" mt-5 flex gap-5 justify-center">
            <button className="text-3xl border-2 h-20 w-20 rounded-xl flex items-center justify-center">
              <FaFacebook />
            </button>
            <button className="text-3xl border-2 h-20 w-20 rounded-xl flex items-center justify-center">
              <FaApple />
            </button>
            <button className="text-3xl border-2 h-20 w-20 rounded-xl flex items-center justify-center">
              <FaGoogle />
            </button>
          </div>
          <p className="text-center text-slate-400 mt-5 font-bold">or</p>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col w-[80%] m-auto">
            <label htmlFor="">Name</label>
            <div className="border-2 px-5 py-3 mt-1 rounded-xl bg-transparent relative">
              <input
                type="text"
                placeholder="Your full name"
                className="bg-transparent outline-none placeholder:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col w-[80%] m-auto">
            <label htmlFor="">Email</label>
            <div className="border-2 px-5 py-3 mt-1 rounded-xl bg-transparent relative">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none placeholder:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col w-[80%] m-auto">
            <label htmlFor="">Password</label>
            <div className="border-2 px-5 py-3 mt-1 rounded-xl bg-transparent relative">
              <input
                type="password"
                placeholder="Your password"
                className="bg-transparent outline-none placeholder:opacity-50"
              />
            </div>
            <ToggleSwitch label="Remember me" />
          </div>
        </div>
        <div className="w-[80%] m-auto">
          <button className="bg-blue-500 w-full mt-10 px-5 py-2 rounded-lg font-semibold">
            Sign Up
          </button>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <span className="font-bold">Sign in</span>
          </p>
        </div>
      </form>
      <p className="absolute bottom-10">
        @2024, Made with ❣️ by <span className="font-bold">fnrr</span> for a
        better web
        <div className="flex gap-10 justify-center mt-3">
          <p>Marketpace</p>
          <p>Blog</p>
          <p>License</p>
        </div>
      </p>
    </div>
  );
};

export default SignUpForm;
