//import {  useState } from "react";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  const { id, title, author, thumbnail, views, date, duration } = video;

  //for random color
  // const [randomColor, setRandomColor] = useState("#000000");
  // const generateRandomColor = () => {
  //   const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setRandomColor(color);
  // };

  // useEffect(() => {
  //   const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setRandomColor(color);
  // }, [setRandomColor]);

  //console.log(randomColor);

  return (
    <div>
      {/* thumbnail */}
      <div className="relative hover:scale-[1.04]">
        <Link to={`/videos/${id}`}>
          <img src={thumbnail} alt="thumbnail" className="w-full h-auto" />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-sm px-1 py-0.5">
          {duration}
        </p>
      </div>
      {/* video description */}
      <div className="flex flex-row mt-2 gap-2">
        {/* <div
          className={`rounded-full h-6 w-6 shrink-0 bg-red-600`}
        ></div> */}
        <div className="flex flex-col">
          <Link to={`/videos/${id}`}>
            <p className="text-slate-900 text-sm font-semibold">{title}</p>
          </Link>
          <span className="text-gray-500 text-xs hover:text-gray-600">
            {author}
          </span>
          <p className="text-gray-500 text-xs">
            {views} views . {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
