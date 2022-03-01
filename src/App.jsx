import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/Screens/MainPage";
import RecordPage from "./Components/Screens/RecordPage";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
   < Route path="/" exact element={<MainPage />} />
   <Route path="/allRecord" element={<RecordPage />} />
   </Routes>
    <Footer/>
    </>
  )
};

export default App;