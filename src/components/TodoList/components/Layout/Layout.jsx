/** @jsxImportSource @emotion/react */
import Header from "../Header/Header";
import * as s from "./styles";

function Layout({ children, filter, setFilter, setSearchText }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header 
          filter={filter}
          setFilter={setFilter}
          setSearchText={setSearchText}
        />
        {children}
      </div>
    </div>
  );
}

export default Layout;