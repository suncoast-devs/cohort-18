using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace SuncoastMovies
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get a new context which will connect to the database
            var context = new SuncoastMoviesContext();

            // Get a reference to our collection of movies.
            // NOTE: this doesn't yet access any of them, just gives
            //       us a variable that knows how.

            // Hey, context, give me all the Movies from the movies table
            var movies = context.Movies.
                 // ... but also join to the ratings table so for every
                 //     movie object I can ask for the Rating object
                 Include(movie => movie.Rating).
                 // ... but also join to the roles table so for every
                 //     movie object I can ask for the LIST of Role objects.
                 Include(movie => movie.Roles).
                    // .. but for each of those roles also join to the Actors
                    //    table so for each role object I can ask for the Actor object.
                    ThenInclude(role => role.Actor);


            var movieCount = movies.Count();

            Console.WriteLine($"There are {movieCount} movies!");

            foreach (var movie in movies)
            {
                if (movie.Rating == null)
                {
                    Console.WriteLine($"There is a movie named {movie.Title} and has not been rated yet");
                }
                else
                {
                    Console.WriteLine($"There is a movie named {movie.Title} and a rating of {movie.Rating.Description}");
                }

                foreach (var role in movie.Roles)
                {
                    var whatActorPlayedThisRole = role.Actor;

                    Console.WriteLine($" - Has a character named {role.CharacterName} played by {whatActorPlayedThisRole.FullName}");
                }
            }

            // var newMovie = new Movie
            // {
            //     Title = "SpaceBalls",
            //     PrimaryDirector = "Mel Brooks",
            //     Genre = "Comedy",
            //     YearReleased = 1987,
            //     RatingId = 2
            // };

            // // Add the newMovie to the context's Movies
            // context.Movies.Add(newMovie);

            // // Tell the context to save any changes.
            // context.SaveChanges();

            // Search for a movie by name. FirstOrDefault takes a function to use to compare the movies and returns the first record that matches, or if nothing matches, returns null.
            // This is the same as we used with LINQ against a List, but this time it is searching the database.
            var existingMovie = context.Movies.FirstOrDefault(movie => movie.Title == "SpaceBalls");

            // If we found an existing movie.
            if (existingMovie != null)
            {
                // Change the title of this movie.
                existingMovie.Title = "SpaceBalls - the best movie ever";

                // Ask the context to save changes.
                context.SaveChanges();
            }

            var existingMovieToDelete = context.Movies.FirstOrDefault(movie => movie.Title == "Cujo");

            // If we found an existing movie.
            if (existingMovieToDelete != null)
            {
                // Remove the existing movie from the collection
                context.Movies.Remove(existingMovieToDelete);

                // Ask the context to save changes, in this case deleting the record.
                context.SaveChanges();
            }









        }
    }
}
