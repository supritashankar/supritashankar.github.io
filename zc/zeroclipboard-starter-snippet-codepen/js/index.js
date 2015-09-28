//
// Begin ZeroClipboard stuff
//
function trigger(){
	var client = new ZeroClipboard($("span[data-clipboard-text]"));

	client.on("ready", function(e) {
		console.log('in ready1');
	    client.on("aftercopy", function(e) {
	    });
	});
}