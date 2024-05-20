import "./login.css";
import rabbitGreen from "../../assets/RabbitGreen.png";

function LoginV3() {
  return (
    <div className="containerV3">
      <div className="form-containerV3">
        <form>
          <img src={rabbitGreen} alt="" />
          <input type="text" />
          <input type="password" />
          <div className="checkbox-and-link-containerV3">
            <div className="checkbox-container">
              <label className="label-containerV3">
                <input type="checkbox" name="" id="" />
                <span></span>
                Remember me
              </label>
            </div>
            <a>Forgot Password</a>
          </div>
          <button>login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginV3;
