# 🚀 Node TS Boilerplate

A **scalable, modular Node.js + TypeScript boilerplate** with 4 progressive levels of features. Designed for developers who want to start fast with best practices and production-ready setups.  

**Repository:** [https://github.com/RiyaadHossain/node-ts-boilerplate](https://github.com/RiyaadHossain/node-ts-boilerplate.git)

---

## 🗂 Boilerplate Levels

### Level 1 – Core Setup 🌱
**Features included:**
- `app.ts`, `server.ts`  
- Security: `helmet`  
- Environment variables: `dotenv`  
- CORS: `cors`  
- Database: MongoDB + Mongoose (`mongodb-mongoose`)  
- Graceful shutdown  
- TypeScript aliasing: `tsc-alias`  
- Not-found API middleware  

**Use case:**  
- Ideal for **basic APIs** or starting a small project with DB connectivity, environment config, and basic security.

---

### Level 2 – Application Utilities & Structure 🏗
**Features included:**
- Global **error handler**  
- **Auth middleware**  
- **Request validation** (`validate-req`)  
- **Async handler wrapper** (`catch-async`)  
- Standard **response sender** (`send-response`)  
- **Pagination utility**  
- Modular **routes & modules**  
- **Cookie parser**  

**Use case:**  
- Recommended for **medium-size applications**, where you need **clean code structure, modular routes, auth, and validation**.

---

### Level 3 – Logging 📊
**Features included:**
- `Winston` logger (daily rotate file support)  
- `Morgan` HTTP request logger  

**Use case:**  
- Best for **production-ready projects** where you need **robust logging** for debugging and monitoring API requests.

---

### Level 4 – Code Quality & Developer Tools ✨
**Features included:**
- ESLint (TypeScript support)  
- Prettier (code formatting)  
- Husky + lint-staged (pre-commit hooks for linting & formatting)  

**Use case:**  
- Recommended for **teams or production projects**, ensures **consistent code style, error-free commits, and higher maintainability**.

---

### ⚙️ Environment Configuration

Create a `.env` file in your project root:

```dotenv
# Node Environment 
NODE_ENV=development

# Server
PORT=5000

# Database
MONGO_URI=mongodb+srv://admin:7DeCjbnQfOcc2A2w@mycluster.rn7n6.mongodb.net/DB-Name

# JWT & Refresh 
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_SECRET=your_refresh_token_secret_key
REFRESH_TOKEN_EXPIRES_IN=7d
```

### 🏃‍♂️ Quick Start
Clone the repo
```bash
git clone https://github.com/RiyaadHossain/node-ts-boilerplate.git
cd node-ts-boilerplate
```

Install dependencies

```bash
npm install
```


Run in development
```bash
npm run dev
```

Build & start production
```bash
npm run build
npm start
```

### 💡 Notes

- Start with Level 1 for learning or small APIs.
- Progressively enable Level 2 → Level 4 as your project grows.
- Fully modular: you can use only the levels you need.
- Pre-configured for Node + TypeScript + MongoDB with modern best practices.

### 📦 Tech Stack Summary
| Technology           | Purpose                   |
| -------------------- | ------------------------- |
| Node.js + TypeScript | Server & type safety      |
| Express              | Web framework             |
| MongoDB + Mongoose   | Database & ODM            |
| Helmet               | Security headers          |
| CORS                 | Cross-origin requests     |
| Winston + Morgan     | Logging                   |
| ESLint + Prettier    | Code quality & formatting |
| Husky + lint-staged  | Pre-commit checks         |


### ⭐ Contribution
Feel free to fork, improve, and send PRs! <br>
Open issues for bugs, feature requests, or improvements.

### 📜 License
MIT License

---
