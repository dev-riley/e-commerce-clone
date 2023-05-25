import { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ onColorChange }) => {
  const [display, setDisplay] = useState(false)
  const [ color, setColor ] = useState('')
  const [ colorName, setColorName] = useState('')
  
  const handleClick = () => {
    setDisplay(!display)
  }
  const handleClose = () => {
    setDisplay(false)
  }

  const handleColor = (color) => {
    setColor(color.hex)
    onColorChange({ hex: color.hex, colorName})
  }

  const handleColorName = (e) => {
    setColorName(e.target.value)
    onColorChange({ hex: color, colorName: e.target.value})
  }

  return(
    <div className="ml-[35px] flex space-x-4">
      <div className="flex flex-col items-center">
        <div onClick={handleClick} 
          className="border-2 w-[50px] h-[50px] text-gray-500 items-center flex justify-center"
          style={{backgroundColor: color}}
        >
          {color ? null : '선택'}
        </div>
        {display ? 
          <div className="absolute z-2">
            <div onClick={handleClose} className="fixed top-0 right-0 left-0 bottom-0"/>
            <ChromePicker color={color} onChangeComplete={handleColor}/>
          </div>
        : null}
        <input type="text" className="border-2 w-[75px] mt-2" placeholder="색상 이름" onChange={handleColorName}/>
      </div>
    </div>
  )
}
export default ColorPicker;