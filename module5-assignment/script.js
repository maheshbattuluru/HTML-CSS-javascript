// TODO: STEP 0 - Add a function to generate a random category short_name
function getRandomCategory() {
    var categories = ["Lunch", "Dinner", "Sushi", /* Add other categories here */];
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// TODO: STEP 1 - Update the loadMenuItems function to use the random category
$dc.loadMenuItems = function (categoryShortName) {
    // Existing code...
};

// TODO: STEP 2 - Update the function that handles the Specials tile click
function onSpecialsTileClick() {
    var randomCategoryShortName = getRandomCategory();
    $dc.loadMenuItems(randomCategoryShortName);
}

// TODO: STEP 3 - Attach the onSpecialsTileClick function to the Specials tile
document.getElementById('specialsTile').addEventListener('click', onSpecialsTileClick);

// TODO: STEP 4 - Verify the functionality as instructed in the assignment
