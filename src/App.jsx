import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import About from "./pages/About.jsx";
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
=======
import About from "./pages/About.jsx";                 // adjust if your folder differs
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";     // adjust if you kept it in pages
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import { AppProvider } from "./context/AppContext";
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e

const App = () => {
  return (
    <AppProvider>
      <Routes>
<<<<<<< HEAD
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
=======
        <Route path="/" element={<HomeLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />       
          <Route path="/books" element={<BookList />} />      
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
