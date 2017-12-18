(function() {
  function HomeCtrl(Task) {
    this.tasks = Task.all;
  };

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
