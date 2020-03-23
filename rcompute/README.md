See https://github.com/virtualstaticvoid/heroku-buildpack-r/issues/107

git init

heroku create app-computer2 --stack heroku-16 --buildpack https://github.com/virtualstaticvoid/heroku-buildpack-r.git#heroku-16

git add .
git commit -m "string"
git push heroku master
heroku open