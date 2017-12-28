(function() {
  function ArchiveCtrl(Task) {
    this.tasks = Task.all;

    this.show = function(task) {
      var minus7days = Date.now() - (24*60*60*7*1000);
      return task.completed == true || task.created < minus7days
    };

  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
