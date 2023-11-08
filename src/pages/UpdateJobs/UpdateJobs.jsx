import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateJobs = () => {
  const { user } = useAuth();
  const selectedJob = useLoaderData();
  const navigate = useNavigate();

  const { _id, title, deadline, category, minPrice, maxPrice, desc } =
    selectedJob;

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const email = user?.email;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const desc = form.description.value;

    // console.log(title, deadline, email, category, minPrice, maxPrice, desc);

    const UpdateJobInfo = {
      title,
      deadline,
      email,
      category,
      minPrice,
      maxPrice,
      desc,
    };

    axios
      .put(`http://localhost:5000/jobs/${_id}`, UpdateJobInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          toast.success("Job Information update successful.");
          navigate("/my-post-job");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-8 md:my-14 lg:my-20 ">
      <div className="bg-base-100 border p-5 md:p-10 rounded-md shadow-md">
        <h1 className="text-center text-xl md:text-3xl font-semibold mb-8">
          Add Job Here
        </h1>
        <form onSubmit={handleUpdateJob}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 font-medium text-gray-900 "
              >
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={title}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Job Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="deadline"
                className="block mb-2 font-medium text-gray-900 "
              >
                Deadline
              </label>
              <input
                type="datetime-local"
                id="deadline"
                name="deadline"
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
                htmlFor="category"
                className="block mb-2 font-medium text-gray-900 "
              >
                Job Category
              </label>

              <select
                name="category"
                id="category"
                defaultValue={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              >
                <option value="">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="min-price"
                className="block mb-2 font-medium text-gray-900 "
              >
                Minimum Price
              </label>
              <input
                type="number"
                name="minPrice"
                id="min-price"
                defaultValue={minPrice}
                placeholder="Minimum price"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="max-price"
                className="block mb-2 font-medium text-gray-900 "
              >
                Maximum Price
              </label>
              <input
                type="number"
                name="maxPrice"
                id="max-price"
                defaultValue={maxPrice}
                placeholder="maximum price"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                type="text"
                name="description"
                rows={4}
                id="description"
                defaultValue={desc}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Description"
                required
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-[#008FD4] hover:bg-[#0870A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobs;
