//
// Begin ZeroClipboard stuff
//
ZeroClipboard.config({
    forceHandCursor: true
});

var client = new ZeroClipboard($("button[data-clipboard-text]"));

client.on("error", function(e) {
    //log("ERROR! [" + e.name + "] " + e.message);
});

client.on("ready", function(e) {
    //log("Ready!");

    client.on("aftercopy", function(e) {
        //log((e.success["text/plain"] ? "Copied" : "FAILED to copy") + ": " + e.data["text/plain"]);
        showActive(e.target);
    });
});

$(".zc-state-updater").on("click", function() {
  $("#zcState pre").text(JSON.stringify(ZeroClipboard.state(), null, 2));
});
$("#zcState pre").text(JSON.stringify(ZeroClipboard.state(), null, 2));