#!/bin/bash
# Script para completar la configuración del repositorio Landing en Gitea
# Ejecutar después de crear el repositorio en Gitea UI

echo "🚀 Configurando repositorio Landing en Gitea..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "README.md" ] || [ ! -d ".gitea" ]; then
	echo "❌ Error: No estás en el directorio landing/"
	echo "Ejecuta: cd /home/el-papetoh/Documentos/work/Dev/Klynn/apps/landing"
	exit 1
fi

# Cambiar a rama master y hacer push
echo "📤 Push de rama master..."
git checkout master
git push -u origin master

# Cambiar a rama develop y hacer push
echo "📤 Push de rama develop..."
git checkout develop
git push -u origin develop

echo ""
echo "✅ Repositorio Landing configurado correctamente!"
echo ""
echo "📋 Resumen:"
echo "  - Repositorio: git@git.getklynn.com:Klynn/Landing.git"
echo "  - Rama master: Producción"
echo "  - Rama develop: Integración"
echo "  - URL: https://git.getklynn.com/Klynn/Landing"
echo ""
echo "🚀 Workflows configurados:"
echo "  - ci.yml: Build & Test en push/PR"
echo "  - develop.yml: Validación de PRs a develop"
echo "  - master.yml: Deploy, release y backmerge"
echo ""
echo "🐳 Docker configurado:"
echo "  - Producción: docker-compose.yml"
echo "  - Desarrollo: docker-compose.develop.yml"
echo "  - Dominio: dev.landing.getklynn.com"
