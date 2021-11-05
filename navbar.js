function navbar(){
    return `
    <div class="header"><h1  style="font-size: 40px; background-color: #E0F7FA;text-align: center;font-family: monospace;color:rgb(53, 53, 54);"><a href="food app 1.html">FIND RECEIPES</a> </h1></div>

    <div class="nav-bar">
        <div class="i">
            <input type="text" name="name" id="name" oninput="debounce(addSearchResult,1000)">
            <button id="search">search</button>
            <div id="search-result"></div>
        </div>

        <div>
        <h2 onclick="showCategories()" style="text-align: center;cursor: pointer; margin-top: 5px;margin-bottom: 3px;"> Categories</h2>
            <div id="categories-container"></div>
        </div>
        <div id="random-receipe">
            <h2 ><a href="receipe of the day.html">Receipe of The Day</a> </h2>
        </div>
    </div>`
}


export default navbar