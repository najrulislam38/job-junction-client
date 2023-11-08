import PropTypes from "prop-types";

const MyBidRow = ({ myBid, handleCompleteJob }) => {
  //   console.log(myBid);

  const { title, email, buyerEmail, bidDeadline, status } = myBid;
  // console.log(status);

  return (
    <tr className="bg-white border ">
      <th className="px-6 py-4 font-medium text-gray-900 ">{title}</th>
      <td className="px-6 py-4">{buyerEmail}</td>
      <td className="px-6 py-4">{bidDeadline}</td>
      <td className="px-6 py-4">{status ? <p>{status}</p> : <p>Pending</p>}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleCompleteJob(email, title)}
          className={`bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300 ${
            status == "inprogress"
              ? ""
              : "btn-disabled  bg-[#0870A1] opacity-60"
          }`}
        >
          Complete
        </button>
      </td>
    </tr>
  );
};

MyBidRow.propTypes = {
  myBid: PropTypes.object,
  handleCompleteJob: PropTypes.func,
};

export default MyBidRow;
