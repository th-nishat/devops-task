\# DevOps Engineer Practical Task



\## Overview

This project demonstrates a simple production-style system with API, containerization, CI/CD, reverse proxy, and monitoring.



\---



\## API

\- GET /status

\- POST /data



\---



\## Architecture

Client → Nginx → App Containers



\---



\## Containerization

Docker is used to containerize the app for consistent deployment.



\---



\## Deployment

Docker Compose is used to run app + nginx.



\---



\## Zero Downtime

New container starts before old one stops.



\---



\## Monitoring

\- App logs

\- Docker logs

\- /status health check



\---



\## Handling 100 req/sec

System uses:

\- Stateless design

\- Multiple containers

\- Nginx load balancing



Scaling increases capacity.

