import { useState } from "react";
import classNames from "../../utils/class-names";
import Carousel from "../Carousel";

const TabItem = ({ items }) => {
  const [currentSubTab, setCurrentSubTab] = useState(0);
  const subTabs = items.map(item => item.name);
  const changeTab = index => setCurrentSubTab(index);
  return (
    <>
      <div className="flex mx-6 overflow-x-auto whitespace-nowrap custom-scroll-bar">
        {subTabs.map((item, idx) => (
          // background-color: #e6e6e6;
          // background-image: none;
          // border-color: #adadad;

          //         margin-right: 15px;
          // outline: none;
          // padding: 15px 30px;
          // font-size: 20px;
          // border-radius: 10px;
          // margin-bottom: 15px;
          // color: #751115;
          <button
            className={classNames(
              `mr-4 py-3 md:px-7 px-3 my-2 rounded-lg text-primary-bg bg-text-cl border-solid outline-none border border-[#ccc]
            hover:bg-[#e6e6e6] transition-[background-image]`,
              `${currentSubTab === idx && "bg-[#e6e6e6] font-semibold"}`
            )}
            onClick={() => changeTab(idx)}>
            <span>{item}</span>
          </button>
        ))}
      </div>
      {items.map((item, idx) => (
        <div
          className={
            currentSubTab === idx ? "content  active-content" : "content"
          }>
          <Carousel data={item} />
        </div>
      ))}
    </>
  );
};

export default TabItem;
