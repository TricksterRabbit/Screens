import "./login.css";
import rabbitPurple from "../../assets/RabbitPurple.png";
import sasha from "../../assets/sasha.png";

function LoginV2() {
  return (
    <>
      <div className="navbarV2">
        <img src={rabbitPurple} alt="" />
      </div>
      <div className="containerV2">
        <img src={sasha} />
        <div className="form-containerV2">
          <form>
            <input type="email" placeholder="login" />
            <input type="password" placeholder="password" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginV2;
