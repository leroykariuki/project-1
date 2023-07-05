// Function to fetch data from the API
async function GetData() {
    try {
      const response = await Get("https://shoes-collections.p.rapidapi.com/shoes");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error getting data:", error);
    }
  }
  
  // Function to render the data on the page
  function renderData(data) {
    const container = document.getElementById("data-container");
    data.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.price}
        <img src="${item.image}" alt="${item.title}" />
      `;
      container.appendChild(itemElement);
    });
  }
  
  // Fetch data from the API and render it on the page
  window.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData();
    renderData(data);
  });
  