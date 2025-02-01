import CommentsCard from "../commentsCard/CommentsCard";
function CommentsList({comments}) {
  return comments.map((comment, index) => {
    return (
      <CommentsCard
        key={index}
        userName={comment.author}
        commentContent={comment.text}
        profileImg={comment.profilePicture}
        commentDate={comment.date}
        hour={comment.hour}
      />
    );
  });
}
export default CommentsList;
