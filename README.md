# ¡Aventura Española! — Spanish Level I Learning Adventure

**¡Aventura Española!** is a comprehensive, story-driven educational Spanish learning adventure game designed for English-speaking travelers exploring Spain from A1 beginner to certified Level I mastery.

The course curriculum is strictly aligned with the official academic **BAESP101 Spanish Level I** university syllabus (15 Lecture Hours) and supported by the communicative framework of **Nuevo Español sin Fronteras (ESF 1)** and **Aula Internacional 1**.

---

## 🎨 Visual Design & The 13 Gameplay Screens

The game UI is designed in a colorful Mediterranean 2D/2.5D cartoon adventure style with rounded panels, game-style 3D pressed buttons, animated transitions, particle effects, and warm terracotta, sunflower yellow, and Iberian blue aesthetics:

1. **Screen 1 — Welcome Screen**: Grand title with golden text shadows, animated traveler character with backpack, drifting clouds over a Spanish skyline silhouette, and options to Start Journey, Login, Sign Up, or Continue as Guest.
2. **Screen 2 — Login & Sign Up (`AuthScreen`)**: Local profile management, display name configuration, password toggle, and clear local storage indicators.
3. **Screen 3 — Character Creator (`CharacterCreator`)**: Full traveler customization with live layered SVG preview, customizable skin tones, hair styles & colors, Spanish outfits (traveler, casual, flamenco, sporty, elegant), accessories (glasses, hat, scarf, backpack, camera), and character name.
4. **Screen 4 — Sofia Interactive Tutorial (`TutorialScreen`)**: 6-step guided walkthrough with Sofia, introducing coin rewards, star ratings, city unlocks, question modalities, translation hints, and boss battles.
5. **Screen 5 — Illustrated World Map (`WorldMap`)**: Continental Iberian peninsula with interconnected travel trails, 15 city pins with level progress counters, and the central golden portal to *La Gran Fiesta*.
6. **Screen 6 — City Hub & Winding Path (`CityScreen`)**: Authentic Spanish plaza banner with architectural silhouettes, 10 circular level nodes along an interactive winding cobblestone road with star ratings, boss mission gate, and view toggle between *Winding Road* and *Curriculum Matrix*.
7. **Screen 7 — Level Details (`LevelDetailsModal`)**: Pre-mission briefing modal displaying tier badge (Easy, Medium, Tough, Hard, Hot), syllabus learning objectives, coin & XP rewards, and "Start Level" action.
8. **Screen 8 — NPC Conversation & MCQ (`LevelModal`)**: Waiter and host character portraits with speech bubbles, 3 lives/hearts counter, coins display, and immediate communicative feedback.
9. **Screen 9 — Fill-in-the-Blank with Accents (`LevelModal`)**: Virtual Spanish accent keyboard (`á`, `é`, `í`, `ó`, `ú`, `ñ`, `¿`, `¡`) and word chip constructor.
10. **Screen 10 — Hint & Translation Modal (`LevelModal`)**: Dedicated "Need Help?" modal offering full English translation and grammatical breakdown for 1,000 coins.
11. **Screen 11 — Level Complete Celebration (`LevelModal`)**: Fireworks particle animations, 3 golden stars, earned coins & XP summary, and level advancement.
12. **Screen 12 — City Boss Challenge (`BossMissionModal`)**: Narrative briefing with illustrated Hidalgo/Matador portrait, scenario lore, victory conditions, and combat questions enforcing a strict **80% mastery threshold**.
13. **Screen 13 — Unlock Next City (`CityUnlockModal`)**: Full celebration ribbon, next city preview card with landmarks, 500 bonus coins award, and direct journey continuation.

---

## 🇪🇸 15 City Worlds & Syllabus Coverage

