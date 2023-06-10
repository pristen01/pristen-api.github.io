// Function to search for food using the Edamam API
function searchFood() {
    const input = document.getElementById("food-input").value;
  
    // Make a GET request to the Edamam API
    const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${input}&app_id=f2826dbf&app_key=
    ba6588f3d84d94db87ccc602471cb255	
    `;
    
    fetch(url)
      .then(response => response.json())
      .then(data => displayResults(data));
  }
  
  // Function to display the search results
  function displayResults(data) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    if (data.hints.length === 0) {
      resultsContainer.innerHTML = "No results found.";
      return;
    }
  
    // Loop through the results and create HTML elements for each food item
    data.hints.forEach(hint => {
      const food = hint.food;
      const foodItem = document.createElement("div");
      foodItem.classList.add("food-item");
      
      // Display food details like label, calories, etc.
      const label = document.createElement("h3");
      label.textContent = food.label;
      foodItem.appendChild(label);
  
      const calories = document.createElement("p");
      calories.textContent = `Calories: ${Math.round(food.nutrients.ENERC_KCAL)} kcal`;
      foodItem.appendChild(calories);
  
      resultsContainer.appendChild(foodItem);
    });
  }
  