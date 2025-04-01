import React from "react";
import Swal from "sweetalert2";

const App = () => {
  const showAlert = () => {
    Swal.fire({
      title: "Hello, Kapil!",
      text: "Welcome to your portfolio",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
};

export default App;
