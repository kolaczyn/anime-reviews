# Anime Reviews Backend

## Setup

I use SQLite in dev and PostgreSQL in production
If you use PostgreSQL, fill in the details in `.env`, based on `.env.example`.  
If you omit `DATABASE_CLIENT` variable, Strapi will use SQLite.

## How tu run

```sh
yarn dev
```

## TODO

Files in docker most likely get rekt with the container, fix that.
Also, store volume in e.g. /home/pawel/vols/strapi-psql-data instead of strapi-psql-data and let Docker manager where the data is for me