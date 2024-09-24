# Guitar Shop!

### This project was made in order to practice my knowledge in Front-End Development, using React.js, React Router Dom, Bootstrap and Context Api
### All this linked with a DATABASE, 
### this is the link to the Back-End Repository https://github.com/nguzm4n/E-commerce-Back-End.git


# General Overview

This project implements the frontend of an e-commerce store, built with React. It is designed to provide a seamless and interactive user experience, leveraging modern libraries and best practices for performance optimization and responsive design.
System Requirements

    Node.js: Version 16 or higher.
    npm: Version 7.x or higher to manage the project dependencies.

## Installing Dependencies

### First, clone the repository and navigate to the project's root directory:

bash

git clone <repository-url>
cd front

## Then, install the necessary dependencies by running:

bash

npm install

This command will install all the required libraries and tools, such as React, Vite, Bootstrap, and others.
Available Scripts

In the package.json file, you can find several scripts to facilitate development and deployment of the application:

    npm run dev: Starts the development server using Vite.
    npm run build: Builds the application for production.
    npm run preview: Previews the production build.
    npm run lint: Runs ESLint to identify style errors and unused code​

    .

## Main Libraries Used

    React: The core framework used for building the user interface.
    Bootstrap: For responsive and mobile-first UI components.
    PayPal: For integrating payment processing.
    React Toastify: For showing notifications in the UI.

## Folder Structure

The main components and files in the project are organized as follows:

bash

/src
   /components
      - Header.jsx      # Header component for navigation
      - Footer.jsx      # Footer component
      - ProductList.jsx # Component displaying a list of products
   /pages
      - Home.jsx        # Home page with featured products
      - Cart.jsx        # Shopping cart page
      - Checkout.jsx    # Checkout page with PayPal integration
   App.jsx              # Main component for routing
   index.js             # Entry point for the React app

## Styling

The project uses a combination of Bootstrap and TailwindCSS for styling. Bootstrap provides the grid system and components, while TailwindCSS offers utility classes for custom designs.
Image Management

Images in the project are optimized and served using Cloudinary. The @cloudinary/react and @cloudinary/url-gen packages are used to generate and manage responsive images efficiently.
Payment Integration

The project integrates PayPal for payment processing. The @paypal/react-paypal-js library is used to embed PayPal buttons and handle transactions.
Running the Project

## To run the project locally in development mode, use:

bash

npm run dev


