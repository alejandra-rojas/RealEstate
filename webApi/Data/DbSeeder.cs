using webApi.Models;

public static class DbSeeder
{
    public static void Seed(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        SeedData(serviceScope.ServiceProvider.GetService<PortfolioDbContext>()!);
    }

    private static void SeedData(PortfolioDbContext context)
    {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        if (!context.Agents.Any())
        {
            var agents = new List<Agent>
            {
                new Agent
                {
                    Name = "James Clark",
                    PrimaryNumber = "735 102-0944",
                    Email = "james.clark@drealestate.com"
                },
                new Agent
                {
                    Name = "Sophia Martinez",
                    PrimaryNumber = "735 392-3664",
                    Email = "sophia.martinez@drealestate.com"
                },
                new Agent
                {
                    Name = "Ethan Brooks",
                    PrimaryNumber = "735 392-4654",
                    Email = "ethan.brooks@drealestate.com"
                },
                new Agent
                {
                    Name = "Betty Maldonado",
                    PrimaryNumber = "735 102-4654",
                    Email = "betty.maldonado@drealestate.com"
                }
            };

            context.AddRange(agents);
            context.SaveChanges();
        }

        if (!context.Buyers.Any())
        {
            var buyers = new List<Buyer>
            {
                new Buyer
                {
                    FullName = "Oliver Smith",
                    PrimaryNumber = "735 555-1234",
                    PropertyId = 1
                },
                new Buyer
                {
                    FullName = "Amelia Johnson",
                    PrimaryNumber = "735 555-5678",
                    PropertyId = 2
                },
                new Buyer
                {
                    FullName = "William Brown",
                    PrimaryNumber = "735 555-9012",
                    PropertyId = 3
                }
            };

            context.AddRange(buyers);
            context.SaveChanges();
        }

        if (!context.Sellers.Any())
        {
            var sellers = new List<Seller>
            {
                new Seller
                {
                    FullName = "Michael Harris",
                    PrimaryNumber = "735 555-3456",
                    PropertyId = 1
                },
                new Seller
                {
                    FullName = "Elizabeth King",
                    PrimaryNumber = "735 555-7890",
                    PropertyId = 2
                },
                new Seller
                {
                    FullName = "David Evans",
                    PrimaryNumber = "735 555-2345",
                    PropertyId = 3
                }
            };

            context.AddRange(sellers);
            context.SaveChanges();
        }

        if (!context.PropertyDetails.Any())
        {
            var properties = new List<PropertyDetails>
            {
                new PropertyDetails
                {
                    PropertyName = "Oceanview Apartment",
                    Address = "123 Beachside Ave, Miami, FL",
                    LandSizeInSquareMeters = 200.5,
                    ConstructionSizeInSquareMeters = 120,
                    NumberOfRooms = 4,
                    Description = "Beautiful apartment with an ocean view.",
                    PropertyId = 1
                },
                new PropertyDetails
                {
                    PropertyName = "Mountain Retreat",
                    Address = "456 Hillside Blvd, Aspen, CO",
                    LandSizeInSquareMeters = 500,
                    ConstructionSizeInSquareMeters = 350,
                    NumberOfRooms = 6,
                    Description = "Luxury retreat in the mountains.",
                    PropertyId = 2
                },
                new PropertyDetails
                {
                    PropertyName = "Urban Loft",
                    Address = "789 Downtown St, New York, NY",
                    LandSizeInSquareMeters = 150,
                    ConstructionSizeInSquareMeters = 90,
                    NumberOfRooms = 3,
                    Description = "Modern loft in the heart of the city.",
                    PropertyId = 3
                },
                new PropertyDetails
                {
                    PropertyName = "Lakeside Villa",
                    Address = "123 Lakeview Dr, Orlando, FL",
                    LandSizeInSquareMeters = 300,
                    ConstructionSizeInSquareMeters = 150,
                    NumberOfRooms = 5,
                    Description = "Villa with a lakeside view and private dock.",
                    PropertyId = 4
                },
                new PropertyDetails
                {
                    PropertyName = "Suburban Home",
                    Address = "321 Quiet Lane, Chicago, IL",
                    LandSizeInSquareMeters = 400,
                    ConstructionSizeInSquareMeters = 220,
                    NumberOfRooms = 7,
                    Description = "Family-friendly home in the suburbs.",
                    PropertyId = 5
                },
                new PropertyDetails
                {
                    PropertyName = "Penthouse Suite",
                    Address = "789 Skyscraper St, Los Angeles, CA",
                    LandSizeInSquareMeters = 0,
                    ConstructionSizeInSquareMeters = 200,
                    NumberOfRooms = 4,
                    Description = "Luxury penthouse with a skyline view.",
                    PropertyId = 6
                },
                new PropertyDetails
                {
                    PropertyName = "Countryside Cottage",
                    Address = "987 Country Rd, Austin, TX",
                    LandSizeInSquareMeters = 800,
                    ConstructionSizeInSquareMeters = 100,
                    NumberOfRooms = 3,
                    Description = "Charming cottage in the countryside.",
                    PropertyId = 7
                },
                new PropertyDetails
                {
                    PropertyName = "Downtown Condo",
                    Address = "456 City Plaza, San Francisco, CA",
                    LandSizeInSquareMeters = 0,
                    ConstructionSizeInSquareMeters = 75,
                    NumberOfRooms = 2,
                    Description = "Convenient downtown living.",
                    PropertyId = 8
                },
                new PropertyDetails
                {
                    PropertyName = "Historic Mansion",
                    Address = "654 Old Town Rd, Charleston, SC",
                    LandSizeInSquareMeters = 1000,
                    ConstructionSizeInSquareMeters = 500,
                    NumberOfRooms = 10,
                    Description = "Historic mansion with modern amenities.",
                    PropertyId = 9
                },
                new PropertyDetails
                {
                    PropertyName = "Beachfront Bungalow",
                    Address = "321 Sand Dune Ave, San Diego, CA",
                    LandSizeInSquareMeters = 300,
                    ConstructionSizeInSquareMeters = 130,
                    NumberOfRooms = 4,
                    Description = "Cozy bungalow right on the beach.",
                    PropertyId = 10
                },
                new PropertyDetails
                {
                    PropertyName = "Luxury Estate",
                    Address = "111 Estate Dr, Beverly Hills, CA",
                    LandSizeInSquareMeters = 2000,
                    ConstructionSizeInSquareMeters = 800,
                    NumberOfRooms = 12,
                    Description = "Expansive luxury estate in a prime location.",
                    PropertyId = 11
                },
                new PropertyDetails
                {
                    PropertyName = "Riverside Cabin",
                    Address = "456 River Rd, Nashville, TN",
                    LandSizeInSquareMeters = 500,
                    ConstructionSizeInSquareMeters = 200,
                    NumberOfRooms = 4,
                    Description = "Rustic cabin by the river.",
                    PropertyId = 12
                }
            };

            context.AddRange(properties);
            context.SaveChanges();
        }

        if (!context.Properties.Any())
        {

            var propertiesFiles = new List<Property>
        {
            new Property
            {
                PropertyDetailsId = 1,
                SellerId = 1,
                PropertyLiasonAgentId = 1,
                SalePrice = 500000,
                AgreedCommission = 3.5,
                Status = Status.Active,
                BuyerId = 1
            },
            new Property
            {
                PropertyDetailsId = 2,
                SellerId = 2,
                PropertyLiasonAgentId = 2,
                SalePrice = 750000,
                AgreedCommission = 3,
                Status = Status.UnderOffer,
                BuyerId = 2
            },
            new Property
            {
                PropertyDetailsId = 3,
                SellerId = 3,
                PropertyLiasonAgentId = 3,
                SalePrice = 400000,
                AgreedCommission = 4,
                Status = Status.Sold,
                BuyerId = 3
            },
            new Property
            {
                PropertyDetailsId = 4,
                SellerId = 1,
                PropertyLiasonAgentId = 4,
                SalePrice = 620000,
                AgreedCommission = 2.5,
                Status = Status.Active,
                BuyerId = 1
            },
            new Property
            {
                PropertyDetailsId = 5,
                SellerId = 2,
                PropertyLiasonAgentId = 1,
                SalePrice = 850000,
                AgreedCommission = 4,
                Status = Status.UnderOffer,
                BuyerId = 2
            },
            new Property
            {
                PropertyDetailsId = 6,
                SellerId = 3,
                PropertyLiasonAgentId = 2,
                SalePrice = 320000,
                AgreedCommission = 3,
                Status = Status.Sold,
                BuyerId = 3
            },
            new Property
            {
                PropertyDetailsId = 7,
                SellerId = 1,
                PropertyLiasonAgentId = 3,
                SalePrice = 570000,
                AgreedCommission = 3,
                Status = Status.Sold,
                BuyerId = 1
            },
            new Property
            {
                PropertyDetailsId = 8,
                SellerId = 2,
                PropertyLiasonAgentId = 4,
                SalePrice = 910000,
                AgreedCommission = 3.5,
                Status = Status.Active,
                BuyerId = 2
            },
            new Property
            {
                PropertyDetailsId = 9,
                SellerId = 3,
                PropertyLiasonAgentId = 1,
                SalePrice = 420000,
                AgreedCommission = 3.5,
                Status = Status.UnderOffer,
                BuyerId = 3
            },
            new Property
            {
                PropertyDetailsId = 10,
                SellerId = 1,
                PropertyLiasonAgentId = 2,
                SalePrice = 590000,
                AgreedCommission = 4,
                Status = Status.Active,
                BuyerId = 1
            },
            new Property
            {
                PropertyDetailsId = 11,
                SellerId = 2,
                PropertyLiasonAgentId = 3,
                SalePrice = 680000,
                AgreedCommission = 3.5,
                Status = Status.Active,
                BuyerId = 2
            },
            new Property
            {
                PropertyDetailsId = 12,
                SellerId = 3,
                PropertyLiasonAgentId = 4,
                SalePrice = 740000,
                AgreedCommission = 3.5,
                Status = Status.Sold,
                BuyerId = 3
            }

        };
            context.AddRange(propertiesFiles);
            context.SaveChanges();
        }

        if (!context.Events.Any())
        {
            var events = new List<Event>
            {
                new Event
                {
                    Date = new DateTime(2023, 12, 13),
                    Description = "Signing of the commission agreement",
                    PropertyId = 1
                },
                new Event
                {
                    Date = new DateTime(2024, 03, 08),
                    Description = "Signing of the commission agreement",
                    PropertyId = 2
                },
                new Event
                {
                    Date = new DateTime(2024, 06, 28),
                    Description = "Buyer left deposit",
                    PropertyId = 2
                },
                new Event
                {
                    Date = new DateTime(2024, 08, 13),
                    Description = "Signing of the purchase agreement",
                    PropertyId = 2
                },
                new Event
                {
                    Date = new DateTime(2024, 09, 23),
                    Description = "Notary signing - handover of the house",
                    PropertyId = 2
                },
                new Event
                {
                    Date = new DateTime(2024, 07, 23),
                    Description = "Payment of the commission",
                    PropertyId = 3
                },
                new Event
                {
                    Date = new DateTime(2024, 05, 01),
                    Description = "Signing of the commission agreement",
                    PropertyId = 4
                },
                new Event
                {
                    Date = new DateTime(2023, 08, 08),
                    Description = "Signing of the commission agreement",
                    PropertyId = 5
                },
                new Event
                {
                    Date = new DateTime(2024, 04, 10),
                    Description = "Buyer left deposit",
                    PropertyId = 5
                },
                new Event
                {
                    Date = new DateTime(2024, 05, 21),
                    Description = "Signing of the purchase agreement",
                    PropertyId = 5
                },
                new Event
                {
                    Date = new DateTime(2024, 04, 11),
                    Description = "Payment of the commission",
                    PropertyId = 6
                },
                new Event
                {
                    Date = new DateTime(2024, 05, 03),
                    Description = "Payment of the commission",
                    PropertyId = 7
                },


            };


            context.AddRange(events);
            context.SaveChanges();
        }
    }
}