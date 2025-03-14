
function loadCategories() {
    // 1 - fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        // 2 - convert the promise to json
        .then(response => response.json())
        // 3 - sent data to display
        .then(data => displayCategories((data.categories)))
}

function displayCategories(categories) {
    // get the container
    const cardNav = document.getElementById('card-nav')
    //loop operation on array of object
    for (const cat of categories) {
        //create element
        const navDiv = document.createElement('div')
        navDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[var(--primary-color)]">${cat.category}</button>
        `
        //append the element
        cardNav.appendChild(navDiv)
    }
    
}

loadCategories()