import { useEffect, useState } from "react";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    if (storeData.length > 0) {
      localStorage.setItem("users", JSON.stringify(storeData));
    }
  }, [storeData]);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const accountData = {
      fname: firstName,
      lname: lastName,
      passw: pass,
      mail: email,
    };

    setStoreData((prevData) => {
      return [accountData, ...prevData];
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
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
      <h1>Create Account</h1>
      <form style={{ width: "350px" }} onSubmit={handleCreateAccount}>
        <label>
          <h3 style={{ marginTop: "20px" }}>First Name</h3>
          <input
            value={firstName}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <h3 style={{ marginTop: "20px" }}>Last Name</h3>
          <input
            value={lastName}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          <h3 style={{ marginTop: "20px" }}>Email</h3>
          <input
            value={email}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <h3 style={{ marginTop: "20px" }}>Password</h3>
          <input
            value={pass}
            style={{ padding: "10px", borderRadius: "4px", width: "100%" }}
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <div>
          <button
            style={{
              display: "block",
              margin: "0 auto",
              marginTop: "50px",
              width: "100%",
              padding: "10px",
              fontSize: "20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
