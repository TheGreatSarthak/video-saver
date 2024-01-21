import { useGetRelatedVideosQuery } from "../../features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ id, title }) => {
  const { data: relatedVideos } = useGetRelatedVideosQuery({ id, title });
  return (
    <div className="col-span-full lg:col-auto h-full overflow-y-auto">
      {relatedVideos?.length > 0 ? (
        relatedVideos.map((video) => (
          <RelatedVideo key={video.id} video={video} />
        ))
      ) : (
        <div>No related video...</div>
      )}
    </div>
  );
};

export default RelatedVideos;
