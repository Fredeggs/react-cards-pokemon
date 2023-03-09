import { useState } from "react";

const useFlip = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const flipCard = () => {
    setState((state) => !state);
  };

  return [state, flipCard];
};

export default useFlip;
