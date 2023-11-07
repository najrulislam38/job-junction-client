import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyBidRow from "./MyBidRow";

const MyBid = () => {
  const { user } = useAuth();
  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/bids?email=${user?.email}`).then((res) => {
      setMyBids(res.data);
    });
  }, [user]);

  return (
    <div className="max-w-screen-xl min-h-[60vh] mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      <div>
        {myBids?.length < 1 ? (
          <div>
            <h1 className="text-xl md:text-3xl text-center font-semibold">
              You have do not any job Bid yet.
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <h1 className="text-xl md:text-3xl text-center mb-5 font-semibold">
              My Bid
            </h1>
            <div>
              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-base text-left text-gray-500 ">
                  <thead className=" text-gray-700 uppercase bg-gray-100 border ">
                    <tr>
                      <th scope="col" className=" px-6 py-3">
                        Job Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Buyer Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Deadline
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myBids?.map((myBid) => (
                      <MyBidRow key={myBid._id} myBid={myBid}></MyBidRow>
                    ))}
                    {/* <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Apple MacBook Pro 17
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600  hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">Gray</td>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Apple Watch 5
                      </th>
                      <td className="px-6 py-4">Red</td>
                      <td className="px-6 py-4">Wearables</td>
                      <td className="px-6 py-4">$999</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600  hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBid;
