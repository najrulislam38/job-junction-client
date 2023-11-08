import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCategory from "./JobCategory";
import Loading from "../../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [jobCategories, setJobCategories] = useState([]);
  const [webCategories, setWebCategories] = useState([]);
  const [digitalCategories, setDigitalCategories] = useState([]);
  const [graphicCategories, setGraphicCategories] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://job-junction-server.vercel.app/jobs", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       if (res?.data) {
  //         setJobCategories(res.data);
  //       }
  //     });
  // }, []);

  const { isPending, data: jobCategories } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: async () => {
      const response = await fetch(
        "https://job-junction-server.vercel.app/jobs",
        {
          credentials: "include",
        }
      );
      return response.json();
    },
  });

  useEffect(() => {
    if (jobCategories) {
      const categories = jobCategories?.filter(
        (job) => job?.category === "Web Development"
      );
      setWebCategories(categories);
    }

    if (jobCategories) {
      const categories = jobCategories?.filter(
        (job) => job?.category === "Digital Marketing"
      );
      setDigitalCategories(categories);
    }
    if (jobCategories) {
      const categories = jobCategories?.filter(
        (job) => job?.category === "Graphic Design"
      );
      setGraphicCategories(categories);
    }
  }, [jobCategories]);

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-10  lg:my-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Job Categories
      </h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphic Design</Tab>
        </TabList>

        <TabPanel>
          <div className="min-h-screen ">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {webCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2  mt-5">
              {digitalCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {graphicCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
