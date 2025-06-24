const API_KEY = "b2187873ed3642b68feb288b3a3248a9";
const recipesUl = document.querySelector("ul");

async function loadRecipe() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const recipeData = data.recipes;
  uiCreation(recipeData);
}

function uiCreation(data) {
  recipesUl.innerHTML = " ";
  data.map((item) => {
    console.log(item)
    const liCreation = document.createElement("li");
    liCreation.className = "single-recipe-container";
    let liAppend = recipesUl.appendChild(liCreation);
    liAppend.innerHTML = `<img src="${item.image}" class="food-image"/>`;
    const heading = document.createElement("h2");
    heading.className = "food-name";
    heading.innerText = item.title;
    liAppend.appendChild(heading);

    const ingredients = document.createElement("p");
    ingredients.className = "ingredients";
    ingredients.innerHTML = `<strong>Ingredients:</strong>${item.extendedIngredients
      .map((ingredients) => ingredients.original)
      .join("")}`;
    liAppend.appendChild(ingredients);

      
    const recipeBtn = document.createElement("button");
    recipeBtn.className = "recipe-btn";
    recipeBtn.innerText = "VIEW RECIPE";
    liAppend.appendChild(recipeBtn);
  });
}

loadRecipe();
