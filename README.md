# Airbnb Clone Project

## Introduction

This project is an Airbnb clone built with Next.js, designed to replicate some of the core features of the Airbnb website. It was inspired by a tutorial by [Antonio Erdeljac](https://github.com/AntonioErdeljac/next13-airbnb-clone). The main goal of this project is to understand and implement modern web development practices using Next.js.

## Features

- Browse listings
- Search for properties by location
- View property details
- Responsive design for mobile and desktop

## Technologies Used

- Next.js
- React.js
- MongoDB
- Tailwind CSS
- Prisma
- TypeScript
- NextAuth.js
- Vercel

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Node version 14.x

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