# AI Music Generator

An AI-powered application that generates studio-quality music, lyrics, and cover art from text prompts.  
Built using **Next.js (T3 Stack)** on the frontend and **Modal (Python)** on the backend.

Live Demo:  
https://musicgenerator-phi.vercel.app/

---

## Features

### Text-to-Music
Generate full-length music tracks (up to 3 minutes) using the ACE-Step model.

### Smart Lyrics
Automatically generate lyrics using Qwen2-7B-Instruct based on mood, theme, or description.

### Custom Generation Modes
- Description to Song  
- Custom Lyrics Mode  
- Instrumental Mode (no vocals)

### AI Cover Art
Generates unique album cover images using SDXL Turbo.

### Cloud Storage
Automatically uploads generated audio and images to AWS S3.

### Credit System
Tracks user credits with database-backed validation.

---

## Tech Stack

### Frontend
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS, Shadcn UI
- State Management: Zustand
- ORM: Prisma (PostgreSQL)
- Queue / Jobs: Inngest
- Authentication: Better Auth

### Backend (AI Engine)
- Platform: Modal (Serverless Python)
- Music Model: ACE-Step
- LLM (Lyrics / Prompts): Qwen2-7B-Instruct
- Image Model: StabilityAI / SDXL Turbo
- Storage: AWS S3 (via boto3)

---

## Architecture Overview

User submits a prompt through the frontend.

1. Request is sent to Inngest for queueing and credit validation  
2. Inngest calls the Modal backend  
3. Modal loads AI models on GPU (L40s)  
4. Music, lyrics, and artwork are generated  
5. Assets are uploaded to AWS S3  
6. Database is updated  
7. User receives the final output  

---

## Installation & Setup

### Prerequisites

- Node.js 18+
- Python 3.10+
- Modal Account
- AWS S3 Bucket
- PostgreSQL Database

---

## Backend Setup (Modal)

```bash
cd backend
pip install modal
