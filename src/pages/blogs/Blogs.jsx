import './blogs.css';
import ProfileCard from '../../components/profileCard/ProfileCard';
import BlogArticle from './../../components/blogArticle/BlogArticle';
import CommentsList from '../../components/commentsList/CommentsList';
import CommentsForm from '../../components/commentsForm/CommentsForm';
function Blogs(){
    return(
        <div className="mainContainer">
          <BlogArticle></BlogArticle>
          <ProfileCard></ProfileCard>
          <CommentsForm></CommentsForm>
          <CommentsList></CommentsList>
        </div>
    )
}
export default Blogs;
