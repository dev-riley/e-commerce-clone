import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "../components/CreatePage/ColorPicker2";
import SizeButton from "../components/CreatePage/SizeButton";
import { createProduct } from "../components/api/axios";

const CreatePage = () => {
  const navigate = useNavigate()
  const [ brandName, setBrandName ] = useState('')
  const [ productName, setProductName ] = useState('')
  const [ productId, setProductId ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ size, setSize ] = useState([])
  const [ colors, setColors ] = useState([])
  const [ colorNames, setColorNames] = useState([])
  const [ selectedColor, setSelectedColor ] = useState('')
  const [ showColorPicker, setShowColorPicker ] = useState(false)
  const [ deliveryFee, setDeliveryFee ] = useState('')
  const [images, setImages ] = useState([])
  const [previewUrls, setPreviewUrls] = useState([]);
  
  // 5개의 color 
  
  // const handleColorUpload = (index, newColor) => {
  //   setColors((prevColors) => {
  //     const updatedColors = [...prevColors]
  //     updatedColors[index] = newColor
  //     return updatedColors
  //   })
  //   setSelectedColor(newColor.hex)
  // }
  const handleColorChange = (color) => {
    setSelectedColor(color.hex)
  }
  
  const handleAddColor = () => {
    setColors((prevColors) => [...prevColors, selectedColor])
    setSelectedColor('')
    setShowColorPicker((prev) => !prev)
  }
const handleClose = () => {
  setShowColorPicker(false)
}

  // 이미지 업로드
  const handleImageUpload = async (e) => {
    const uploadedImages = e.target.files;
    setImages([...images, ...uploadedImages]);
    
    const imageUrls = Array.from(uploadedImages).map((image) => URL.createObjectURL(image));
    setPreviewUrls([...previewUrls, ...imageUrls])
  }
  // console.log(images)

    const handleSize = (newSize) => {
    setSize(newSize)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

      const data = {
      brandName : brandName,
      productName: productName,
      productId: productId,
      price : price,
      size: size,
      color: colors,
      deliveryFee : deliveryFee,
      img: previewUrls
    }
  

    if (brandName === '') { 
      alert("브랜드 이름을 입력해주세요.");
      return;
    }
    if (productName === '') { 
      alert("상품 이름을 입력해주세요.");
      return;
    }
    if (productId === '') { 
      alert("상품 코드를 입력해주세요.");
      return;
    }
    if (price === '') { 
      alert("가격을 입력해주세요.");
      return;
    }
    if (size.length < 1) { 
      alert("옵션을 입력해주세요.");
      return;
    }
    if (deliveryFee === '') { 
      alert("배송비를 입력해주세요.");
      return;
    }
    if (images.length < 1) { 
      alert("사진은 최소 1장 필수입니다.");
      return;
    }

    createProduct(data)
      .then((res) => {
        alert("상품 등록이 완료되었습니다.")
        navigate('/products')
        console.log(res)
      })
  }
  

  return(
    <div className="flex flex-col justify-center items-center">
      <p className="text-[30px] font-extrabold">상품 등록</p>
      <div className="mt-10">
        <div className="flex items-center mb-8">
          <p>브랜드 이름</p>
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-4" onChange={(e) => setBrandName(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>상품 이름</p>
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-8" onChange={(e) => setProductName(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>상품 코드</p>
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-8" onChange={(e) => setProductId(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>가격</p>
          <input type="text" placeholder="숫자만 입력해주세요." className="border-2 w-[500px] h-9 rounded-md ml-[70px]" onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>색상 등록</p>
          {/* 색상 선택 */}
          <div>
            {/* {colors.map((color, index) => (
              <ColorPicker 
                key={index}
                color={color}
                onColorChange={(newColor) => handleColorUpload(index, newColor.hex)}
              />
            ))} */}
          {showColorPicker ? (
            <div>
              <div onClick={handleClose} className="fixed top-0 right-0 left-0 bottom-0"/>
              <ColorPicker color={selectedColor} onColorChange={handleColorChange}/>
            </div>
          ): null}
          <button type="button" onClick={handleAddColor} className="ml-[45px] bg-black/80 text-white w-10 h-8 rounded-md">
            Add
          </button>
            <div className="flex space-x-2">
              {colors.map((color, index) => (
                <div>
                  <div 
                    key={index}
                    style={{ backgroundColor : color}}
                    className="w-7 h-7 m-5"
                  />
                  <input type="text" className="border-2 w-[100px]"/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <p>옵션</p>
          {/* 버튼 구현 */}
          <SizeButton onSelectedSize={handleSize}/>
        </div>
        <div className="flex items-center mb-8">
          <p>배송비</p>
          <input type="text" placeholder="숫자만 입력해주세요." className="border-2 w-[500px] h-9 rounded-md ml-[57px]"  onChange={(e) => setDeliveryFee(e.target.value)}/>
        </div>
        {/* 이미지 등 */}
        <div>
          <input 
            type="file" 
            multiple 
            onChange={handleImageUpload} 
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-3 file:border-0 file:rounded-md file:bg-black/80 file:text-white"
          />
          <div className="flex space-x-2">
            {previewUrls.map((url, index) => (
              <div>
                <img key={index} src={url} alt="preview" className="h-[130px] border-1 border-black"/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-[90px] h-[50px] border-2 bg-black/80 text-white rounded-md mb-3" onClick={handleSubmit}>등록하기</button>
        </div>
      </div>
    </div>
  )
}
export default CreatePage;