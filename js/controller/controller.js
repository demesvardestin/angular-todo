app.controller("controller", function($scope) {
    $scope.taskContent = "";
    $scope.show = true;
    $scope.tasks = Task.tasks();
    
    $scope.addToLS = function() {
        var tasks =
            localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : {};
        var index = Object.keys(tasks).length;
        tasks[index] = $scope.taskContent;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        inputForm.reset();
        Task.load()
    };
    
    $scope.clearTasks = function() {
        localStorage.removeItem("tasks");
        Task.load();
    };
    
    $scope.toggleShow = function() {
        if (document.querySelector('#task-input').value.length > 0) {
            $('#empty-list').hide();
        } else {
            $('#empty-list').show();
        }
    };
});