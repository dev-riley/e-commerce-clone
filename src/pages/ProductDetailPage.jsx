import { useState, useEffect } from "react";
import { getProductDetail } from "../components/api/axios";
import { useParams} from "react-router-dom";
import image from '../images/1-1.jpg'

const ProductDetailPage = () => {
  const { id } = useParams();
  const [ detailInfo, setDetailInfo ] = useState({})
  const [ color, setColor ] = useState({})
  const [ size, setSize ] = useState({})
  const [ selectedColor, setSelectedColor ] = useState(null);
  const [ number, setNumber ] = useState(1);
  
  // 제품 상세 정보 받아오기
  useEffect(() => {
    getProductDetail(id)
      .then((res) => {
        setDetailInfo(res.data)
        setColor(res.data.color)
        setSize(res.data.size)
      })
  }, [])
  
  const handleColorClick = (key, value) => {
    setSelectedColor({key, value})
  }

  // 수량
  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number -1)
  }
  

  return(
    <div>
      <div className="flex my-[30px] mx-[50px]">
        {/* /이미지 영역 carousel*/}
        <div>
          <img src={image} alt={detailInfo.productName} className="h-full w-full" />
        </div>
        {/* 상세 설명 부분 */}
        <div className="ml-[120px]">
          <div className="flex space-x-1">
            <div className="w-10 h-5 border-2 border-[#D99C63] text-[10px] flex items-center justify-center text-[#D99C63]">23 S/S</div>
            <div className="w-7 h-5 text-[10px] flex items-center justify-center bg-[#D99C63] text-white">세일</div>
          </div>
          <div className="text-xs text-gray-400 my-5">상품코드 {detailInfo.productId}</div>
          <div className="font-extrabold text-xl">{detailInfo.brandName}</div>
          <div className="text-xl">{detailInfo.productName}</div>
          <div className="flex my-5">
            <p className="text-[28px] font-extrabold">{detailInfo.price}</p>
            <p className="text-xs flex items-center mt-3 ml-1">원</p>
          </div>
          <hr />
          <table className="my-7 table-auto w-full">
            <tr>
              <th className="pb-[50px] w-[200px] text-lg text-left">할인쿠폰</th>
              <td className="pb-[50px]">
                <button className="border-2 w-[550px] h-10 font-bold">10% 상품쿠폰</button>
              </td>
            </tr>
            <tr>
              <th className="pb-5 text-lg text-left">카드혜택</th>
              <td className="pb-5 underline">할부혜택</td>
            </tr>
            <tr>
              <th className="text-lg text-left pb-[50px]">적립예정포인트</th>
              <td className="font-bold pb-[50px]">[S.I 포인트] 0.5%(720P)</td>
            </tr>
            <tr>
              <th className="text-lg text-left pb-7">배송비</th>
              <td className="pb-7">{detailInfo.deliveryFee}</td>
            </tr>
            <hr />
            <tr>
              <th className="text-lg text-left">색상</th>
              <td className="flex space-x-3 my-5">
                {Object.keys(color).map((key) => (
                  <div key={key}>
                    <p className="text-gray-400 text-lg text-center mb-2">{key}</p>
                    <button 
                      className={`w-12 h-12 ${selectedColor?.key === key ? 'border-black border-2': null}`} 
                      style={{backgroundColor: color[key]}}
                      onClick={() => handleColorClick(key, color[key])}
                    >
                    </button>
                  </div>
                ))}
              </td>

            </tr>
          <hr />
            <tr>
              <th className="text-lg text-left py-8">옵션</th>
              <td className="flex space-x-2 py-8">
                {Object.keys(size).map((key) => (
                  <div key={key} className="w-12 h-12 border-2 flex justify-center items-center">{size[key]}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th className="text-lg text-left py-8">수량</th>
              <td className="py-8">
                <button className="border-2 w-12 h-12 text-4xl align-bottom pb-1" onClick={onDecrease}>-</button>
                <input type="text" value={number} className="border-2 h-12 w-[450px] text-xl text-center"/>
                <button className="border-2 w-12 h-12 text-4xl align-bottom pb-1" onClick={onIncrease}>+</button>
              </td>
            </tr>
          </table>
          <hr className="bg-black h-px"/>
          <div className="flex justify-between my-7">
            <p className="text-lg text-left">판매가</p>
            <div className="flex">
              <p className="text-[28px] font-extrabold">{detailInfo.price}</p>
              <p className="text- flex items-center mt-2 ml-1">원</p>
            </div>
          </div>
          <div className="space-x-1">
            <button className="border-2 text-lg font-bold w-[120px] h-[60px]">선물하기</button>
            <a href="/cart">
              <button className="text-lg font-bold text-white bg-gray-500 h-[60px] w-[295px]">쇼핑백</button>
            </a>
            <button className="text-lg font-bold text-white bg-black h-[60px] w-[295px]">바로 구매</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailPage;