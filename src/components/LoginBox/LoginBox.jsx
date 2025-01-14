import USER from "../../constants/user";
import { useNavigate } from "react-router-dom";

import "./LoginBox.css";

const LoginBox = () => {
  const Navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const { email: userEmail, password: userPassword } = USER;

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === userEmail && password === userPassword) {
      Navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };

  return (
    <div className="login-box">
      <form action="/" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginBox;
