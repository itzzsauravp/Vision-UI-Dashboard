import NavBar from "./NavBar";
import image from "../../assets/images/image.png";
import PropTypes from "prop-types";
const AccountAccess = ({ Child }) => {
  return (
    <section className="flex flex-col h-screen bg-gradient-to-b from-[#0F123B] via-[#090D2E] to-[#020515] overflow-hidden">
      <div className="flex mt-2 justify-center items-center absolute w-full">
        <NavBar />
      </div>
      <div className="flex min-h-screen">
        <div
          className="w-[50%] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <p className="uppercase text-2xl text-white">
            Inspired by the future:
          </p>
          <p className="uppercase text-4xl text-white font-bold mt-1">
            The vision ui dashboard
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Child />
        </div>
      </div>
    </section>
  );
};

AccountAccess.propTypes = {
  Child: PropTypes.func,
};

export default AccountAccess;
