const Button = ({ estilo, type, onClick, texto, form }) => {
    return (
        <button className={estilo} type={type} form={form} onClick={onClick}>{texto}</button>
    )
}

export default Button;