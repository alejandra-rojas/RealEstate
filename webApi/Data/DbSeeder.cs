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
                        Email = "james.clark@drealestate.com",
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/agent3.png"
                    },
                    new Agent
                    {
                        Name = "Sophia Martinez",
                        PrimaryNumber = "735 392-3664",
                        Email = "sophia.martinez@drealestate.com",
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/agent2.png"
                    },
                    new Agent
                    {
                        Name = "Ethan Brooks",
                        PrimaryNumber = "735 392-4654",
                        Email = "ethan.brooks@drealestate.com",
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/agent4.png"
                    },
                    new Agent
                    {
                        Name = "Betty Maldonado",
                        PrimaryNumber = "735 102-4654",
                        Email = "betty.maldonado@drealestate.com",
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/agent1.png"
                    },
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
                        HasDocuments = true,
                    },
                    new Buyer
                    {
                        FullName = "Amelia Johnson",
                        PrimaryNumber = "735 555-5678",
                        HasDocuments = true,
                    },
                    new Buyer
                    {
                        FullName = "William Brown",
                        PrimaryNumber = "735 555-9012",
                        HasDocuments = true,
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
                        HasDocuments = true,
                    },
                    new Seller
                    {
                        FullName = "Elizabeth King",
                        PrimaryNumber = "735 555-7890",
                        HasDocuments = true,
                    },
                    new Seller
                    {
                        FullName = "David Evans",
                        PrimaryNumber = "735 555-2345",
                        HasDocuments = true,
                    },
                    new Seller
                    {
                        FullName = "no seller",
                        PrimaryNumber = "735 555-2345",
                        HasDocuments = false,
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
                        PropertyId = 1,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop1.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Mountain Retreat",
                        Address = "456 Hillside Blvd, Aspen, CO",
                        LandSizeInSquareMeters = 500,
                        ConstructionSizeInSquareMeters = 350,
                        NumberOfRooms = 6,
                        Description = "Luxury retreat in the mountains.",
                        PropertyId = 2,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop2.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Urban Loft",
                        Address = "789 Downtown St, New York, NY",
                        LandSizeInSquareMeters = 150,
                        ConstructionSizeInSquareMeters = 90,
                        NumberOfRooms = 3,
                        Description = "Modern loft in the heart of the city.",
                        PropertyId = 3,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop3.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Lakeside Villa",
                        Address = "123 Lakeview Dr, Orlando, FL",
                        LandSizeInSquareMeters = 300,
                        ConstructionSizeInSquareMeters = 150,
                        NumberOfRooms = 5,
                        Description = "Villa with a lakeside view and private dock.",
                        PropertyId = 4,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop4.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Suburban Home",
                        Address = "321 Quiet Lane, Chicago, IL",
                        LandSizeInSquareMeters = 400,
                        ConstructionSizeInSquareMeters = 220,
                        NumberOfRooms = 7,
                        Description = "Family-friendly home in the suburbs.",
                        PropertyId = 5,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop5.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Penthouse Suite",
                        Address = "789 Skyscraper St, Los Angeles, CA",
                        LandSizeInSquareMeters = 0,
                        ConstructionSizeInSquareMeters = 200,
                        NumberOfRooms = 4,
                        Description = "Luxury penthouse with a skyline view.",
                        PropertyId = 6,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop6.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Countryside Cottage",
                        Address = "987 Country Rd, Austin, TX",
                        LandSizeInSquareMeters = 800,
                        ConstructionSizeInSquareMeters = 100,
                        NumberOfRooms = 3,
                        Description = "Charming cottage in the countryside.",
                        PropertyId = 7,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop7.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Downtown Condo",
                        Address = "456 City Plaza, San Francisco, CA",
                        LandSizeInSquareMeters = 0,
                        ConstructionSizeInSquareMeters = 75,
                        NumberOfRooms = 2,
                        Description = "Convenient downtown living.",
                        PropertyId = 8,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop8.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Historic Mansion",
                        Address = "654 Old Town Rd, Charleston, SC",
                        LandSizeInSquareMeters = 1000,
                        ConstructionSizeInSquareMeters = 500,
                        NumberOfRooms = 10,
                        Description = "Historic mansion with modern amenities.",
                        PropertyId = 9,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop9.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Beachfront Bungalow",
                        Address = "321 Sand Dune Ave, San Diego, CA",
                        LandSizeInSquareMeters = 300,
                        ConstructionSizeInSquareMeters = 130,
                        NumberOfRooms = 4,
                        Description = "Cozy bungalow right on the beach.",
                        PropertyId = 10,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop10.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Luxury Estate",
                        Address = "111 Estate Dr, Beverly Hills, CA",
                        LandSizeInSquareMeters = 2000,
                        ConstructionSizeInSquareMeters = 800,
                        NumberOfRooms = 12,
                        Description = "Expansive luxury estate in a prime location.",
                        PropertyId = 11,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop11.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Sunset Bay Villa",
                        Address = "112 Sunset Bay Dr, Key West, FL",
                        LandSizeInSquareMeters = 650,
                        ConstructionSizeInSquareMeters = 400,
                        NumberOfRooms = 6,
                        Description = "Luxury villa with oceanfront views and private beach access.",
                        PropertyId = 12,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop122.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Green Acres Ranch",
                        Address = "800 Country Road, Jackson, WY",
                        LandSizeInSquareMeters = 2000,
                        ConstructionSizeInSquareMeters = 350,
                        NumberOfRooms = 8,
                        Description = "Sprawling ranch with mountain views and equestrian facilities.",
                        PropertyId = 13,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop133.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Urban Edge Townhouse",
                        Address = "1234 Maple St, Portland, OR",
                        LandSizeInSquareMeters = 180,
                        ConstructionSizeInSquareMeters = 120,
                        NumberOfRooms = 3,
                        Description = "Modern townhouse in the heart of Portland's trendy district.",
                        PropertyId = 14,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop14.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Seaside Cottage",
                        Address = "222 Ocean Ave, Santa Monica, CA",
                        LandSizeInSquareMeters = 320,
                        ConstructionSizeInSquareMeters = 150,
                        NumberOfRooms = 4,
                        Description = "Charming cottage steps away from the beach.",
                        PropertyId = 15,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop15.jpg"
                    },
                    new PropertyDetails
                    {
                        PropertyName = "Highland Meadows Estate",
                        Address = "567 Mountain View Rd, Boulder, CO",
                        LandSizeInSquareMeters = 1000,
                        ConstructionSizeInSquareMeters = 500,
                        NumberOfRooms = 7,
                        Description = "Expansive estate with panoramic views of the Rocky Mountains.",
                        PropertyId = 16,
                        Photo = "https://storage4realestate.blob.core.windows.net/container-imgs/prop16.jpg"
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
                    BuyerId = 1,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 2,
                    SellerId = 2,
                    PropertyLiasonAgentId = 2,
                    SalePrice = 750000,
                    AgreedCommission = 3,
                    Status = Status.UnderOffer,
                    SaleStatus = SaleStatus.W4Buyer,
                    BuyerId = 2,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 3,
                    SellerId = 3,
                    PropertyLiasonAgentId = 3,
                    SalePrice = 400000,
                    AgreedCommission = 4,
                    Status = Status.Sold,
                    BuyerId = 3,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 4,
                    SellerId = 1,
                    PropertyLiasonAgentId = 4,
                    SalePrice = 620000,
                    AgreedCommission = 2.5,
                    Status = Status.Active,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 5,
                    SellerId = 2,
                    PropertyLiasonAgentId = 1,
                    SalePrice = 850000,
                    AgreedCommission = 4,
                    Status = Status.UnderOffer,
                    SaleStatus = SaleStatus.MettingScheduled,
                    BuyerId = 2,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 6,
                    SellerId = 3,
                    PropertyLiasonAgentId = 2,
                    SalePrice = 320000,
                    AgreedCommission = 3,
                    Status = Status.UnderOffer,
                    SaleStatus = SaleStatus.W4Buyer,
                    BuyerId = 3,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 7,
                    SellerId = 1,
                    PropertyLiasonAgentId = 3,
                    SalePrice = 570000,
                    AgreedCommission = 3,
                    Status = Status.UnderOffer,
                    SaleStatus = SaleStatus.W4ThirdParty,
                    BuyerId = 1,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 8,
                    SellerId = 2,
                    PropertyLiasonAgentId = 4,
                    SalePrice = 910000,
                    AgreedCommission = 3.5,
                    Status = Status.Active,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 9,
                    SellerId = 3,
                    PropertyLiasonAgentId = 1,
                    SalePrice = 420000,
                    AgreedCommission = 3.5,
                    Status = Status.UnderOffer,
                    SaleStatus = SaleStatus.W4Seller,
                    BuyerId = 3,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 10,
                    SellerId = 1,
                    PropertyLiasonAgentId = 2,
                    SalePrice = 590000,
                    AgreedCommission = 4,
                    Status = Status.Active,
                    HasDocuments = true,
                },
                new Property
                {
                    PropertyDetailsId = 11,
                    SellerId = 2,
                    PropertyLiasonAgentId = 3,
                    SalePrice = 680000,
                    AgreedCommission = 3.5,
                    Status = Status.Active,
                    HasDocuments = true,
                },
                new Property
        {
            PropertyDetailsId = 12,
            SellerId = 1,
            PropertyLiasonAgentId = 4,
            SalePrice = 900000,
            AgreedCommission = 3.5,
            Status = Status.Sold,
            BuyerId = 1,
            HasDocuments = true,
        },
        new Property
        {
            PropertyDetailsId = 13,
            SellerId = 2,
            PropertyLiasonAgentId = 4,
            SalePrice = 1850000,
            AgreedCommission = 4,
            Status = Status.Sold,
            BuyerId = 2,
            HasDocuments = true,
        },
        new Property
        {
            PropertyDetailsId = 14,
            SellerId = 3,
            PropertyLiasonAgentId = 2,
            SalePrice = 850000,
            AgreedCommission = 3.5,
            Status = Status.Sold,
            BuyerId = 3,
            HasDocuments = true,
        },
        new Property
        {
            PropertyDetailsId = 15,
            SellerId = 1,
            PropertyLiasonAgentId = 3,
            SalePrice = 1200000,
            AgreedCommission = 3,
            Status = Status.Active,
            HasDocuments = true,
        },
        new Property
        {
            PropertyDetailsId = 16,
            SellerId = 2,
            PropertyLiasonAgentId = 1,
            SalePrice = 2000000,
            AgreedCommission = 3.5,
            Status = Status.Active,
            HasDocuments = true,
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
                        Date = new DateTime(2024, 09, 16),
                        Description = "Notary signing - 3:00pm",
                        PropertyId = 2
                    },
                    new Event
                    {
                        Date = new DateTime(2024, 09, 17),
                        Description = "Handover of the house",
                        PropertyId = 2
                    },
                    new Event
                    {
                        Date = new DateTime(2024, 09, 20),
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
                    },new Event
        {
            Date = new DateTime(2024, 07, 15),
            Description = "Initial meeting with the seller to discuss property listing.",
            PropertyId = 12
        },
        new Event
        {
            Date = new DateTime(2024, 09, 01),
            Description = "Buyer placed an offer.",
            PropertyId = 12
        },
        new Event
        {
            Date = new DateTime(2024, 06, 12),
            Description = "Property inspection completed.",
            PropertyId = 13
        },
        new Event
        {
            Date = new DateTime(2024, 07, 10),
            Description = "Buyer submitted deposit.",
            PropertyId = 13
        },
        new Event
        {
            Date = new DateTime(2024, 08, 01),
            Description = "Handover of keys and final payment.",
            PropertyId = 13
        },

        new Event
        {
            Date = new DateTime(2024, 05, 10),
            Description = "Initial property tour with buyer.",
            PropertyId = 14
        },
        new Event
        {
            Date = new DateTime(2024, 06, 20),
            Description = "Purchase agreement signed.",
            PropertyId = 14
        },
        new Event
        {
            Date = new DateTime(2024, 08, 05),
            Description = "Sale finalized and closed.",
            PropertyId = 14
        },

        new Event
        {
            Date = new DateTime(2024, 09, 05),
            Description = "First open house held.",
            PropertyId = 15
        },
        new Event
        {
            Date = new DateTime(2024, 09, 20),
            Description = "Second open house scheduled.",
            PropertyId = 15
        },

        new Event
        {
            Date = new DateTime(2024, 09, 10),
            Description = "Seller negotiating offer.",
            PropertyId = 16
        },
        new Event
        {
            Date = new DateTime(2024, 09, 25),
            Description = "Buyer requested second tour.",
            PropertyId = 16
        }


                };


            context.AddRange(events);
            context.SaveChanges();
        }

        if (!context.Notes.Any())
        {
            var notes = new List<Note>
        {
            new Note
            {
                PropertyId = 1,
                Description = "Initial buyer visit completed. Buyer is interested but needs to check financing options.",
                CreatedAt = DateTime.Now.AddDays(-14),
                Author = "John Doe"
            },
            new Note
            {
                PropertyId = 1,
                Description = "Buyer requested a second visit with family members. Scheduled for next Saturday.",
                CreatedAt = DateTime.Now.AddDays(-10),
                Author = "Susan Park"
            },
            new Note
            {
                PropertyId = 2,
                Description = "Seller requested an updated valuation due to recent market changes. Valuation scheduled.",
                CreatedAt = DateTime.Now.AddDays(-20),
                Author = "Michael Johnson"
            },
            new Note
            {
                PropertyId = 3,
                Description = "Inspection revealed minor issues with plumbing. Seller to repair before final offer.",
                CreatedAt = DateTime.Now.AddDays(-12),
                Author = "Emily Davis"
            },
            new Note
            {
                PropertyId = 4,
                Description = "Agent meeting with seller to discuss price adjustments. Potential buyer showed interest but found the price too high.",
                CreatedAt = DateTime.Now.AddDays(-8),
                Author = "David Lee"
            },
            new Note
            {
                PropertyId = 5,
                Description = "Buyer submitted an official offer. Waiting for seller's decision.",
                CreatedAt = DateTime.Now.AddDays(-5),
                Author = "Jessica Miller"
            },
            new Note
            {
                PropertyId = 6,
                Description = "Second appraisal completed. Seller's valuation confirmed, no further adjustments needed.",
                CreatedAt = DateTime.Now.AddDays(-7),
                Author = "Chris Thompson"
            },
            new Note
            {
                PropertyId = 7,
                Description = "Potential buyer requested a property tour this weekend. Scheduled for Saturday afternoon.",
                CreatedAt = DateTime.Now.AddDays(-3),
                Author = "Sophia Taylor"
            },
            new Note
            {
                PropertyId = 8,
                Description = "Final negotiations ongoing. Seller willing to offer minor concessions to close the deal.",
                CreatedAt = DateTime.Now.AddDays(-2),
                Author = "James Rodriguez"
            },
            new Note
            {
                PropertyId = 9,
                Description = "Seller agreed to repaint the exterior before closing. Estimated completion in two weeks.",
                CreatedAt = DateTime.Now.AddDays(-1),
                Author = "Laura White"
            },
            new Note
        {
            PropertyId = 12,
            Description = "Potential buyer expressed interest after second tour.",
            CreatedAt = DateTime.Now.AddDays(-14),
            Author = "Betty Maldonado"
        },
        new Note
        {
            PropertyId = 13,
            Description = "Negotiations on-going, buyer asked for price reduction.",
            CreatedAt = DateTime.Now.AddDays(-20),
            Author = "Betty Maldonado"
        },
        new Note
        {
            PropertyId = 14,
            Description = "Buyer financing approved, sale expected to close soon.",
            CreatedAt = DateTime.Now.AddDays(-10),
            Author = "Sophia Martinez"
        },
        new Note
        {
            PropertyId = 15,
            Description = "Seller agreed to repaint exterior before listing.",
            CreatedAt = DateTime.Now.AddDays(-5),
            Author = "Ethan Brooks"
        },
        new Note
        {
            PropertyId = 16,
            Description = "Buyer very interested but hesitating on price.",
            CreatedAt = DateTime.Now.AddDays(-3),
            Author = "James Clark"
        }
        };

            context.AddRange(notes);
            context.SaveChanges();
        }


    }
}