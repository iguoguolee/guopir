angular.module('gochat').controller('messageCtrl',function($scope,socket){
	$scope.messages = [];
	socket.emit("getAllMessage");
	socket.on('allMessages',function(messages){
		$scope.messages = messages;
	});

	socket.on("messageAdded",function(message){
		$scope.messages.push(message);
	})
});