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
  const [jobCategory, setJobCategory] = useState("Web Development");
  const { isLoading } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs?category=${jobCategory}`)
      .then((res) => {
        setJobCategories(res.data);
      });
  }, [jobCategory]);

  const handleSetCategory = (category) => {
    setJobCategories([]);
    setJobCategory(category);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-10  lg:my-20">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab onClick={() => handleSetCategory("Web Development")}>
            Web Development
          </Tab>
          <Tab onClick={() => handleSetCategory("Digital Marketing")}>
            Digital Marketing
          </Tab>
          <Tab onClick={() => handleSetCategory("Graphic Design")}>
            Graphic Design
          </Tab>
        </TabList>

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {jobCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {jobCategories?.map((job) => (
                <JobCategory key={job._id} job={job}></JobCategory>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {jobCategories?.map((job) => (
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
