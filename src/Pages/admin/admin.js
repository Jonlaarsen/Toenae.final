import React, { useState } from "react";

const admin = () => {
  const [file, setFile] = useState();
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div>
        <h1>HELLO PIANTA!</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>put your file here dummy</h2>
          <input type="file" name="image" onChange={handleChange} />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default admin;
