using Microsoft.EntityFrameworkCore;
using wdpr_project.Models;

namespace wdpr_project.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        {
        }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}
