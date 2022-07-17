import { useContext, useState } from "react";
import { IframeContext, IframeProvider } from "../../context/ContentIframe";
import { useGetData } from "../../hooks/useGetData";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getCategories } from "../../utils/getData";
import "./style.scss";
import TabItem from "./tab-item";



function Tabs() {
  const categories = getCategories();
  const tabs = categories.map(category => category.name);
  const contents = categories.map(category => category.sub_categories);
  const [toggleState, setToggleState] = useState(0);
  const { contentIframe,show,setShow } = useContext(IframeContext);
  const toggleTab = index => {
    setToggleState(index);
  };

  return (<>
    {show && <div className="inset-0 h-full fixed z-10 top-0 bg-[rgba(0,0,0,0.4)]"> 
        <iframe src={contentIframe ?? ''} title="W3Schools Free Online Web Tutorials" className="h-full w-full"></iframe> 
        <button className="h-[70px] w-[70px] bg-[#fff] absolute z-20 top-5 right-2 md:right-8 rounded-full text-center leading-[70px] text-[70px] transition hover:scale-[1.2]" 
          onClick={()=>setShow(false)}>
          ×
        </button>
    </div>}
    <div className="container-tabs w-full h-full">
      <ul className="bloc-tabs">
        {tabs.map((tab, idx) => (
          <li
            className={`font-medium md:text-[22px] text-[14px] text-text-cl hover:bg-primary-bg break-normal py-[10px] px-[10px] md:px-[45px] ${
              toggleState === idx ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(idx)}>
            {tab}
          </li>
        ))}
      </ul>

      <div className="content-tabs bg-primary-bg">
        <div className="sub-tab-wrapper  lg:px-[150px] px-[40px] pt-[20px] m-auto overflow-hidden">
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
    </>

  );
}

export default Tabs;
