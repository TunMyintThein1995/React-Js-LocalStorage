import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstContent from "./components/pages/FirstContent";
import SecondContent from "./components/pages/SecondContent";
import ThirdContent from "./components/pages/ThirdContent";
import BookList from "./components/pages/BookList";
import RegisterForm from "./components/pages/RegisterForm";
import RegisterLists from "./components/pages/RegisterLists";
import UserForm from "./components/pages/UserForm";


function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FirstContent />} />
          <Route path="/secondcontent" element={<SecondContent />} />
          <Route path="/thirdcontent" element={<ThirdContent />} />
          <Route path="/booklist" element={<BookList />} />
          <Route>
            <Route path="/registerlists" element={<RegisterLists />} />
            <Route path="/registerform" element={<RegisterForm />} />
          </Route>
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
