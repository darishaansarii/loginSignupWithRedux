import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";


function App() {
  const [isLogin, setIsLogin] = useState(true);

  const logHandler = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      {isLogin ? (
        <Login logHandler={logHandler} />
      ) : (
        <Signup logHandler={logHandler} />
      )}
    </>
  );
}

export default App;
