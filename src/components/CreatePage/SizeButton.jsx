import react from 'react';
import { useState, useEffect } from "react";

const SizeButton = () => {
  const [select, setSelect] = useState([])

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  useEffect(() => {

  }, [select])

  const handleDuplicated = (e) => {
    console.log(select)
    const size = e.target.value
    if (select.includes(size)) {
      setSelect(select.filter((item) => item !== size));
    } else {
      setSelect([...select, size])
    }
  }
  return(
    <div className="ml-[70px] space-x-3">
      {sizes.map(size => (
        <button 
          key={size}
          type="button"
          onClick={handleDuplicated}
          className={`h-[40px] w-[60px] border-2 ${select.includes(size) ? 'bg-black text-white' : 'bg-white'}`}
          value={size}        
        >
          {size}
        </button>

      ))}
    </div>
  )
}
export default SizeButton;