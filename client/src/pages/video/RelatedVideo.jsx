import { Link } from "react-router-dom";

const RelatedVideo = ({ video }) => {
  const { id, title, author, thumbnail, views, date, duration } =
    video;
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.04]">
        <Link to={`/videos/${id}`}>
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-auto"
          />
        </Link>
        <p className="absolute right-1 bottom-1 bg-gray-900 text-gray-100 text-xs px-0.5 py-0.5">
          {duration}
        </p>
      </div>
      <div className="flex flex-row mt-2 gap-1">
      {/* <div
          className={`rounded-full h-6 w-6 shrink-0 bg-red-600`}
        ></div> */}
        <div className="flex flex-col">
          <Link to={`/videos/${id}`}>
            <p className="text-slate-900 text-xs font-semibold">{title}</p>
          </Link>
          <span className="text-gray-500 text-[10px] hover:text-gray-600">
            {author}
          </span>
          <p className="text-gray-500 text-[10px]">
            {views} views . {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
