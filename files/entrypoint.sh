#!/bin/bash

# Fail hard and fast
set -eo pipefail
CFG_URL=${CONFIG_URL:-https://raw.githubusercontent.com/markocelan/docker-statsd-librato/master/example/statsd-config_default.js}


# this allows you to mount local config
# (for example add -v /mnt/statsd/statsd-config.js:/statsd-config.js  to your docker `run` command)
test -f /statsd-config.js || curl -L -k "$CFG_URL" > /statsd-config.js


# default values for graphite
export GRAPHITE_HOST=${GRAPHITE_HOST:-graphite}
export GRAPHITE_PORT=${GRAPHITE_PORT:-2003}
# there are no default values for Librato
# LIBRATO_EMAIL
# LIBRATO_TOKEN

exec /app/statsd/bin/statsd /statsd-config.js
