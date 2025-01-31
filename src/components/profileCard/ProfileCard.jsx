import './ProfileCard.css';
import profileImg from '../../assets/img/profile-img.webp';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
function ProfileCard(){
    return(
        <div className="container w-75">
            <div className="profile-container">
                <img src={profileImg} alt="Profile Picture"/>
                <div className="text-content">
                    <h2 href="#"><a >Isabelle Roche</a></h2>
                    <p><strong>Business consultant and trainer</strong></p>
                    <p>Hello! My name is Isabelle Roche, and my passion for business coaching stems from my own experience as an independent entrepreneur. My coaching journey has deep roots in my personal business path.</p>
                    <hr/>
                
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://tiktok.com" target="_blank"><i className="fab fa-tiktok"></i></a>
                        <a href="https://x.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fas fa-link"></i></a>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default ProfileCard;