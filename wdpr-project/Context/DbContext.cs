using Microsoft.EntityFrameworkCore;


namespace wdpr_project;

public class WdprDbContext : DbContext
    {
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        public WdprDbContext(DbContextOptions<WdprDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed data for WeatherForecasts
        modelBuilder.Entity<WeatherForecast>().HasData(
            new WeatherForecast { Id = 1,  TemperatureC = 25, Summary = "Sunny" },
            new WeatherForecast {  Id = 2,  TemperatureC = 20, Summary = "Cloudy" }
        );
    }
}