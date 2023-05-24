import { useState } from "react";
import ColorPicker from "../components/CreatePage/ColorPicker";
import SizeButton from "../components/CreatePage/SizeButton";

const CreatePage = () => {
  const [ brandName, setBrandName ] = useState('')
  const [ productName, setProductName ] = useState('')
  const [ productCode, setProductCode ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ color, setColor ] = useState({})
  const [ size, setSize ] = useState([])
  const [ deliveryFee, setDeliveryFee ] = useState('')
  const [images, setImages ] = useState([])



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
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-8" onChange={(e) => setProductCode(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>가격</p>
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-[70px]" onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="flex items-center mb-8">
          <p>색상 등록</p>
          {/* 색상 선택 */}
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
        </div>
        <div className="flex items-center mb-8">
          <p>옵션</p>
          {/* 버튼 구현 */}
          <SizeButton />
        </div>
        <div className="flex items-center mb-8">
          <p>배송비</p>
          <input type="text" className="border-2 w-[500px] h-9 rounded-md ml-[57px]"  onChange={(e) => setDeliveryFee(e.target.value)}/>
        </div>
        {/* 이미지 등 */}
        
        <div className="flex justify-center">
          <button className="w-[90px] h-[50px] border-2 bg-black/80 text-white rounded-md mb-3">등록하기</button>
        </div>
      </div>
    </div>
  )
}
export default CreatePage;