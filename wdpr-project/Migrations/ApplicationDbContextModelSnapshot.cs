﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using wdpr_project.Data;

#nullable disable

namespace wdpr_project.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DisabilityAidExpert", b =>
                {
                    b.Property<int>("AidUsersId")
                        .HasColumnType("int");

                    b.Property<int>("AidsId")
                        .HasColumnType("int");

                    b.HasKey("AidUsersId", "AidsId");

                    b.HasIndex("AidsId");

                    b.ToTable("DisabilityAidExpert");
                });

            modelBuilder.Entity("DisabilityExpert", b =>
                {
                    b.Property<int>("DisabilitiesId")
                        .HasColumnType("int");

                    b.Property<int>("DisabledExpertsId")
                        .HasColumnType("int");

                    b.HasKey("DisabilitiesId", "DisabledExpertsId");

                    b.HasIndex("DisabledExpertsId");

                    b.ToTable("DisabilityExpert");
                });

            modelBuilder.Entity("wdpr_project.Models.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Addition")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HouseNumber")
                        .HasColumnType("int");

                    b.Property<string>("Postcode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("wdpr_project.Models.Disability", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Disabilities");
                });

            modelBuilder.Entity("wdpr_project.Models.DisabilityAid", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DisabilityAids");
                });

            modelBuilder.Entity("wdpr_project.Models.PersonalData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<int?>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Emailaddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Firstname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Middlenames")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phonenumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("PersonalData");
                });

            modelBuilder.Entity("wdpr_project.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("wdpr_project.Models.WeatherForecast", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("TemperatureC")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("WeatherForecasts");
                });

            modelBuilder.Entity("wdpr_project.Models.Admin", b =>
                {
                    b.HasBaseType("wdpr_project.Models.User");

                    b.ToTable("Admins", (string)null);
                });

            modelBuilder.Entity("wdpr_project.Models.Business", b =>
                {
                    b.HasBaseType("wdpr_project.Models.User");

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("URL")
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("AddressId");

                    b.ToTable("Businesses", (string)null);
                });

            modelBuilder.Entity("wdpr_project.Models.Expert", b =>
                {
                    b.HasBaseType("wdpr_project.Models.User");

                    b.Property<int?>("CaretakerId")
                        .HasColumnType("int");

                    b.Property<bool>("ContactByPhone")
                        .HasColumnType("bit");

                    b.Property<bool>("ContactByThirdParty")
                        .HasColumnType("bit");

                    b.Property<int>("PersonalDataId")
                        .HasColumnType("int");

                    b.HasIndex("CaretakerId");

                    b.HasIndex("PersonalDataId");

                    b.ToTable("Experts", (string)null);
                });

            modelBuilder.Entity("DisabilityAidExpert", b =>
                {
                    b.HasOne("wdpr_project.Models.Expert", null)
                        .WithMany()
                        .HasForeignKey("AidUsersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("wdpr_project.Models.DisabilityAid", null)
                        .WithMany()
                        .HasForeignKey("AidsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DisabilityExpert", b =>
                {
                    b.HasOne("wdpr_project.Models.Disability", null)
                        .WithMany()
                        .HasForeignKey("DisabilitiesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("wdpr_project.Models.Expert", null)
                        .WithMany()
                        .HasForeignKey("DisabledExpertsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("wdpr_project.Models.PersonalData", b =>
                {
                    b.HasOne("wdpr_project.Models.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("wdpr_project.Models.Admin", b =>
                {
                    b.HasOne("wdpr_project.Models.User", null)
                        .WithOne()
                        .HasForeignKey("wdpr_project.Models.Admin", "Id")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();
                });

            modelBuilder.Entity("wdpr_project.Models.Business", b =>
                {
                    b.HasOne("wdpr_project.Models.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("wdpr_project.Models.User", null)
                        .WithOne()
                        .HasForeignKey("wdpr_project.Models.Business", "Id")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("wdpr_project.Models.Expert", b =>
                {
                    b.HasOne("wdpr_project.Models.PersonalData", "Caretaker")
                        .WithMany()
                        .HasForeignKey("CaretakerId");

                    b.HasOne("wdpr_project.Models.User", null)
                        .WithOne()
                        .HasForeignKey("wdpr_project.Models.Expert", "Id")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.HasOne("wdpr_project.Models.PersonalData", "PersonalData")
                        .WithMany()
                        .HasForeignKey("PersonalDataId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Caretaker");

                    b.Navigation("PersonalData");
                });
#pragma warning restore 612, 618
        }
    }
}
