# VPS Deployment Guide: PC Repair Shop

This guide outlines the steps to deploy the PC Repair Shop application to a Virtual Private Server (VPS) using Docker and Docker Compose.

## Prerequisites

1.  **A VPS**: You need a VPS running Linux (e.g., Ubuntu 22.04 or 24.04).
2.  **SSH Access**: You must be able to SSH into your VPS.
3.  **Domain Name (Optional but Recommended)**: A domain name pointing to your VPS's IP address.

## Step 1: Install Docker and Docker Compose on your VPS

1.  SSH into your VPS.
2.  Update your package list:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
3.  Install Docker:
    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    ```
4.  (Optional but recommended) Add your user to the docker group so you don't need to use `sudo` for every docker command:
    ```bash
    sudo usermod -aG docker $USER
    # You will need to log out and log back in for this to take effect
    ```
5.  Docker Compose is now included as a plugin with Docker, verify it's installed:
    ```bash
    docker compose version
    ```

## Step 2: Transfer your code to the VPS

You need to copy your project files to the VPS. You can use several methods:

**Method A: Git (Recommended)**
1.  Push your code to a repository (GitHub, GitLab, etc.).
2.  On your VPS, clone the repository:
    ```bash
    git clone <your-repo-url>
    cd pc-repair-shop
    ```

**Method B: SCP / SFTP**
1.  Copy your files directly using `scp` from your local machine:
    ```bash
    scp -r C:\Users\lucas\.gemini\antigravity\scratch\pc-repair-shop user@your-vps-ip:/path/to/destination
    ```

## Step 3: Build and Run the Application

1.  Navigate to your project directory on the VPS where the `docker-compose.yml` is located:
    ```bash
    cd /path/to/pc-repair-shop
    ```
2.  Build and start the container in detached mode (-d):
    ```bash
    docker compose up -d --build
    ```
3.  **Note**: The build process will automatically run your Vitest tests (`npm run test -- --run`) as defined in Stage 2 of the `Dockerfile`. If any tests fail, the build will fail, preventing a broken application from being deployed.

## Step 4: Verification

1.  Check the status of your containers:
    ```bash
    docker ps
    ```
    You should see the `pc-repair-shop-app` running and bound to port 80.
2.  Open a web browser and navigate to your VPS's IP address or your domain name:
    ```
    http://your-vps-ip
    ```
    You should see your PC Repair Shop application.

## Troubleshooting

-   **To view logs**: `docker compose logs -f`
-   **To stop the application**: `docker compose down`
-   **To rebuild after making changes**: `docker compose up -d --build`
