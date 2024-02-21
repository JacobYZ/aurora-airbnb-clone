import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFavoritesListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];
    const favorites = await prisma.listing.findMany({
      where: { id: { in: [...(currentUser.favoriteIds || [])] } },
    });
    const safeFavorites = favorites.map((favorite) => {
      return {
        ...favorite,
        createdAt: favorite.createdAt.toISOString(),
      };
    });
    return safeFavorites;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An error occurred while fetching the favorites");
    }
  }
}
