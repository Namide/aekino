install:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		-e NPM_CONFIG_PREFIX=/home/node/.npm-global \
		node \
		npm install

fbx:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		node \
		npm run fbx

build:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		node \
		npm run build

dev-basics:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		-p 5173:5173 \
		node \
		npm run dev-basics

dev-load:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		-p 5173:5173 \
		node \
		npm run dev-load

dev-relationship:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-w /usr/src/app \
		-p 5173:5173 \
		node \
		npm run dev-relationship

code:
	docker run -ti --rm \
		-u "node" \
		-v $(shell pwd)\:/usr/src/app \
		-e NPM_CONFIG_PREFIX=/home/node/.npm-global \
		-w /usr/src/app \
		node \
		bash
