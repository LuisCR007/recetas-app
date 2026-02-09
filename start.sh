#!/bin/bash

# Script de inicio rápido para desarrollo local con Docker

echo "🍳 Bienvenido a Recetas App"
echo "================================"
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir con color
print_step() {
    echo -e "${GREEN}[PASO]${NC} $1"
}

# Función para imprimir advertencias
print_warning() {
    echo -e "${YELLOW}[INFO]${NC} $1"
}

# Verificar Docker
print_step "Verificando Docker..."
if ! command -v docker &> /dev/null; then
    print_warning "Docker no está instalado. Instálalo desde https://www.docker.com"
    exit 1
fi
echo "✓ Docker encontrado"
echo ""

# Opción del usuario
echo "¿Qué deseas hacer?"
echo "1) Desarrollo local (npm)"
echo "2) Ejecutar con Docker"
echo "3) Ejecutar con Docker Compose"
echo "4) Ver logs del contenedor"
echo "5) Detener contenedores"
echo ""
read -p "Selecciona una opción (1-5): " option

case $option in
    1)
        print_step "Iniciando desarrollo local..."
        cd backend
        npm install
        npm start
        ;;
    2)
        print_step "Construyendo imagen Docker..."
        docker build -t recetas-app:1.0 .
        
        print_step "Iniciando contenedor..."
        docker run -d -p 3000:3000 --name recetas-container recetas-app:1.0
        
        echo "✓ Aplicación disponible en http://localhost:3000"
        echo ""
        print_warning "Ver logs: docker logs recetas-container"
        print_warning "Detener: docker stop recetas-container"
        ;;
    3)
        print_step "Iniciando docker-compose..."
        docker-compose up -d
        
        echo "✓ Aplicación disponible en http://localhost:3000"
        echo "✓ Frontend en http://localhost:3001"
        ;;
    4)
        print_step "Mostrando logs..."
        docker logs -f recetas-container
        ;;
    5)
        print_step "Deteniendo y removiendo contenedores..."
        docker-compose down 2>/dev/null
        docker stop recetas-container 2>/dev/null
        docker rm recetas-container 2>/dev/null
        echo "✓ Contenedores detenidos"
        ;;
    *)
        echo "Opción inválida"
        exit 1
        ;;
esac
