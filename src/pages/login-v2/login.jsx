import "./login.css";
import rabbitGreen from "../../assets/RabbitGreen.png";

function LoginV2() {
  return (
    <>
      <div className="navbarV2">
        <img src={rabbitGreen} alt="" />
      </div>
      <div className="containerV2">
        <div className="form-containerV2">
          <form>
            <input type="text" />
            <input type="password" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginV2;
