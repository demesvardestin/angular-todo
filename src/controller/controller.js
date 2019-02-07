app.controller("controller", function($scope) {
    $scope.hideSpinner = true;
    
    $scope.checkList = function() {
        if (localStorage.getItem("tasks") !== null) {
            return JSON.parse(localStorage.getItem("tasks"));
        } else {
            return {}
        }
    };
    
    $scope.getTasksArray = function() {
        let list = $scope.checkList();
        let keys = Object.keys(list);
        let i = 0;
        let tasks = [];
        
        while (i < keys.length) {
            tasks.push(list[keys[i]]);
            i++;
        }
        
        return tasks;
    };
    
    // 'Render' function
    $scope.render = function() {
        // Grab tasks list from Task class
        let tasks = $scope.getTasksArray();
        
        // Display or hide placeholder based on tasks presence
        $scope.showPlaceholder = (tasks.length == 0);
        
        // Load tasks
        $scope.tasks = tasks;
    };
    
    // Add task to local storage
    $scope.addToLS = function() {
        // Grab the 'tasks' object from local storage and parse it
        // (localStorage only stores strings). Return an empty hash if the item
        // isn't found.
        let tasks =
            localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : {};
            
        // Use the current length as index to add a new key/value pair to the tasks
        // object.
        let index = Object.keys(tasks).length;
        tasks[index] = $scope.taskContent;
        
        // Save the object back to localStorage as a JSON string
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        // Reset the form
        inputForm.reset();
        
        // Reload the tasks for the view
        $scope.render();
    };
    
    // Clear tasks from local storage
    $scope.clearTasks = function() {
        localStorage.removeItem("tasks");
        $scope.tasks = $scope.getTasksArray();
        
        $scope.render();
    };
    
    // Toggle 'empty-list' placeholder div
    $scope.togglePlaceholder = function() {
        $scope.showPlaceholder = ($scope.tasks.length == 0);
    };
    
    // Load tasks and render view
    $scope.tasks = $scope.getTasksArray();
    $scope.render();
});