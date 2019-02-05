$(function() {
    
    if (typeof(Storage) === "undefined") {
        alert("Your browser lacks Storage support, so this app won't work.");
    }
    
    Task.load();
    
    $('#task-input').on('keyup', function() {
        if (document.querySelector('#task-input').value.length == 0) {
            $('#empty-list').show();
        } else {
            $('#empty-list').hide();
        }
    });
    
    var form = document.querySelector('#input-form');
    form.addEventListener('submit', e => {
        form.reset();
        
        Task.load();
    });
    
    $('#clearTasks').on('click', e => {
        Task.load();
    })
    
});