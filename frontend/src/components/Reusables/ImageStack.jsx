import PropTypes from "prop-types";
const ImageStack = ({ members }) => {
  const overlap = 12;
  return (
    <div className="flex w-fit relative">
      {members.map((item, index) => (
        <img
          src={item}
          alt={item.toString()}
          key={index}
          className={
            index == 0
              ? `border-none h-6 w-6 rounded-full`
              : `border-2 border-[#121241] rounded-full absolute h-6 w-6`
          }
          style={{
            left: `${index * overlap}px`,
          }}
        />
      ))}
    </div>
  );
};

ImageStack.propTypes = {
  members: PropTypes.array,
};

export default ImageStack;
