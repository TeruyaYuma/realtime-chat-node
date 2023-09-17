build:
	docker-compose -f docker-compose.build.yml build base

up:
	docker-compose up -d

logs:
	docker compose logs -f realtime-chat-compose