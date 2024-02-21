import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoritesListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );
  }
  const listings = await getFavoritesListings();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites yet"
          subtitle="Click the heart on any home to start saving your favorite homes."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
