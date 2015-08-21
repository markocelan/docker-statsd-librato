{
//
//    Common statsd settings
//
  port: 8125
, mgmt_port: 8126
, flushInterval: 10000
, percentThreshold:[5,50,95,99]
, deleteIdleStats: true

//
//    Defined backends:
//
, backends: ["./backends/graphite", "./backends/librato", ]


//
//      -[backend]- Graphite settings
//
, graphitePort: process.env.GRAPHITE_PORT
, graphiteHost: process.env.GRAPHITE_HOST
, globalPrefix: 'stats.' + require('os').hostname()
, legacyNamespace: false

//
//      -[backend]- Librato settings
//
, librato: {
    email: process.env.LIBRATO_EMAIL,
    token: process.env.LIBRATO_TOKEN,
    sourceRegex: /^([^\.]+)\./,
    alwaysSuffixPercentile: true,
    defaultPercentileName: '100',
  }

}
