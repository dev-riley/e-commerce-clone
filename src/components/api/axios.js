import axios from 'axios';

// 상품 전체 목록 조회
const getProductList = async () => {
  console.log("성공")
  return await axios({
    method: 'GET',
    url: 'http://localhost:8000/products'
  })
}

// 상품 상세 정보 조회
const getProductDetail = async(id) => {
  console.log('getProductDetail 성공')
  return await axios({
    method: 'GET',
    url: `http://localhost:8000/products/${id}`
  })
}

// 상품 등록


export { getProductList, getProductDetail }