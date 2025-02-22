# NexusCommerce 🛒

**NexusCommerce** is a modern **eCommerce front-end application** built using **React + TypeScript**. This project follows enterprise-level best practices, ensuring **scalability, performance, and maintainability**.

##  Tech Stack

- **Framework**: React (TypeScript)
- **State Management**: Redux Toolkit
- **API Handling**: Axios
- **Styling**: Styled-Components, Tailwind CSS
- **Animations**: Framer Motion
- **Security**: Helmet.js, Input Sanitization
- **Performance Optimization**: Lazy Loading, Suspense, Code Splitting

---

##  Folder Structure

/NexusCommerce │── /src │ ├── /components # Reusable UI components │ ├── /pages # Page components │ ├── /hooks # Custom React hooks │ ├── /store # Redux state management │ ├── /services # API Calls & Business Logic │ ├── /styles # CSS & Design System │ ├── App.tsx # Main App Component │ ├── index.tsx # Entry Point ├── package.json # Dependencies ├── README.md # Project Documentation  ├── .gitignore # Ignore unnecessary files ├── .eslintrc # Linting rules ├── .prettierrc # Code Formatting rules


---

##  Features

 **Product Listing & Details** – Fetch product data dynamically via API.  
 **User Authentication** – Login, logout, and profile management.  
 **Shopping Cart with Persistence** – Cart data is stored locally and synced across sessions.  
 **Dark Mode Support** – Fully responsive with theme toggle.  
 **Optimized API Handling** – Axios interceptors, retry mechanisms for failed requests.  
 **Error Handling & Security** – Global error boundaries, API sanitization.  

---

##  Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/NexusCommerce.git
   cd NexusCommerce

Install dependencies

npm install

Start the development server

    npm run dev

 Deployment

To build and deploy the project:

npm run build

The build files will be in the /dist folder.