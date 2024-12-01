const images = {
  portfoliov1: '../assets/portfolio-1.0.0.webp',
  rickMorty: '../assets/rickMorty.png',
  msAuth: '../assets/ms-auth.webp',
  msTasks: '../assets/ms-tasks.webp',
  orchestrator: '../assets/orchestrator.webp',
};

export const portfolio = [
  {
    name: 'orchestrator',
    description:
      'This repository is an orchestrator coordinating two microservices: one for user authentication (Auth) and another for task management with CRUD functionalities. It is built using TypeScript for maintainability, Axios for HTTP requests, and employs a CI/CD pipeline with GitHub Actions. The Docker images are published to the GitHub Container Registry (GHCR), ensuring seamless deployment and distribution.',
    image: images['orchestrator'],
    link: 'https://github.com/Aanttrax/orchestrator',
  },
  {
    name: 'ms-tasks',
    description:
      'Task Management Microservice crafted with TypeScript, Express.js, and MongoDB, delivering efficient CRUD operations through intuitive REST APIs. Designed with scalability in mind, it features a modern, strongly-typed codebase and seamless MongoDB integration using Mongoose. The project also includes a fully automated CI/CD pipeline.',
    image: images['msTasks'],
    link: 'https://github.com/Aanttrax/ms-tasks',
  },
  {
    name: 'ms-auth',
    description:
      'A secure and scalable authentication microservice built with TypeScript, Express, and MongoDB. This project implements robust features such as user registration, login, token-based authentication with JWT, and password hashing using bcrypt. The project also includes a fully automated CI/CD pipeline.',
    image: images['msAuth'],
    link: 'https://github.com/Aanttrax/ms-auth',
  },
  {
    name: 'Portfolio-1.0.0',
    description:
      'This is a portfolio project built with Angular 18. It incorporates the 3D library "Three.js" and leverages the latest features of Angular. Additionally, the project implements CI/CD pipelines using GitHub Actions, incorporating tools like Husky and lint-staged to enforce code quality through pre-commit hooks and staged file linting',
    image: images['portfoliov1'],
    link: 'https://aanttrax.github.io/portfolio/',
  },
  {
    name: 'Rick and Morty Angular App',
    description:
      'This is a sample project that uses Angular 16 to display information about the "Rick and Morty" TV series. The project utilizes the public [Rick and Morty API](https://rickandmortyapi.com/).',
    image: images['rickMorty'],
    link: 'https://bright-frangollo-70b51c.netlify.app/characters-list',
  },
];
