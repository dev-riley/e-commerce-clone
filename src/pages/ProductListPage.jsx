import { Fragment } from "react";

import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";

const ProductListPage = () => {
  return(
    <Fragment>
      <div className="flex mx-10 mt-[60px]">
        {/* 세부 카테고리 */}
        <Sidebar />
        {/* 상품 목록 */}
        <div>
          <div className="m-3">
            <p className="text-gray-500">여성의류 </p>
            <div className="flex mt-8">
              <p className="text-gray-500">좌측 하단의</p>
              <p className="text-yellow-600 font-bold underline ml-2">필터</p>
              <p className="text-gray-500">를 선택해서 원하는 상품을 찾아보세요</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-extrabold m-3 mt-12">전체상품</p>
            <CardList />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ProductListPage;