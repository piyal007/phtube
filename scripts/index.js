
function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
    .then(data => console.log((data)))
}

loadCategories()