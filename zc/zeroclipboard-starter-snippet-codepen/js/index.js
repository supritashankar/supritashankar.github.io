//
// Utility code
//
function showActive(el) {
    var $el = $(el);
    $el.fadeOut(10, function() { $el.fadeIn(90); });
}

var $logger = $("#logger");
function log(msg) {
    $logger.prepend("<li>" + msg +  "!!!!</li>");
}


//
// Forcibly remove the JSBin iframe sandboxing with Sandblaster.js
// https://github.com/JamesMGreene/sandblaster
//
var result = sandblaster.detect();
if (result.framed && result.crossOrigin !== false && result.sandboxed !== false) {
    $("#warning").html('<p><strong>IMPORTANT:</strong> This CodePen can only work correctly if visiting the result view in the top frame!</p><p>Paste this URL into your browser\'s address bar: <a href="' + window.location.href + '">' + window.location.href + '</a></p>').after("<hr />");
}
else if (result.sandboxed && sandblaster.unsandbox()) {
    sandblaster.reload();
}

//
// Begin ZeroClipboard stuff
//
ZeroClipboard.config({
    forceHandCursor: true
});

var client = new ZeroClipboard($("button[data-clipboard-text]"));

client.on("error", function(e) {
    log("ERROR! [" + e.name + "] " + e.message);
});

client.on("ready", function(e) {
    log("Ready!");

    client.on("aftercopy", function(e) {
        log((e.success["text/plain"] ? "Copied" : "FAILED to copy") + ": " + e.data["text/plain"]);
        showActive(e.target);
    });
});

$(".zc-state-updater").on("click", function() {
  $("#zcState pre").text(JSON.stringify(ZeroClipboard.state(), null, 2));
});
$("#zcState pre").text(JSON.stringify(ZeroClipboard.state(), null, 2));