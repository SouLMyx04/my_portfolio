import react from "react";
import avatar from "../assets/img/avatar.jpg";

const Home = () => {

    
    return (
        <div className="home" id="home">
            <div className="Home_container">
                <div className="Avatar">
                    <img className="Avatar_01" src={avatar} alt="Avatar"></img>
                </div>
                <div className="Paragraph_container">
                    <div>
                        <div className="Sentence-01">Hello!,</div>
                        <div className="Sentence-02">I'm Raffy Aclan</div>
                        <div className="animated-text"><span></span></div>
                    </div>
                    
                    <div className="intro">
                        I'm a back-end developer with a passion for building clean, efficient, and user-friendly applications. With past experience as a Subject Matter Expert, I combine technical expertise and problem-solving skills to create digital solutions that make an impact.
                    </div>

                    <div className="nav__social">
                        <a href="https://github.com/SouLMyx04" target="_blank" className="nav__social-link">
                            <i className="ri-github-line"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/raffy-aclan-42154b281/" target="_blank" className="nav__social-link">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a href="https://www.facebook.com/raffy.r.aclan" target="_blank" className="nav__social-link">
                            <i class="ri-facebook-box-line"></i>
                        </a>
                        <a href="https://www.youtube.com/@RaffyDev4" target="_blank" className="nav__social-link">
                            <i class="ri-youtube-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

