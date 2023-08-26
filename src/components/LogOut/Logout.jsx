import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  const [isLogOut, setIsLogOut] = useState(false);

  useEffect(() => {
    if (isLogOut) {
      localStorage.clear('token');
      localStorage.clear('userId');

      navigate("/");
    }
  }, [isLogOut]);

  return (
    <div>
      <button
        onClick={() => {
          setIsLogOut(true);
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
