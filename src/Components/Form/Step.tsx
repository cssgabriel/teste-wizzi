import Input from "./Input";

const Step = ({ name, label, type, ...props }: PropsInput) => {
  return <Input type={type} name={name} label={label} {...props} />;
};

export default Step;
