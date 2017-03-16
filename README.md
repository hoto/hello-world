# Docker + nodejs hello world

* Run Docker from Hub
        
        docker pull hoto/hello-world:latest
        docker run -p 3000:3000 hoto/hello-world

* Run Docker from source

        git clone git@github.com:hoto/hello-world.git

        # in dev mode
        docker-compose up

        # in production mode
        docker-compose -f docker-compose.yml up

* Open browser

        localhost:3000
        localhost:3000/test
