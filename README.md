Here’s a detailed and professional `README.md` file tailored for your GitHub repository: **Healthcare-Training-Backend**

---

```markdown
# 🏥 Healthcare Training Backend

This project is a full-featured **Node.js + Express.js** REST API powered by **MongoDB**, designed to simulate a real-world **nursing training institution**. It handles the management of **hospitals, doctors, students, colleges, training programs, certificates, and validations**.

## 🚀 Live API Server

🔗 [https://healthcare-training-backend.onrender.com](https://healthcare-training-backend.onrender.com)

---

## 📂 Project Structure
```

Healthcare-Training-Backend/
│
├── config/ # MongoDB connection config
├── controllers/ # All business logic
├── models/ # Mongoose schema definitions
├── routes/ # Express route handlers
├── seed/ # Seed data script
├── utils/ # Utility functions (e.g., certificate generator)
├── postman/ # Postman collection & environment
├── server.js # Entry point
├── .env.example # Sample environment variables
└── README.md # You're here!

````

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Dhanjeet09/Healthcare-Training-Backend.git
cd Healthcare-Training-Backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root directory. Use the provided `.env.example` as a guide.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/healthcare_training
```

---

## 🗄️ MongoDB Setup

Make sure MongoDB is running locally or provide a cloud MongoDB URI in `.env`.

---

## 🌱 Seed Database (Optional)

Seed sample data for hospitals and doctors:

```bash
npm run seed
```

---

## ▶️ Run the Server

```bash
npm run dev
```

The API will be available at:
📍 `http://localhost:5000`

---

## 📬 API Endpoints

All routes are prefixed with `/api`.

### 📁 Hospitals

- `GET /api/hospitals` – List all hospitals
- `POST /api/hospitals` – Create a hospital
- `GET /api/hospitals/:id` – Get hospital by ID

### 👨‍⚕️ Doctors

- `POST /api/doctors` – Create doctor
- `POST /api/doctors/:id/assign-hospitals` – Assign doctor to multiple hospitals

### 🧑‍🎓 Students

- `POST /api/students` – Register student
- `POST /api/students/:id/record-exam` – Record exam results
- `POST /api/students/:id/add-credit` – Add academic credit
- `POST /api/students/:id/generate-certificate` – Generate certificate

### 🏫 Colleges

- `POST /api/colleges` – Create college
- `GET /api/colleges` – List colleges

### 🗓️ Training Program

- `POST /api/programs/schedule-class` – Schedule a classroom session
- `POST /api/programs/schedule-internship` – Schedule an internship
- `POST /api/programs/add-guest-lecture` – Add a guest lecture

### 📜 Certificates

- `GET /api/validations/:certificateId` – Validate a certificate
- `GET /api/validations` – Get validation logs

---

## 📥 Postman Collection

Import from the `postman/` folder:

- **Collection**: [HealthcareTraining.postman_collection.json (Postman Cloud Link)](https://api-team-1792.postman.co/workspace/healthcare-training-backend~a5dae361-7f49-42cb-bf4d-41f4d97ce375/collection/32180315-123f7c29-5870-44e2-9f83-03fb0a7e0d21?action=share&creator=32180315&active-environment=32180315-26da6f64-52fa-4717-b5e9-729a8e0d4708)
- **Environment**: [HealthcareTraining.postman_environment.json](https://api-team-1792.postman.co/workspace/healthcare-training-backend~a5dae361-7f49-42cb-bf4d-41f4d97ce375/environment/32180315-26da6f64-52fa-4717-b5e9-729a8e0d4708?action=share&creator=32180315&active-environment=32180315-26da6f64-52fa-4717-b5e9-729a8e0d4708)

---

## 🧠 How It Works

### 1. **Students** are admitted to the training institution via affiliated **colleges**.

### 2. The **training program** is 1 year:

- First 6 months: **Classroom sessions** by core faculty (senior doctors)
- Mid-term: **Examinations**
- Last 6 months: **Internship** under senior doctors

### 3. On completion:

- Students receive **academic credits** (linked to their college)
- A **certificate** is generated with a unique ID

### 4. **External validation** is possible:

- Employers or colleges can validate certificates
- Each check is **logged** with `who`, `when`, and `which certificate`

---

## 🔒 Security

- Basic validation and error handling implemented
- Token-based authentication (optional for extensions)

---

## 🧪 Testing

You can test endpoints via:

- Postman collection
- Swagger integration (optional future scope)
- Frontend apps (not included)

---

## 📦 Dependencies

- **express**
- **mongoose**
- **dotenv**
- **morgan**
- **pdfkit** (optional, for certificate PDF generation)

---

## 👨‍💻 Author

**Dhanjeet Sharma**
📧 [dhanjeetsharma7@gmail.com](mailto:dhanjeetsharma7@gmail.com)
📱 +91 8878015479
