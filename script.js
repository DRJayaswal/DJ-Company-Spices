var restaurants = ["House of Wood","Sarovar Portico","Kanha","Hungry Gabbar","Rosaddo","Mini Punjab","Hari Shankar","Down Townn Cafe","Coffee Break","Theobrama"];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

shuffleArray(restaurants);

console.log("Random Elements:", restaurants);

function restaurant_name(newNames) {
    var restaurantHeadings = document.querySelectorAll(".restaurant-heading");
    restaurantHeadings.forEach(function(heading, index) {
      heading.textContent = newNames[index] || "Default Name";
    });
  }

changeRestaurantHeadings(restaurants);
  