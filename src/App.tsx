import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import CalendarPage from "./components/pages/CalendarPage/Calendar";
import FormPage from "./components/pages/FormPage/FormPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
