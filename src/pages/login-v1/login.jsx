import "./login.css";

function LoginV1() {
  return (
    <div className="container">
      <div className="form-container">
        <form>
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
