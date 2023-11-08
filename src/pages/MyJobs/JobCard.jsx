import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ job, handleDeletePost }) => {
  const { _id, title, deadline, minPrice, maxPrice, desc: description } = job;

  const formattedDate = new Date(deadline).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full h-fit flex flex-col md:flex-row  gap-6 border shadow-lg bg-base-100 rounded-md p-8">
      <div className="space-y-1 flex-1">
        <h1 className="text-base md:text-lg font-medium ">
          <span className=" text-black font-medium ">Job Title:</span>{" "}
          {title.length > 30 ? `${title.slice(0, 30)}` : title}
        </h1>
        <p>
          <span className="text-black font-medium ">Deadline:</span>{" "}
          {formattedDate}
        </p>
        <p>
          <span className="text-black font-medium ">Price Range:</span>{" "}
          {minPrice} $ - {maxPrice} $
        </p>
        <p>
          <span className="text-black font-medium ">Description:</span>{" "}
          {description?.length > 100
            ? `${description.slice(0, 100)} ...`
            : description}
        </p>
      </div>
      <div className=" flex flex-row md:flex-col gap-6 mt-5">
        <Link to={`/update-jobs/${_id}`}>
          <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDeletePost(_id)}
          className="w-fit bg-red-500 hover:bg-red-800 text-white py-2 px-5 rounded-md duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
  handleDeletePost: PropTypes.func,
};

export default JobCard;
