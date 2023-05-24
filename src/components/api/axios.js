import axios from 'axios';

const getProductList = async () => {
  console.log("성공")
  return await axios({
    method: 'GET',
    url: 'http://localhost:8000/products'
  })
}

const getProductDetail = async(id) => {
  console.log('getProductDetail 성공')
  return await axios({
    method: 'GET',
    url: `http://localhost:8000/products/${id}`
  })
}

export { getProductList, getProductDetail }