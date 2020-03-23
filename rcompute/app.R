library(plumber)

port <- Sys.getenv('PORT')

r <- plumb("/app/myfile.R")
print(c("my port ->", port))
r$run(host="0.0.0.0", port=strtoi(port))
