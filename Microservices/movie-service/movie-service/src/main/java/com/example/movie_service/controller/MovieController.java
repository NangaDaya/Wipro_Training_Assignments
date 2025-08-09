package com.example.movie_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie_service.model.Movie;
import com.example.movie_service.service.MovieService;

@RestController
@RequestMapping("/api")
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	
	//http://localhost:8082/api/movies
	@GetMapping("/movies")
	public List<Movie> getAllMovies(){
		
		return movieService.getAllMovies();
	}
	
	//http://localhost:8082/api/movie/id
	@GetMapping("/movie/{id}")
	public Movie getMovieById(@PathVariable Long id) {
		
		return movieService.getMovieById(id);
		
	}
	
	//http://localhost:8082/api/movies
	@PostMapping("/movies")
	public Movie createMovie(@RequestBody Movie movie) {
		
		return movieService.saveMovie(movie);
		
	}
	
	//http://localhost:8082/api/movies/id
	@PutMapping("/movies/{id}")
	public Movie updateMovie(@RequestBody Movie movie, @PathVariable Long id) {
		
		Movie existingMovie = movieService.getMovieById(id);
		
		existingMovie.setTitle(movie.getTitle());
		existingMovie.setGenre(movie.getGenre());
		
		return movieService.saveMovie(existingMovie);
		
	}
	
	//http://localhost:8082/api/movies/id
	@DeleteMapping("/movies/{id}")
	public String deleteMovie(@PathVariable Long id) {
		
		movieService.deleteMovie(id);
		
		return "Movie with "+ id + " is Successfully deleted";	
	}

}