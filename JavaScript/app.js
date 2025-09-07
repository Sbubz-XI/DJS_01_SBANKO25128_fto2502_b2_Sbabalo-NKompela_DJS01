import { podcasts } from "./data.js";

// Main function to display podcast tiles
function displayPodcasts(podcastList) {
  const container = document.getElementById("podcast-container");
  container.innerHTML = "";

  podcastList.forEach((podcast) => {
    const tile = document.createElement("div");
    tile.classList.add("podcast-tile", "shadow", "overflow-hidden", "bg-white");

    tile.innerHTML = `
      <div class="border border-gray-200 rounded-lg p-4">
        <img src="${podcast.image}" alt="${podcast.title}" class="w-full h-50 rounded-lg object-cover">
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2">${podcast.title}</h2>
        <p class="text-sm text-gray-300"><div class="bg-[url('/icons/calendar.png')] h-3 w-3 bg-cover bg-center"></div>${podcast.seasons} Seasons</p>
        <p class="text-xs text-gray-700 mt-2">${podcast.genres}</p>
        <p class="text-sm text-gray-300 mt-2">${podcast.updated}</p>
      </div>
      </div>
    `;

    container.appendChild(tile);
  });
}

// Display Podcast Tiles
displayPodcasts(podcasts);
