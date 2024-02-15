import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentuser";

export async function POST(request: Request) {
  const curentUser = await getCurrentUser();
  if (!curentUser) {
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
      userId: curentUser.id,
    },
  });
  return NextResponse.json(listing);
}
