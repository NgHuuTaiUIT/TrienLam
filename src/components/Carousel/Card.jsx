const Card = ({ maxWidth, data }) => {
  const { title, thumb_url, short_description, content_url } = data;

  return (
    <a
      className="overflow-hidden "
      style={maxWidth}
      href={content_url}
      target={"_self"}
      rel="noreferrer">
      <img
        className="w-full h-[442px] rounded"
        src={thumb_url}
        alt="Sunset in the mountains"
      />
      <div className="p-1">
        <div className="font-semibold text-center text-text-cl mb-2 min-h-[60px] break-normal line-clamp-2 text-ellipsis">
          {title}
        </div>
        <p className="font-medium text-text-cl text-[14px] text-ellipsis line-clamp-3 capitalize break-normal">
          {short_description}
        </p>
      </div>
    </a>
  );
};

export default Card;
