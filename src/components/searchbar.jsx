const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="smm:w-[80%] sm:w-[65%] h-[60px] bg-white flex justify-center items-center mt-4 gap-1 border-4 rounded-xl shadow-slate-300 mb-4">
      <input
        type="text"
        placeholder="Search drink here ..."
        className="w-[100%] text-xl px-4 py-2 rounded-lg focus:outline-none  focus:ring-blue-400"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SearchBar;
