# Docker + nodejs basic application for `docker`/`docker-compose`/`elasticbeanstalk` testing.

Prerequisites:
* docker 1.11.1+
* docker-compose 1.6.2+
* eb cli 3.7.6+ (python 2.7.6+)

* Run Docker

        # in dev mode
        docker-compose up

        # in production mode
        docker-compose -f docker-compose.yml up

* Open in browser

> localhost:3000
> localhost:3000/test


### Deploying using AWS ElasticBeanstalk
* For reference see: https://github.com/awslabs/eb-docker-nginx-proxy
