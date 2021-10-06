import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import AuthService from "../service/AuthService";
import { useHistory } from "react-router";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const history = useHistory()

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    try {
      await AuthService.login(data);
      history.push('/users');
    } catch (err) {
      setErrMsg(err.message)
    }
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setEmail(e.target.value);

  return (
    //  total content
    <div className={styles.content_wrapper}>
      {/* inner container  */}
      <div className={styles.container}>
        {/* page title  */}
        <div className={styles.title}>
          <span>Sign In</span>
        </div>

        {/* form inputs section  */}
        <div className={styles.inputs}>
          <input
            type="email"
            value={email}
            onChange={handleUsernameChange}
            className={styles.text_input}
            placeholder="Enter the Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.text_input}
            placeholder="Password"
          />
          {errMsg && <span className={styles.error_section}>email or password is invalid</span>}

          <button
            type="submit"
            className={styles.submit_btn}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* sign up section  */}
        <div className={styles.sign_up_section}>
          Not a member ?{" "}
          <Link to={"/register"} className={styles.sign_up}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
