import axios from "axios";
import { cloneDeep } from "lodash";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { IframeContext, IframeProvider } from "../../context/ContentIframe";
import { useGetData } from "../../hooks/useGetData";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getCategories, getData } from "../../utils/getData";
import "./style.scss";
import TabItem from "./tab-item";



function Tabs() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const callData = async () => {
      let res = await axios.get(`${process.env.PUBLIC_URL}/assets/data/data.json`);
      if(res.data){
        setCategories(cloneDeep(res.data.categories));
      }
      else {
        setCategories(getCategories());
      }
    }
    callData();
  }, []);
  // console.log(`${process.env.PUBLIC_URL}/assets/data/data.json`);
  // const categories = data?.categories ;
  // const categories = getCategories();
  const tabs = categories.map(category => category.name);
  const contents = categories.map(category => category.sub_categories);
  const [toggleState, setToggleState] = useState(0);
  const { contentIframe,show,setShow } = useContext(IframeContext);
  const toggleTab = index => {
    setToggleState(index);
  };

  const renderIframe = () => <iframe src={contentIframe.content_url ?? ''} 
                                title="W3Schools Free Online Web Tutorials" 
                                className="h-full w-full"/>;

  const renderVideo = () => <ReactPlayer
                                url={contentIframe.content_url}
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                                muted={true}
                              /> ;
  const renderContent = () => {
    if(contentIframe.type === "iframe"){
      return renderIframe()
    }else if (contentIframe.type === "youtube" || contentIframe.type === "video"){
      return renderVideo()
    }
  }
  return (<>
    {show && <div className="inset-0 h-full fixed z-10 top-0 bg-[rgba(0,0,0,0.8)]"> 
        {renderContent()}
        <button className="h-[70px] w-[70px] bg-[#fff] absolute z-20 top-5 right-2 md:right-8 rounded-full text-center leading-[70px] text-[70px] transition hover:scale-[1.2]" 
          onClick={()=>setShow(false)}>
          ×
        </button>
    </div>}
    <div className="container-tabs w-full h-full">
      <ul className="bloc-tabs">
        {tabs.map((tab, idx) => (
          <li key={idx}
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
            <div key={idx}
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
