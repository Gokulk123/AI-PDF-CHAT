# 🤖 AI PDF Chat (RAG Powered)

An AI-powered PDF Chat application that allows users to upload PDF documents and ask questions about their content using Retrieval-Augmented Generation (RAG).

Built with React, Node.js, PostgreSQL, LangChain, ChromaDB, and Google's Gemini Embeddings.

---

## 🚀 Features

- 📄 Upload PDF documents
- ✂️ Automatic text chunking
- 🧠 Generate vector embeddings
- 📚 Store embeddings in ChromaDB
- 🔍 Semantic similarity search
- 🤖 AI-powered question answering
- 💬 Modern ChatGPT-style interface
- ⚡ Fast and responsive UI
- 🎨 Beautiful dark dashboard

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Markdown
- Lucide React

### Backend

- Node.js
- Express.js
- PostgreSQL
- LangChain
- Google Gemini Embeddings
- ChromaDB
- Multer
- JWT Authentication

---

## 📂 Project Structure

```
AI-PDF-CHAT
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   ├── uploads
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Gokulk123/AI-PDF-CHAT.git

cd AI-PDF-CHAT
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create `.env`

Example:

```env
PORT=5000

DATABASE_URL=your_database_url

JWT_SECRET=your_secret

GROQ_API_KEY=your_groq_api_key

GEMINI_API_KEY=your_gemini_api_key

HF_TOKEN=your_huggingface_token
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

## 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5d5aeb86-cc71-4977-bd23-9a2073f929fb" />


---

## 🔄 Application Flow

```
Upload PDF

↓

Read PDF

↓

Split into Chunks

↓

Generate Embeddings

↓

Store in ChromaDB

↓

User Question

↓

Similarity Search

↓

Relevant Chunks

↓

LLM (Groq)

↓

AI Answer
```

---

## 🌟 Future Improvements

- Multiple PDF Support
- User Authentication
- Chat History
- Export Conversations
- Streaming Responses
- Voice Chat
- Cloud Storage
- Persistent Vector Database
- Docker Deployment

---

## 👨‍💻 Author

**Gokul Krishnan G**

React Developer | Full Stack Developer

GitHub

https://github.com/Gokulk123

LinkedIn

(Add your LinkedIn profile)

---

## 📄 License

This project is licensed under the MIT License.
