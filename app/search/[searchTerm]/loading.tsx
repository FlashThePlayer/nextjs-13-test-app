const SearchTermLoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="w-8 h-8 transform rotate-45 bg-gray-600 animate-spin">
          <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchTermLoadingPage;
