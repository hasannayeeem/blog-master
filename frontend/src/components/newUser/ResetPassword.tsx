import React from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const user = { email: userData.email, password: userData.password };
  console.log({userData});
  
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    const isPassValid =
      e.target.new_password.value === e.target.confirm_password.value;
    const newPassword = isPassValid && e.target.confirm_password.value;
    if (isPassValid && user && newPassword) {
      fetch(`https://api.cealumnilus.org/api/user/reset-password`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...user, newPassword }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.reset_password) {
            console.log("data inside useToken", data);
            navigate("/");
          }
        });
    } else {
      alert(`password don't match`);
    }
  };

  return (
    // <div className='min-w-screen min-h-screen bg-green-500 justify-center items-center flex ms-auto text-center'>ResetPassword</div>
    <form
      className="min-h-screen flex justify-center items-center"
      onSubmit={handleReset}
    >
      <div className="p-10 bg-white rounded-[10px]">
        <h1 className="text-center text-4xl font-bold mb-5">Reset Password</h1>
        <div className="">
          <label className="label">
            <span className="label-text text-2xl font-semibold">
              New Password
            </span>
          </label>
          <input
            type="text"
            name="new_password"
            placeholder="New Password"
            className="bg-base-200 rounded-[5px] text-2xl font-semibold p-4 outline-none w-[300px]"
          />
        </div>
        <div className="mt-2">
          <label className="label">
            <span className="label-text text-2xl font-semibold">
              Confirm Password
            </span>
          </label>
          <input
            type="text"
            name="confirm_password"
            placeholder="Confirm Password"
            className="bg-base-200 rounded-[5px] text-2xl font-semibold p-4 outline-none w-[300px]"
          />
        </div>
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="text-2xl font-semibold text-center bg-[#0d9488] text-white p-3 px-5 rounded-[5px]"
          >
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default ResetPassword;
