
import  { useState } from "react";
import profileImg1 from '../../assets/img/profile-img.webp';
import profileImg2 from '../../assets/img/profileImg2.webp';
import profileImg3 from '../../assets/img/profileImg3.webp';
import CommentsCard from "../commentsCard/CommentsCard";
function CommentsList(){

  const [users, setUsers] = useState([
    { 
        id: 1, 
        userName: "Zeinab", 
        profileImg:profileImg1,
        commentDate:"January  21, 2025 at 7:05 pm",
        commentContent:"His quis suas meis ex, eu vix alterum senserit. Clita civibus voluptaria nam ea, ius graeci atomorum incorrupte.",

    },
    { 
        id: 2, 
        userName: "Mariam", 
        profileImg:profileImg2, 
        commentDate:"February 21, 2015 at 5:05 pm",
        commentContent:" quis suas meis ex, eu vix alterum senserit. Clita civibus voluptaria nam ea, ius graeci atomorum incorrupte.",
    },
    { 
        id: 3, 
        userName: "Alaa", 
        profileImg:profileImg3,
        commentDate:"March 21, 2015 at 8:05 pm",
        commentContent:" suas meis ex, eu vix alterum senserit. Clita civibus voluptaria nam ea, ius graeci atomorum incorrupte.",
    },
]);

    return(
        
            users.map((items) => {
                return(
                    <CommentsCard
                        key={items.id}
                        userName={items.userName}
                        commentContent={items.commentContent}
                        profileImg={items.profileImg}
                        commentDate={items.commentDate}>
                    
                    </CommentsCard>

                );

            })
        
    )
}
export default CommentsList;