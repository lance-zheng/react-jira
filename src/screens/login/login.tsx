import { FormEvent } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
  const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
  console.log(username, password);
  login(username, password);
};
const login = (username: string, password: string) => {
  fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(async (response) => {
    if (response.ok) {
    }
  });
};
export const LoginScreen = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">账号：</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
