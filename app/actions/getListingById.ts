import prisma from "@/app/libs/prismadb";

interface GetListingByIdParams {
  listingId?: string;
}

export default async function getListingById(params: GetListingByIdParams) {
  try {
    const { listingId } = params;
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: {
        user: true,
      },
    });
    if (!listing) return null;
    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An error occurred while fetching the listing");
    }
  }
}
