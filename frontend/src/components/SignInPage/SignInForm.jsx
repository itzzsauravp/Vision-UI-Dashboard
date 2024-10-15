import ToggleSwitch from "../Reusables/ToggleSwitch";
import { Link, useNavigate } from "react-router-dom";
// need to add the gradient like border here...
const SignInForm = () => {
  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", true);
    navigate("/dashboard");
  };

  return (
    <div className="text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold">Nice to see you!</h1>
      <p className="text-slate-500 text-lg">
        Enter your email and password to sign in
      </p>
      <form
        action=""
        className="flex flex-col w-full mt-[50px]"
        onSubmit={handleSubmission}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <div className="border-2 px-5 py-3 mt-1 rounded-xl bg-transparent relative">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none placeholder:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col">
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
        <input
          type="submit"
          value="Sign In"
          className="bg-blue-500 w-full mt-5 px-5 py-2 rounded-lg font-semibold"
        />
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/" className="font-bold">
            Sign Up
          </Link>
        </p>
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

export default SignInForm;
