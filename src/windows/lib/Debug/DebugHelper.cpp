#include "pch.h"
#include "DebugHelper.h"

using namespace Debug;
using namespace Platform;

bool Debug::DebugPlugin::IsDebug()
{
#if _DEBUG
	return true;
#else
	return false;
#endif
}
