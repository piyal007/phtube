
// Select the card container
const cardContainer = document.getElementById("card-container");

// Initialize an empty string to store all cards
let cardsHTML = "";

// Loop to generate 6 cards
for (let i = 0; i < 20; i++) {
    cardsHTML += `
    <div class="card bg-base-100 shadow-sm">
        <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
        </figure>
        <div class="py-5 flex gap-3">
            <div class="avatar">
                <div class="w-16 h-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h2 class="card-title text-base">Building a Winning UX Strategy Using the Kano Model</h2>
                <p class="text-sm py-2">Awlad Hossain<span></span></p>
                <p class="text-sm">91K Views</p>
            </div>
        </div>
    </div>
    `;
}

// After the loop, set the innerHTML once
cardContainer.innerHTML = cardsHTML;
