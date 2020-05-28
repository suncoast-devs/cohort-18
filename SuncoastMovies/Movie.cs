using System;
using System.Collections.Generic;

namespace SuncoastMovies
{
    class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PrimaryDirector { get; set; }
        public int YearReleased { get; set; }
        public string Genre { get; set; }

        public int RatingId { get; set; }

        // Movie has many roles...
        public List<Role> Roles { get; set; }

        // "Movie" has one "Rating"

        //     Class
        //      |
        //      |      Property Name
        //      |       |
        //      |       |
        //      v       v
        public Rating Rating { get; set; }
    }
}
