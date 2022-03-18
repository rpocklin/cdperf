.ONESHELL:
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

.PHONY: build
build:
	docker build --no-cache --tag owncloud/cdperf-k6 src/k6
	docker run --rm -u 10501:10501 -v $(ROOT_DIR)/tests/k6:/cp -u 10501:10501 owncloud/cdperf-k6 cp -r . /cp
	chmod +x ./scripts/cdperf

.PHONY: local
local: clean
	cd src/k6 && yarn && yarn build
	mkdir -p tests/k6
	cp -R src/k6/dist/. tests/k6/

.PHONY: clean
clean:
	rm -rf ./tests

.PHONY: changelog
changelog:
	go run github.com/restic/calens -i ./changelog -t ./changelog/CHANGELOG.tmpl >| ./CHANGELOG.md