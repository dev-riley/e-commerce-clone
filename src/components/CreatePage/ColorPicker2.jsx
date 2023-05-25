import { ChromePicker } from "react-color";

const ColorPicker = ({color, onColorChange}) => {
  return(
    <div>
      <ChromePicker color={color} onChange={onColorChange}/>
    </div>
  )
}
export default ColorPicker;