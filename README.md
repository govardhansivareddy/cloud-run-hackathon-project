# SegreTrack

SegreTrack — a smart waste management and segregation app built for sustainable communities.  
Developed for the **Google Cloud Run Hackathon (Nov 2025)** using **JavaScript**, **Node.js**, and **Google Cloud Run**.

---

## 🌐 Live Demo
Your app is live here:  
👉 **[https://segretrack-368138320377.us-central1.run.app](https://segretrack-368138320377.us-central1.run.app)**

---

## 🚀 Features
- Report waste pickup requests with location, description, and email.
- Admins automatically receive email notifications.
- Smart waste classification (e.g., recyclable, organic, hazardous).
- All data is stored securely in Google Sheets via Google Apps Script.

---

## 🧰 Tech Stack
- **Frontend:** MIT App Inventor (or web/mobile UI)
- **Backend:** Node.js (Express)
- **Hosting:** Google Cloud Run
- **Automation:** Cloud Build + Container Registry
- **Notifications:** Google Apps Script (MailApp + Sheets)
- **Version Control:** GitHub

---

## 🧪 API Endpoints
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/health` | Check service health |
| `POST` | `/api/classify` | Classify a waste item |

### Example request
```bash
curl -s -X POST https://segretrack-368138320377.us-central1.run.app/api/classify \
  -H "Content-Type: application/json" \
  -d '{"item":"plastic bottle"}'
