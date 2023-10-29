#### Migrate DB

```
docker-compose exec web python manage.py migrate
```

#### Create Super User when running for the first time (ow whenever needed)

```
docker-compose exec web python manage.py createsuperuser
```

#### Build Image

```
docker-compose build
```

#### Run Docker containers

```
docker-compose up -d
```

#### Shut down Docker containers

```
docker-compose down
```

#### Work on PostgreSQL DB

```
docker compose exec db psql --username=mini_project_user --dbname=mini_project_db
```
