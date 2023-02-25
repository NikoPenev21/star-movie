import { LoadMoviesApi, SearchMoviesApi } from '../common/apis/movieApi'
import { APIKey} from '../common/apis/MovieApiKeys'

function getMovies(currentPage) {
    console.log("page in api call", currentPage)
	return LoadMoviesApi.get(`movie?api_key=${APIKey}&page=${currentPage}`).then((response) => response.data.results);
    //movieApi.get(`movie?api_key=${APIKey}`)
}

function searchMovies(currentPage, searchValue) {
    console.log("searchValue", searchValue)
	return SearchMoviesApi.get(`movie?api_key=${APIKey}&query=${searchValue}&page=${currentPage}`).then((response) => response.data.results);
}

// const getMovies = async (currentPage) => {
//     try {
//       const response = await fetch(`${movieApi}movie?api_key=${APIKey}&page=${currentPage}`);
//       const json = await response.json();
//       console.log("json", json);
//     }
//     catch (e) {
//       console.log('We have the error', e);
//     }
//   }

// function getMovies(currentPage) {
// 	return movieApi.get(`movie?api_key=${APIKey}&page=${currentPage}`).then((response) => {
//         if(currentPage > 1){
//         let newSetOfMoview = [...movies, ...response.data.results];
//         setMovies(newSetOfMoview);
//         }
//         else{
//         setMovies(response.data.results);
//         }
//     });
//     //movieApi.get(`movie?api_key=${APIKey}`)
// }

export default {
	getMovies,
    searchMovies
};