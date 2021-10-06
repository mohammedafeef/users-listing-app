import styles from "./styles.module.css";
import {useState, useEffect} from 'react';
import AuthService from "../service/AuthService";
export default function UserList() {
    const [users, setUsers] = useState();
  useEffect(() => {
    const  getUsers = async() =>{
        const res = await AuthService.getUsers();
        console.log(res);
        setUsers(res);
    }
    getUsers();
  }, [])
  return (
    //  total content
    <div className={styles.content_wrapper}>
      {/* inner container  */}
      <div className={styles.container} style={{justifyContent:"flex-start"}}>
        {/* page title  */}
        <div className={styles.title}>
          <span>user list</span>
        </div>
        {/* <div className={styles.usersContainer}>
        <div className={styles.user}>
            <img src="https://reqres.in/img/faces/8-image.jpg"/>
            <div className={styles.fullName}>mohammed afeef</div>
            <div className={styles.email}>afeef@gmail.com</div>
        </div>


        </div> */}
        <table className={styles.users}>
          <tr>
            <th>first name</th>
            <th>last_name</th>
            <th>email</th>
          </tr>

          {  
              users && users.map((user)=>(
                <tr>
                <td>{user.first_name }</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                </tr>
              ))
          }
        </table>
      </div>
    </div>
  );
}