| City # | City | Region | Syllabus Module & Focus |
|:---:|:---|:---|:---|
| **1** | **Madrid** | Comunidad de Madrid | Módulo 1: Saludos, Abecedario, Datos Personales y Verbo SER |
| **2** | **Toledo** | Castilla-La Mancha | Módulo 1: Profesiones, Días de la Semana, Números 1-100 y SER |
| **3** | **Salamanca** | Castilla y León | Módulo 1: Gran Síntesis, Números hasta 100.000, Artículos y Adjetivos |
| **4** | **Segovia** | Castilla y León | Módulo 2: Mi Habitación, Colores, Verbo ESTAR y SER vs ESTAR |
| **5** | **Sevilla** | Andalucía | Módulo 2: Mi Familia, Verbo TENER, Expresar la Edad y Verbos en -AR |
| **6** | **Granada** | Andalucía | Módulo 2: Direcciones, Preposiciones de Lugar y Verbos en -ER / -IR |
| **7** | **Córdoba** | Andalucía | Módulo 3: Expresar la Hora, Meses del Año, Fechas y Verbo HAY |
| **8** | **Málaga** | Andalucía | Módulo 3: El Tiempo Atmosférico, Verbo HACER y Clima Mediterráneo |
| **9** | **Cádiz** | Andalucía | Módulo 3: Gustos (GUSTAR), Posesivos, y la Diferencia MUY vs MUCHO |
| **10** | **Valencia** | Comunidad Valenciana | Módulo 4: Rutinas Cotidianas, Verbos y Pronombres Reflexivos |
| **11** | **Barcelona** | Cataluña | Módulo 4: Horarios, Campus Universitario, Describir Barrios y Metro |
| **12** | **Zaragoza** | Aragón | Módulo 4: Describir Personas, Cualidades Morales y SABER + Infinitivo |
| **13** | **Bilbao** | País Vasco | Módulo 5: Alimentos, Tapas, Bebidas, Verbo IR y Contracción AL |
| **14** | **San Sebastián** | País Vasco | Módulo 5: En el Restaurante, Menú del Día, Opiniones y Verbo QUERER |
| **15** | **Santiago de Compostela** | Galicia | Módulo 5: Ubicar Sitios en la Ciudad y Verbo Modal PODER |
| **★** | **La Gran Fiesta** | Destino Central | **6 Pabellones Interactivos, 14 Personajes y Examen Oficial BAESP101** |

---

## 💰 Economy & Anti-Duplication Safeguards

- **First-Attempt Correct Answer**: `+100 coins` (tracked in set; replay cannot duplicate coins).
- **Completed NPC Dialogue**: `+250 coins` (anti-farming protection).
- **City Completion Bonus**: `+500 bonus coins` (granted once per city boss victory).
- **English Translation Purchase**: `1,000 coins` (safeguard prevents negative balances and duplicate deductions).
- **Review Mastery**: `+25 XP` when mastering a mistake from the Spaced Review Notebook.

---

## 📚 Study Tools & Official Assessment

- **Cuaderno de Repaso (Mistakes Review)**: Automatically logs incorrect answers with failure counts and grammar notes. Includes interactive practice mode.
- **Plan de Estudio 35 Días**: Structured day-by-day roadmap covering all 5 modules with daily goals and milestone checks.
- **Matriz de Cobertura del Sílabo BAESP101**: Traceable matrix displaying 100% verified coverage across all 37 syllabus topics.
- **Examen Oficial Acumulativo BAESP101**: 30 comprehensive questions spanning all 5 modules that evaluates competency and renders an official printable **Diploma de Nivel I (A1)**.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` and custom Mediterranean palette
- **Icons**: Lucide React
- **Celebrations**: Canvas Confetti
- **Audio**: Web Speech API (`speechSynthesis`, `es-ES`) + Web Audio API synthesizer for melodic chimes and fanfares
- **Persistence**: Versioned `localStorage` with safe fallback for SSR/testing, JSON export, and JSON import
- **Testing**: Vitest (23 unit and integration tests across 4 suites)

---

## 🚀 Setup & Local Execution

### Prerequisites
- Node.js 18+

### Installation & Run
```bash
# Clone or navigate to the repository
cd spanish

# Install dependencies
npm install

# Start local interactive development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧪 Testing

```bash
# Run unit and integration tests
npm test

# Run tests in watch mode
npx vitest
```

---

## 📦 Production Build

```bash
npm run build
```

The production assets are generated in the `/dist` directory.

## Illustrated game environments

The frontend includes locally hosted art in `public/game-art/`:
- `spain-sunset.png` — welcome and travel intro environment
- `spain-map.png` — illustrated Spain map behind interactive city markers
- `madrid-plaza.png` — city and festival plaza environment
- `spanish-cafe.png` — café mission environment

These assets are local files and do not require an external image service at runtime.
