import profile_icon from "../images/profile_icon.png";

const ShowComment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className="flex px-2 m-2 bg-gray-100 shadow-sm rounded-xl">
      <img alt="user" src={profile_icon} className="h-6 " />
      <div>
        <div className="px-2">{name}</div>
        <div className="px-2">{comment}</div>
        {replies && (
          <div className="px-2 mx-2 border-l border-black">
            <NthCommentsList comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const NthCommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <ShowComment key={index} data={comment} />
  ));
};

export default NthCommentsList;
