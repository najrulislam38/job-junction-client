import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BidReqRow from "./BidReqRow";
import Swal from "sweetalert2";

const BidRequest = () => {
  const { user } = useAuth();
  const [loadBitReq, setLoadBitReq] = useState([]);
  const [bitRequests, setBitRequest] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs?email=${user?.email}`, { withCredentials: true})
      .then((res) => {
        setLoadBitReq(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  useEffect(() => {
    const filterJobReq = loadBitReq?.filter((request) => request.bidReqEmail);

    setBitRequest(filterJobReq);
  }, [loadBitReq]);

  // console.log(bitRequests);

  const handleCancelBidReq = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject  it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bids/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Canceled" }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        // axios
        //   .patch(`http://localhost:5000/bids/${id}`)
        //   .then((res) => console.log(res.data));
        Swal.fire({
          title: "Canceled!",
          text: "Your have canceled the bit request.",
          icon: "success",
        });
      }
    });
  };

  const handleAcceptBidReq = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bids/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "inprogress" }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        // axios
        //   .patch(`http://localhost:5000/bids/${id}`)
        //   .then((res) => console.log(res.data));
        Swal.fire({
          title: "Canceled!",
          text: "Your have canceled the bit request.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="max-w-screen-xl min-h-[60vh] mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      <div>
        {bitRequests?.length < 1 ? (
          <div>
            <h1 className="text-xl md:text-3xl text-center font-semibold">
              You have do not any job bit request yet.
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <h1 className="text-xl md:text-3xl text-center mb-5 font-semibold">
              Bit Requests
            </h1>
            <div>
              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className=" text-gray-700 uppercase bg-gray-100 border ">
                    <tr>
                      <th scope="col" className=" px-6 py-3">
                        Job Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Deadline
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bitRequests?.map((bidReq) => (
                      <BidReqRow
                        key={bidReq._id}
                        bidReq={bidReq}
                        handleCancelBidReq={handleCancelBidReq}
                        handleAcceptBidReq={handleAcceptBidReq}
                      ></BidReqRow>
                    ))}
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

export default BidRequest;
