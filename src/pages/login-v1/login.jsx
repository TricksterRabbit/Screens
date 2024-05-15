import "./login.css";
import rabbitWhite from "../../assets/RabbitWhite.png";

function LoginV1() {
  return (
    <div className="container">
      <div className="form-container">
        <form>
          <img src={rabbitWhite} alt="" />
          <p>Studing Screen Login</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginV1;
