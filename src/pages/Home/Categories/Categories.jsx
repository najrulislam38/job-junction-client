import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCategory from "./JobCategory";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading/Loading";

const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [jobCategories, setJobCategories] = useState([]);
  const [webCategories, setWebCategories] = useState([]);
  const [digitalCategories, setDigitalCategories] = useState([]);
  const [graphicCategories, setGraphicCategories] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((res) => {
      if (res?.data) {
        setJobCategories(res.data);
      }
    });
  }, []);

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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-10  lg:my-20">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphic Design</Tab>
        </TabList>

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {webCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {digitalCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
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
