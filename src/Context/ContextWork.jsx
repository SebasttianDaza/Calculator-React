import React, { useState } from "react";
import PropTypes from "prop-types";

const ContextWork = React.createContext({
  work: [],
  result: [],
});

export const ContextWorkProvider = ({ children }) => {
  const [work, setWork] = useState({
    work: [],
    result: [],
  });

  return <ContextWork.Provider value={{ work, setWork }}>{children}</ContextWork.Provider>;
};

ContextWorkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextWork;
