//
// Begin ZeroClipboard stuff
//
ZeroClipboard.config({
    forceHandCursor: true
});

var client = new ZeroClipboard($("button[data-clipboard-text]"));

client.on("error", function(e) {
});

client.on("ready", function(e) {

    client.on("aftercopy", function(e) {
    });
});