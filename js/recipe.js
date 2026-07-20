/* Recipe detail page: find recipe by ?id= and render it */

const detail = document.getElementById("recipe-detail");
const params = new URLSearchParams(window.location.search);
const recipe = RECIPES.find(r => r.id === params.get("id"));

if (!recipe) {
  detail.innerHTML = `
    <div class="recipe-missing">
      <p class="recipe-missing-emoji" aria-hidden="true">🫥</p>
      <h1>Hmm, that recipe isn't in the box…</h1>
      <p><a href="index.html">Head back to the recipe box</a> and pick another!</p>
    </div>
  `;
} else {
  document.title = `${recipe.title} · Ariana's Recipe Box`;

  const media = recipe.image
    ? `<div class="detail-photo"><img src="${recipe.image}" alt="${recipe.title}"></div>`
    : `<div class="detail-photo detail-photo--emoji" aria-hidden="true"><span>${recipe.emoji || "🍽️"}</span></div>`;

  detail.innerHTML = `
    <header class="detail-header">
      <span class="card-category">${recipe.category}</span>
      <h1 class="detail-title">${recipe.title}</h1>
      <p class="card-meta detail-meta">
        <span>⏱ ${recipe.time}</span>
        <span>🍽 ${recipe.servings}</span>
      </p>
    </header>

    ${media}

    <div class="detail-columns">
      <section class="ingredients">
        <h2 class="section-title">Ingredients</h2>
        <ul class="ingredient-list">
          ${recipe.ingredients.map((ing, i) => `
            <li>
              <label class="ingredient-item">
                <input type="checkbox" id="ing-${i}">
                <span>${ing}</span>
              </label>
            </li>
          `).join("")}
        </ul>
      </section>

      <section class="steps">
        <h2 class="section-title">Steps</h2>
        <ol class="step-list">
          ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </section>
    </div>

    ${recipe.notes ? `
      <aside class="recipe-note">
        <span class="note-label">Note</span>
        <p>${recipe.notes}</p>
      </aside>
    ` : ""}

    ${recipe.source ? `
      <p class="recipe-source">recipe from <a href="${recipe.source}" target="_blank" rel="noopener">${new URL(recipe.source).hostname.replace("www.", "")}</a></p>
    ` : ""}

    <div class="detail-actions">
      <button class="print-btn" onclick="window.print()">🖨 Print recipe</button>
    </div>
  `;
}
