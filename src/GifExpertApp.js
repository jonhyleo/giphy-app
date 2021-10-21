import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Header from "./components/Header";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <Header />

      <section className="container">
        <AddCategory setCategories={setCategories} />
        <hr />

        <div className="row">
          {categories.map((category, i) => (
            <GifGrid category={category} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GifExpertApp;
