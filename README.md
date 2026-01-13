# Padel Store – React E-commerce

Este proyecto es una aplicación web de tipo **Single Page Application (SPA)** desarrollada con **React**, realizada como proyecto final del curso de React.

La idea del e-commerce está inspirada en un emprendimiento real, relacionado con el pádel, de un amigo. Actualmente, la aplicación no está pensada para uso productivo, pero fue desarrollada con una estructura escalable que permitiría, a futuro, convertirla en una tienda real.

---

## 🚀 Funcionalidades

- Listado dinámico de productos
- Filtrado por categorías
- Vista de detalle de cada producto
- Selección de cantidad con validación de stock
- Carrito de compras con estado global
- Proceso de checkout
- Generación de órdenes de compra
- Almacenamiento de órdenes en Firebase Firestore
- Navegación completa sin recarga de página (SPA)

---

## 🧩 Tecnologías utilizadas

- **React** (componentes, hooks y context)
- **React Router** para la navegación
- **Firebase Firestore** como base de datos
- **Tailwind CSS** para el estilado
- **Vite** como herramienta de build

---

## 🛒 Flujo de compra

- Los productos se obtienen dinámicamente desde Firestore
- El stock se valida utilizando datos reales de la base de datos
- El usuario puede agregar productos al carrito seleccionando la cantidad deseada
- El carrito se gestiona de forma global mediante Context
- Al confirmar la compra, se genera una orden que se guarda en Firestore
- El usuario recibe el ID de la orden como confirmación de la compra

---

## 🎨 Interfaz y estilos

La interfaz fue desarrollada utilizando Tailwind CSS, buscando una estética limpia, moderna y consistente en todos los componentes, priorizando la experiencia de usuario sin sobrecargar el diseño.

---

## 📌 Consideraciones finales

Este proyecto se enfoca principalmente en el desarrollo del front-end y la experiencia de usuario.  
No incluye procesamiento de pagos reales ni manejo avanzado de stock, pero sienta una base sólida para futuras mejoras y ampliaciones.

---

## 👤 Autor

Proyecto desarrollado por **Jalil** como entrega final del curso de React.
