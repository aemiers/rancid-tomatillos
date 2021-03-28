const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchAllMovies = () => {
  return fetch(`${baseURL}/movies`)
    .then(response => {
      return response.json()
    })
}

export const fetchSingleMovie = (id) => {
  // return fetch(`${baseURL}/movies/:movie_id`)
  return fetch(`${baseURL}/movies/${id}`)
    .then(response => {
      return response.json()
    })
}

export const fetchVideo = (id) => {
  return fetch(`${baseURL}/movies/${id}/videos`)
    .then(response => {
      return response.json()
    })
}

//combine the last two functions

// export const getSingleMovieData = (id) => {
//   const clickedMovieData = Promise.all([
//     fetch(`${baseURL}/movies/${id}`),
//     fetch(`${baseURL}/movies/${id}/videos`)
//   ]).then(response => {
//     return response.json()
//   })
//   return clickedMovieData
// }

//returns array of all promise resolutions