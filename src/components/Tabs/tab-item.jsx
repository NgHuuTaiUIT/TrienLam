import { useState } from "react";
import classNames from "../../utils/class-names";
import Carousel from "../Carousel";

const TabItem = ({ items }) => {
  const [currentSubTab, setCurrentSubTab] = useState(0);
  const subTabs = items.map(item => item.name);
  const changeTab = index => setCurrentSubTab(index);
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap lg:mx-6 custom-scroll-bar lg:overflow-x-auto lg:justify-start justify-around">
        {subTabs.map((item, idx) => (
          <button
            className={classNames(
              `flex items-center justify-center mr-3 py-1 px-3 md:px-7 md:py-3 md:my-2 my-1 rounded-lg text-primary-bg bg-text-cl border-solid outline-none border border-[#ccc] hover:bg-[#e6e6e6] transition-[background-image] w-[42%] lg:w-auto`,
              `${currentSubTab === idx && "bg-[#e6e6e6] font-semibold"}`
            )}
            onClick={() => changeTab(idx)}>
            <div className="md:text-[20px] text-[12px] whitespace-normal lg:whitespace-nowrap break-normal">
              {item}
            </div>
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
