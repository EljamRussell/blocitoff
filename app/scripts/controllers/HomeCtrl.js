(function() {
  function HomeCtrl(Task, $scope) {
    this.tasks = Task.all;

    this.show = function(task) {
      var minus7days = Date.now() - (24*60*60*7*1000);
      return task.completed == false && task.created > minus7days
    };

    this.addTask = function(messageTitle, messageDescription, taskPriority) {
      if (messageTitle) {
        var newTask = {
          title: messageTitle,
          description: messageDescription,
          priority: taskPriority,
          created: firebase.database.ServerValue.TIMESTAMP,
          completed: false
        };
        Task.addTask(newTask);
      }
      $scope.clearfunction = function(event){
        event.messageTitle = null;
        event.messageDescription = null;
        event.taskPriority = "Low";
      }
    }

  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
