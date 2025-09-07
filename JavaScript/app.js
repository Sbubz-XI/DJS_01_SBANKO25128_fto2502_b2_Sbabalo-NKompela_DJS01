import { podcasts } from "./data.js";

function daysAgo(updated) {
  const diff = Date.now() - new Date(updated).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Main function to display podcast tiles
function displayPodcasts(podcastList) {
  const container = document.getElementById("podcast-container");
  container.innerHTML = "";

  podcastList.forEach((podcast) => {
    const tile = document.createElement("div");
    tile.classList.add("podcast-tile", "shadow", "overflow-hidden", "bg-white");

    tile.innerHTML = `
      <div class="border border-gray-200 rounded-lg p-4">
        <img src="${podcast.image}" alt="${
      podcast.title
    }" class="w-full h-full rounded-lg object-cover">
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2">${podcast.title}</h2>
        <div class="flex items-center space-x-2">
          <div class="bg-[url('/icons/calendar.png')] h-3 w-3 bg-cover bg-center"></div>
          <p class="text-sm text-gray-500">${podcast.seasons} Seasons</p>
        </div>
        <p class="text-xs text-gray-700 mt-2 ml-4">${podcast.genres}</p>
        <p class="text-sm text-gray-400 mt-2">Updated ${daysAgo(
          podcast.updated
        )} days ago</p>
      </div>
      </div>
    `;

    container.appendChild(tile);
  });
}

// Display Podcast Tiles
displayPodcasts(podcasts);
