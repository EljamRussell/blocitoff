(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      send: function(newTask) {
        tasks.$add(newTask);

        //add: function(newTask) {
        //rooms.$add({ name: newTask }); 
      }
    }
  };


  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
