import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BidReqRow = ({ bidReq, handleCancelBidReq, handleAcceptBidReq }) => {
  const [loadData, setLoadData] = useState([]);

  const {
    _id: buyer_id,
    title,
    bidReqEmail,
    bidReqPrice,
    deadline,
    status,
  } = bidReq;

  useEffect(() => {
    axios.get(`http://localhost:5000/bids?email=${bidReqEmail}`).then((res) => {
      setLoadData(res.data);
    });
  }, [bidReqEmail]);

  // console.log(loadData);

  return (
    <tr className="bg-white border ">
      <th className="px-6 py-4 font-medium text-gray-900 ">{title}</th>
      <td className="px-6 py-4 text-sm">{bidReqEmail}</td>
      <td className="px-6 py-4 text-sm ">{deadline}</td>
      <td className="px-6 py-4 text-sm">{bidReqPrice}</td>
      <td className="px-6 py-4 text-sm">
        {status ? <p>{status}</p> : <p>Pending</p>}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleCancelBidReq(buyer_id)}
          className="bg-red-500 hover:bg-red-800 text-white  rounded-md duration-300 btn-sm"
        >
          Reject
        </button>
      </td>
      <td className="px-6 py-4">
        <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white rounded-md duration-300 btn-sm ">
          Accept
        </button>
      </td>
    </tr>
  );
};

BidReqRow.propTypes = {
  bidReq: PropTypes.object,
  handleCancelBidReq: PropTypes.func,
  handleAcceptBidReq: PropTypes.func,
};

export default BidReqRow;
