import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMeal = () => {
    const value = searchValue.current.value;
    setSearchTerm(value);
  };

  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <label htmlFor="name">Check out the recipes!</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchMeal}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
