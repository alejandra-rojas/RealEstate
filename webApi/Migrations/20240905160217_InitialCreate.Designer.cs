﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace webApi.Migrations
{
    [DbContext(typeof(PortfolioContext))]
    [Migration("20240905160217_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("webApi.Models.Agent", b =>
                {
                    b.Property<int>("AgentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AgentId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrimaryNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AgentId");

                    b.ToTable("Agents");
                });

            modelBuilder.Entity("webApi.Models.Property", b =>
                {
                    b.Property<int>("PropertyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PropertyId"));

                    b.Property<decimal>("AgreedCommission")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("PropertyDetailsId")
                        .HasColumnType("int");

                    b.Property<int>("PropertyLiasonAgentId")
                        .HasColumnType("int");

                    b.Property<int>("SalePrice")
                        .HasColumnType("int");

                    b.Property<int>("SellerId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("PropertyId");

                    b.HasIndex("PropertyDetailsId");

                    b.HasIndex("PropertyLiasonAgentId");

                    b.HasIndex("SellerId");

                    b.ToTable("Properties");
                });

            modelBuilder.Entity("webApi.Models.PropertyDetails", b =>
                {
                    b.Property<int>("PropertyDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PropertyDetailsId"));

                    b.Property<decimal>("ConstructionSizeInSquareMeters")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("LandSizeInSquareMeters")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("NumberOfRooms")
                        .HasPrecision(18, 1)
                        .HasColumnType("decimal(18,1)");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PropertyId")
                        .HasColumnType("int");

                    b.Property<string>("PropertyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PropertyDetailsId");

                    b.ToTable("PropertyDetails");
                });

            modelBuilder.Entity("webApi.Models.Seller", b =>
                {
                    b.Property<int>("SellerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SellerId"));

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrimaryNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PropertyId")
                        .HasColumnType("int");

                    b.HasKey("SellerId");

                    b.ToTable("Sellers");
                });

            modelBuilder.Entity("webApi.Models.Property", b =>
                {
                    b.HasOne("webApi.Models.PropertyDetails", null)
                        .WithMany()
                        .HasForeignKey("PropertyDetailsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webApi.Models.Agent", null)
                        .WithMany("Properties")
                        .HasForeignKey("PropertyLiasonAgentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webApi.Models.Seller", null)
                        .WithMany()
                        .HasForeignKey("SellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("webApi.Models.Agent", b =>
                {
                    b.Navigation("Properties");
                });
#pragma warning restore 612, 618
        }
    }
}
