BuildInfoProxy = {
	init: function(successCallback, errorCallback, args) {
		var result = {};
		result.debug = Debug.DebugHelper.isDebug();
		successCallback(result);
	}
}

cordova.commandProxy.add('BuildInfo', BuildInfoProxy);