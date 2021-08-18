type InputProps = {
  label: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "number" | "email" | "phone";
};

export function Input({
  label,
  id,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} onChange={onChange} type={type} value={value} />
    </div>
  );
}
