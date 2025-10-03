import react from "react";

const skillImages = ["HTML","CSS","JavaScript","Git","GitHub","Bootstrap","Mongodb","NodeJS","PHP","ReactJS"];

const Skill = () => {
    return(
        <div className="Skill" id="skill">
            <div className="Skill_container">
                <div className="Skills">
                    <h2>Skills</h2>
                </div>
                <div className="Logo_container">
                    {skillImages.map((imgName, index) => (
                        <div className="Icon_container" key={index}>
                            <img className="Icon" src={require(`../assets/img/${imgName}.png`)}/>
                            <div className="Icon_text" key={index}>{imgName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skill;


