import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";
import axios from "axios";

//Setting up the initial state
const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

// setting up the genre
export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  // console.log(genres);
  return genres;
});

const arrayOfMovieData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const moviesGenre = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) moviesGenre.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenre.slice(0, 3),
      });
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, myThunk) => {
    const {
      netflix: { genres },
    } = myThunk.getState();
    return getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
    // console.log(data);
  }
);

//setting up the create slice
const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

//configuring store
export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
