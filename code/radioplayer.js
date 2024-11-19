// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const channelsEl = document.getElementById("channels");

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
}

getRadio();
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
