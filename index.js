// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch("https://rapidapi.com/kaushiksheel9/api/shoes-collections", {
        headers: {
          "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
          "X-RapidAPI-Key": "7458705b19msh6dad1514cd29d33p10ebccjsnc5a163a0332a"
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  // Function to render shoe collections
  function renderShoeCollections(shoeCollections) {
    const container = document.getElementById("shoe-collections");
    shoeCollections.forEach(shoe => {
      const shoeElement = document.createElement("div");
      shoeElement.innerHTML = `
        <h2>${shoe.name}</h2>
        <p>${shoe.description}</p>
        <img src="${shoe.image}" alt="${shoe.name}" />
      `;
      container.appendChild(shoeElement);
    });
  }
  
  // Fetch data from the API and render shoe collections when the page loads
  window.addEventListener("DOMContentLoaded", async () => {
    const shoeCollections = await fetchData();
    renderShoeCollections(shoeCollections);
  });
  