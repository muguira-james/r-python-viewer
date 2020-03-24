
instructions for how to build the python container
git init

heroku create pycomputer --stack heroku-16 --buildpack https://github.com/virtualstaticvoid/heroku-buildpack-r.git#heroku-16

git add .
git commit -m "string"
git push heroku master
heroku open