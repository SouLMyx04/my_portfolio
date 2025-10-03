import react from "react";
import heart from "../assets/img/heart.png"
import Swal from 'sweetalert2'

const Contact  = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "382adb94-f1d7-4650-83b5-9dcd03552218");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div className="Contact" id="contact">
            <div>
                <img className="Heart" src={heart} alt="heart"></img>
            </div>
            <form onSubmit={onSubmit}>
                <h2>Contact me</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" name="name" className="field" placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" name="email" className="field" placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;

