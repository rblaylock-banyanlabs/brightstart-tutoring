import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, icon: Icon, children, className = "" }) => {
  return (
    <>
    <div
      className={
        "relative bg-slate-800 max-w-[75vw] lg:max-w-[80vw] mx-auto rounded-lg text-center flex flex-col items-center justify-center transition hover:shadow-lg hover:scale-[1.01] duration-200 " +
        "border-t-4 border-yellow-600 p-6" +
        className
      }
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      {Icon && <Icon className="w-12 h-12 text-yellow-400" aria-hidden="true" />}
      <h3 className="text-xl font-bold text-yellow-400 pt-3">{title}</h3>
      <p className="text-[#c8ccd6] text-md font-regular mx-auto text-center lg:max-w-[18.5vw] pt-1">{description}</p>
      {children && <div className="absolute -top-2 -right-2">{children}</div>}
    </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
