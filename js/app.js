/* Home page: render category pills + recipe card grid */

const filterBar = document.getElementById("filter-bar");
const grid = document.getElementById("recipe-grid");
const emptyNote = document.getElementById("empty-note");

const categories = ["All", ...new Set(RECIPES.map(r => r.category))];
let activeCategory = "All";

function countFor(cat) {
  return cat === "All" ? RECIPES.length : RECIPES.filter(r => r.category === cat).length;
}

function renderFilters() {
  filterBar.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + (cat === activeCategory ? " is-active" : "");
    btn.innerHTML = `${cat}<sup>${countFor(cat)}</sup>`;
    btn.setAttribute("aria-pressed", String(cat === activeCategory));
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilters();
      renderGrid();
    });
    filterBar.appendChild(btn);
  });
}

function cardMedia(recipe) {
  if (recipe.image) {
    return `<div class="card-photo"><img src="${recipe.image}" alt="${recipe.title}" loading="lazy"></div>`;
  }
  return `<div class="card-photo card-photo--emoji" aria-hidden="true"><span>${recipe.emoji || "🍽️"}</span></div>`;
}

function renderGrid() {
  const shown = activeCategory === "All"
    ? RECIPES
    : RECIPES.filter(r => r.category === activeCategory);

  grid.innerHTML = shown.map((recipe, i) => `
    <a class="recipe-card" href="recipe.html?id=${encodeURIComponent(recipe.id)}" style="--i: ${i}">
      <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
      ${cardMedia(recipe)}
      <div class="card-body">
        <span class="card-category">${recipe.category}</span>
        <h2 class="card-title">${recipe.title}</h2>
        <p class="card-meta">
          <span>${recipe.time}</span>
          <span>${recipe.servings}</span>
        </p>
      </div>
    </a>
  `).join("");

  emptyNote.hidden = shown.length > 0;
}

renderFilters();
renderGrid();
