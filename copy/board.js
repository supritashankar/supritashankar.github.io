var clipboard = new Clipboard('.copyToken');

clipboard.on('success', function(e) {
    e.clearSelection();
    console.log('ok awesome!');
});