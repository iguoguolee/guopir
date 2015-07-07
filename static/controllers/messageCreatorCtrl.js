angular.module('gochat').controller('messageCreatorCtrl',function($scope,socket){
	$scope.newMessage = '';
	$scope.createMessage = function(){
		if($scope.newMessage=='') return;
		socket.emit('createMessage',$scope.newMessage)
		$scope.newMessage = '';
	}
});