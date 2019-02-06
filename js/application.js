$(function() {
    
    // Alerts client if browser does not support WebStorage
    if (typeof(Storage) === "undefined") {
        alert("Your browser lacks Storage support, so this app won't work.");
    }
    
});