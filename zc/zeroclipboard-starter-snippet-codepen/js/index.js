//
// Begin ZeroClipboard stuff
//

var client = new ZeroClipboard($("button[data-clipboard-text]"));

client.on("ready", function(e) {
	console.log('in ready1');
    client.on("aftercopy", function(e) {
    });
});