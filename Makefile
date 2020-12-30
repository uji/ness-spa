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

codegen:
	wget https://raw.githubusercontent.com/uji/ness-api-function/master/graph/schema.graphqls -O apollo/schema.graphqls
	yarn codegen
