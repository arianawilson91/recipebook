/* ============================================================
   ARIANA'S RECIPE BOX — recipe data
   ------------------------------------------------------------
   To add a recipe, copy the template below, paste it into the
   RECIPES array, and fill it in. That's it — the category
   buttons and cards update automatically!

   {
     id: "short-name-with-dashes",     // unique, used in the URL
     title: "Recipe Name",
     category: "Dinner",               // any category you like
     emoji: "🍝",                       // shows on the card
     time: "30 min",
     servings: "4 servings",
     image: "images/photo.jpg",        // optional! delete line if none
     source: "https://...",            // optional! where it came from
     ingredients: ["1 cup flour", "2 eggs"],
     steps: ["Do this first.", "Then this."],
     notes: "Optional tip or story."   // optional! delete line if none
   },
   ============================================================ */

const RECIPES = [
  {
    id: "penne-alla-vodka",
    title: "Penne alla Vodka",
    category: "Dinner",
    emoji: "🍝",
    time: "35 min",
    servings: "4–6 servings",
    image: "images/penne-alla-vodka.jpg",
    source: "https://www.thekitchn.com/penne-alla-vodka-recipe-23632022",
    ingredients: [
      "2 oz Parmesan cheese, finely grated (about 1/2 cup), plus more for serving",
      "1 medium yellow onion, finely chopped",
      "3 cloves garlic, finely chopped",
      "2 tbsp olive oil",
      "1/3 cup double concentrated tomato paste (from a tube)",
      "1/4 tsp red pepper flakes, plus more for serving",
      "1 (28 oz) can whole peeled tomatoes, preferably San Marzano",
      "1/2 cup vodka",
      "3/4 tsp kosher salt, plus more as needed",
      "1 lb penne rigate or penne pasta",
      "4 sprigs fresh basil, leaves thinly sliced",
      "1/2 cup heavy cream",
      "Freshly ground black pepper"
    ],
    steps: [
      "Put a big pot of heavily salted water on to boil while you grate the Parmesan and chop the onion and garlic.",
      "Heat the olive oil in a large high-sided skillet over medium-high heat. Cook the onion and garlic until just turning golden, about 4 minutes.",
      "Add the tomato paste and red pepper flakes and cook, stirring often, until lightly toasted, about 2 minutes.",
      "Add the can of whole tomatoes with their juices, the vodka, and the salt. Break the tomatoes into small bits with a wooden spoon or potato masher and bring to a simmer.",
      "Turn the heat to medium-low and simmer until slightly thickened, about 15 minutes. Meanwhile, cook the penne until just al dente. Save 1 cup of pasta water before draining!",
      "Blend the sauce until smooth, then pulse in the heavy cream just until combined. (Prefer it chunky? Skip the blender and stir the cream right into the skillet.)",
      "Return the sauce to the skillet with the pasta, Parmesan, and 1/2 cup pasta water. Toss over high heat until every noodle is coated, about 4 minutes, loosening with more pasta water if needed.",
      "Season to taste and serve topped with basil, more Parmesan, and black pepper or red pepper flakes."
    ],
    notes: "The secret is using both whole San Marzano tomatoes AND tomato paste from a tube — and a vodka you'd actually drink."
  },
  {
    id: "blackened-chicken",
    title: "Blackened Chicken",
    category: "Dinner",
    emoji: "🍗",
    time: "35 min",
    servings: "2–4 servings",
    image: "images/blackened-chicken.jpg",
    source: "https://www.chelseasmessyapron.com/blackened-chicken/",
    ingredients: [
      "1 lb boneless, skinless chicken thighs (or breasts)",
      "4 tsp olive oil",
      "2 tsp balsamic vinegar",
      "1 1/4 tsp chili powder",
      "1/2 tsp ground cumin",
      "1/2 tsp garlic powder",
      "1/2 tsp paprika",
      "1/4 tsp ground coriander",
      "About 1 tsp salt & 3/4 tsp pepper",
      "Pinch of red pepper flakes (optional)"
    ],
    steps: [
      "Preheat the oven to 425°F and line a sheet pan with foil (trust me on the foil).",
      "Stir the oil, vinegar, and all the spices together into a paste.",
      "Pat the chicken very dry, then rub the seasoning mixture all over it.",
      "Arrange the chicken flat on the pan with plenty of space between pieces and bake 15 minutes.",
      "Switch the oven to broil with a rack about 8 inches from the heat. Broil 7–10 minutes, until blackened and caramelized (160°F inside).",
      "Let it rest 5 minutes, then slice or dice. Great on salads, bowls, tacos… everything."
    ],
    notes: "Also works pan-seared (2–4 min per side) or grilled at 450°F (3–5 min per side)."
  },
  {
    id: "baked-mac-and-cheese",
    title: "Baked Mac & Cheese",
    category: "Dinner",
    emoji: "🧀",
    time: "1 hr",
    servings: "12 servings",
    image: "images/baked-mac-and-cheese.jpg",
    source: "https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/",
    ingredients: [
      "16 oz elbow macaroni",
      "1 tbsp extra virgin olive oil",
      "6 tbsp unsalted butter",
      "1/3 cup all-purpose flour",
      "3 cups whole milk",
      "1 cup heavy whipping cream",
      "4 cups sharp cheddar, shredded from a block",
      "2 cups Gruyère, shredded from a block",
      "Salt & pepper to taste",
      "— Topping —",
      "1 1/2 cups panko breadcrumbs",
      "4 tbsp melted butter",
      "1/2 cup Parmesan, shredded",
      "1/4 tsp smoked paprika"
    ],
    steps: [
      "Preheat the oven to 350°F and grease a 3–4 quart baking dish.",
      "Cook the macaroni one minute shy of al dente, drain, and toss with the olive oil.",
      "Melt the butter in a big pot, whisk in the flour, and cook until bubbly and golden.",
      "Gradually whisk in the milk and cream. Cook until bubbles form, then 2 minutes more.",
      "Whisk in the cheddar and Gruyère a handful at a time until the sauce is smooth and thick. Season with salt and pepper.",
      "Stir the pasta into the cheese sauce until every noodle is coated.",
      "Layer half the mac and cheese in the dish, sprinkle with 2 cups of cheese, then add the rest on top.",
      "Mix the panko, Parmesan, melted butter, and paprika and sprinkle over everything.",
      "Bake about 30 minutes, until bubbly and golden brown on top."
    ],
    notes: "Shred the cheese yourself from a block — pre-shredded cheese won't melt as creamy."
  },
  {
    id: "ground-beef-esquites-bowls",
    title: "Ground Beef Esquites Bowls",
    category: "Dinner",
    emoji: "🌽",
    time: "45 min",
    servings: "4–6 bowls",
    image: "images/ground-beef-esquites-bowls.jpg",
    ingredients: [
      "2–3 sweet potatoes, diced",
      "Olive oil, salt & pepper, for the potatoes",
      "2 (15 oz) cans corn, drained",
      "1 jalapeño, diced",
      "1 serrano pepper, diced",
      "1–2 avocados, diced",
      "Handful of cilantro, chopped",
      "1–2 limes, juiced",
      "1 cup cottage cheese",
      "A spoonful of mayo",
      "Salt, to taste",
      "Cotija cheese & Tajín (optional but worth it)",
      "— Beef —",
      "2 lbs ground beef",
      "Onion powder, garlic powder, salt, pepper & paprika",
      "1 packet Siete taco seasoning",
      "1/4 cup water"
    ],
    steps: [
      "Preheat the oven to 425°F. Toss the diced sweet potatoes with oil, salt, and pepper and bake 20–30 minutes, until tender and browned at the edges.",
      "In a big bowl, combine the corn, jalapeño, serrano, avocado, cilantro, and lime juice.",
      "Blend the cottage cheese with a spoonful of mayo until smooth, then stir it into the corn mixture. Salt to taste (add cotija and Tajín if you're feeling it) and pop the bowl in the fridge.",
      "Brown the ground beef, seasoning with onion powder, garlic powder, salt, pepper, and paprika.",
      "Stir in the taco seasoning packet with the water and mix well until coated and saucy.",
      "To plate: sweet potatoes on the bottom, beef over top, and a generous scoop of the cold esquites to finish."
    ],
    notes: "From @HazaleaJonè on TikTok — the warm beef + cold creamy esquites combo is the whole point."
  },
  {
    id: "creamy-chicken-tortilla-soup",
    title: "Creamy Chicken Tortilla Soup",
    category: "Soups",
    emoji: "🌮",
    time: "45 min",
    servings: "13 cups",
    image: "images/creamy-chicken-tortilla-soup.jpg",
    source: "https://thecozycook.com/creamy-chicken-tortilla-soup/",
    ingredients: [
      "2 tbsp butter",
      "1 small yellow onion, diced",
      "1 jalapeño, diced",
      "3 cloves garlic, diced",
      "1 tbsp tomato paste",
      "1 (15 oz) can corn, drained",
      "1 (10 oz) can Rotel diced tomatoes with green chilies, undrained",
      "1 (15 oz) can black beans, drained and rinsed",
      "5 cups chicken broth",
      "2 small chicken breasts (or 2 cups shredded chicken)",
      "Pinch of cayenne pepper",
      "1 tsp cumin",
      "1–2 tsp hot sauce",
      "3 tbsp taco seasoning",
      "1 1/2 cups shredded cheddar cheese",
      "1/3 cup cream cheese, softened",
      "Toppings: tortilla strips, avocado, sour cream, jalapeños, cilantro"
    ],
    steps: [
      "Melt the butter over medium heat and sauté the onion and jalapeño 5–6 minutes, then add the garlic for 1 minute.",
      "Add the tomato paste, corn, Rotel, black beans, broth, chicken, and all the seasonings.",
      "Bring to a gentle simmer, partially covered, for 20–25 minutes, until the chicken is cooked through.",
      "Pull out the chicken, shred it with two forks, and stir it back in.",
      "Turn the heat to low and gradually stir in the cheddar and cream cheese until silky.",
      "Taste, adjust seasonings, and pile on the toppings."
    ],
    notes: "Let the cheeses come to room temp first — they melt in smoother. Freezes beautifully for up to 3 months."
  },
  {
    id: "the-best-chili",
    title: "The Best Chili",
    category: "Soups",
    emoji: "🌶️",
    time: "1 hr 5 min",
    servings: "8 servings",
    image: "images/the-best-chili.jpg",
    source: "https://www.spendwithpennies.com/the-best-chili-recipe/",
    ingredients: [
      "2 lbs lean ground beef",
      "2 1/2 tbsp chili powder, divided",
      "1 onion, diced",
      "1 jalapeño, seeded and minced",
      "4 cloves garlic, minced",
      "1 tsp cumin",
      "1 green bell pepper, seeded and diced",
      "1 (14.5 oz) can crushed tomatoes",
      "1 (19 oz) can red kidney beans, drained and rinsed",
      "1 (14.5 oz) can diced tomatoes, with juice",
      "1 1/2 cups beef broth",
      "1 cup beer (or more broth)",
      "1 tbsp tomato paste",
      "1 tbsp brown sugar (optional)",
      "Salt & black pepper to taste"
    ],
    steps: [
      "Mix the ground beef with 1 1/2 tablespoons of the chili powder.",
      "Brown the beef in a large pot with the onion, jalapeño, and garlic, then drain the fat.",
      "Add everything else — peppers, tomatoes, beans, broth, beer, tomato paste, remaining chili powder, cumin, and brown sugar — and bring to a boil.",
      "Reduce the heat and simmer uncovered 45–60 minutes, until it's as thick as you like.",
      "Season with salt and pepper, then top with cheddar, green onions, or cilantro."
    ],
    notes: "Simmering uncovered is what thickens it naturally — no shortcuts needed. Freezes and reheats like a dream."
  },
  {
    id: "chicken-noodle-soup",
    title: "Homemade Chicken Noodle Soup",
    category: "Soups",
    emoji: "🍜",
    time: "40 min",
    servings: "8 servings",
    image: "images/chicken-noodle-soup.jpg",
    source: "https://tastesbetterfromscratch.com/chicken-noodle-soup/",
    ingredients: [
      "1/2 tbsp butter",
      "2 celery ribs, diced",
      "3–4 large carrots, diced",
      "1 clove garlic, minced",
      "10 cups chicken stock or broth",
      "1 tsp salt, to taste",
      "1/2 tsp freshly ground black pepper",
      "1/8 tsp dried rosemary",
      "1/8 tsp dried thyme",
      "1/8 tsp crushed red pepper flakes",
      "4 cups dry egg noodles (or a batch of homemade!)",
      "3 cups shredded rotisserie chicken",
      "1 tsp chicken bouillon base, to taste"
    ],
    steps: [
      "Melt the butter in a large stock pot over medium-high heat. Sauté the celery and carrots for 3 minutes, then the garlic for 30 seconds.",
      "Pour in the stock and season with rosemary, thyme, red pepper flakes, salt, and pepper. Stir in bouillon to taste.",
      "Bring to a boil, add the noodles, and cook until just barely al dente.",
      "Pull it off the heat right away — the noodles keep cooking in the hot broth.",
      "Stir in the shredded chicken, taste, adjust the seasoning, and ladle it up."
    ],
    notes: "Stock made from the rotisserie chicken carcass takes this to another level. Keeps 4–5 days in the fridge."
  },
  {
    id: "air-fryer-garlic-parmesan-fries",
    title: "Air Fryer Garlic Parmesan Fries",
    category: "Sides",
    emoji: "🍟",
    time: "1 hr 10 min",
    servings: "4 servings",
    image: "images/air-fryer-garlic-parmesan-fries.jpg",
    source: "https://www.thechunkychef.com/air-fryer-garlic-parmesan-french-fries/",
    ingredients: [
      "4 medium-large russet potatoes, cut into 1/2-inch sticks",
      "2 tbsp olive oil",
      "1 tsp kosher salt",
      "1 tsp paprika (sweet, hot, or smoked)",
      "— Garlic Parmesan Butter —",
      "4 tbsp unsalted butter",
      "4 cloves garlic, minced",
      "1/2 cup grated Parmesan cheese",
      "Fresh parsley, for garnish"
    ],
    steps: [
      "Soak the potato sticks in cold water for 30 minutes, then drain and pat completely dry. (Worth it — this is the crispy secret.)",
      "Toss the potatoes with the olive oil, salt, and paprika.",
      "Preheat the air fryer to 380°F. Arrange the fries in a single layer (work in batches!) and cook 10–12 minutes.",
      "Shake or flip, then cook another 8–12 minutes until golden and crispy.",
      "Meanwhile, melt the butter over medium heat and cook the garlic 1–2 minutes, just until fragrant.",
      "Toss the hot fries with the garlic butter, then the Parmesan and parsley. Serve immediately!"
    ],
    notes: "Don't crowd the basket — crispy fries need room to breathe. Reheat leftovers at 375°F."
  },
  {
    id: "scalloped-potatoes",
    title: "Scalloped Potatoes",
    category: "Sides",
    emoji: "🥔",
    time: "1 hr 20 min",
    servings: "10–12 servings",
    image: "images/scalloped-potatoes.jpg",
    source: "https://www.gimmesomeoven.com/scalloped-potatoes-recipe/",
    ingredients: [
      "3 tbsp butter",
      "1 small onion, thinly sliced",
      "4 large cloves garlic, minced",
      "1/4 cup all-purpose flour",
      "1 cup chicken or vegetable stock",
      "2 cups whole milk (or half-and-half)",
      "1 1/2 tsp kosher salt",
      "1/2 tsp black pepper",
      "2 tsp fresh thyme, divided",
      "4 lbs Yukon Gold potatoes, sliced into 1/8-inch rounds",
      "2 cups shredded sharp cheddar, divided",
      "1/2 cup freshly grated Parmesan, plus extra"
    ],
    steps: [
      "Heat the oven to 400°F and grease a 9x13 baking dish.",
      "Melt the butter and sauté the onion until soft, then add the garlic. Stir in the flour to make a roux.",
      "Gradually whisk in the stock and milk with the salt, pepper, and 1 teaspoon of thyme. Simmer until thickened — but don't let it boil.",
      "Layer half the potato slices in the dish, pour on half the sauce, and sprinkle with 1 cup cheddar and all the Parmesan.",
      "Repeat with the remaining potatoes, sauce, and cheddar.",
      "Cover and bake 30 minutes, until bubbly at the edges.",
      "Uncover and bake 25–30 minutes more, until the potatoes are tender and the top is golden.",
      "Rest briefly, then finish with the remaining thyme and extra Parmesan."
    ],
    notes: "Grate the cheese fresh for the meltiest sauce. Assembles ahead — keeps 3 days in the fridge before baking."
  },
  {
    id: "tzatziki-sauce",
    title: "Tzatziki Sauce",
    category: "Sauces & Dressings",
    emoji: "🥒",
    time: "5 min",
    servings: "4–6 servings",
    image: "images/tzatziki-sauce.jpg",
    source: "https://www.loveandlemons.com/tzatziki-sauce/",
    ingredients: [
      "1/2 cup finely grated cucumber",
      "1 cup thick whole milk Greek yogurt",
      "1 tbsp fresh lemon juice",
      "1/2 tbsp extra-virgin olive oil",
      "1 clove garlic, grated",
      "1/4 tsp sea salt",
      "1 tbsp chopped fresh dill",
      "1 tbsp chopped fresh mint (optional)"
    ],
    steps: [
      "Grate the cucumber on the big holes of a box grater, then wrap it in a towel and squeeze out as much water as you can.",
      "Stir the cucumber together with the yogurt, lemon juice, olive oil, garlic, salt, dill, and mint.",
      "Chill until serving. Scoop it up with pita, pile it on grilled veggies, or spread it on everything."
    ],
    notes: "Squeezing the cucumber dry is the whole game — skip it and the sauce goes watery."
  },
  {
    id: "italian-dressing",
    title: "Homemade Italian Dressing",
    category: "Sauces & Dressings",
    emoji: "🥗",
    time: "5 min",
    servings: "4–6 servings",
    image: "images/italian-dressing.jpg",
    source: "https://www.loveandlemons.com/italian-dressing-recipe/",
    ingredients: [
      "6 tbsp extra-virgin olive oil",
      "3 tbsp white wine vinegar",
      "3 tbsp fresh lemon juice",
      "1 1/2 tbsp fresh parsley, finely chopped",
      "1 1/2 tsp honey",
      "1 1/2 tsp dried oregano",
      "1 clove garlic, grated",
      "3/4 tsp Dijon mustard",
      "3/4 tsp dried thyme",
      "Heaping 1/4 tsp sea salt",
      "Freshly ground black pepper, to taste",
      "3 tbsp Parmesan cheese (optional)"
    ],
    steps: [
      "Add everything except the Parmesan to a small bowl.",
      "Whisk until well blended and emulsified. (Or shake it all up in a Mason jar — even easier.)",
      "Stir in the Parmesan if using, then taste and adjust the salt and pepper."
    ],
    notes: "Keeps about 5 days in the fridge. A pinch of red pepper flakes gives it a nice kick."
  }
];
