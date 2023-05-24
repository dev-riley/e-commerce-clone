import { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { getProductList } from './api/axios';

const CardList = () => {
  const [list, SetList] = useState([])

  useEffect(() => {
    getProductList().then((res) => SetList(res.data))
  }, [])
  // console.log(list)
  return(
    <div className='flex flex-wrap mt-3'>
      {list.map(product => (
        <CardItem key={product.productId} product={product} />
      ))}
    </div>
  )
}
export default CardList;