import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Form.module.css";
import { useRouter } from "next/router";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const router = useRouter();

  const isValid = userName.trim().length > 3 && pwd.trim().length > 3;

  const handleLogIn = (e) => {
    e.preventDefault();
    const data = {
      user: userName,
      pass: pwd,
    };
    const userdata = localStorage.getItem("users");
    const storeItem = JSON.parse(userdata);

    storeItem.map((item) => {
      if (item.mail === data.user && item.passw === data.pass) {
        console.log(item.fname);
        localStorage.setItem(
          "logInStatus",
          JSON.stringify({
            name: item.fname + " " + item.lname,
            status: item.mail === data.user && item.passw === data.pass,
          })
        );
        router.push("/");
      }
    });
    setUserName("");
    setPwd("");
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <h1>Please Log In</h1>
      <form style={{ width: "350px" }} onSubmit={handleLogIn}>
        <label>
          <h3 style={{ marginTop: "20px" }}>Username</h3>
          <input
            value={userName}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <h3 style={{ marginTop: "20px" }}>Password</h3>
          <input
            value={pwd}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>
        <div>
          <button className={styles.logInBtn} type="submit" disabled={!isValid}>
            LOG IN
          </button>

          <Link href="/CreateAccount">
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Create Account
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
