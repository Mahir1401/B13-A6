<div align="center">

# 🛒 DigiTools

### A modern e-commerce storefront for premium digital products

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
</div>

---

## 📖 About

**DigiTools** is a fully responsive digital marketplace built with **React 19** and **Vite**. Users can browse a curated catalog of premium tools — AI writing assistants, design packs, automation kits, and more — add items to a smart cart, and proceed to checkout, all within a clean, modern UI powered by TailwindCSS and DaisyUI.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| TailwindCSS v4 | Utility-first styling |
| DaisyUI | UI component library |
| Lucide React | Icon library |
| JavaScript ES2024 | Language |

---

## ✨ Features

### 🛒 Smart Cart — No Duplicates
Each product can only be added to the cart **once**. The cart tab displays a live item count, and the "Buy Now" button turns into a disabled "Purchased ✓" state once an item is added.

### ⚡ Async Product Loading with React 19
Products are fetched using a **pre-fired promise** passed into components and consumed with the new React 19 `use()` hook — enabling non-blocking, instant rendering without `useEffect`.

### 📱 Fully Responsive Design
Fluid layouts from mobile to desktop using Tailwind's responsive grid utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) and DaisyUI tab and badge components.

---
