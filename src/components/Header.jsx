import { Fragment } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../public/images/siv_logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";
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
            <div className="justfiy-center">
              <FontAwesomeIcon icon={faArrowRightToBracket} className="h-6 w-6 m-2"/>
              <p className="text-xs">로그인</p>
            </div>
            <div className="justify-center">
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
      <hr />
      <div className="flex justify-between mx-[70px] my-[20px]">
        <div className="flex space-x-10">
          <p>Brand</p>
          <p>뷰티</p>
          <p>여성의류</p>
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
    </Fragment>
  )
}
export default Header;