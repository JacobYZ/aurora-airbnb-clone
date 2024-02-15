import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentuser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();
  const {
    title,
    description,
    price,
    location,
    category,
    imageSrc,
    guestCount,
    roomCount,
    bathroomCount,
  } = body;

  // Validate price
  if (parseInt(price, 10) <= 0) {
    return NextResponse.error();
  }

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      price: parseInt(price, 10),
      locationValue: location.value,
      category,
      imageSrc,
      guestCount,
      roomCount,
      bathroomCount,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
