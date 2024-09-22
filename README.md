```markdown
# Campaña para sorteo - Aventira Motors

Este proyecto es una aplicación web para una campaña de sorteo de Aventira Motors, desarrollada con Next.js, TypeScript y Tailwind CSS.

## Inicialización del Proyecto

Para iniciar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/campaign-am.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd campaign-am
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `/src/app`: Contiene los componentes principales y páginas de la aplicación.
- `/src/app/form-register`: Directorio específico para el formulario de registro.
  - `/hooks`: Contiene hooks personalizados, como `useForm`.
  - `/libs`: Bibliotecas y datos estáticos.
  - `/models`: Definiciones de tipos y modelos.
  - `/utils`: Utilidades como expresiones regulares y estados iniciales.
- `/src/app/models`: Modelos de datos globales.

## Características Principales

- Formulario de registro con validación en tiempo real.
- Manejo de estado con React Hooks.
- Validación de campos utilizando expresiones regulares.
- Uso de TypeScript para tipado estático.
- Estilizado con Tailwind CSS para un diseño responsive.
- Notificaciones de usuario con la biblioteca Sonner.

## Lógica y Separación de Responsabilidades

- La lógica del formulario está encapsulada en el hook personalizado `useForm`.
- Los tipos y modelos están definidos en archivos separados para mejorar la reutilización y el mantenimiento.
- Las utilidades como expresiones regulares y estados iniciales están separadas en archivos dentro de `/utils`.
- La página principal (`page.tsx`)

## Tecnologías Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Sonner (para notificaciones)

## Ejecutar con Docker

Para ejecutar el proyecto utilizando Docker, sigue estos pasos:

1. Asegúrate de tener Docker instalado en tu sistema.

2. Construye la imagen Docker:
   ```
   docker build -t campaign-am .
   ```

3. Ejecuta el contenedor:
   ```
   docker run -p 3000:3000 campaign-am
   ```

4. O puedes ejecutar:
   ```
   docker-compose up campaign-am --build
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.
