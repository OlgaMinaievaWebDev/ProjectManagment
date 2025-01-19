function Input({ textarea, label, ...props }) {
  return (
    <p>
      <label htmlFor=""></label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

export default Input;
