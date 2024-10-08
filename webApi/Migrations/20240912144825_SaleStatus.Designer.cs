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
    [DbContext(typeof(PortfolioDbContext))]
    [Migration("20240912144825_SaleStatus")]
    partial class SaleStatus
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

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

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

            modelBuilder.Entity("webApi.Models.Buyer", b =>
                {
                    b.Property<int>("BuyerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BuyerId"));

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrimaryNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BuyerId");

                    b.ToTable("Buyers");
                });

            modelBuilder.Entity("webApi.Models.Event", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EventId"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PropertyId")
                        .HasColumnType("int");

                    b.HasKey("EventId");

                    b.HasIndex("PropertyId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("webApi.Models.Note", b =>
                {
                    b.Property<int>("NoteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("NoteId"));

                    b.Property<string>("Author")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PropertyId")
                        .HasColumnType("int");

                    b.HasKey("NoteId");

                    b.HasIndex("PropertyId");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("webApi.Models.Property", b =>
                {
                    b.Property<int>("PropertyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PropertyId"));

                    b.Property<double>("AgreedCommission")
                        .HasColumnType("float");

                    b.Property<int?>("BuyerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int>("PropertyDetailsId")
                        .HasColumnType("int");

                    b.Property<int>("PropertyLiasonAgentId")
                        .HasColumnType("int");

                    b.Property<int>("SalePrice")
                        .HasColumnType("int");

                    b.Property<int>("SaleStatus")
                        .HasColumnType("int");

                    b.Property<int>("SellerId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("PropertyId");

                    b.HasIndex("BuyerId");

                    b.HasIndex("PropertyDetailsId")
                        .IsUnique();

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

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("ConstructionSizeInSquareMeters")
                        .HasColumnType("float");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("LandSizeInSquareMeters")
                        .HasColumnType("float");

                    b.Property<double>("NumberOfRooms")
                        .HasColumnType("float");

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

                    b.HasKey("SellerId");

                    b.ToTable("Sellers");
                });

            modelBuilder.Entity("webApi.Models.Event", b =>
                {
                    b.HasOne("webApi.Models.Property", "Property")
                        .WithMany("Events")
                        .HasForeignKey("PropertyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Property");
                });

            modelBuilder.Entity("webApi.Models.Note", b =>
                {
                    b.HasOne("webApi.Models.Property", "Property")
                        .WithMany("Notes")
                        .HasForeignKey("PropertyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Property");
                });

            modelBuilder.Entity("webApi.Models.Property", b =>
                {
                    b.HasOne("webApi.Models.Buyer", "Buyer")
                        .WithMany("Properties")
                        .HasForeignKey("BuyerId");

                    b.HasOne("webApi.Models.PropertyDetails", "PropertyDetails")
                        .WithOne("Property")
                        .HasForeignKey("webApi.Models.Property", "PropertyDetailsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webApi.Models.Agent", "PropertyLiasonAgent")
                        .WithMany("Properties")
                        .HasForeignKey("PropertyLiasonAgentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webApi.Models.Seller", "Seller")
                        .WithMany("Properties")
                        .HasForeignKey("SellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Buyer");

                    b.Navigation("PropertyDetails");

                    b.Navigation("PropertyLiasonAgent");

                    b.Navigation("Seller");
                });

            modelBuilder.Entity("webApi.Models.Agent", b =>
                {
                    b.Navigation("Properties");
                });

            modelBuilder.Entity("webApi.Models.Buyer", b =>
                {
                    b.Navigation("Properties");
                });

            modelBuilder.Entity("webApi.Models.Property", b =>
                {
                    b.Navigation("Events");

                    b.Navigation("Notes");
                });

            modelBuilder.Entity("webApi.Models.PropertyDetails", b =>
                {
                    b.Navigation("Property");
                });

            modelBuilder.Entity("webApi.Models.Seller", b =>
                {
                    b.Navigation("Properties");
                });
#pragma warning restore 612, 618
        }
    }
}
