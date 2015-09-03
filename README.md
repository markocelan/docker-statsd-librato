# statsd-librato
Simple docker container with Etsy statsd and librato backend pre-installed.

Latest docs: https://github.com/markocelan/docker-statsd-librato

**Important note:** _You **can** run this container for Graphite only backend too_


--------
This docker is build with configurability in mind. It does this by allowing you to either:

  * using default config (which will download https://raw.githubusercontent.com/markocelan/docker-statsd-librato/master/example/statsd-config_librato.js at runtime)
  * pass CONFIG_URL parameter (downloaded at runtime)
  * mount local config from docker host

Also, example configs provide you a way to configure StatsD daemon by passing env variables. Valid env vars for example configs are:
  * GRAPHITE_HOST
  * GRAPHITE_PORT
  * LIBRATO_EMAIL
  * LIBRATO_TOKEN


### simple usage examples:
  * run statsd-librato with **default** config (both backends are enabled)
```bash
docker run  -e GRAPHITE_HOST=graphite.example.com \
            -e LIBRATO_EMAIL=your@email.com \
            -e LIBRATO_TOKEN=XXXX_YOUR_LIBRATO_TOKEN_XXXX \
            -p 8125:8125/udp \
            markocelan/statsd-librato
```

  * run statsd-librato with **librato-only** config
```bash
docker run  -e LIBRATO_EMAIL=your@email.com \
            -e LIBRATO_TOKEN=XXXX_YOUR_LIBRATO_TOKEN_XXXX \
            -e CONFIG_URL="https://raw.githubusercontent.com/markocelan/docker-statsd-librato/master/example/statsd-config_librato.js" \
            -p 8125:8125/udp \
            markocelan/statsd-librato
```

  * run statsd-librato with **graphite-only** config
```bash
docker run  -e GRAPHITE_HOST=localhost \
            -e GRAPHITE_HOST=2003 \
            -e CONFIG_URL="https://raw.githubusercontent.com/markocelan/docker-statsd-librato/master/example/statsd-config_graphite.js" \
            -p 8125:8125/udp \
            markocelan/statsd-librato
```


### advanced usage examples:
* you can run container with your own custom config, using custom environment variables
```bash
docker run  -e CUSTOM_VAR1="something" \
            -e CUSTOM_VAR2="something else" \
            -e CONFIG_URL="https://URL_TO_YOUR_OWN/statsd-config.js" \
            -p 8125:8125/udp \
            markocelan/statsd-librato
```

  * if you are not comfortable downloading config file via network you can 'mount' it at runtime from Docker host
```bash
docker run -v FULL_PATH_TO_YOUR/statsd-config.js:/statsd-config.js markocelan/statsd-librato
```

