import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const dir = "images/";
  const icons = [
    {
      imgPath: dir + "twitter.png",
      link: "https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09",
    },
    {
      imgPath: dir + "linkedin.png",
      link: "https://www.linkedin.com/in/charan-mudiraj-868086230",
    },
    {
      imgPath: dir + "instagram.png",
      link: "https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      imgPath: dir + "whatsapp.png",
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
          <img src={dir + "pp.jpg"} alt="" />
        </span>
        <p>Admin</p>
        <p>Charan M</p>
        <hr />
        <div id="ac-icons-flex">{icons.map(Icon)}</div>
      </div>
    </div>
  );
}
