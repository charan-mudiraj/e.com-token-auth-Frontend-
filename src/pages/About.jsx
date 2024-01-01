import "./About.css";
import { useNavigate } from "react-router-dom";
import ppImg from "../assets/images/pp.jpg";
import twitterImg from "../assets/images/twitter.png";
import linkedInImg from "../assets/images/linkedin.png";
import instagramImg from "../assets/images/instagram.png";
import whatsappImg from "../assets/images/whatsapp.png";

export default function About() {
  const navigate = useNavigate();
  const dir = "../assets/images/";
  const icons = [
    {
      imgPath: twitterImg,
      link: "https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09",
    },
    {
      imgPath: linkedInImg,
      link: "https://www.linkedin.com/in/charan-mudiraj-868086230",
    },
    {
      imgPath: instagramImg,
      link: "https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      imgPath: whatsappImg,
      link: "https://wa.me/qr/H67AUKBDVVBUO1",
    },
  ];
  function Icon(props) {
    return (
      <a id="social-icon" href={props.link}>
        <img src={props.imgPath} alt="" />
      </a>
    );
  }
  return (
    <div id="a-ac">
      <button onClick={() => navigate("/home")}>Go to Home</button>
      <div id="ac-about-card">
        <span>
          <img src={ppImg} alt="" />
        </span>
        <p>Admin</p>
        <p>Charan M</p>
        <hr />
        <div id="ac-icons-flex">{icons.map(Icon)}</div>
      </div>
    </div>
  );
}
