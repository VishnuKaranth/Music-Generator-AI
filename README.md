AI Music Generator

An AI-powered application that generates studio-quality music, lyrics, and cover art from text prompts.
Built using Next.js (T3 Stack) on the frontend and Modal (Python) on the backend.

Live Demo:
https://musicgenerator-phi.vercel.app/

Features
Text-to-Music

Generate full-length music tracks (up to 3 minutes) using the ACE-Step model.

Smart Lyrics

Automatically generate lyrics using Qwen2-7B-Instruct based on mood, theme, or description.

Custom Generation Modes

Description to Song

Custom Lyrics Mode

Instrumental Mode (no vocals)

AI Cover Art

Generates unique album cover images using SDXL Turbo.

Cloud Storage

Automatically uploads generated audio and images to AWS S3.

Credit System

Tracks user credits with database-backed validation.

Tech Stack
Frontend

Framework: Next.js 15 (App Router)

Language: TypeScript

Styling: Tailwind CSS, Shadcn UI

State Management: Zustand

ORM: Prisma (PostgreSQL)

Queue / Jobs: Inngest

Authentication: Better Auth

Backend (AI Engine)

Platform: Modal (Serverless Python)

Music Model: ACE-Step

LLM (Lyrics / Prompts): Qwen2-7B-Instruct

Image Model: StabilityAI / SDXL Turbo

Storage: AWS S3 (via boto3)

Architecture Overview

User submits a prompt through the frontend.

Request is sent to Inngest for queueing and credit validation

Inngest calls the Modal backend

Modal loads AI models on GPU (L40s)

Music, lyrics, and artwork are generated

Assets are uploaded to AWS S3

Database is updated

User receives the final output

Installation & Setup
Prerequisites

Node.js 18+

Python 3.10+

Modal Account

AWS S3 Bucket

PostgreSQL Database

Backend Setup (Modal)
cd backend
pip install modal

Create Modal Secrets
modal secret create Music-Gen-Secret \
  s3_BUCKET_NAME=<your-bucket> \
  AWS_ACCESS_KEY_ID=<key> \
  AWS_SECRET_ACCESS_KEY=<secret>

Deploy Backend
modal deploy main.py


Copy the web endpoint URL provided by Modal.

Frontend Setup
cd frontend
npm install

Environment Variables
cp .env.example .env


Edit .env:

DATABASE_URL="postgresql://..."
MODAL_KEY="your-modal-key"
MODAL_SECRET="your-modal-secret"
# Add Inngest and AWS credentials if required

Database Setup
npx prisma db push

Start Development Server
npm run dev

Running Background Jobs (Inngest)

Open a new terminal and run:

npx inngest-cli@latest dev

License

This project uses ACE-Step, Qwen, and SDXL Turbo models.
Please review individual model licenses before commercial usage.

Notes

Designed for scalability and production use

Easy to extend with payments, subscriptions, or fine-tuned models

Built using modern AI and cloud-native architecture
