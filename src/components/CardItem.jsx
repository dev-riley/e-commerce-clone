import { useNavigate } from "react-router-dom"

const CardItem = ({product}) => {
  const navigate = useNavigate();
  const { id, productId, img, brandName, productName, price, color, size, deliveryFee} = product
  
  const toDetailPage = () => {
    navigate(`/products/${id}`)
  }
  console.log(img)
  return(
    <div className="p-4 md:s-1/4 mb-[130px] cursor-pointer" onClick={toDetailPage}>
      <div>
        <img src={img} alt={brandName} className='w-full h-[380px] object-cover object-center'/>
      </div>
      <div>
        <p className="opacity-3 font-bold ml-2 mt-4 mb-2">{brandName}</p>
        <div className="text-sm text-gray-900/75 ml-2">
          <p className="hover:underline">{productName}</p>
          <p>{price.toLocaleString('ko-KR')}</p>
        </div>
      </div>
    </div>

  )
}
export default CardItem;