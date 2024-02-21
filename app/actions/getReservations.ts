import prisma from "@/app/libs/prismadb";

interface GetReservationsParams {
  userId?: string;
  listingId?: string;
  authorId?: string;
}
interface QueryParams {
  listingId?: string;
  userId?: string;
  listing?: { userId: string };
}
export default async function getReservations(params: GetReservationsParams) {
  try {
    const { userId, listingId, authorId } = params;
    const query: QueryParams = {};
    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));
    return safeReservations;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An error occurred while fetching the reservations");
    }
  }
}
