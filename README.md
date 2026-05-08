# 🏛️ Dwellish | High-End Furniture Gallery

**Dwellish** is a premium, full-stack e-commerce experience designed for the modern interior enthusiast. Built with a focus on minimalist "Midnight" aesthetics, the platform provides a seamless interface for browsing architectural-grade furniture with a focus on high-contrast UI and fluid user interactions.

---

## 🌓 Design Philosophy
The interface utilizes a custom **Arctic-Midnight** theme, characterized by:
*   **Obsidian Depth:** Deep `#121212` backgrounds for reduced eye strain and a premium feel.
*   **Gold Accents:** Strategic use of `amber-500` for high-conversion call-to-action elements.
*   **Glassmorphism:** Translucent navigation and card elements for a modern, tiered visual hierarchy.

## 🛠️ Tech Stack
*   **Frontend:** React.js (Vite)
*   **Styling:** Tailwind CSS + DaisyUI
*   **Routing:** React Router 7 (Client-side routing)
*   **State Management:** Custom React Hooks for asynchronous data fetching.
*   **Data Source:** Localized JSON-based API for rapid prototyping.

## 🚀 Key Features
*   **Dynamic Product Grid:** Responsive layout optimized for all device sizes.
*   **Cinematic Product Details:** A dedicated showcase view featuring interactive imagery and smart layout hierarchy.
*   **Real-time Availability:** Status tags for limited edition and stock availability.
*   **Advanced Filtering:** Capability for category and material-based browsing.

---

## ⚠️ Status: Development & Deployment Notice

> **Current Phase:** Beta / Prototyping

This project is currently **Incomplete**. While the core UI/UX and routing logic are implemented, the following features are in active development:
*   Full Shopping Cart Persistence.
*   User Authentication & Profile management.
*   Checkout Integration.

### 🛑 Known Deployment Issues
We are currently addressing a technical hurdle regarding **SPA (Single Page Application) Routing** on static hosting platforms (Surge/Netlify).

**The Problem:**  
Refreshing the page on a sub-route (e.g., `/products`) results in a `404` or a `SyntaxError: Unexpected token '<'`. This occurs because the hosting server looks for physical `.html` files for each route, which do not exist in a React Single Page Application.

**The Solution:**  
I am in the process of configuring the build pipeline to include:
1.  **Surge:** A `200.html` fallback to ensure the server yields routing control back to React.
2.  **Netlify:** A `_redirects` rule (`/* /index.html 200`) to handle deep-linking.

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/dwellish.git](https://github.com/yourusername/dwellish.git)