function Search({searchTerm, onSearchTerm}){
    return(
      <div classname="searchbar">
        <label htmlFor="search">Search per account id:</label>
        <input 
        type="text"
        id="search"
        placeholder="Type your id to search..."
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
        />
        </div>  
    );
    

}

export default Search;
