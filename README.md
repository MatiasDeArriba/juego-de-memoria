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
---
### 🔍 Enfoque desde QA / Testing

Este proyecto también lo uso para practicar pensamiento de QA.
Algunas ideas de pruebas:

✅ Pruebas funcionales (manuales)

Verificar que:

Al hacer clic en una carta, esta se voltea.

Al seleccionar dos cartas iguales, queden bloqueadas / marcadas como encontradas.

Al seleccionar dos cartas diferentes, se vuelvan a ocultar después de un breve tiempo.

Cuando todas las parejas se encuentran:

Se muestre un mensaje de victoria o estado de “juego completado”.

Probar en distintos navegadores (Chrome, Firefox, Edge).

Probar en diferentes tamaños de pantalla (desktop / mobile).

🧪 Ideas para pruebas automatizadas (a futuro)

Unit tests con Jest + React Testing Library para:

Comprobar que el componente de carta se renderiza correctamente.

Validar que el estado del juego se actualiza bien al encontrar una pareja.

Controlar que el contador de intentos se incremente cuando corresponde.

🧩 Posibles mejoras (Roadmap)

 Agregar niveles de dificultad (fácil / medio / difícil).

 Mostrar contador de tiempo y movimientos.

 Guardar mejores puntuaciones en LocalStorage.

 Animaciones al voltear cartas.

 Sonidos al acertar o fallar.

 Versión responsive completamente adaptada para mobile.

 Agregar tests automatizados.

👨‍💻 Autor

Matías De Arriba
QA Tester Manual | En formación como Desarrollador Web (JavaScript / React / Node.js)

🔗 LinkedIn

🐙 GitHub


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
 
