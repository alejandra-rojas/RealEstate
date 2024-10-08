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
      className="flex flex-col gap-8"
    >
      <FieldSet>
        <div className="flex justify-between pb-2 mt-2 border-b border-gray-400">
          <h3 className="font-rmono font-bold uppercase text-sm text-almostblack ">
            General details
          </h3>
        </div>
        <div className="flex gap-4">
          <Field label="property Name" error={errors.propertyName?.message}>
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
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="property address">
            <input
              type="text"
              name="propertyAddress"
              id="propertyAddress"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </div>
        <Field label="property description">
          <input
            type="text"
            name="propertyDescription"
            id="propertyDescription"
            className={`p-2.5 w-full ${
              errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
            }`}
          />
        </Field>
        <div className="flex gap-4">
          <Field label="sale price" error={errors.salePrice?.message}>
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
              step="50000"
              id="salePrice"
              className={`p-2.5 w-full border ${
                errors.salePrice ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="agreed comission">
            <input
              type="number"
              name="land"
              id="land"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field
            label="property Liason Agent"
            error={errors.propertyLiasonAgentId?.message}
          >
            <select
              {...register("propertyLiasonAgentId", {
                required: "This field is required",
              })}
              name="propertyLiasonAgentId"
              id="propertyLiasonAgentId"
              className={`p-2.5 w-full border ${
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
        </div>
        <div className="flex gap-4">
          <Field label="land in sqm">
            <input
              type="number"
              name="land"
              id="land"
              step="100"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="construction in sqm">
            <input
              type="number"
              name="construction"
              id="construction"
              step="100"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="photo">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </div>
      </FieldSet>
      <div>
        <div className="flex justify-between pb-1 mb-4 border-b border-gray-400">
          <h3 className="font-rmono font-bold uppercase text-sm text-almostblack ">
            Property documentation
          </h3>
        </div>
        <div className="flex gap-2">
          <Field label="property deed">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="tax payment receipt">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="no debt certificate">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="construction declaration">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between pb-1 mb-4 border-b border-gray-400">
          <h3 className="font-rmono font-bold uppercase text-sm text-almostblack ">
            Seller details
          </h3>
        </div>
        <div className="flex gap-4">
          <Field label="full name">
            <input
              type="text"
              name="land"
              id="land"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="contact number">
            <input
              type="text"
              name="construction"
              id="construction"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="email address">
            <input
              type="text"
              name="rooms"
              id="rooms"
              className={`p-2.5 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between pb-1 mb-4 border-b border-gray-400">
          <h3 className="font-rmono font-bold uppercase text-sm text-almostblack ">
            Seller documentation
          </h3>
        </div>
        <div className="flex gap-4">
          <Field label="id with photo&signature">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="birth certificate">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>

          <Field label="rfc">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
          <Field label="proof of address">
            <input
              type="file"
              name="rooms"
              id="rooms"
              className={`py-1 w-full ${
                errors.propertyName ? "border-red-500" : "border-[#d9d9d9]"
              }`}
            />
          </Field>
        </div>
      </div>
      <button className="w-fit font-rmono uppercase mx-auto py-2 px-8 cursor-pointer text-sm hover:text-white  bg-gray-100 border-gray-800 border hover:bg-gray-800">
        Add property
      </button>
      {submitError && (
        <div className="text-red-500 text-sm text-center">{submitError}</div>
      )}
    </form>
  );
}

export default NewForm;
