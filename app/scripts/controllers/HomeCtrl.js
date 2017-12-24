(function() {
  function HomeCtrl(Task) {
    this.tasks = Task.all;

    this.addTask = function () {
      if (this.title) {
        this.task.$add({
          title: this.title,
          description: this.description,
          createdAt: Date.now()
        });
        this.title = '';
      }
    };
  };

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
