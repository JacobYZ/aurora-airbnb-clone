import prisma from "@/app/libs/prismadb";
export interface IListingParams {
  userId?: string;
}
export default async function getListings(params: IListingParams) {
  try {
    const { userId } = params;
    let query = {};
    if (userId) {
      query.userId = userId;
    }

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
