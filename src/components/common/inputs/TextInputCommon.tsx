import React from "react";
import { TextInput } from "@mantine/core";
import { Controller } from "react-hook-form";

const TextInputCommon = ({
  control,
  name,
  label = "",
  placeholder = "",
  error = "",
  className = "",
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder={placeholder}
            className={`w-full ${className}`}
            styles={{
              input: {
                backgroundColor: "#1A1B1E",
                color: "#C1C2C5",
                padding: "0.75rem 1rem",
                fontSize: "0.875rem",
                borderRadius: "0.375rem",
              },
              error: {
                color: "red",
                marginTop: "10px",
              },
            }}
            error={error}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default TextInputCommon;
