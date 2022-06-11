import { useContext } from "react";

import ContextWork from "../Context/ContextWork";

const useWorkGlobal = () => {
  const { work, setWork } = useContext(ContextWork);
  return [work, setWork];
};

export default useWorkGlobal;
