import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import AuthService from "../service/AuthService";
import { useHistory } from "react-router";
export default function Login(props) {
  const setUsers = props.setUsers;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const history = useHistory()

  const handleLogin = async () => {
    console.log(email, password);
    const data = {
      email,
      password,
    };
    try {
      const res = await AuthService.login(data);
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
          {errMsg && <span className={styles.error_section}>{errMsg}</span>}

          <button
            type="submit"
            className={styles.submit_btn}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* other login method section  */}
        {/* <div className={styles.other_login_methods}>
          <div className={styles.login_message}>Or login with</div>
          <div className={styles.login_methods}>
            <span className={styles.login_method}>
              <span className={styles.icon}>
                <i className={styles.fab fa_facebook_f}></i>
              </span>
              Facebook
            </span>
            <span className={styles.login_method gplus_section">
              <span className={styles.icon">
                <i className={styles.fab fa_google_plus_g"></i>
              </span>
              Google
            </span>
          </div>
        </div> */}
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
