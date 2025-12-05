# DevOps

DevOps project that ties together a small API, frontend and a full Docker-based infrastructure with reverse proxying, monitoring and CI/CD.

[![API validation](https://github.com/avans-devops/devops-workshops-ferrannl/actions/workflows/api.yml/badge.svg)](https://github.com/avans-devops/devops-workshops-ferrannl/actions/workflows/api.yml)
[![Frontend validation](https://github.com/avans-devops/devops-workshops-ferrannl/actions/workflows/frontend.yml/badge.svg)](https://github.com/avans-devops/devops-workshops-ferrannl/actions/workflows/frontend.yml)

> _Integrated quality · Continuous integrity · Continuous deployment · Docker · Orchestration · Continuous monitoring · Disposability_

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

This repository is a small DevOps playground / assessment project that shows how to:

- Develop a simple API and frontend
- Containerize all components with Docker
- Orchestrate them with `docker-compose`
- Expose the application through Nginx
- Collect metrics with Prometheus
- Visualize and explore those metrics with Grafana
- Validate changes using CI workflows on GitHub Actions

The focus is on **DevOps practices** and **infrastructure** rather than complex business logic.

---

## Architecture

High-level components:

- **API (`/api`)**  
  A Node.js / TypeScript API service. It exposes endpoints that are used by the frontend and exports metrics that can be scraped by Prometheus.

- **Frontend (`/frontend`)**  
  A TypeScript/HTML/SCSS frontend that consumes the API and is served behind Nginx.

- **Nginx (`/nginx`)**  
  Acts as a reverse proxy in front of the API and frontend.  
  Typical responsibilities:
  - Routing traffic to the API
  - Serving the built frontend
  - Handling static assets

- **Prometheus (`/prometheus`)**  
  Scrapes metrics from the API and any other instrumented services.

- **Grafana (`/grafana`)**  
  Uses Prometheus as a data source and renders dashboards for:
  - Node.js metrics
  - MongoDB metrics (via community dashboards)

- **GitHub Actions (`/.github/workflows`)**  
  CI workflows that validate the API and frontend (build/lint/test) on each push/pull request.

All of these are wired together through **`docker-compose.yml`**.

---

## Features

The project is designed around the following DevOps concepts:

- **Integrated quality**  
  - Build and validation steps for both the API and the frontend  
  - Automated checks via GitHub Actions

- **Continuous integrity**  
  - Reproducible environments through Docker images and `docker-compose`
  - Same setup for local development and demos

- **Continuous deployment (with containerization)**  
  - All services are dockerized
  - One command to spin up the full stack

- **Docker & orchestration**  
  - Multi-service stack defined in `docker-compose.yml`
  - Ability to scale individual services (e.g. API replicas)

- **Continuous monitoring**  
  - Prometheus scraping service metrics  
  - Grafana dashboards for visualizing application and DB metrics

- **Disposability**  
  - Containers are stateless/ephemeral where possible  
  - Easy tear-down and recreation of the full environment

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)  
- (Optional) Node.js + npm/yarn if you want to run API/frontend standalone

### Run with Docker Compose

Clone the repo and start the full stack:

```bash
git clone https://github.com/ferrannl/DevOps.git
cd DevOps

# Build and start all services in the background
docker-compose up -d
