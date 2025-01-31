import './CommentsCard.css';

function CommentsCard(props){
    return(
        <div className="container mt-4 comments-container">
        <div className="card p-3">
            <div className="d-flex w-100">
                <div className="profile-img-container">
                    <img src={props.profileImg} className="rounded-circle me-3 profile-img" alt="User Image"/>
                </div>
                <div className="personal-inf w-100 ">
                    <div className="d-flex justify-content-between mb-3 flex-column  flex-lg-row gap-2">
                        <h6 className="mb-0 pe-5">{props.userName}</h6>
                        <small>{props.commentDate}</small>
                    </div>
                    <div>
                        <p>{props.commentContent}</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
}
export default CommentsCard;