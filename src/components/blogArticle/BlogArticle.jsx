import './BlogArticle.css';
import img1 from '../../assets/img/2.webp';
import img2 from '../../assets/img/3.webp';
function BlogArticle(){
    return(
        <>
        <div className="container container1">
         <div className="content">
            <p>
                We are diving deep into the closets of your favorite stars to bring you the secrets of 
                mimicking their best looks on a budget. From red carpet glam to casual streetwear 
                chic, we have got the lowdown on affordable dupes, smart shopping tips, and DIY 
                hacks that will have you looking like a million bucks without spending it.
            </p>
        </div>
        <div className="row">
           
            <div className="col-md-6">
                <div className="image-container">
                    <img src={img1} alt="White Irises"/>
                </div>
                <div className="title">
                    <p>White Irises</p>
                </div>
                <div className="author">
                   <p> Lily Collins</p>
                </div>
            </div>
    
           
            <div className="col-md-6">
                <div className="title">
                    <p>Cherry Blossom</p>
                </div>
                <div className="author">
                   <p> Lily Collins</p>
                </div>
                <div className="image-container">
                    <img src={img2} alt="Cherry Blossom"/>
                </div>  
            </div>
        </div>
    
        
        <div className="content">
            <p>
                We are diving deep into the closets of your favorite stars to bring you the secrets of 
                mimicking their best looks on a budget. From red carpet glam to casual streetwear 
                chic, we have got the lowdown on affordable dupes, smart shopping tips, and DIY 
                hacks that will have you looking like a million bucks without spending it.
            </p>
        </div>
    </div>
        </>
    )
}
export default BlogArticle;