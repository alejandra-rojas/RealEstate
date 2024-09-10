import { useForm } from "react-hook-form";
import { Field, FieldSet } from "./form-components.ui";
import { PostFile } from "../../types/types";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addFile } from "../../utils/api";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

function NewForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PostFile>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("");

  const submitForm = async (formData: PostFile) => {
    try {
      await addFile(formData);
      queryClient.invalidateQueries({ queryKey: ["files"] });
      reset();
      setSelectedAgent("");
      navigate({
        to: "/files",
      });
      toast.success("File added successfully!", {
        position: "top-right",
        theme: "dark",
      });
    } catch (error) {
      setSubmitError(`${error}`);
    }
  };
  return (
    <form
      id="addPropertyFile"
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-5 w-full"
    >
      <FieldSet label="add a property file">
        <Field label="propertyName" error={errors.propertyName?.message}>
          <input
            {...register("propertyName", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Name length must be at least 3 characters long",
              },
              validate: (value) =>
                value.trim().length > 0 || "Name is not allowed to be empty",
            })}
            type="text"
            name="propertyName"
            id="propertyName"
            className={`p-2.5 w-full border rounded-[6px] ${
              errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
            }`}
          />
        </Field>
        <Field label="salePrice" error={errors.salePrice?.message}>
          <input
            {...register("salePrice", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Only enter numbers",
              },
            })}
            type="number"
            name="salePrice"
            id="salePrice"
            className={`p-2.5 w-full border rounded-[6px] ${
              errors.salePrice ? "border-red-500" : "border-[#d9d9d9]"
            }`}
          />
        </Field>
        <Field
          label="propertyLiasonAgentId"
          error={errors.propertyLiasonAgentId?.message}
        >
          <select
            {...register("propertyLiasonAgentId", {
              required: "This field is required",
            })}
            name="propertyLiasonAgentId"
            id="propertyLiasonAgentId"
            className={`p-2.5 w-full border rounded-[6px] ${
              errors.propertyLiasonAgentId
                ? "border-red-500"
                : "border-[#d9d9d9]"
            }`}
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
          >
            <option value=""></option>
            <option value="1">James Clark</option>
            <option value="2">Sophia Martinez</option>
            <option value="3">Ethan Brooks</option>
            <option value="4">Betty Maldonado</option>
          </select>
        </Field>
      </FieldSet>
      <button className="w-fit mx-auto py-2 px-8 cursor-pointer rounded-2xl text-md hover:text-white  bg-gray-100 border-gray-800 border hover:bg-gray-800">
        File property
      </button>
      {submitError && (
        <div className="text-red-500 text-sm text-center">{submitError}</div>
      )}
    </form>
  );
}

export default NewForm;
