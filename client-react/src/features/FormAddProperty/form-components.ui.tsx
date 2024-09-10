interface FieldSetProps {
  label?: string;
  children: React.ReactNode;
}
export const FieldSet = ({ label, children }: FieldSetProps) => {
  return (
    <fieldset className="w-full">
      {label && (
        <h2 className="text-center text-lg pb-6 font-bold text-gray-800">
          {label}
        </h2>
      )}
      <div className="flex flex-col gap-4 mx-auto">{children}</div>
    </fieldset>
  );
};

interface FieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}

export const Field = ({ label, htmlFor, error, children }: FieldProps) => {
  const id = htmlFor;
  return (
    <div className="form-field w-full flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="font-rmono uppercase text-xs font-medium"
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <div className="form__error-message text-red-600 text-sm ">{error}</div>
      )}
    </div>
  );
};
