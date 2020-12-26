init:
	docker volume create ness-spa
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

start:
	docker-compose start

stop:
	docker-compose stop

bash:
	make up
	docker-compose exec app bash

clean:
	make down
	docker volume rm ness-spa
