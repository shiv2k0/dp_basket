import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [userQuery, setUserQuery] = useState();
  return (
    <div className="inputBox">
      <GoSearch className="searchIcon" />
      <input
        type="text"
        className="searchInput"
        value={userQuery}
        onChange={(event) => setUserQuery(event.target.value)}
        placeholder="Search"
      />
      {userQuery && (
        <button onClick={()=>{setUserQuery("")}}>
          <RxCross2 className="absolute right-4 top-[14px] text-xl" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
