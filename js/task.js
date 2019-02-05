class Task {
    static checkList() {
        if (localStorage.getItem("tasks") !== null) {
            return JSON.parse(localStorage.getItem("tasks"));
        } else {
            return {}
        }
    }
    
    static emptyList() {
        return Object.keys(this.checkList()).length == 0;
    }
    
    static createTaskRow(content=null) {
        var row = document.createElement('div');
        row.setAttribute('class', 'task-row text-muted');
        row.setAttribute('ng-bind', 'taskContent');
        row.setAttribute('disabled', 'true');
        
        if (content) {
            row.innerHTML = content;
        }
        
        document.querySelector('#tasks').appendChild(row);
    }
    
    static load() {
        $('#tasks').empty();
        
        if (!this.emptyList()) {
            // Load tasks in list
            let list = this.checkList();
            let keys = Object.keys(list);
            let i = 0;
            
            while (i < keys.length) {
                this.createTaskRow(list[keys[i]]);
                i++;
            }
        } else {
            // Load placeholder
            $('#tasks')
            .append('<div id="empty-list"><p>No tasks yet</p></div>');
        }
    }
}