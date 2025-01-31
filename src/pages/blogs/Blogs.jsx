
import './blogs.css';
import ProfileCard from '../../components/profileCard/ProfileCard';
import BlogArticle from './../../components/blogArticle/BlogArticle';
import CommentsList from '../../components/commentsList/CommentsList';
import CommentsForm from '../../components/commentsForm/CommentsForm';
import HeroBlog from "../../components/HeroBlog/HeroBlog";
import Newsletter from "../../components/NewsLetter/Newsletter";
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts";

export default function Blogs() {
  return (
    <>
      <HeroBlog />
      <div className="mainContainer">
          <BlogArticle></BlogArticle>
          <ProfileCard></ProfileCard>
          <CommentsForm></CommentsForm>
          <CommentsList></CommentsList>
        </div>
      <RelatedPosts />
      <Newsletter />
    </>
  );
}

