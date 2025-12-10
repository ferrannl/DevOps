# DevOps Playground Project

A DevOps project that ties together a small API, frontend, and a full Docker-based infrastructure with reverse proxying, monitoring, and CI/CD.  
The focus is on **DevOps practices and infrastructure** rather than complex business logic.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Run with Docker Compose](#run-with-docker-compose)
  - [Scaling the API](#scaling-the-api)
- [Project Structure](#project-structure)
- [Monitoring & Dashboards](#monitoring--dashboards)
- [DevOps Assessment Model](#devops-assessment-model)
- [Ideas for Improvement](#ideas-for-improvement)
- [License](#license)

---

## Overview

This repository is a small **DevOps playground / assessment project** that demonstrates how to:

- Develop a simple API and frontend  
- Containerize all components with Docker  
- Orchestrate them with `docker-compose`  
- Expose the application through **Nginx**  
- Collect metrics with **Prometheus**  
- Visualize and explore those metrics with **Grafana**  
- Validate changes using **CI workflows on GitHub Actions**

---

## Architecture

High-level components:

- **API (`/api`)**  
  Node.js / TypeScript API service. Exposes endpoints consumed by the frontend and exports metrics for Prometheus.

- **Frontend (`/frontend`)**  
  TypeScript/HTML/SCSS frontend that consumes the API and is served behind Nginx.

- **Nginx (`/nginx`)**  
  Reverse proxy in front of the API and frontend. Handles:
  - Routing traffic to the API  
  - Serving the built frontend  
  - Handling static assets  

- **Prometheus (`/prometheus`)**  
  Scrapes metrics from the API and other instrumented services.

- **Grafana (`/grafana`)**  
  Uses Prometheus as a data source and renders dashboards for:
  - Node.js metrics  
  - MongoDB metrics (via community dashboards)  

- **GitHub Actions (`/.github/workflows`)**  
  CI workflows that validate the API and frontend (build/lint/test) on each push/pull request.

All services are wired together through `docker-compose.yml`.

---

## Features

The project is designed around core DevOps concepts:

- **Integrated quality**  
  - Build and validation steps for both API and frontend  
  - Automated checks via GitHub Actions  

- **Continuous integrity**  
  - Reproducible environments through Docker images and `docker-compose`  
  - Same setup for local development and demos  

- **Continuous deployment**  
  - All services are dockerized  
  - One command to spin up the full stack  

- **Docker & orchestration**  
  - Multi-service stack defined in `docker-compose.yml`  
  - Ability to scale individual services (e.g., API replicas)  

- **Continuous monitoring**  
  - Prometheus scraping service metrics  
  - Grafana dashboards for application and DB metrics  

- **Disposability**  
  - Containers are stateless/ephemeral where possible  
  - Easy tear-down and recreation of the full environment  

---

## Getting Started

### Prerequisites

- Docker  
- Docker Compose  
- (Optional) Node.js + npm/yarn if you want to run API/frontend standalone  

---

### Run with Docker Compose

Clone the repo and start the full stack:

```bash
git clone https://github.com/ferrannl/DevOps.git
cd DevOps

# Build and start all services in the background
docker-compose up -d
```

---

### Scaling the API

You can scale the API service horizontally by running:

```bash
docker-compose up -d --scale api=3
```

This will start 3 replicas of the API behind Nginx.

---

## Project Structure

```text
DevOps/
├── api/                # Node.js / TypeScript API service
├── frontend/           # TypeScript/HTML/SCSS frontend
├── nginx/              # Reverse proxy configuration
├── prometheus/         # Prometheus config
├── grafana/            # Grafana dashboards
├── .github/workflows/  # GitHub Actions CI/CD workflows
├── docker-compose.yml  # Orchestration file
├── DevOps beoordelingsmodel.png
├── logo.jpeg
└── README.md
```

---

## Monitoring & Dashboards

- **Prometheus** scrapes metrics from the API and other services.  
- **Grafana** visualizes metrics with dashboards, including:
  - Node.js runtime metrics  
  - MongoDB metrics (via community dashboards)  

---

## DevOps Assessment Model

The repository includes a diagram (`DevOps beoordelingsmodel.png`) that illustrates the evaluation model used for this project.  
It highlights the principles of **Integrated Quality, Continuous Integrity, Continuous Deployment, Monitoring, Orchestration, and Disposability**.

---

## Ideas for Improvement

- Add alerting rules in Prometheus  
- Expand Grafana dashboards with custom panels  
- Introduce automated deployment pipelines beyond GitHub Actions (e.g., ArgoCD, GitLab CI)  
- Add logging stack (ELK or Loki)  
- Harden Nginx configuration for production use  

---

## License

No explicit license is included in this repository.  
By default, all rights are reserved to the author(s).  

If you intend to reuse or redistribute the code, please contact the repository owner or add an appropriate open-source license.

---
```
