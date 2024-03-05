# Solana - Twitter Clone

Solana is a simple Twitter clone built using modern web technologies. It provides a platform where users can share their thoughts, follow other users, and engage in conversations through tweets.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Posting Tweets**: Users can post tweets with a character limit.
- **Following Users**: Users can follow/unfollow other users to see their tweets on their timeline.
- **Timeline**: Users have a timeline where they can view tweets from users they follow.
- **Likes and Retweets**: Users can like and retweet tweets.
- **User Profile**: Each user has a profile where they can see their tweets, followers, and following users.

## Technologies Used

- **Frontend**:

  - HTML, CSS, JavaScript
  - React.js
  - Redux for state management
  - Axios for handling API requests

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for ORM
  - JSON Web Tokens (JWT) for authentication

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/solana.git
```

2. Install dependencies for both frontend and backend:

```bash
Copy code
cd solana/frontend
npm install

cd ../backend
npm install
```

3. Set up environment variables:

Create a .env file in the backend directory and add the following variables:

```makefile
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the backend server:

```bash
cd backend
npm start
```

5. Run the frontend development server:

```bash
Copy code
cd frontend
npm start
```

6. Visit http://localhost:3000 in your browser to access Solana.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features you'd like to see in Solana.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

As always, The Odin Project, for providing this project & guidance, for FREE.
