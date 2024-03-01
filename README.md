# Airbnb Clone Project

## Introduction

This project is a full-stack web application designed to replicate some of the core features of the Airbnb, a popular online marketplace for lodging and tourism. It was inspired by a tutorial by [Antonio Erdeljac](https://github.com/AntonioErdeljac/next13-airbnb-clone). The main goal of this project is to implement modern web development practices using Next.js.

## Demo

You can try out the application at [https://booking.auroraweb.com.au/](https://booking.auroraweb.com.au/)

## Features

- User authentication with email, Google, or GitHub
- User profile with property management and reservation history
- Property creation with image upload and Cloudinary integration
- Property search by category, date range, map location, number of guests, rooms, and bathrooms
- Property booking and reservation system with guest and owner reservation cancellation
- Property favoriting and shareable URL filters
- Responsive design and animations

## Technologies Used

- Next.js with app router, server components, and client components
- Tailwind CSS for styling and animations
- Prisma for database access and schema management
- MongoDB for data storage
- NextAuth for authentication and authorization
- Cloudinary for image upload and CDN
- React Hook Form for form validation and handling
- React Toast for server error handling
- React Date Range for calendars
- Leaflet for interactive maps

## Getting Started

To get a local copy up and running follow these simple steps.

### Requirements and Dependencies

- Node.js 14 or higher
- MongoDB Atlas account
- Google and GitHub OAuth credentials
- Cloudinary account for image uploads

### **Installation**

1. Clone the repo

   ```sh
   git clone https://github.com/JacobYZ/aurora-airbnb-clone.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Setup .env file

   ```js
   DATABASE_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GITHUB_ID=
   GITHUB_SECRET=
   NEXTAUTH_SECRET=
   ```

4. Setup Prisma

   ```sh
   npx prisma db push
   ```

5. Start the development server

   ```sh
   npm run dev
   ```

## **Contributing**

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (**`git checkout -b feature/AmazingFeature`**)
3. Commit your Changes (**`git commit -m 'Add some AmazingFeature'`**)
4. Push to the Branch (**`git push origin feature/AmazingFeature`**)
5. Open a Pull Request

## **License**

Distributed under the MIT License. See **`LICENSE`** for more information.

## **Acknowledgements**

- [Antonio Erdeljac](https://github.com/AntonioErdeljac/next13-airbnb-clone) for the original tutorial and inspiration.
