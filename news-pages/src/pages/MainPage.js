import Sidebar from "../components/Sidebar";
import CategoriesResult from "../components/Contents/CategoriesResult";
import SearchResult from "../components/Contents/SearchResult";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const header_height = "101px";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div
        className="MainPage"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: `calc(100% - ${header_height})`,
        }}
      >
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<CategoriesResult />} />
        </Routes>
      </div>
    </motion.div>
  );
};

export default MainPage;
