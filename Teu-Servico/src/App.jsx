import React from "react";
import { Header } from "./components/Header";
import SearchPage from "./components/SeachrPage";
import FilterPage from "./components/FiltersPage";
import "./index.css";
import Footer from "./components/Footer";
import { Filter } from "lucide-react";

function App() {
  return (
    <div>
      <Header />
      <FilterPage/>
      <SearchPage />
      <Footer/>
    </div>
  );
}

export default App;
