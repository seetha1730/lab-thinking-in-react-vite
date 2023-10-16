

function SearchBar(){
return(


<div className="searchProduct">
<label>Search</label><br/>
    <input type="search" className="w-100" />
    <div>
    <input type="checkbox"/>
    <label>Only shows products in stock</label>
    </div>

</div>
)

}
export default SearchBar;