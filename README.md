
# Dino 3D Store

Welcome to the Dino 3D Store repository! This project is a web application designed to showcase and sell 3D dinosaur models. Built with modern web technologies, it offers an interactive and user-friendly experience for dinosaur enthusiasts and 3D model collectors.

## Features

- **Interactive 3D Models**: Users can view and interact with high-quality 3D dinosaur models directly in their browsers.
- **Responsive Design**: The application is optimized for various devices, ensuring a seamless experience on desktops, tablets, and smartphones.
- **Secure Transactions**: Integrated with secure payment gateways to facilitate safe and smooth purchases.
- **User Authentication**: Allows users to create accounts, manage their profiles, and track their orders.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Three.js](https://threejs.org/): A 3D library that makes WebGL simpler.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.

- **Backend**:
  - [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
  - [Supabase](https://supabase.io/): An open-source Firebase alternative providing backend services.

- **Database**:
  - [PostgreSQL](https://www.postgresql.org/): A powerful, open-source object-relational database system.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/carlos05d/dino-3d-store.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd dino-3d-store
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Rename the `.env.example` file to `.env`.
   - Fill in the necessary environment variables, such as database credentials and API keys.

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
dino-3d-store/
├── src/
│   ├── components/        # React components
│   ├── assets/            # Images, 3D models, and other assets
│   ├── pages/             # Page components
│   ├── services/          # API calls and backend services
│   └── App.tsx            # Main application component
├── public/
│   ├── index.html         # Main HTML file
│   └── ...                # Other public assets
├── .env.example           # Example environment variables file
├── package.json           # NPM scripts and dependencies
└── README.md              # Project documentation
```

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository.**

2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes.**

4. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request.**

Please ensure your code follows our coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Thanks to the contributors of Three.js for providing an excellent 3D library.
- Hat tip to Supabase for their open-source backend services.
- Inspired by various open-source projects in the community.


