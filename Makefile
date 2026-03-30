.PHONY: setup start test

setup:
	cp -n .env.example .env
	docker-compose up -d db
	docker-compose run --rm app make setup

start:
	docker-compose up

test:
	docker-compose run --rm app make test