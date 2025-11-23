# 🧠 Juego de Memoria con React

Aplicación web desarrollada con **React** que simula un clásico juego de memoria: voltear cartas, encontrar las parejas correctas y completar el tablero en la menor cantidad de movimientos posibles.

Este proyecto forma parte de mi **portfolio como QA / Frontend**, combinando lógica de juego, manejo de estado y buenas prácticas de organización en React.

---

## 🎮 Cómo se juega

- El tablero muestra un conjunto de cartas boca abajo.
- Hacé clic en una carta para descubrirla.
- Seleccioná una segunda carta:
  - ✅ Si coinciden, quedan descubiertas (se marcan como encontradas).
  - ❌ Si no coinciden, se vuelven a ocultar después de un momento.
- El objetivo es:
  - Encontrar todas las parejas.
  - Minimizar la cantidad de intentos y/o el tiempo (según la lógica implementada).

> Ideal para practicar lógica, memoria visual y fundamentos de React.

---

## 🛠️ Tecnologías utilizadas

React (Create React App)

JavaScript (ES6+)

HTML5

CSS3

```text
juego-de-memoria/
├─ public/
│  ├─ index.html        # HTML base
│  └─ favicon / assets  # Recursos estáticos
├─ src/
│  ├─ components/       # Componentes del juego (Cartas, Tablero, etc.)
│  ├─ styles/           # Estilos CSS / módulos (si aplica)
│  ├─ App.js            # Componente principal
│  ├─ index.js          # Punto de entrada de React
│  └─ ...
├─ package.json         # Dependencias y scripts
└─ README.md            # Documentación del proyecto
