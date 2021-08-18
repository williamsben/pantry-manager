type SelectProps = {
  label: string;
  id: string;
  options: SelectOption[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

interface SelectOption {
  label: string;
  value: string;
}
// destructing props within message signature
export function Select({ label, id, options, value, onChange }: SelectProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <select id={id} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}
