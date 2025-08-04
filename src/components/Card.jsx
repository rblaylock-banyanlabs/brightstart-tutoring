import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, icon: Icon, children, className = "" }) => {
  return (
    <div
      className={
        "bg-gray-800 rounded-md p-6 text-center flex flex-col items-center justify-center gap-4 shadow-md transition hover:shadow-lg hover:scale-[1.01] duration-200 " +
        "border-t-4 border-yellow-600 " +
        className
      }
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      {Icon && <Icon className="w-12 h-12 text-[#e6af09]" aria-hidden="true" />}
      <h3 className="text-xl font-bold text-amber-400">{title}</h3>
      <p className="text-[#c8ccd6] text-base">{description}</p>
      {children && <div>{children}</div>}
    </div>
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
