.PHONY: usage, start

OK_COLOR=\033[32;01m
NO_COLOR=\033[01m

DOCKER_COMPOSE := docker-compose

## usage: show available actions.
usage: Makefile
	@echo "to use make call:"
	@echo "make <action>"
	@echo ""
	@echo "list of available actions:"
	@sed -n 's/^##//p' $< | column -t -s ':' | sed -e 's/^/ /'

## start: start application - create and start container.
start:
	@echo "$(OK_COLOR)==> Starting docker compose $(NO_COLOR)"
	$(DOCKER_COMPOSE) up --build
