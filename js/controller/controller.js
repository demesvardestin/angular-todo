app.controller("controller", function($scope) {
    $scope.taskContent = "";
    
    $scope.addToLS = function() {
        var tasks =
            localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : {};
        var index = Object.keys(tasks).length;
        tasks[index] = $scope.taskContent;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        
    };
    
    $scope.clearTasks = function() {
        localStorage.removeItem("tasks");
    }
});