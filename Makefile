all: build

build:
	gulp

watch:
	gulp default:watch

deploy: build
	rsync -az public src vendor root@alfanofederica.com:/data/web/alfanofederica.com

