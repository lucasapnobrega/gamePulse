export default ({ label, type, inputAttributes ,value, setValue, isEmpty }) => {
  return (
    <div>
      <label htmlFor={inputAttributes}>{label}:</label>
      <input
        type={type}
        name={inputAttributes}
        id={inputAttributes}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        className={`${isEmpty ? 'borderRed' : 'input'} ${value ? 'borderNormal' : 'input'}`}
      />
    </div>
  )
}