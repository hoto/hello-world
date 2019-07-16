[![](https://images.microbadger.com/badges/image/hoto/hello-world.svg)](https://microbadger.com/images/hoto/hello-world "Get your own image badge on microbadger.com")
# Docker + nodejs hello world

* Run Docker from Hub
        
        docker pull hoto/hello-world:latest
        docker run -p 8080:8080 hoto/hello-world

* Run Docker from source

        git clone git@github.com:hoto/hello-world.git

        # in dev mode
        docker-compose up

        # in production mode
        docker-compose -f docker-compose.yml up

* Open browser

        localhost:8080
        localhost:8080/test

        test
