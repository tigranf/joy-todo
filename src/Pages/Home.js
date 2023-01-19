import React from "react";
import LoginArea from "../Components/LoginArea";
import SignUpArea from "../Components/SignUpArea";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 20,
        marginInline: 'auto',
        maxWidth: 1220
      }}
    >
      <LoginArea />
      <SignUpArea />
    </div>
  );
};

export default Home;
