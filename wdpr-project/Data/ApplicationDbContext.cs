﻿using Microsoft.EntityFrameworkCore;
using wdpr_project.Models;

namespace wdpr_project.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        {
        }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Admin>().ToTable("Admins");
            modelBuilder.Entity<Business>().ToTable("Businesses");
            modelBuilder.Entity<Expert>().ToTable("Experts");

            modelBuilder.Entity<Admin>().HasBaseType<User>();
            modelBuilder.Entity<Business>().HasBaseType<User>();
            modelBuilder.Entity<Expert>().HasBaseType<User>();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Business> Businesses { get; set; }
        public DbSet<Expert> Experts { get; set; }

        public DbSet<PersonalData> PersonalData { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Disability> Disabilities { get; set; }
        public DbSet<DisabilityAid> DisabilityAids { get; set; }
    }
}
