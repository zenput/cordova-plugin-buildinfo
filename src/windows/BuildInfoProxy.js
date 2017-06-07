BuildInfoProxy = {
	init: function(successCallback, errorCallback, args) {
        var package = Windows.ApplicationModel.Package.current;
        var version = package.id.version;
        var buildInfo = {
            name: package.displayName,
            displayName: package.displayName,
            debug: Debug.DebugPlugin.isDebug(),
            version: '%s.%s.%s.%s'.fmt(version.major, version.minor, version.build, version.revision),
            packageName: package.id.name,
            buildType: Debug.DebugPlugin.isDebug() ? "debug" : "release",
	    };

		successCallback(buildInfo);
	}
}

cordova.commandProxy.add('BuildInfo', BuildInfoProxy);