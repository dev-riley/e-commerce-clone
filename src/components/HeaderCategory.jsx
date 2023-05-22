const HeaderCategory = () => {

  return(
    <div className="flex justify-between mx-[70px] my-5 text-gray-400">
      <div className="flex space-x-10 ">
        <p>Brand</p>
        <p>뷰티</p>
        <a href="/products">
          <p>여성의류</p>
        </a>
        <p>남성의류</p>
        <p>백</p>
        <p>슈즈</p>
        <p>액세서리</p>
        <p>스포츠/레저</p>
        <p>골프</p>
        <p>키즈</p>
        <p>라이프</p>
      </div>
      <div className="flex space-x-10">
        <p>원더위크</p>
        <p>이벤트</p>
        <p>아울렛</p>
      </div>
    </div>
  )
}
export default HeaderCategory;