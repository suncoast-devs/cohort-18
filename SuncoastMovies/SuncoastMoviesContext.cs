using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace SuncoastMovies
{
    class SuncoastMoviesContext : DbContext
    {
        // Teach entitify framework what objects to map.
        //
        // So far we map the Movie *class* to the Movies table.
        //        we map the Rating *class* to the Ratings table.
        //        we map the Actor *class* to the Actors table.
        //        we map the Role *class* to the Roles table.
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("server=localhost;database=SuncoastMovies");
            var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
            optionsBuilder.UseLoggerFactory(loggerFactory);
        }
    }
}