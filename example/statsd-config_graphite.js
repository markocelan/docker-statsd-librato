{
//
//    Common statsd settings
//
  port: 8125
, mgmt_port: 8126
, flushInterval: 10000
, percentThreshold:[95,99]
, deleteIdleStats: true

//
//    Defined backends:
//
, backends: ["./backends/graphite", ]


//
//      -[backend]- Graphite settings
//
, graphitePort: process.env.GRAPHITE_PORT
, graphiteHost: process.env.GRAPHITE_HOST
, graphite: {
    globalPrefix: 'stats.' + require('os').hostname()
    , legacyNamespace: false
  }

}
