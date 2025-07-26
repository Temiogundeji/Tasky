import React from "react";

type Option = { label: string; value: string };

type SelectProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  className?: string;
  options: Option[];
  icon?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  icon,
  options = [],
  required = true,
  disabled = false,
  error,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
        <select
          id={name}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt?.value} value={opt?.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default Select;
