@echo off
REM Script de inicio rápido para Windows

echo.
echo  ============================================
echo   Recetas App - Inicio Rapido (Windows)
echo  ============================================
echo.

:menu
echo Opciones:
echo 1) Desarrollo local (npm)
echo 2) Ejecutar con Docker
echo 3) Ejecutar con Docker Compose
echo 4) Ver logs de Docker
echo 5) Detener contenedores
echo 6) Limpiar todo
echo.

set /p option="Selecciona una opcion (1-6): "

if "%option%"=="1" (
    echo [INICIANDO] Desarrollo local...
    cd backend
    call npm install
    call npm start
    goto end
)

if "%option%"=="2" (
    echo [INICIANDO] Construccion de imagen Docker...
    call docker build -t recetas-app:1.0 .
    
    echo [INICIANDO] Contenedor Docker...
    call docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0
    
    echo.
    echo Aplicacion disponible en: http://localhost:3000
    echo Ver logs: docker logs recetas-container
    echo Detener: docker stop recetas-container
    goto end
)

if "%option%"=="3" (
    echo [INICIANDO] Docker Compose...
    call docker-compose up -d
    
    echo.
    echo Aplicacion disponible en: http://localhost:3000
    echo Frontend en: http://localhost:3001
    goto end
)

if "%option%"=="4" (
    echo [LOGS] Docker...
    call docker logs -f recetas-container
    goto end
)

if "%option%"=="5" (
    echo [DETENIENDO] Contenedores...
    call docker-compose down 2>nul
    call docker stop recetas-container 2>nul
    call docker rm recetas-container 2>nul
    echo Contenedores detenidos
    goto end
)

if "%option%"=="6" (
    echo [LIMPIANDO] Contenedores e imagenes...
    call docker-compose down -v
    call docker system prune -a
    echo Limpieza completada
    goto end
)

echo Opcion invalida
:end
pause
