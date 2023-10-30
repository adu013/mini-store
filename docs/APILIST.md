## Account

- Login
```curl
curl --location 'http://localhost:8000/api/accounts/login/' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
    "username": "user",
    "password": "password"
}'
```

## Product: Admin User
- List All Products
```curl
curl --location 'http://localhost:8000/api/stores/products/' \
--header 'Authorization: Token <token>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json'
```

- View Detail of a Product
```curl
curl --location 'http://localhost:8000/api/stores/products/<id>' \
--header 'Authorization: Token <token>' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json'
```

- Add a product
```curl
curl --location 'http://localhost:8000/api/stores/products/' \
--header 'Authorization: Token <token>' \
--form 'name="<Name of product>"' \
--form 'description="Description"' \
--form 'price="134"' \
--form 'img="<file-path>"'
```

- Update a product
```curl
curl --location --request PATCH 'http://localhost:8000/api/stores/products/<id>/' \
--header 'Authorization: Token <token>' \
--header 'Accept: application/json' \
--form 'description="New Description"'
```

- Delete a product
```curl
curl --location --request DELETE 'http://localhost:8000/api/stores/products/<id>/' \
--header 'Authorization: Token <token>'
```
