import "./login.scss"
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";



// IMPORTING DIFFERENT COMPONENTS
import { useLogin } from "../../../Hooks/useLogin";



// const Login = () => {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({
//     userId: "admin",
//     password: "",
//   });
//   const [error, setError] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
  
//   const inputStyle = {
//     width:"150px",
//     height:"25px",
//     border:"1px",
//     borderStyle:"solid",
//     marginLeft:"10px",
//     padding:"0px 10px"

//   }
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLogin({ ...login, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { userId, password } = login;
//       const response = await axios.post(
//         "https://kingsdhabaserver.onrender.com/admin/login",
//         {
//           userId: userId,
//           password: password,
//         }
//       );
//       if (response.data.success === true) {
//         navigate("/dashboard");
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Error occurred while authenticating. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div className="login-form">
//         <h1>Admin login</h1>
//         <div className="log-form">
//           <label>UserId</label>
//           <Input
//             type="text"
//             name="userId"
//             value={login.userId}
//             onChange={handleChange}
//             readOnly={true}
//             style={inputStyle}
//           />
//           <br />
//           <br/>
//           <label>Password</label>
//           <Input
//             style={inputStyle}
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={login.password}
//             onChange={handleChange}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={() => setShowPassword(!showPassword)}
//                   onMouseDown={(event) => event.preventDefault()}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                 </IconButton>
//                </InputAdornment>
//             }
//           />
//           {error && (
//             <div className="error" style={{ color: "red" }}>
//               {error}
//             </div>
//           )}
//           <br />
//           <button onClick={handleSubmit}>Log In</button>
//         </div>
//       </div>
//     </>
//   );
// };



const Login = ()=>{
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    userId: "admin",
    password: "",
  });
  const [logError, setLogError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  
  const inputStyle = {
    width:"150px",
    height:"25px",
    border:"1px",
    borderStyle:"solid",
    marginLeft:"10px",
    padding:"0px 10px"

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Login.userId, Login.password);
    if (localStorage.getItem("user")) {
      // setLogin({
      //   userId: "",
      //   password: "",
      // });
    }
  };

  return (
    <>
    <div className="login-form">
        <h1>Admin login</h1>
        <div className="log-form">
          <label>UserId</label>
          <Input
            type="text"
            name="userId"
            value={Login.userId}
            onChange={handleChange}
            style={inputStyle}
          />
          <br />
          <br/>
          <label>Password</label>
          <Input
            style={inputStyle}
            type={showPassword ? "text" : "password"}
            name="password"
            value={Login.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
               </InputAdornment>
            }
          />
          {logError && (
            <div className="error" style={{ color: "red" }}>
              {logError}
            </div>
          )}
          <br />
          <button onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </>
  )

}



export default Login;
