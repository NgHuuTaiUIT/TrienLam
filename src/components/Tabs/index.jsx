import { useState } from "react";
import { getCategories } from "../../utils/getData";
import "./style.scss";
import TabItem from "./tab-item";

function Tabs() {
  const categories = getCategories();

  const tabs = categories.map(category => category.name);
  const contents = categories.map(category => category.sub_categories);
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className="container-tabs w-full">
      <ul className="bloc-tabs">
        {tabs.map((tab, idx) => (
          <li
            className={`font-medium text-[22px] text-text-cl hover:bg-primary-bg break-normal ${
              toggleState === idx ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(idx)}>
            {tab}
          </li>
        ))}
      </ul>

      <div className="content-tabs bg-primary-bg">
        <div className="sub-tab-wrapper  md:px-[150px] px-[40px] py-[20px] m-auto">
          {contents.map((content, idx) => (
            <div
              className={`sub-tab ${
                toggleState === idx ? "block animate-fadeIn" : "hidden"
              }`}>
              <TabItem items={content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
