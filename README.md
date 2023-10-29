#### Collect static

```bash
docker-compose exec web python manage.py collectstatic
```

#### Create Migrations

```bash
docker-compose exec web python manage.py makemigrations
```

#### Migrate DB

```bash
docker-compose exec web python manage.py migrate
```

#### Create Super User when running for the first time (ow whenever needed)

```bash
docker-compose exec web python manage.py createsuperuser
```

#### Build Image

```bash
docker-compose build
```

#### Run Docker containers

```bash
docker-compose up -d
```

#### Shut down Docker containers

```bash
docker-compose down
```

#### Work on PostgreSQL DB

```bash
docker compose exec db psql --username=mini_project_user --dbname=mini_project_db
```
