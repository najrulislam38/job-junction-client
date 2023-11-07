import PropTypes from "prop-types";

const MyBidRow = ({ myBid }) => {
  //   console.log(myBid);

  const { _id, title, email, buyerEmail, bidDeadline, status } = myBid;

  return (
    <tr className="bg-white border ">
      <th className="px-6 py-4 font-medium text-gray-900 ">{title}</th>
      <td className="px-6 py-4">{buyerEmail}</td>
      <td className="px-6 py-4">{bidDeadline}</td>
      <td className="px-6 py-4">
        {status ? <p>inprogress</p> : <p>Pending</p>}
      </td>
      <td className="px-6 py-4">
        <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
          Complete
        </button>
      </td>
    </tr>
  );
};

MyBidRow.propTypes = {
  myBid: PropTypes.object,
};

export default MyBidRow;
