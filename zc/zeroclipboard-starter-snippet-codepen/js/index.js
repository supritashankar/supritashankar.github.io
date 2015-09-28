//
// Begin ZeroClipboard stuff
//

var client = new ZeroClipboard($("button[data-clipboard-text]"));

client.on("ready", function(e) {

    client.on("aftercopy", function(e) {
    });
});