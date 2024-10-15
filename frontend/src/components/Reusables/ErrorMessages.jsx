import PropTypes from "prop-types";
const ErrorMessages = ({ error }) => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-slate-500">
      <h1 className="text-white text-3xl">{error.message}</h1>
      <p className="text-slate-400">{error.detail}</p>
      <p className="text-slate-50 mt-10">{error.solution}</p>
    </div>
  );
};

ErrorMessages.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessages;
