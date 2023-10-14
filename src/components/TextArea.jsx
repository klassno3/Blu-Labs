import React from "react";

const TextArea = ({
  type,
  label,
  id,
  value,
  placeHolder,
  error,
  onChange,
  require,
  name,
  readOnly,
  disabled,
  onBlur,
}) => {
  return (
    <div className=" flex font-poppins flex-col items-start gap-1.5 w-full group ">
      { label ?
      <label
      htmlFor={name}
      className="text-sm md:text-base font-semibold text-tertiary-100"
      >
        {label} {require&& <span className="text-red-400 font-semibold">*</span>}
        </label>
      :null}
      <textarea
        disabled={disabled}
        // required={require}
        type={type || "text"}
        name={name}
        value={value}
        readOnly={readOnly || false}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        className={ ` ${ error ? "border-red-400 border-[1px] " : "border-[1.5px]  border-gray-400" }  w-full h-[150px] rounded-sm focus:outline-none focus:ring-0 px-3 py-2 placeholder:text-sm placeholder:font-poppins` }
        placeholder={placeHolder}
      />
     
      <p className={ `transition-all duration-300 font-pop text-[13px] text-red-400 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    
    </div>
  );
};

export default TextArea;
