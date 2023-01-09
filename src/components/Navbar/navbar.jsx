import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid brown",
        backgroundColor: "brown",
        width: "100%",
        height: "50px",
        color: "#fff",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        paddingLeft: "50px",
      }}
    >
      <h3>
        <Link href="/">Rahul Dudka</Link>
      </h3>
      <h3>
        <Link href="/Projects">Projects</Link>
      </h3>
      <h3>
        <Link href="/">Experience</Link>
      </h3>
    </div>
  );
};

export default Navbar;
