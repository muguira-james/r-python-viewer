

cd client && npm i &&  npm run build &&  cp -R build ../server && cd ..
cd server && npm i &&  heroku create r-python-viewer && heroku container:push web --app=r-python-viewer && heroku container:release web --app=r-python-viewer &&  cd ..
cd rcompute &&  heroku create rcompute && heroku container:push web --app=rcompute  && heroku container:release web --app=rcompute && cd ..
cd pycompute && 
