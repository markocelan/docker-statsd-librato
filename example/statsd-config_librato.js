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
, backends: ["./backends/librato", ]

//
//      -[backend]- Librato settings
//
, librato: {
    email: ''+process.env.LIBRATO_EMAIL,
    token: ''+process.env.LIBRATO_TOKEN,
    sourceRegex: /^([^\.]+)\./,
    alwaysSuffixPercentile: true,
    defaultPercentileName: '100',
  }

}
