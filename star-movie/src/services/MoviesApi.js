import axios from 'axios';
import movieApi from '../common/apis/movieApi'
import { APIKey} from '../common/apis/MovieApiKeys'

function getMovies() {
	return movieApi.get(`movie?api_key=${APIKey}`).then((response) => response.data.results);
    //movieApi.get(`movie?api_key=${APIKey}`)
}

export default {
	getMovies,
};