import { useEffect, useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    handleSearch(search);
  }, [search, handleSearch]);
  return (
    <form>
      <input
        type="search"
        className="outline-none border mr-2 pl-2 py-1 rounded-sm"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
