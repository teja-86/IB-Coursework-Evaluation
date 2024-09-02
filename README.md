# IB Coursework Evaluation Web Application

## Objective

This web application is designed to evaluate International Baccalaureate (IB) coursework. Built using Next.js 14, TailwindCSS, Zustand, and Shadcn UI components, the application mirrors the "ZuAi" interface design and incorporates multiple features for coursework management, evaluation, and display.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


## Tech Stack

- **Next.js 14**: Framework for building the application.
- **TailwindCSS**: For styling and responsive layouts.
- **Zustand**: State management for handling global states.
- **Shadcn UI**: Component library for user interface elements.

## Key Features

### 1. File Upload

- Drag-and-drop support for PDF files.
- Manual file upload option.
- Display file size limit (e.g., "Limit 25 MB per file").
- Store uploaded files using browser local storage.

### 2. Local Storage Implementation

- Save uploaded files and their metadata locally.
- Ensure data persistence across page reloads.
- Efficient retrieval of stored files and associated data.

### 3. Coursework Details Form

- Dropdowns for selecting "Coursework Type" and "Subject".
- Text input for entering the essay title.
- Store form data locally and link it with the uploaded file.

### 4. Evaluation Display

- Use of dummy data for all evaluation criteria.
- Overall score displayed with a circular progress indicator.
- Detailed breakdown of scores by criteria (A, B, C).
- Display evaluation date and allow local storage and retrieval of results.

### 5. Coursework List

- List previously uploaded coursework with relevant details (title, subject, word count, etc.).
- Data is fetched from local storage.

### 6. Explore Coursework Section

- Tabbed interface to switch between different coursework categories.
- Grid layout to display coursework examples visually.

## About This Repository

This repository contains the source code for the IB Coursework Evaluation web application. The project demonstrates how to manage coursework data using a modern tech stack and includes detailed evaluations and metadata storage. Each feature is designed with user experience and accessibility in mind, and the interface closely follows the provided design guidelines.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/teja-86/IB-Coursework-Evaluation.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Running the Development Server

   ```bash
   npm run dev

   ```

4. Building for Production

   ```bash
   npm run build

   ```
