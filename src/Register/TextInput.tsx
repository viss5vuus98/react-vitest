interface Props {
  label: string;
  testid: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInput = ({ label, testid, value, onChangeText }: Props) => {
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(e.target.value);
  };
  return (
    <div className="flex">
      <label htmlFor="">{label}</label>
      <input data-testid={testid} value={value} onChange={handleChangeText} />
    </div>
  );
};

export default TextInput;
