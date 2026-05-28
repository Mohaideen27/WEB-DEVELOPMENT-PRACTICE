import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    // SIMULATING NETWORK DELAY
    await delay(2);
    console.log(data);
    if (data.username !== "sameer") {
      setError("myform", { message: "Username is invalid" });
    } else if (data.username === "raani") {
      setError("blocked", { message: "User is blocked" });
    }
  };

  return (
    <>
      <div className="container">
        {isSubmitting && <div>Loading...</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 10, message: "Max length is 10" },
            })}
            type="text"
            id=""
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="Password"
            {...register("password", {
              minLength: { value: 3, message: "Min length is 3" },
            })}
            type="password"
            id=""
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>
          }
        </form>
      </div>
    </>
  );
}

export default App;
