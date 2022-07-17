import { useContext } from "react";
import { IframeContext } from "../../context/ContentIframe";

const Card = ({ maxWidth, data }) => {
  const { title, thumb_url, short_description, content_url } = data;
  const {setContentIframe,setShow} = useContext(IframeContext);
  return (
    <div
      className="overflow-hidden cursor-pointer"
      style={maxWidth}
      onClick={()=> {
          setContentIframe(content_url)
          setShow(true)
        }}>
      <img
        className="w-full h-[442px] rounded"
        src={`./assets/${thumb_url.slice(2)}`}
        alt="Sunset in the mountains"
      />
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
