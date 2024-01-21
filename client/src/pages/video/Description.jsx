import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDeleteVideoMutation } from "../../features/api/apiSlice";
import { useEffect } from "react";

const Description = ({ video }) => {
  const { id, title, description, date } = video;
  const [deleteVideo, { isSuccess }] = useDeleteVideoMutation();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (id) deleteVideo(id);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Video deleted!!!");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="flex pb-4 items-center justify-between border-b gap-4">
        <p className="text-sm leading-[1.72] text-slate-600 w-full">
          Uploaded on {date}
        </p>
        <div className="flex gap-6 w-full justify-end">
          <Link
            to={`/videos/edit/${id}`}
            className="flex gap-1 items-center hover:text-indigo-600"
          >
            <div>
              <FaEdit className="w-4" />
            </div>
            <div>
              <span className="text-sm leading-[1.72] text-slate-600 cursor-pointer">
                Edit
              </span>
            </div>
          </Link>
          <div
            className="flex gap-1 items-center hover:text-red-600"
            onClick={handleDelete}
          >
            <div>
              <FaTrash />
            </div>
            <div>
              <span className="text-sm leading-[1.72] text-slate-600 cursor-pointer">
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-[#334155] ">{description}</div>
    </div>
  );
};

export default Description;
