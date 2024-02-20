import { useState, ChangeEvent, FormEvent } from "react";
import { Form } from "react-bootstrap";
import Button from "../../ui/Button/Button";
import styles from "./Form.module.scss";

interface FormData {
  name: string;
  age: string;
  email: string;
}

interface FormErrors {
  name: boolean;
  age: boolean;
  email: boolean;
}

export default function FormPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
  });

  const [info, setInfo] = useState<FormData>({
    name: "",
    age: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    age: false,
    email: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.email) {
      setFormErrors({
        name: !formData.name,
        age: !formData.age,
        email: !formData.email,
      });
      return;
    }

    const data = new FormData(e.currentTarget);
    const formDataObject: FormData = {
      name: data.get("name") as string,
      age: data.get("age") as string,
      email: data.get("email") as string,
    };

    setInfo(formDataObject);
    setSubmitted(true);
    setFormData({
      name: "",
      age: "",
      email: "",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value,
    }));
  };

  return (
    <div className={`container mt-5 ${styles.formContainer}`}>
      <h1>Форма</h1>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="formName" className={styles.formGroup}>
          <Form.Control
            type="text"
            placeholder="Введите имя"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.formControl} ${
              formErrors.name && styles.error
            }`}
          />
          {formErrors.name && (
            <p className={styles.errorMessage}>
              Поле обязательно для заполнения
            </p>
          )}
        </Form.Group>
        <Form.Group controlId="formAge" className={styles.formGroup}>
          <Form.Control
            type="text"
            placeholder="Введите возраст"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`${styles.formControl} ${
              formErrors.age && styles.error
            }`}
          />
          {formErrors.age && (
            <p className={styles.errorMessage}>
              Поле обязательно для заполнения
            </p>
          )}
        </Form.Group>
        <Form.Group controlId="formEmail" className={styles.formGroup}>
          <Form.Control
            type="email"
            placeholder="Введите email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.formControl} ${
              formErrors.email && styles.error
            }`}
          />
          {formErrors.email && (
            <p className={styles.errorMessage}>
              Поле обязательно для заполнения
            </p>
          )}
        </Form.Group>
        <Button type="submit">Отправить</Button>
      </Form>

      {submitted && (
        <div className={`mt-3 ${styles.submittedData}`}>
          <h2>Введенные данные:</h2>
          <p>
            <strong>Имя:</strong> {info.name}
          </p>
          <p>
            <strong>Возраст:</strong> {info.age}
          </p>
          <p>
            <strong>Email:</strong> {info.email}
          </p>
        </div>
      )}
    </div>
  );
}
