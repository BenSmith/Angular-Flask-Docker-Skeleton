
You will need docker, node, npm, and @angular/cli installed to run this demo.

From your command line, navigate to the project's root directory and execute:

cd client && npm install && ng build --prod && cd .. && docker-compose build && docker-compose up


At this point, you should be able to reach the project at your usual docker URL (usually http://localhost/)




The front-end of this project is built atop (with much gratitude) https://github.com/mrsan22/Angular-Flask-Docker-Skeleton

See the file README.Angular.Seed.md for that project's details 
