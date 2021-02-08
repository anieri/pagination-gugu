import React from 'react';
import { Input, Button } from 'antd';
import { SignupData } from '../signup/SignupApp'

const tryLogin = (username: string, password: string) => {
  const userDataString = window.localStorage.getItem("signup_data");
  if (!userDataString) {
    return false;
  }

  try {
    const userData: SignupData = JSON.parse(userDataString);
    if (!userData || !userData.password || !userData.name) {
      return false;
    }

    return username === userData.name &&
      password === userData.password;
  } catch (e) {
    return false;
  }
}

const LoginApp = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="LoginApp">
      Login
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button
        disabled={!name || !password}
        onClick={() => tryLogin(name, password) ?
          alert("HURRAY") : alert("OH NO NO NO")}
      >LOGIN</Button>
    </div>
  );
}

export default LoginApp;
