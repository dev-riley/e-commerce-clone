import axios from 'axios';

// 상품 등록
const createProduct = async(data) => {
  console.log('상품 등록 성공')
    
  return await axios({
    method: 'POST',
    url: 'http://localhost:8000/products',
    data: data
  })
}

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

// 장바구니에 제품 추가
const addToCart = async (data) => {
  return await axios({
    method: "POST",
    url: 'http://localhost:8000/carts',
    data: data
  })
}

// 장바구니 목록 조회
const getCart = async () => {
  return await axios({
    method: "GET",
    url: 'http://localhost:8000/carts'
  })
}

export { createProduct, getProductList, getProductDetail, addToCart, getCart}