@echo off
REM ============================================
REM SCRIPT PARA INICIAR SERVIDOR DE RECETAS
REM ============================================
REM Este script inicia el servidor Node.js
REM Se ejecuta en terminal y se mantiene activo

echo.
echo ╔════════════════════════════════════════╗
echo ║  INICIANDO SERVIDOR DE RECETAS APP    ║
echo ╚════════════════════════════════════════╝
echo.

REM Navigate to backend directory
cd /d "c:\Users\YOFC\Downloads\RECETAS\backend"

echo [INFO] Directorio actual:
echo %cd%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [ADVERTENCIA] node_modules no encontrado
    echo [INSTALANDO] Dependencias con npm install...
    echo.
    call npm install
    echo.
)

REM Start the server
echo [INICIANDO] Servidor en puerto 3000...
echo [ACCESO] http://localhost:3000
echo.
echo ╔════════════════════════════════════════╗
echo ║  Presiona CTRL+C para detener         ║
echo ║  La ventana debe permanecer abierta   ║
echo ╚════════════════════════════════════════╝
echo.

npm start

REM If npm start fails, try node directly
if errorlevel 1 (
    echo.
    echo [ERROR] npm start falló
    echo [INTENTANDO] Ejecutar directamente con node...
    echo.
    if exist "server.js" (
        node server.js
    ) else if exist "app.js" (
        node app.js
    ) else (
        echo [ERROR] No se encontró server.js o app.js
        echo [ARCHIVOS] Disponibles en el directorio:
        dir
        pause
    )
)

REM If everything fails, keep window open
pause
