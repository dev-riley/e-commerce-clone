# 과제 : e-commerce-clone

### 1. 프로젝트 구성

클론한 사이트 : [S.I.VILLAGE(신세계 인터네셔날 공식몰)](https://www.sivillage.com) 

![스크린샷 2023-05-26 113613](https://github.com/dev-riley/TIL/assets/82032072/65902467-f46f-4e95-8cd0-76d900c38ed4)

### 2. 기능 목록

-  **Admin : Create Product**

  관리자로 로그인해서 할 수 있는 상품 등록 페이지는 클론할 수 있는 페이지를 찾을 수 없어서 임의로 Header에 상품 등록 아이콘을 넣어 페이지를 구현하였습니다. 상품 추가 api를 통해 입력받은 값들을 상품 목록에 넣을 수 있게 구현하였습니다.

  ![스크린샷 2023-05-26 113826](https://github.com/dev-riley/TIL/assets/82032072/04112d5c-2b1c-49f7-a555-b789ff710dc2)

- **Porudct List**

  상품 등록을 하면 Product List페이지로 이동하고 추가된 상품도 확인할 수 있게 구현하였습니다.

  ![스크린샷 2023-05-26 114335](https://github.com/dev-riley/TIL/assets/82032072/b128edef-a1c1-4505-b6eb-9d370f7e9772)

- **Product Detail Page**

  제품 상세 정보를 api를 통해 받아와 useState로 데이터를 저장해 활용했고, 사이즈나 색상은 선택한 값을 장바구니로 넘길 수 있게 구현하였습니다. 

  ![localhost_3001_products_1](https://github.com/dev-riley/TIL/assets/82032072/d7960767-3d90-4679-b214-12c8e371218c)

- **Add to Cart Button**

  제품 상세 페이지에서 쇼핑백(장바구니) 버튼을 누르면 선택한 사이즈, 색상을 포함한 해당 브랜드 이름이나 상품 이름 같은 상세 정보들을 묶어 장바구니 목록 추가 api를 통해 데이터들을 넘겨주게 구현하였습니다.

- **Cart Detail Page**

  장바구니 목록 조회를 해 전체 목록을 불러와서 레이아웃을 구성하였습니다.

  ![localhost_3001_cart (1)](https://github.com/dev-riley/TIL/assets/82032072/21c58859-7a40-460b-aadc-978d4ebeb7e3)

### 3. 사용한 기술 스택 및 라이브러리

​	**초기세팅** : webpack + babel

​	**기술 스택** : React(18.2.0 ver)

​	**라이브러리** : json-server(0.17.3 ver), tailwindCSS(3.3.2 ver), axios(1.4.0 ver)

​	json-server를 사용해 API를 구축하였고 데이터를 관리했습니다. axios로 API를 활용해 http 비동기 통신을 했고,  css는 tailwindCSS를 사용해 디자인을 해주었습니다.

​	**패키지** : react-router-dom(6.11.2 ver), react-dom(18.2.0 ver), react-color(2.19.3 ver)

​	SPA로 구현하기 위해 페이지 이동시에 react-router-dom을 활용했고, 사용자가 원하는 색상과 색상코드를 활용하기 위해 react-color 패키지를 사용하였습니다.

### 4. 코드 실행 방법

react 프로젝트 실행하기

```bash
npm i
npm run start
```



json-server 실행

```bash
json-server --watch db.json --port 8000