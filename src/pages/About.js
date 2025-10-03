import react from "react";
import raffy from "../assets/img/raffy.png"

const About  = () => {
    return (
        <div className="About" id="about">
            <div className="About_container">
                <div>
                    <img className="Raffy" src={raffy} alt="Raffy"></img>
                </div>
                <div className="Detail">
                    <div className="About_me"><h2>About me</h2></div>
                    <div className="Line"></div>
                    <div className="Paragraph">
                        I'm Raffy Aclan, a back-end developer with over 2 years of experience as an Oracle Technical Consultant and SME. 
                        Skilled in PHP, CSS, SQL, ReactJS, and troubleshooting, with a strong background in providing technical support and ensuring seamless system functionality. 
                        Proven expertise in upgrading and maintaining oracle servers, including optimizing performance and resolving complex technical issues. 
                        Known for excellent problem-solving abilities and a commitment to delivering high-quality solutions. 
                        Seeking new opportunities to grow as a web developer and contribute to innovative projects in a dynamic work environment.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

