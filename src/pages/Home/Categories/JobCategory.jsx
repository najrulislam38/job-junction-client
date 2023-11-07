import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCategory = ({ job }) => {
  //   const { title, deadline, email, category, minPrice, maxPrice, description } =
  //     job;
  const { _id, title, deadline, minPrice, maxPrice, desc: description } = job;

  const formattedDate = new Date(deadline).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full h-fit flex flex-col border shadow-lg bg-base-100 rounded-md p-8">
      <div className="space-y-1 flex-1">
        <h1 className="text-xl font-medium ">
          <span className=" text-black font-medium ">Job Title:</span> {title}
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
      <div className="my-6">
        <Link to={`jobs/${_id}`}>
          <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Bit Now
          </button>
        </Link>
      </div>
    </div>
  );
};

JobCategory.propTypes = {
  job: PropTypes.object,
};

export default JobCategory;
