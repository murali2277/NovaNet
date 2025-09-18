# NovaNet - LAN Auto-Installer

NovaNet is a full-stack solution designed to automate software distribution and installation across a Local Area Network (LAN). It consists of a powerful client-server desktop application built with Python and PyQt5, and a modern web portal built with React for downloading the application bundle.

**Live Demo of the Download Portal:** [https://nova-net.netlify.app/](https://nova-net.netlify.app/)

## The Problem
Manually installing or updating software on multiple computers within a network is a tedious, time-consuming, and error-prone process for IT administrators.

## The Solution
NovaNet streamlines this entire workflow with a centralized, automated system:

1.  **Server Application (PyQt5):** An administrator places an executable file (e.g., a software installer) into the NovaNet server application.
2.  **Client Application (PyQt5):** The server automatically detects and pushes the file to all connected client machines on the same network.
3.  **Automatic Installation:** The client application receives the file and executes the installation silently in the background, requiring no user intervention.

## Key Features

### Core Application (Python/PyQt5)
-   **Client-Server Architecture:** A robust system for reliable file transfer over the network.
-   **Automated File Push:** The server automatically distributes files to all connected clients.
-   **Silent Installation:** Client-side application handles the installation process automatically.

### Download Portal (React)
-   **Modern & Responsive UI:** A clean, user-friendly interface built with React and Vite.
-   **Centralized Download:** A single, accessible point for users to download the client/server application bundle.
-   **Smooth Scrolling & Navigation:** Built with `react-router` and `react-router-hash-link` for a seamless user experience.

## Tech Stack

-   **Core Desktop Application:**
    -   Python
    -   PyQt5
-   **Download Portal Website:**
    -   React
    -   Vite
    -   JavaScript
    -   HTML5 & CSS3

## Getting Started

### Prerequisites
-   Node.js and npm
-   Python 3.x and pip

### Running the Website Locally
1.  Clone the repository:
    ```bash
    git clone https://github.com/murali2277/NovaNet.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd NovaNet/lan-auto
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    The website will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Running the Core Application
*(These are general instructions. You may need to adapt them based on your specific file names and setup.)*

1.  Navigate to the directory containing the Python application.
2.  Install required Python packages:
    ```bash
    pip install PyQt5
    ```
3.  Run the server application on the host machine:
    ```bash
    python server.py 
    ```
4.  Run the client application on other machines in the network:
    ```bash
    python client.py
