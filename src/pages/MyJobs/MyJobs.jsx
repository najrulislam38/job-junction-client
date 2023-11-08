import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

const MyJobs = () => {
  const { user, isLoading } = useAuth();
  const [loadJobs, setLoadJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState(loadJobs);

  useEffect(() => {
    axios
      .get(`https://job-junction-server.vercel.app/jobs?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoadJobs(res.data);
      });
  }, [user]);

  useEffect(() => {
    setDisplayJobs(loadJobs);
  }, [loadJobs]);

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://job-junction-server.vercel.app/jobs/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remainingJobs = loadJobs?.filter((job) => job._id !== id);
              setDisplayJobs(remainingJobs);

              Swal.fire({
                title: "Deleted!",
                text: "Your Job post has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-xl min-h-[70vh] mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      {displayJobs?.length < 1 ? (
        <div>
          <h2 className="text-center text-xl md:text-3xl font-semibold">
            You do not have post any Jog here.
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-xl md:text-3xl font-semibold mb-6">
            My Jobs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {displayJobs?.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                handleDeletePost={handleDeletePost}
              ></JobCard>
            ))}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default MyJobs;
