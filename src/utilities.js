
export const formatYear = movieDate => {
  return new Date(movieDate).getFullYear()
}

export const formatRunTime = movieRuntime => {
  const hours = Math.floor(movieRuntime / 60);
  const minutes = movieRuntime % 60;
  return `${hours}h ${minutes}m`;
}

export const formatGenre = movieGenres => {
  if (movieGenres) {
    return movieGenres[0]
  }
  return
}

export const formatVideo = videos => {
  if (videos.length) {
    return videos[0].key
  }
}

export const formatRating = rating => {
  return (rating.toFixed(1) * 10);
}
