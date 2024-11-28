import { Textarea } from "@mantine/core";
import { Controller } from "react-hook-form";

const FormTextarea = ({
  control,
  name,
  label = "",
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
          <Textarea
            {...field}
            className={`w-full ${className}`}
            styles={{
              input: {
                backgroundColor: "#1A1B1E",
                color: "#C1C2C5",
                padding: "0.75rem 1rem",
                fontSize: "0.875rem",
                borderRadius: "0.375rem",
                minHeight: "120px",
              },
              error: {
                color: "red",
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

export default FormTextarea;
