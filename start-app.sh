
#!/bin/bash

# Start Portfolio App
# Usage: ./start-app.sh

echo "🚀 Starting Portfolio App..."
echo ""

# Navigate to the script's directory
cd "$(dirname "$0")" || exit 1

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed!"
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed!"
    echo "   Please install npm (usually comes with Node.js)"
    exit 1
fi

echo "✓ Node.js $(node --version) detected"
echo "✓ npm $(npm --version) detected"
echo ""

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "   Make sure you're in the correct directory"
    exit 1
fi

# Kill any existing process on port 3000 and Next.js dev processes
echo "🔍 Checking for existing processes..."

# Kill Next.js dev processes first
pkill -f "next dev" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true

# Wait a moment for processes to terminate
sleep 1

# Then check and kill anything on port 3000
if lsof -ti:3000 >/dev/null 2>&1; then
    echo "⚠️  Port 3000 is in use, stopping existing process..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    sleep 2
    # Double-check it's killed
    if lsof -ti:3000 >/dev/null 2>&1; then
        echo "❌ Error: Could not free port 3000"
        echo "   Please manually stop the process using port 3000"
        exit 1
    fi
    echo "✓ Stopped existing process"
fi

echo "✓ Port 3000 is available"
echo ""
echo "📦 Checking dependencies..."

# Check if node_modules exists, if not run npm install with output
if [ ! -d "node_modules" ]; then
    echo "   Installing dependencies (this may take a moment)..."
    if ! npm install; then
        echo "❌ Error: Failed to install dependencies!"
        echo "   Try running 'npm install' manually"
        exit 1
    fi
else
    # Run npm install silently to update if needed
    # We use --legacy-peer-deps here just in case, matching previous manual installs
    if ! npm install --silent --legacy-peer-deps >/dev/null 2>&1; then
        echo "❌ Error: Failed to update dependencies!"
        echo "   Try running 'npm install' manually"
        exit 1
    fi
fi

echo "✓ Dependencies are ready"
echo ""

# Run Ingestion Check (Optional but good for verifying env vars)
if [ -f "scripts/ingest-data.ts" ] && [ -f ".env.local" ]; then
    echo "🧠 Verifying Knowledge Base..."
    # We won't block on this, just a check
    echo "   (Skipping auto-ingestion to save time, run 'npm run ingest' if you updated resume)"
fi

echo ""
echo "🏗️  Building application..."
if ! npm run build; then
    echo "❌ Error: Build failed!"
    exit 1
fi
echo "✓ Build successful"
echo ""

echo "🎯 Starting Next.js development server..."
echo "   URL: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npm run dev
