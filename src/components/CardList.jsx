import productsList from '../data/ProductsList';
import CardItem from './CardItem';

const CardList = () => {
  return(
    <div className='flex flex-wrap mt-3'>
      {productsList.map(product => (
        <CardItem key={product.productId} product={product} />
      ))}
    </div>
  )
}
export default CardList;