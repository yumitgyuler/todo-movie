// Create UI Object
const uiMovie = new UImovie();

const movieButton = document.querySelector("#movieButton");
const movieSearchModal = new bootstrap.Modal(document.getElementById("movieSearchModal"), {});
const movieDetailsModal = new bootstrap.Modal(document.getElementById("movieDetailsModal"), {});
const searchButton = document.querySelector(".fa-search");
const searchInputToEnter = document.getElementById("searchInput");

eventListeners();
function eventListeners() {
  movieButton.addEventListener("click", hideTodo);
  searchButton.addEventListener("click", searchMovie);

  const detailsButton = document.querySelectorAll(".details");
  detailsButton.forEach((element) => element.addEventListener("click", showMovieDetails));

  const deleteButton = document.querySelectorAll(".delete-movie");
  deleteButton.forEach((element) => element.addEventListener("click", deleteMovie));

  const checkButton = document.querySelectorAll(".change-icon");
  checkButton.forEach((element) => element.addEventListener("click", deleteMovie));

  searchInputToEnter.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      searchMovie();
    }
  });
}
async function searchMovie() {
  const searchInput = document.querySelector("#searchInput").value;
  movieSearchModal.show();
  let movies = await searchByName(searchInput);
  uiMovie.displaySearchResult(movies.data.Search, searchInput);
  addEventToAllNewMoviesElement();
}
async function showMovieDetails(e) {
  const movieId = e.target;
  let movieDetails = await searchById(movieId.id);
  movieDetailsModal.show();
  uiMovie.displayMovieDetails(movieDetails.data);
  addEventToAllNewMoviesElement();
}

async function addMovie(e) {
  const movieId = e.target;
  let movieDetails = await searchById(movieId.id);
  console.log(movieDetails);
  uiMovie.addMovie(movieDetails.data);
  addEventToAllNewMoviesElement();
}

function deleteMovie(e) {
  const deleteElement = e.target;
  console.log(deleteElement);
  var parent = deleteElement.closest(".movie");
  console.log(parent);
  parent.remove();
}

function hideTodo() {
  const todosElemet = document.querySelector("#todoElement");
  const movieElemet = document.querySelector("#movieElement");
  todosElemet.style.display = "none";
  movieElemet.style.display = "block";
}

async function searchByName(name) {
  return await axios.get("http://www.omdbapi.com/?s=" + name + "&apikey=58bd10e5").catch((error) => console.error(error));
}
async function searchById(id) {
  return await axios.get("http://www.omdbapi.com/?i=" + id + "&apikey=58bd10e5").catch((error) => console.error(error));
}

function addEventToAllNewMoviesElement() {
  const allModalImage = document.querySelectorAll(".search-img");
  allModalImage.forEach((element) => element.addEventListener("click", showMovieDetails));

  const addToWatchlist = document.querySelector(".add-to-watchlist");
  addToWatchlist.addEventListener("click", addMovie);

  const detailsButton = document.querySelectorAll(".details");
  detailsButton.forEach((element) => element.addEventListener("click", showMovieDetails));

  const deleteButton = document.querySelectorAll(".delete-movie");
  deleteButton.forEach((element) => element.addEventListener("click", deleteMovie));

  const checkButton = document.querySelectorAll(".change-icon");
  checkButton.forEach((element) => element.addEventListener("click", deleteMovie));
}
