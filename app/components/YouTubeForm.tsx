"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
};
const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: "Batman",
        email: data.email,
        channel: "youtube.com",
      };
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { name, ref, onChange, onBlur } = register("username"); // register an input
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted", data);
  };
  renderCount++;
  return (
    <>
      <form
        className="flex flex-col p-6 md:w-90vw bg-neutral-100 sm:w-2/3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <h1 className="text-2xl font-bold mb-4">
          YouTube Form {renderCount / 2}
        </h1>

        <label
          className="mx-2"
          htmlFor="username">
          Username
        </label>
        <input
          className="border-2 m-2 p-2"
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
        />
        <p className="text-red-500">{errors.username?.message}</p>
        <label
          className="mx-2"
          htmlFor="email">
          Email
        </label>
        <input
          className="border-2 m-2 p-2"
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
            validate: {
              notAdmin: (value) => value !== "admin@example.com" || "Nice try",
              notBlacklisted: (value) =>
                !value.endsWith("xx.xxx") || "We don't allow those emails",
            },
          })}
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <label
          className="mx-2"
          htmlFor="channel">
          Channel
        </label>
        <input
          className="border-2 m-2 p-2"
          type="text"
          id="channel"
          {...register("channel", {
            required: { value: true, message: "Channel is required" },
          })}
        />
        <p className="text-red-500">{errors.channel?.message}</p>
        <button
          className="border-2 px-5 py-2 bg-rose-500 hover:bg-rose-700 text-white rounded-lg m-auto"
          type="submit">
          Submit
        </button>
      </form>
      <DevTool
        control={control}
        placement="top-right"
      />
    </>
  );
};

export default YouTubeForm;
