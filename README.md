E-commerce Project my lates project 

Welcome to my latest e-commerce project! This project is built using various technologies to provide a seamless shopping experience. Here's an overview of the technologies used:

    Next.js: Next.js is a React framework that enables server-side rendering and provides a great developer experience for building modern web applications.

    TypeScript: TypeScript is a statically typed superset of JavaScript that helps catch errors and provides better tooling for building scalable applications.

    MongoDB: MongoDB is a popular NoSQL database that offers flexibility and scalability for storing and retrieving data.

    Tailwind CSS: Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by providing a set of pre-defined utility classes.

    Material Tailwind: Material Tailwind is a UI kit built on top of Tailwind CSS, providing ready-to-use components and styles for building beautiful interfaces.

    Cloudinary: Cloudinary is a cloud-based media management platform that is used in this project for uploading and managing images.

Now, let's explore the features of this e-commerce project:

    Authentication: The project implements JWT-based authentication using Next.js and Next-Auth to secure user accounts and protect sensitive data.

    Admin Panel: An admin panel is included to manage products and sales. This panel provides an interface for administrators to perform administrative tasks efficiently.

    Product Search: The project allows users to search for products by category, enabling them to find specific items quickly.

    Add to Cart: Users can add multiple products to their cart and easily manage their selections before proceeding to the checkout process.

    Favorite Products: Users can mark products as favorites, allowing them to save and access their preferred items easily.

To-do list for future enhancements:

    Shaparak Integration: Implement Shaparak, a payment gateway, to enable secure online payments.

    Complete the Admin Panel: Enhance the admin panel by adding additional functionalities and improving the user interface.

    Product Rating: Implement a star rating system to allow users to rate and review products.

    Amazon API Integration: Integrate the Amazon API to enable product search and retrieval directly from Amazon's vast product catalog.

Currently, the database is hosted locally, but I plan to migrate it to Atlas, MongoDB's cloud database service, in the near future. However, for testing purposes, you can install MongoDB and MongoDB Compass on your device.

To get started with the project, follow these steps:

    Download the project from my GitHub account.

    Open the project in Visual Studio Code (VSCode) or any preferred code editor.

    Open the terminal and run the command npm i to install the project dependencies.

    Run the command npm run dev to start the development server.

    Access the project by navigating to localhost:7777 in your web browser.

For connecting the database, you need to open MongoDB Compass and copy the connection URL. Then, locate the lib/db.ts file in the project and replace the url constant value with your own URL.

the database as to day is on my local but i do the atles for this project realy soon
but you can install mangoCompas and mongoDb on your device


-now for database open mongoCompass copy the url of your compass in this file of the project -->

lib/db.ts

replace url constant value with your ur

const url = "your url string"
