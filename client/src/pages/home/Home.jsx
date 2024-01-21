import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";

const Home = () => {
  const { data: videos } = useGetVideosQuery();
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [categoryFilter, setCatergoryFilter] = useState(null);

  

   useEffect(() => {
    setSelectedVideos(videos);
  }, [videos]);

  //filter based on catergory
  useEffect(() => {
    if (categoryFilter) {
      const filterVideos = videos?.filter(
        (video) => video.category === categoryFilter
      );
      setSelectedVideos(filterVideos);
    } else {
      setSelectedVideos(videos);
    }
  }, [categoryFilter, videos]);

  //search video by text input
  const handleSearch = (searchText) => {
    const text = searchText.toLowerCase();
    //console.log(text);
    if (searchText !== "") {
      const filterVideos = videos?.filter((video) => {
        const videoTitle = video.title.toLowerCase();
        return videoTitle.includes(text);
      });
      setSelectedVideos(filterVideos);
    }
  };

  return (
    <section className="pt-6 pb-20 min-h-[clac(100vh-175px)] max-w-7xl mx-auto px-5 lg:px-20">
      {/* category button and search bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-5 gap-4">
        {/* category */}
        <div className="flex gap-2">
          <button
            onClick={() => setCatergoryFilter(null)}
            className={`${
              categoryFilter === null
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-600"
            } px-4 py-1 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white`}
          >
            All
          </button>
          <button
            onClick={() => setCatergoryFilter("react")}
            className={`${
              categoryFilter === "react"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-600"
            } px-4 py-1 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white`}
          >
            ReactJs
          </button>
          <button
            onClick={() => setCatergoryFilter("nextjs")}
            className={`${
              categoryFilter === "nextjs"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-600"
            } px-4 py-1 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white`}
          >
            NextJs
          </button>
          <button
            onClick={() => setCatergoryFilter("tailwind")}
            className={`${
              categoryFilter === "tailwind"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-600"
            } px-4 py-1 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white`}
          >
            Tailwind
          </button>
        </div>
        {/* search bar */}
        <Search handleSearch={handleSearch} />
      </div>
      {/* videos grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-5 lg:px-0 min-h-[300px]">
        {selectedVideos?.length > 0 ? (
          selectedVideos.map((video) => (
            <Video key={video.id} video={video} />
          ))
        ) : (
          <div>No videos added!</div>
        )}
      </div>
    </section>
  );
};

export default Home;
