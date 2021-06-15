import { connect } from "react-redux";
import { getAllCategories } from "./actions/categoriesActions";
import SelectDropdown from "./components/SelectDropdown";
import Header from "./components/Header";
import { useEffect } from "react";
import "./styles.css";

const App = ({ categories, dispatch }) => {
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="category-dropdown">
        <SelectDropdown categories={categories} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { categories } = state;

  return {
    categories,
  };
};

export default connect(mapStateToProps)(App);