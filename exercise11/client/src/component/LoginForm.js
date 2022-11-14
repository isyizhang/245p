import "../style/LoginForm.css";

import { useState, useRef } from 'react';

function LoginForm({ onSubmit }) {
  // refs
  const usernameRef = useRef();
  const passwordRef = useRef();

  // states
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
      password: passwordRef.current.value,
    };
    onSubmit(formData); // upon submission we are calling the onSubmit function
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <p>username</p>
        <input
          ref={usernameRef}
          label="username"
          id="username"
          type="text"
          value={usernameValue}
          onChange={handleUsernameChange}
          placeholder="Insert username..."
        />
        <p>password</p>
        <input
          ref={passwordRef}
          label="password"
          id="password"
          type="text"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder="Insert password..."
        />
        <button
          id="login-button"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
);
}

export default LoginForm;
