FROM hero-s

WORKDIR /app

COPY myfile.R .
COPY script.R .


CMD R -e "source('/app/script.R')"