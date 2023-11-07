import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    _id,
    title,
    deadline,
    email: buyerEmail,
    minPrice,
    maxPrice,
    desc,
  } = jobDetails;

  const formattedDate = new Date(deadline).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const jobUrl = `http://localhost:5000/jobs/${_id}`;

  const handleBitProject = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const bidDeadline = deadline;
    const bidPrice = form.bidPrice.value;

    const bitJobInfo = {
      title,
      email,
      buyerEmail,
      bidPrice,
      bidDeadline,
    };

    const updateReq = {
      bidReqEmail: user?.email,
      bidReqPrice: bidPrice,
    };

    axios
      .post("http://localhost:5000/bids", bitJobInfo)
      .then((res) => {
        if (res.data?.insertedId) {
          toast.success("Your bit successful on the project.");
          navigate("/my-bids");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // for bit request.
    axios
      .patch(jobUrl, updateReq)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto  px-5 md:px-10 my-10  lg:mb-20">
      <div className="border bg-base-100 shadow-md rounded-md p-8 lg:p-10">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold mb-4 md:mb-6">
            Job Details
          </h1>
          <h3 className="text-xl md:text-2xl font-medium ">
            <span className=" text-black font-medium ">Job Title:</span> {title}
          </h3>
          <p>
            <span className="text-black font-medium ">Deadline:</span>{" "}
            {formattedDate}
          </p>
          <p>
            <span className="text-black font-medium ">Price Range:</span>{" "}
            {minPrice} $ - {maxPrice} $
          </p>
          <p>
            <span className="text-black font-medium ">Description:</span> {desc}
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-center text-black mt-10 mb-4 font-medium ">
            Place Your Bit Form
          </h3>
          <form
            onSubmit={handleBitProject}
            className="max-w-xl mx-auto space-y-3"
          >
            <div>
              <label
                htmlFor="bidPrice"
                className="block mb-2 font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                id="bidPrice"
                name="bidPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="How much your charge for this job"
                required
              />
            </div>
            <div>
              <label
                htmlFor="bidDeadline"
                className="block mb-2 font-medium text-gray-900 "
              >
                Deadline
              </label>
              <input
                type="datetime-local"
                id="bidDeadline"
                name="bidDeadline"
                defaultValue={deadline}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900 "
              >
                Buyer Email
              </label>
              <input
                type="buyerEmail"
                id="buyerEmail"
                defaultValue={buyerEmail}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                readOnly
              />
            </div>
            <div className="text-center pt-8 ">
              <button
                type="submit"
                className={`text-white bg-[#008FD4] hover:bg-[#0870A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center  ${
                  user.email === buyerEmail
                    ? "btn-disabled  bg-[#0870A1] opacity-60"
                    : ""
                }  `}
              >
                Bit On The Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
