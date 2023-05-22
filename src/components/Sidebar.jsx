import { Fragment } from "react";

const Sidebar = () => {
  const categories = [
    { name: '전체'},
    { name: '세일'},
    { name: '아우터'},
    { name: '블라우스/셔츠'},
    { name: '티셔츠'},
    { name: '맨투맨/후디'},
    { name: '니트'},
    { name: '팬츠'},
    { name: '데님'},
    { name: '드레스/점프수트'},
    { name: '수트/셋업'},
    { name: '라운지/파자마'},
    { name: '언더웨어'},
  ]
  return(
    <Fragment>
      <div className="flex flex-col mr-[170px]">
        <div className="mb-12">
          <p className="text-[28px] font-bold">여성의류</p>
        </div>
        <div>
          {categories.map((category, index) => {
            return (
              <p className="text-[16px] my-5 hover:cursor-pointer hover:underline text-gray-600" key={index}>{category.name}</p>
            )
          })}
        </div>
      </div>
    </Fragment>

  )
}
export default Sidebar;