# # LiveBoard  బోర్

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a>
</p>

---

LiveBoard is a modern, full-featured bulletin board application that allows users to post and manage announcements. It's built with a robust backend using NestJS and a dynamic frontend with React.

## ✨ Features

- **User Authentication**: Secure user registration and login using JWT.
- **User Profiles**: Users can view and manage their profiles.
- **Announcements**: Create, read, update, and delete announcements.
- **RESTful API**: A well-structured and documented API.

## 🛠️ Tech Stack

- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![SQLite](https://img.shields.io/badge/sqlite-%23003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Running

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/LiveBoard.git
    cd LiveBoard
    ```

2.  **Backend Setup (NestJS):**

    ```bash
    # Install dependencies
    npm install

    # Run the development server
    npm run start:dev
    ```

    The backend will be running on `http://localhost:3000`.

3.  **Frontend Setup (React):**

    Open a new terminal and navigate to the `client` directory:

    ```bash
    cd client

    # Install dependencies
    npm install

    # Run the development server
    npm start
    ```

    The frontend will be running on `http://localhost:3001`.

## 📂 Project Structure

```
LiveBoard/
├── client/         # React Frontend
│   ├── public/
│   └── src/
├── src/            # NestJS Backend
│   ├── auth/
│   ├── users/
│   └── announcements/
├── .env
├── database.sqlite
└── package.json
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.