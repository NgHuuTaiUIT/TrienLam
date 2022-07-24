import { useContext, useEffect, useState } from "react";
import { IframeContext } from "../../context/ContentIframe";
import classNames from "../../utils/class-names";
import styles from "./style.module.scss";

var x = 0;

const Card = ({ maxWidth, data }) => {
  const { title, thumb_url, short_description, content_url,type } = data;
  const {setContentIframe,setShow} = useContext(IframeContext);
  const [srcImg, setSrcImg] = useState(thumb_url);
  useEffect(()=>{
    if(window.navigator.onLine ){
      setSrcImg(thumb_url) 
    } 
    else{
      // convert64(thumb_url) // Path to the image
      // .then(
      //     (response) => {
      //       setSrcImg(`data:image/jpg;base64, ${response}`)
      //     }
      // )
      // .catch(
      //     (error) => {
      //         console.log(error); // Logs an error if there was one
      //     }
      // )

      // getBase64(thumb_url,(result)=>{
      //   console.log(result);
      // })
    }


  },[])
  return (
    <div
      className="overflow-hidden cursor-pointer"
      style={maxWidth}
      onMouseDown={(e)=>{
        x = e.clientX;
      }}
      onMouseUp={(e)=> {
          if(Math.abs(e.clientX - x) < 10){
            setContentIframe({content_url,type})
            setShow(true);
          }
        }}>
          <div className={classNames("relative",styles.wrapContent)}>

      {(type === 'video' || type === 'youtube') && <div className={styles.imgCard}>
        </div>}
      <img
        className={classNames("w-full h-[442px] rounded")}
        // src={`./assets/${thumb_url.slice(2)}`}
        src={srcImg}
        alt="Sunset in the mountains"
        />
        </div>
      <div className="p-1">
        <div className="font-semibold text-center text-text-cl mb-1  break-normal line-clamp-2 text-ellipsis text-[14px] md:text-[20px] min-h-[30px] md:min-h-[60px]">
          {title}
        </div>
        <p className="font-medium text-text-cl text-ellipsis line-clamp-3 capitalize break-normal md:text-[14px] text-[10px]">
          {short_description}
        </p>
      </div>
    </div>
  );
};

export default Card;
