import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import Button from "../../ui/Button/Button";

export default function CalendarPage(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(selectedDate.getFullYear());
  }, []);

  const updateYear = () => {
    setYear(selectedDate.getFullYear());
  };

  const onChange = (
    date: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setSelectedDate(date);
  };

  return (
    <div className="container mt-5">
      <h1>Текущий год: {year}</h1>
      <Button onClick={updateYear}>Обновить год</Button>
      <div className={styles.container}>
        <Calendar onChange={onChange} value={selectedDate} />
      </div>
    </div>
  );
}
