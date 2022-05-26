import { useState } from "react";
export const useProduct = (initialState: number) => {
  const [counter, setCounter] = useState<number>(initialState);

  const increaseBy = (value: number) =>
    setCounter((prev) => Math.max(prev + value, initialState));

  return { counter, increaseBy };
};
