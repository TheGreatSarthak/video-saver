import { RiArrowDropDownLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEditVideoMutation } from "../../features/api/apiSlice";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const EditForm = ({ video }) => {
  const {
    id,
    title,
    description,
    category,
    author,
    thumbnail,
    views,
    duration,
    link,
  } = video;

  const [editVideo,{isLoading}]=useEditVideoMutation();

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.date = formatDate(new Date());
    try {
        editVideo({id,data});
        alert("Video edited successfully!");
        navigate(`/videos/${id}`);
    } catch (error) {
        alert("An error occurred!!!")
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <form className="w-full max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        {/* title n author */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* title */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              VIDEO TITLE
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={title}
              {...register("title", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Video Title"
            />
          </div>
          {/* author */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              AUTHOR
            </label>
            <input
              type="text"
              name="author"
              id="author"
              defaultValue={author}
              {...register("author", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Author"
            />
          </div>
        </div>
        {/* link n thumbnail */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* link */}
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              YOUTUBE VIDEO LINK
            </label>
            <input
              type="url"
              name="link"
              id="link"
              defaultValue={link}
              {...register("link", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="YouTube Video Url"
            />
          </div>
          {/* thumbnail */}
          <div className="w-full mt-6 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              YOUTUBE THUMBNAIL
            </label>
            <input
              type="url"
              name="thumbnail"
              id="thumbnail"
              defaultValue={thumbnail}
              {...register("thumbnail", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Video Thumbnail"
            />
          </div>
        </div>
        {/* duration views n category */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* duration */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              VIDEO DURATION
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              defaultValue={duration}
              {...register("duration", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="hr:min:sec"
            />
          </div>
          {/* views */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Views
            </label>
            <input
              type="text"
              name="views"
              id="views"
              defaultValue={views}
              {...register("views", { required: true })}
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123k"
            />
          </div>
          {/* Category */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <div className="relative">
              <select
                name="category"
                id="category"
                defaultValue={category}
                {...register("category", { required: true })}
                className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option value="">Choose Category</option>
                <option value="react">React Js</option>
                <option value="mern">Mern Stack</option>
                <option value="typescript">TypeScript</option>
                <option value="tailwind">Tailwind Css</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <RiArrowDropDownLine className="fill-current h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              VIDEO DESCRIPTION
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={description}
              {...register("description", { required: true })}
              cols="30"
              rows="5"
              className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-indigo-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Video Description"
            ></textarea>
          </div>
        </div>
        {/* add button */}
        <div className="px-2 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none"
          >
            Update Video
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
