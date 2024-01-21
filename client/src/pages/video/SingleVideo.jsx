import { useParams } from "react-router-dom";
import Player from "./Player";
import Description from "./Description";
import RelatedVideos from "./RelatedVideos";
import { useGetVideoQuery } from "../../features/api/apiSlice";

const SingleVideo = () => {
  const { videoId } = useParams();
  const { data: video } = useGetVideoQuery(videoId);
  return (
    <section className="pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-20 pb-20 min-h-[400px]">
        {/* video details */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {video?.id ? (
              <>
                <Player link={video.link} title={video.title} />
                <Description video={video}/>
              </>
            ) : (
              <div>Error loading video!!</div>
            )}
          </div>
          <RelatedVideos id={video?.id} title={video?.title} />
        </div>
      </div>
    </section>
  );
};

export default SingleVideo;
