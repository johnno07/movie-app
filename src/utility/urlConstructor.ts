import MissingPoster from '../images/missing-poster.png'
import MissingBackdrop from '../images/missing-backdrop.png'

const API_URL = 'https://api.themoviedb.org/3';
const MOVIE_DETAIL_PATH = 'movie';
const SEARCH_PATH = 'search/movie';
const DISCOVER_PATH = 'discover/movie';
const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// based on options from TMDB's configuration endpoint
type BackdropSize = 300 | 780 | 1280 | 'original'
type PosterSize = 92 | 154 | 185 | 342 | 500 | 780 | 'original'

export const getPosterUrl = (imagePath: string | null, size: PosterSize) => {
  if (imagePath == null) {
    return MissingPoster
  }
  return `${IMAGE_BASE_URL}/w${size.toString()}${imagePath}`
};

export const getBackDropUrl = (imagePath: string | null, width: BackdropSize) => {
  if (imagePath == null) {
    return MissingBackdrop
  }
  return `${IMAGE_BASE_URL}/w${width.toString()}${imagePath}`
};

export const getMovieDetailUrl = (movieId: string) => {
  return `${API_URL}/${MOVIE_DETAIL_PATH}/${movieId}?api_key=${API_KEY}`
};

export const getSearchUrl = (searchQuery: string) => {
  return `${API_URL}/${SEARCH_PATH}?query=${searchQuery}&api_key=${API_KEY}&include_adult=false`
};

export const getPopularMovieUrl = (page: number) => {
  return `${API_URL}/${DISCOVER_PATH}?sort_by=popularity.desc&page=${page.toString()}&api_key=${API_KEY}`
};