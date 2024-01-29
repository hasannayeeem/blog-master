import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState({});
  useEffect(() => {
    if (user.email) {
      fetch(`https://..../api/user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          // const accessToken = data.token
          // localStorage.setItem('accessToken', accessToken)
          // setToken(accessToken)
          setToken(data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
