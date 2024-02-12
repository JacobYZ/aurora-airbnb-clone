"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { error } from "console";
import Modal from "./Modal";
import Heading from "../Heading";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    await axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading />
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-[1px] border-neutral-200 rounded-lg p-3"
          {...register("name", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border-[1px] border-neutral-200 rounded-lg p-3"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-sm font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border-[1px] border-neutral-200 rounded-lg p-3"
          {...register("password", { required: true })}
        />
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
