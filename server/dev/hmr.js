require("chokidar-socket-emitter")({
  port: require("../config.json").port.hmr,
  path: "src",
  chokidar: {
    ignored: /___jb.*$/ // IntelliJ Idea creates and removes a temporary file on each save
  }
});