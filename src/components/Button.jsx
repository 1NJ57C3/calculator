function Button({ className, label, clickHandler }) {
  function handleClick(e) {
    e.preventDefault();
    clickHandler(label);
  }

  return (
    <button className={className} id={label} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
