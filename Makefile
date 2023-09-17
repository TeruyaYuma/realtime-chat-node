build:
	docker-compose -f docker-compose.build.yml build base

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker compose logs -f realtime-chat-compose