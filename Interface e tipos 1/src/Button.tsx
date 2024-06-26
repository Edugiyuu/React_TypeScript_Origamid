import React, { useState,MouseEvent } from 'react';

const Button = ({ children }: React.PropsWithChildren) => {
    const [contar, setContar] = useState(0)
    
const handleClick = (event: MouseEvent)=>{
    setContar(contar + 1)
    console.log(contar);

    
}

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
