import React, { Dispatch } from 'react';

interface ButtonProps{
  total:number;
  setTotal: Dispatch<React.SetStateAction<number>>;
}

const Button = ({ total, setTotal }:ButtonProps) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button;
