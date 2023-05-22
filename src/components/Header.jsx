import { Fragment } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../public/images/siv_logo.png';
import HeaderCategory from './HeaderCategory'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightToBracket, faHeadset, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return(
    <Fragment>
      {/* header */}
      <nav className="navbar">
        <div className="flex space-x-2 items-center justify-between my-[5px] mx-[40px]">
          {/* 로고 */}
          <div className="navbar_logo">
            <a href="/">
              <img alt="logo" src={Logo} className="h-[80px]"/>
            </a>
          </div>
          {/* 검색창 */}
          <div className="navbar_search">
            <input 
              type="text"
              className="border-solid border-2 w-[350px]"
            />
          </div>
          {/* 헤더 아이콘들 */}
          <div className="flex space-x-3">
            <div>
              <a href="/create">
                <FontAwesomeIcon icon={faSquarePlus} className="h-6 w-6 m-2 ml-3"/>
                <p className="text-xs">상품 등록</p>
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeadset} className="h-6 w-6 m-2"/>
              <p className="text-xs">고객센터</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} className="h-6 w-6 mx-3 my-2"/>
              <p className="text-xs">마이페이지</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className="h-6 w-6 mx-3 my-2"/>
              <p className="text-xs">최근본상품</p>
            </div>
            <div>
              <a href="/cart">
                <FontAwesomeIcon icon={faBagShopping} className="h-6 w-6 m-2"/>
                <p className="text-xs">장바구니</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* category */}
      <div className="sticky top-0 bg-white pb-2">
        <hr />
        <HeaderCategory />
      </div>
    </Fragment>
  )
}
export default Header;