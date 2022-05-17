import "./Profil.css";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function Profil(props) {
  return (
    <>
      <div className="profile">
        <img src={props.imge} alt="" />
        <h1>{props.fullName}</h1>
        <h2>
          {props.bio} <br /> {props.profession}
        </h2>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "30px",
              color: "rgb(0, 123, 255)",
              margin: "20px",
            },
          }}
        >
          <a href="www.twitter.com">
            <FaTwitter />
          </a>
          <a href="www.facebook.com">
            <FaFacebook />
          </a>
          <a href="www.github.com">
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Profil;
