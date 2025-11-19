import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        {/* 🏠 HOME PAGE */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="about" element={<About />} />
        </Route>

        {/* 📚 BOOKS PAGE (standalone, no Hero section) */}
        <Route
          path="/books"
          element={
            <>
              <Navbar />
              <BookList />
              <Footer />
            </>
          }
        />

        {/* 📖 SINGLE BOOK DETAILS */}
        <Route
          path="/book/:id"
          element={
            <>
              <Navbar />
              <BookDetails />
              <Footer />
            </>
          }
        />

        {/* ❌ 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
