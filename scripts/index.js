
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
        <button class="btn btn-sm hover:bg-[var(--primary-color)] hover:text-white">${cat.category}</button>
        `
        //append the element
        cardNav.appendChild(navDiv)
    }
    
}

loadCategories()

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container')
    videos.forEach((videos) => {
        console.log(videos)
        const videoCard = document.createElement('div')
        videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
        <figure>
          <img class="w-full h-[200px] object-cover" src="${videos.thumbnail}" alt="Shoes" />
        </figure>
        <div class="py-5 flex gap-3">
          <div class="avatar">
            <div class="w-16 h-16 rounded-full">
              <img class="object-cover" src="${videos.authors[0].profile_picture}" />
            </div>
          </div>
          <div>
            <h2 class="card-title text-base">${videos.title}</h2>
            <div class="flex gap-2 items-center">
                <p class="text-sm py-2">${videos.authors[0].profile_name}</p>
                <span>${videos.authors[0].verified}</span>
            </div>
            <p class="text-sm">91K Views</p>
          </div>
        </div>
      </div>
        `
    videoContainer.appendChild(videoCard)
    })
}

loadVideos()