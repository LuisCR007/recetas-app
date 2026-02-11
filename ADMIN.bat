@echo off
REM ============================================
REM SCRIPT PARA ADMINISTRACIÓN COMPLETA
REM ============================================
REM Menú para controlar servidor, Git y versiones

setlocal enabledelayedexpansion

:MENU
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║         ADMINISTRADOR DE RECETAS APP v1.0                ║
echo ║     Servidor + Git + Control de Versiones                ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo  [1] ► Iniciar Servidor (http://localhost:3000)
echo  [2] ► Ver estado Git del proyecto
echo  [3] ► Hacer commit de cambios
echo  [4] ► Push a GitHub (subir a la nube)
echo  [5] ► Ver historial de commits
echo  [6] ► Ver cambios sin committed
echo  [7] ► Iniciar servidor EN BACKGROUND (sin ventana)
echo  [8] ► Ver URL de Cloudflare Pages
echo  [9] ► Salir
echo.
set /p OPCION="Selecciona una opción (1-9): "

if "%OPCION%"=="1" goto INICIAR_SERVIDOR
if "%OPCION%"=="2" goto VER_STATUS
if "%OPCION%"=="3" goto HACER_COMMIT
if "%OPCION%"=="4" goto PUSH_GITHUB
if "%OPCION%"=="5" goto VER_HISTORIAL
if "%OPCION%"=="6" goto VER_CAMBIOS
if "%OPCION%"=="7" goto BACKGROUND
if "%OPCION%"=="8" goto VER_URL
if "%OPCION%"=="9" goto SALIR

echo [ERROR] Opción no válida
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:INICIAR_SERVIDOR
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║          INICIANDO SERVIDOR - MODO FRONTAL               ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS\backend"

echo [INFO] Instalando dependencias si es necesario...
if not exist "node_modules" npm install

echo.
echo [✓] Servidor iniciando...
echo [✓] Abre en tu navegador: http://localhost:3000
echo [✓] Presiona CTRL+C para detener
echo.

npm start
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:VER_STATUS
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║              ESTADO DE GIT DEL PROYECTO                  ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

echo [GIT STATUS]
git status
echo.
echo ════════════════════════════════════════════════════════════
echo.
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:HACER_COMMIT
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║           CREAR NUEVO COMMIT (VERSIÓN GUARDADA)          ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

REM Show current changes
echo [CAMBIOS DETECTADOS]
git status --short
echo.

REM Ask for commit message
set /p MENSAJE="Escribe un mensaje para este commit: "

if "%MENSAJE%"=="" (
    echo [ERROR] El mensaje no puede estar vacío
    echo.
    pause
    goto HACER_COMMIT
)

echo.
echo [EJECUTANDO] git add .
git add .

echo [EJECUTANDO] git commit -m "%MENSAJE%"
git commit -m "%MENSAJE%"

if errorlevel 1 (
    echo.
    echo [⚠ ADVERTENCIA] No hay cambios para hacer commit
    echo.
)

echo.
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:PUSH_GITHUB
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║         SUBIR A GITHUB (PUSH A LA NUBE)                 ║
echo ║     Esto hace deploy automático en Cloudflare Pages      ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

echo [INFORMACIÓN]
echo • Se subirán todos los commits locales a GitHub
echo • GitHub Actions iniciará automáticamente
echo • Cloudflare Pages hará deploy en 2-3 minutos
echo • Tu app estará pública en la URL de Cloudflare
echo.

set /p CONFIRMAR="¿Deseas continuar? (S/N): "

if /i "%CONFIRMAR%"=="S" (
    echo.
    echo [EJECUTANDO] git push origin main
    git push origin main
    
    if errorlevel 0 (
        echo.
        echo ✅ [ÉXITO] Push completado
        echo.
        echo [PRÓXIMOS PASOS]
        echo • GitHub Actions procesando...
        echo • Abre: https://github.com/tunombre/recetas-app
        echo • Ve a "Actions" para ver el deploy
        echo • En 2-3 minutos estará en: https://recetas-app.pages.dev
        echo.
    ) else (
        echo.
        echo ❌ [ERROR] El push falló
        echo Posible causa: No tienes permisos o no estás logueado en Git
        echo.
    )
) else (
    echo [CANCELADO] Push no ejecutado
)

echo.
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:VER_HISTORIAL
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║          HISTORIAL DE COMMITS (VERSIONES)                ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

echo [ÚLTIMOS 10 COMMITS]
git log --oneline -10
echo.
echo ════════════════════════════════════════════════════════════
echo.
echo Estructura: [ID-corto] Mensaje de commit
echo Ejemplo:    a1b2c3d   feat: add image system
echo.
pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:VER_CAMBIOS
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║        CAMBIOS NO GUARDADOS (Sin Commit Aún)             ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

echo [ARCHIVOS MODIFICADOS SIN GUARDAR]
git diff --name-only
echo.

echo [ARCHIVOS SIN AGREGAR A GIT]
git ls-files --others --exclude-standard
echo.

pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:BACKGROUND
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║     INICIANDO SERVIDOR EN BACKGROUND (Sin ventana)       ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS\backend"

if not exist "node_modules" npm install

REM Iniciar en background
start /B npm start

echo [✓] Servidor iniciado en background
echo [✓] Proceso ejecutándose sin ventana visible
echo [✓] Abre en tu navegador: http://localhost:3000
echo.
echo [NOTA] Para detener el servidor:
echo       Abre el Administrador de tareas (Ctrl+Mayús+Esc)
echo       Busca "node" y terminarla
echo.
timeout /t 3 /nobreak
goto MENU

REM ═══════════════════════════════════════════════════════════
:VER_URL
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║          URLS DE LA APLICACIÓN                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd /d "c:\Users\YOFC\Downloads\RECETAS"

echo [URLS DISPONIBLES]
echo.
echo  LOCAL (Desarrollo):
echo  ► http://localhost:3000
echo    (Tu computadora solamente)
echo.

REM Try to get Cloudflare URL from git config or file
if exist ".git\config" (
    echo [BUSCANDO CLOUDFLARE PAGES...]
    for /f "delims=" %%i in ('git config --get remote.origin.url') do set REPO=%%i
    echo  RESPOSITORIO GITHUB: %REPO%
    echo.
    echo CLOUDFLARE PAGES (si está deployado):
    echo  ► https://recetas-app.pages.dev
    echo    (Público en internet)
    echo.
)

echo [PARA ACTUALIZAR CLOUDFLARE]
echo  1. Hazle cambios a la app
echo  2. Opción [3] - Hacer commit
echo  3. Opción [4] - Push a GitHub
echo  4. Espera 2-3 minutos
echo  5. Abre https://recetas-app.pages.dev para ver cambios
echo.

pause
goto MENU

REM ═══════════════════════════════════════════════════════════
:SALIR
REM ═══════════════════════════════════════════════════════════
cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║              HASTA LUEGO 👋                               ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Recuerda:
echo  • Guarda cambios con: git add . + git commit
echo  • Sube a GitHub con: git push origin main
echo  • Cloudflare Pages se actualiza automáticamente
echo.
exit /b
