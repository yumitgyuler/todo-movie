function UImovie() {}
UImovie.prototype.displaySearchResult = function (movies, searchInput) {
  const searchModal = document.querySelector(".search-result");
  const modalTitle = document.querySelector(".modal-title-movie");
  modalTitle.innerHTML = `Serach for “${searchInput}”`;
  document.querySelector("#searchInput").value = "";
  searchModal.innerHTML = "";
  movies.forEach((movie) => {
    searchModal.innerHTML += `<img id="${movie.imdbID}" class="search-img m-2" src="${movie.Poster}" alt="" srcset="" />`;
  });
};
UImovie.prototype.displayMovieDetails = function (details) {
  document.querySelector("#searchInput").value = "";
  const detailsModal = document.querySelector(".movie-details");
  detailsModal.innerHTML = "";
  detailsModal.innerHTML += ` <img id="${details.imdbID}" class="search-img m-2" src="${details.Poster}" alt="" srcset="" /><br/>
  <button id="${details.imdbID}" class="btn btn-details add-to-watchlist">Add to watchlist</button>
  <h5>${details.Title}</h5>
  Year: ${details.Year}<br/>
  Rated:${details.Rated}<br/>
  Released:${details.Released}<br/>
  Runtime:${details.Runtime}<br/>
  Genre:${details.Genre}<br/>
  Director:${details.Director}<br/>
  Writer:${details.Writer}<br/>
  Actors:${details.Actors}<br/>
  Plot:${details.Plot}<br/>
  Language:${details.Language}<br/>
  Country:${details.Country}<br/>
  Awards:${details.Awards}<br/>
  Metascore:${details.Metascore}<br/>
  imdbRating:${details.imdbRating}<br/>
  imdbVotes:${details.imdbVotes}<br/>
  imdbID:${details.imdbID}<br/>
  Type:${details.Type}<br/>
  DVD:${details.DVD}<br/>
  BoxOffice:${details.BoxOffice}<br/>
  Production:${details.Production}<br/>
  Website:${details.Website}<br/>`;
};
UImovie.prototype.addMovie = function (movie) {
  const movies = document.getElementById("movie");
  movies.innerHTML += `
    <div class="col-lg-6 col-12 mt-4 movie">
            <div class="movie-card d-flex flex-wrap">
              <div style="width: 75%" class="d-flex flex-column justify-content-between">
                <div class="ps-2 pt-2 d-flex">
                  <span class="change-icon">
                    <i class="far fa-square"></i>
                    <i class="fas fa-check-square"></i>
                  </span>
                  <h5 class="text-start m-2 title">${movie.Title}</h5>
                </div>
                <div class="ps-3 p-2 d-flex">
                  <div>
                    <button class="btn btn-primary m-1 type">${movie.Type}</button>
                    <button id="${movie.imdbID}" class="btn btn-details m-1 details">Details</button>
                  </div>
                  <div class="dropdown">
                    <button class="btn p-1" id="editMovie" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="editMovieButton">
                      <li>
                        <button class="dropdown-item delete-movie">Delete</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div><img class="movie-img pt-2" src="${movie.Poster}" alt="" srcset="" /></div>
            </div>
          </div>
    `;
};
