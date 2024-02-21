import prisma from "@/app/libs/prismadb";
export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  locationValue?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
}
export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      guestCount,
      roomCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;
    type QueryType = {
      userId?: string;
      category?: string;
      guestCount?: { gte: number };
      roomCount?: { gte: number };
      bathroomCount?: { gte: number };
      locationValue?: string;
      NOT?: {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: string };
                startDate: { lte: string };
              },
              {
                endDate: { gte: string };
                startDate: { lte: string };
              }
            ];
          };
        };
      };
    };

    let query: QueryType = {};
    if (userId) {
      query.userId = userId;
    }
    if (category) {
      query.category = category;
    }
    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      };
    }
    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      };
    }
    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      };
    }
    if (locationValue) {
      query.locationValue = locationValue;
    }
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                endDate: { gte: endDate },
                startDate: { lte: endDate },
              },
            ],
          },
        },
      };
    }
    console.log(query);
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An error occurred while fetching listings");
  }
}
