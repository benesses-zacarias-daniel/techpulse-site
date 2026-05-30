const Input = ({ type, placeHolder, value, onChange, required, onInvalid, onInput, minLength }) => {

    return (
        <input type={type} placeholder={placeHolder} minLength={minLength} onInvalid={onInvalid} onInput={onInput} required={required} value={value} onChange={onChange} />
    );
}

export default Input;