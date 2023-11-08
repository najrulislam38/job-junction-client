import PropTypes from "prop-types";

const BidReqRow = ({ bidReq, handleCancelBidReq, handleAcceptBidReq }) => {
  const { title, bidReqEmail, bidReqPrice, deadline, status } = bidReq;

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
          id="reject-btn"
          onClick={() => handleCancelBidReq(bidReqEmail, title)}
          className={`bg-red-500 hover:bg-red-800 text-white rounded-md duration-300 btn-sm ${
            status !== "Confirmed"
              ? ""
              : "btn-disabled  bg-[#0870A1] opacity-60"
          }`}
        >
          Reject
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          id="accept-btn"
          onClick={() => handleAcceptBidReq(bidReqEmail, title)}
          className={`bg-[#008FD4] hover:bg-[#0870A1] text-white rounded-md duration-300 btn-sm ${
            status !== "Confirmed"
              ? ""
              : "btn-disabled  bg-[#0870A1] opacity-60"
          }`}
        >
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
