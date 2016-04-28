import {
  ReflectiveInjector,
  PlatformRef,
  getPlatform,
  createPlatform,
  assertPlatform
} from '@angular/core';
import {isBlank} from './src/facade/lang';
import {BROWSER_PROVIDERS, BROWSER_PLATFORM_MARKER} from './browser_common';

export {EventManager, EVENT_MANAGER_PLUGINS} from './src/dom/events/event_manager';
export {ELEMENT_PROBE_PROVIDERS} from './src/dom/debug/ng_probe';
export {
  BROWSER_APP_COMMON_PROVIDERS,
  BROWSER_PROVIDERS,
  By,
  Title,
  enableDebugTools,
  disableDebugTools,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from './browser_common';

export * from './private_export';
export {DOCUMENT} from './src/dom/dom_tokens';


export {
  bootstrapStatic,
  browserStaticPlatform,
  BROWSER_APP_PROVIDERS,
  BrowserPlatformLocation
} from './platform_browser_static';



export function browserPlatform(): PlatformRef {
  if (isBlank(getPlatform())) {
    createPlatform(ReflectiveInjector.resolveAndCreate(BROWSER_PROVIDERS));
  }
  return assertPlatform(BROWSER_PLATFORM_MARKER);
}