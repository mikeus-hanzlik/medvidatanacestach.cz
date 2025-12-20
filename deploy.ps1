# Deploy script for medvidatanacestach.cz
# Deploys build output to Raspberry Pi via PSCP (PuTTY SCP)

$ErrorActionPreference = "Stop"

# Configuration
$SSH_KEY = "C:\Users\micha\.ssh\raspberry.ppk"
$SSH_USER = "mikeus"
$SSH_HOST = "192.168.0.181"
$SSH_PORT = "43659"
$REMOTE_PATH = "/var/www/html/"
$BUILD_DIR = "build"

Write-Host "=== Medvidatanacestach.cz Deploy Script ===" -ForegroundColor Cyan

# Step 1: Build the project
Write-Host "`n[1/3] Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Build completed successfully." -ForegroundColor Green

# Step 2: Run tests
Write-Host "`n[2/3] Running tests..." -ForegroundColor Yellow
npm run test:run
if ($LASTEXITCODE -ne 0) {
    Write-Host "Tests failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Tests passed." -ForegroundColor Green

# Step 3: Deploy to Raspberry Pi
Write-Host "`n[3/3] Deploying to Raspberry Pi..." -ForegroundColor Yellow
Write-Host "Target: $SSH_USER@${SSH_HOST}:$REMOTE_PATH" -ForegroundColor Gray

# Use pscp to copy files (will prompt for passphrase)
pscp -r -i $SSH_KEY -P $SSH_PORT "$BUILD_DIR\*" "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Deployment completed successfully! ===" -ForegroundColor Green
Write-Host "Site: https://medvidatanacestach.cz" -ForegroundColor Cyan
