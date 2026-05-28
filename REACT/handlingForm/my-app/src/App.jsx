import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container">
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
            {...register("password")}
            type="password"
            id=""
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
