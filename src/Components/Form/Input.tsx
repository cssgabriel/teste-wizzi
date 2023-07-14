const Input = ({ label, type, name, ...props }: PropsInput) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} {...props} />
    </>
  );
};

export default Input;
