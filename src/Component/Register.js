import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../service/AuthService";
import styles from "./styles.module.css";
export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const history = useHistory();

  const handleRegister = async () => {
    const data = {
      email,
      password,
    };
    try {
      await AuthService.register(data);
      history.push('/login');
    } catch (err) {
      setErrMsg(err.message);
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
          <span>Register</span>
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
          {errMsg && <span className={styles.error_section}>New user not created</span>}
          <button
            type="submit"
            className={styles.submit_btn}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>

        {/* sign up section  */}
        <div className={styles.sign_up_section}>
          have an account?{" "}
          <Link to={"/login"} className={styles.sign_up}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
