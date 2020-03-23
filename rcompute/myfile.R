# taken from example on https://www.rplumber.io/

#* @get /hello
hello <- function() {
  return("hello")
}

#* @get /describe
desc <- function(v) {
  f <- fromJSON(v)
  print(c("v -> ", f$v))
  sd.val <- sd(f$v)
  mean.val <- mean(f$v)
  max.val <- max(f$v)
  min.val <- min(f$v)
  quan.val <- quantile(f$v)

  return(list(c("mean=", mean.val, " max=", max.val, " min=", min.val, " quantile=", quan.val)))
}

#* @get /mean
normalMean <- function(v)  {

  # if(io.json == TRUE)
  # {
  #   v <- fromJSON(v)
  # }

  # if(io.json == TRUE)
  # {
  #   return(toJSON(mean(v)))
  # }
  # else
  # {
  #   return(mean(v))
  # }
  f <- fromJSON(v)
  print(c("v -> ", f$v))
  return(list(c("mean", mean(f$v))))
}

#* @post /sum
addTwo <- function(a, b){
  as.numeric(a) + as.numeric(b)
}


desc.stats.getmode <- function(v, io.json = FALSE) 
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  uniqv <- unique(v)
  mode.val <- uniqv[which.max(tabulate(match(v, uniqv)))]
  
  if(io.json == TRUE)
  {
    return(toJSON(mode.val))
  }
  else
  {
    return(mode.val)
  }
}

#* @post /stdv
desc.stats.getSD <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  sd.val <- sd(v)
  if(io.json == TRUE)
  {
    return(toJSON(sd.val))
  }
  else
  {
    return(sd.val)
  }
}

#* @post /max
desc.stats.getMax <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  max.val <- max(v)
  
  if(io.json == TRUE)
  {
    return(toJSON(max.val))
  }
  else
  {
    return(max.val)
  }
}

#* @post /min
desc.stats.getMin <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  min.val <- min(v)
  if(io.json == TRUE)
  {
    return(toJSON(min.val))
  }
  else
  {
    return(min.val)
  }
}

#* @post /median
desc.stats.getMedian <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  med.val <- median(v)
  
  if(io.json == TRUE)
  {
    return(toJSON(med.val))
  }
  else
  {
    return(med.val)
  }
}

#* @post /range
desc.stats.getRange <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  range.val <- range(v)
  if(io.json == TRUE)
  {
    return(toJSON(range.val))
  }
  else{
    return(range.val)
  }
}

#* @post /quantile
desc.stats.getQuantile <- function(v, io.json = FALSE)
{
  if(io.json == TRUE)
  {
    v <- fromJSON(v)
  }
  quan.val <- quantile(v)
  if(io.json == TRUE)
  {
    return(toJSON(quan.val))
  }
  else
  {
    return(quan.val)
  }
}