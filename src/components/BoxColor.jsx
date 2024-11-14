import { useEffect, useRef } from "react";

function boxColor ({color, value}) {
  const boxRef = useRef();

  useEffect(() => {
    if (value.toLowerCase() === color) {
      boxRef.current.style.backgroundColor = color;
      boxRef.current.style.color = color === 'white' ? 'black' : 'white';
    } else {
      boxRef.current.style.backgroundColor = 'transparent';
      boxRef.current.style.borderColor = color;
      boxRef.current.style.color = color
    }
  }, [value]);

  return (
    <div ref={boxRef} className={`box ${color}`}>
      {value.toLowerCase() === color ? `I am ${color} color!` : `I am not the color ${value}`}
    </div> 
  );
}
export default boxColor;  
