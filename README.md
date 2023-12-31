![Static Badge](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white) ![Static Badge](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) ![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Static Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Static Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Static Badge](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white) 
# The Mini Store

## Description
-----------
This is a mini e-commerce portal project.
This project uses django as backend and React as fronend, decoupled. The backend runs at port "8000", and frontend runs at "3000".
This project uses minIO as image storage technology, and runs on port 9000. The files can be viewed in browser by the url: `http://localhost:9001` and then by signing in with username and password.
This project uses PostgreSQL as DB.
This project uses Redis for caching.
This project uses Celery (with Redis as message broker) as task queue.

## Steps to Run
1. Clone the repo
2. Build the docker images: `docker-compose build`
3. Run the containers: `docker-compose up -d`
4. (For 1st time) Create a superuser: `docker-compose exec django python manage.py createsuperuser`
5. (For 1st time) Run fixture: `docker-compose exec django python manage.py loaddate productdata`
6. Open Browser and goto: `http://localhost:3000`
7. Shut down docker containers: `docker-compose down`


## Additional commands
#### Collect static

```bash
docker-compose exec django python manage.py collectstatic
```

#### Create Migrations

```bash
docker-compose exec djano python manage.py makemigrations
```

#### Migrate DB

```bash
docker-compose exec django python manage.py migrate
```

#### Work on PostgreSQL DB

```bash
docker compose exec db psql --username=mini_project_user --dbname=mini_project_db
```
