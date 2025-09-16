import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";                 // adjust if your folder differs
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";     // adjust if you kept it in pages
import NotFound from "./pages/NotFound.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />       
          <Route path="/books" element={<BookList />} />      
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
