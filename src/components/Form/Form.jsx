import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState({
	  input1: '',
	  input2: '',
	  input3: ''
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setFormData({ ...formData, [name]: value });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	};
  
	return (
	  <form onSubmit={handleSubmit} className={styles.form}>
		<h2>Оформление заказа</h2>
		<div>
		  <label htmlFor="input1">Фио:</label>
		  <input
			type="text"
			id="input1"
			name="input1"
			value={formData.input1}
			onChange={handleChange}
		  />
		</div>
		<div>
		  <label htmlFor="input2">Адрес:</label>
		  <input
			type="text"
			id="input2"
			name="input2"
			value={formData.input2}
			onChange={handleChange}
		  />
		</div>
		<div>
		  <label htmlFor="input3">Телефон:</label>
		  <input
			type="text"
			id="input3"
			name="input3"
			value={formData.input3}
			onChange={handleChange}
		  />
		</div>
		<button type="submit">Заказать</button>
	  </form>
	);
  };
  
  export default Form;