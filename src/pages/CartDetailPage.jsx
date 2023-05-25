import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCart } from '../components/api/axios';
import image from "../images/1-1.jpg";
const CartDetailPage = () => {
  const location = useLocation();
  const [cartData, setCartData ] = useState([])
  const [ color, setColor ] = useState()
  const [ price, setPrice ] = useState('');
  const [ number, setNumber ] =useState('');

  useEffect(() => {
    getCart()
      .then((res) => {
        setCartData(res.data)
      })
  }, [])
  const colorName = cartData.color
  // console.log(cartData)
  // console.log(colorName)

  const handleIncrease = () => {
    setNumber(cartData[data].pieces + 1)
    setPrice(cartData[data].price * number)
  }
  // 상품 가격 합
  const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);
  // 배송비 합
  const totalDeliveryFee = cartData.reduce((acc, item) => acc + item.deliveryFee, 0);
  // 최종 가격
  const finalPrice = (totalPrice - totalDeliveryFee).toLocaleString('ko-KR');

  console.log(typeof(totalPrice))
  return(
    <div>
      <p className="text-[30px] font-extrabold text-center mb-[50px]">쇼핑백</p>
      <div className="mx-[50px]">
        <p className="text-[20px] font-extrabold text-center mb-3">일반배송 ({cartData.length})</p>
        <hr />
        <div className="flex">
          {/* 상품 담기는 곳 */}
          <div>
          {cartData? (
            <div className=" divide-y-2">
              {Object.keys(cartData).map((data) => (
                <table key={data} className="flex py-[40px]">
                  <tr>
                    <img 
                      src={image} 
                      alt={data.productName} 
                      className="w-[90px]"
                    />
                    <td className="text-gray-500 underline text-center py-3 text-sm">옵션 변경</td>
                  </tr>
                  <tr className="flex flex-col w-[600px] mx-7">
                    <td className="font-bold text-lg">{cartData[data].brandName}</td>
                    <td className="text-lg">{cartData[data].productName}</td>
                    <td className="flex justify-between my-4">
                      <td>{cartData[data].size}/{cartData[data].size}</td>
                      <td className="flex">
                        <p className="text-xl font-bold">{cartData[data].price}</p>
                        <p className="text-sm flex items-end mb-0.5 ml-1">원</p>
                      </td>
                    </td>
                    <td className="flex justify-end">
                      <button className="border-2 w-7 h-7 align-bottom mb-0.5 flex justify-center items-center" onClick={handleIncrease}>-</button>
                      <input type="text" value={number} className="border-2 h-7 w-12 text-center"/>
                      <button className="border-2 w-7 h-7 align-bottom mb-0.5 flex justify-center items-center">+</button>
                    </td>
                  </tr>
                  <tr className="flex items-center justify-center w-[270px]">
                    <button className="border-2 h-12 w-[100px]">바로 구매</button>
                  </tr>
                  <tr>
                    <button className="font-bold text-lg">X</button>
                  </tr>
                </table>
              ))}
            </div>
          ):(
            <p>쇼핑백에 담긴 상품이 없습니다.</p>
          )}

          </div>

          {/* 최종 가격 및 결제 */}
          <div className="w-[350px] h-[275px] bg-gray-100 m-5">
            <div className="m-10 space-y-3">
              <div className="flex justify-between">
                <p className="text-gray-500">상품 금액</p>
                <p>{totalPrice.toLocaleString('ko-KR')} 원</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">배송비</p>
                <p>{totalDeliveryFee.toLocaleString('ko-KR')} 원</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p className="font-extrabold text-lg">결제예정금액</p>
                <div className="flex">
                  <p className="font-extrabold text-2xl">{finalPrice}</p>
                  <p className="text-sm flex items-end mb-0.5 ml-1">원</p>
                </div>
              </div>
              <div className="space-x-1">
                <button className="border-2 bg-white w-[108px] h-12">선물하기</button>
                <button className="border-2 bg-black text-white w-[158px] h-12">주문하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartDetailPage;