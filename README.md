
This is a complete app deployed to heroku

client is the front end
server is the express server that will deploy the frontend
pycompute is the python server code
rcompute is the R server code

to build the UI

cd client && npm i && npm run build && cp -R ./build ../server && cd ..

cd server && npm i &&  docker build --tag hero-s .

To get the containers on heroku

docker build --tag hero .

docker run --rm  --name hero1 -p 8090:8090 -e "PORT=8090" hero 

heroku create rcompute

heroku  container:push web --app=rcompute

heroku container:release web --app=rcompute

heroku  open

heroku  open --app=rcompute

