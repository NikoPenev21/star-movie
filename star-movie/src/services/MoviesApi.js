import { LoadMoviesApi, SearchMoviesApi } from '../common/apis/movieApi'
import { APIKey} from '../common/apis/MovieApiKeys'

export async function getMovies(currentPage) {
	return LoadMoviesApi.get(`movie?api_key=${APIKey}&page=${currentPage}`).then((response) => response.data.results);
}

export async function searchMovies(currentPage, searchValue) {
	return SearchMoviesApi.get(`movie?api_key=${APIKey}&query=${searchValue}&page=${currentPage}`).then((response) => response.data.results);
}