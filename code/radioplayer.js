const channelsEl = document.getElementById("channels");

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

  data.channels.forEach((channel) => {
    // Create elements
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const heading = document.createElement("h1");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");

    // Add classes
    container.className = "container";
    wrapper.className = "wrapper";
    heading.className = "heading";
    imageContainer.className = "image-container";
    image.className = "image";

    // Add content
    heading.textContent = channel.name;
    image.src = channel.image;
    image.alt = `${channel.name} logo`;

    // Set background color from API
    container.style.backgroundColor = `#${channel.color}`;

    // Append elements
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
    wrapper.appendChild(heading);

    // Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
    // <audio controls>
    //   <source src="" type="audio/mpeg" />
    // </audio>

    // Check if channels exists
    if (channel.liveaudio.url) {
      const audioplayer = document.createElement("audio");
      audioplayer.className = "audioplayer";
      audioplayer.src = channel.liveaudio.url;
      audioplayer.controls = true;

      const source = document.createElement("source");
      source.src = channel.liveaudio.url;
      source.type = "audio/mpeg";

      audioplayer.appendChild(source);
      wrapper.appendChild(audioplayer);
    }
    container.appendChild(wrapper);
    channelsEl.appendChild(container);
  });
}

getRadio();
