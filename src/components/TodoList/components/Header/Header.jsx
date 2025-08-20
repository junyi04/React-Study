/** @jsxImportSource @emotion/react */
import { IoSearch } from "react-icons/io5";
import * as s from "./styles";
import { useState } from "react";

function Header({filter, setFilter, setSearchText}) {
  const [searchInputvalue, setSearchInputValue] = useState("");

  const searchInputOnChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  const filterOnChangeHandler = (e) => {
    setFilter(e.target.value);
  };
  const searchButtonOnClickHandler = () => {
    setSearchText(searchInputvalue);
  }

  return (
    <>
      <div css={s.container}>
        <input
          type="text"
          css={s.searchInput}
          onChange={searchInputOnChangeHandler}
        />
        <button
          css={s.searchButton}
          onClick={searchButtonOnClickHandler}
        >
          <IoSearch />
        </button>
      </div>
      <div
        css={s.filterContainer}
        onChange={filterOnChangeHandler}
      >
        <input
          type="radio"
          id="all"
          name="filter"
          checked={filter === "all"}
        />
        <label htmlFor="all">전체</label>
        <input type="radio" id="complete" name="filter" />
        <label htmlFor="complete">완료</label>
        <input type="radio" id="incomplete" name="filter" />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </>
  );
}

export default Header;