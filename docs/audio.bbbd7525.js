// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"18CQu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "58ba018abbbd7525";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"eOgOM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _pixiJs = require("pixi.js"); // Import PIXI
var _backgroundJpg = require("../../images/background.jpg"); // Import Images
var _backgroundJpgDefault = parcelHelpers.interopDefault(_backgroundJpg);
var _characterPng = require("../../images/Character.png");
var _characterPngDefault = parcelHelpers.interopDefault(_characterPng);
var _platformJpg = require("../../images/Platform.jpg");
var _platformJpgDefault = parcelHelpers.interopDefault(_platformJpg);
var _blockJpg = require("../../images/block.jpg");
var _blockJpgDefault = parcelHelpers.interopDefault(_blockJpg);
var _backgroundMusicWav = require("url:../../sound/background_music.wav"); // Import Audio
var _backgroundMusicWavDefault = parcelHelpers.interopDefault(_backgroundMusicWav);
var _backgroundCode = require("./background_code"); // Import Classes
var _characterCode = require("./character_code");
var _platformCode = require("./platform_code");
var _blockCode = require("./block_code");
class Game {
    pixiWidth = 800;
    pixiHeight = 500;
    backgroundMusic = new Audio((0, _backgroundMusicWavDefault.default));
    constructor(){
        this.pixi = new _pixiJs.Application({
            width: this.pixiWidth,
            height: this.pixiHeight
        }); //maak nieuwe stage
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new _pixiJs.Loader(); //maak nieuwe loader
        this.loader.add("backgroundTexture", (0, _backgroundJpgDefault.default)).add("charTexture", (0, _characterPngDefault.default)).add("platformTexture", (0, _platformJpgDefault.default)).add("blockTexture", (0, _blockJpgDefault.default));
        this.loader.load(()=>this.loadCompleted());
    }
    loadCompleted() {
        this.backgroundMusic.play(); //speel muziek en loop de file.
        this.backgroundMusic.addEventListener("ended", function() {
            this.currentTime = 0;
            this.play();
        }, false);
        this.background = new (0, _backgroundCode.Background)(this.loader.resources["backgroundTexture"].texture, this.pixiWidth, this.pixiHeight); //toevoeging van: background
        this.pixi.stage.addChild(this.background);
        this.char = new (0, _characterCode.Char)(this.loader.resources["charTexture"].texture); //toevoeging van:  character
        this.pixi.stage.addChild(this.char);
        this.platform = new (0, _platformCode.Platform)(this.loader.resources["platformTexture"].texture); //toevoeging van: platform
        this.pixi.stage.addChild(this.platform);
        this.block = new (0, _blockCode.Block)(this.loader.resources["blockTexture"].texture); //toevoeging van: block
        this.pixi.stage.addChild(this.block);
        this.pixi.ticker.add((delta)=>this.update(delta)); //update
    }
    update(delta) {
        this.char.update(delta); //update character
        //collision:
        if (this.char.collisionTop(this.platform) && this.char.y + this.char.height < this.platform.y + this.char.yspeed) {
            this.char.y = this.platform.y - this.char.height;
            this.char.yspeed = 0;
        }
        if (this.char.collisionTop(this.block) && this.char.y + this.char.height < this.block.y + this.char.yspeed) {
            this.char.y = this.block.y - this.char.height;
            this.char.yspeed = 0;
        }
        this.char.collisionHorizontal(this.platform); //horizontaal met block & platform
        this.char.collisionHorizontal(this.block);
        this.char.collisionBottom(this.block); //verticaal, onder met platform
        this.char.collisionBottom(this.platform);
    }
}
new Game();

},{"pixi.js":"dsYej","../../images/background.jpg":"4soBA","../../images/Character.png":"eqqJQ","../../images/Platform.jpg":"3npH8","../../images/block.jpg":"2e6o8","url:../../sound/background_music.wav":"euq6J","./background_code":"3GTnn","./character_code":"3yE1s","./platform_code":"bSsbt","./block_code":"i9cGs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4soBA":[function(require,module,exports) {
module.exports = require("b5179d46ab110990").getBundleURL("7ChWY") + "background.527e578f.jpg" + "?" + Date.now();

},{"b5179d46ab110990":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eqqJQ":[function(require,module,exports) {
module.exports = require("bb4afbbffe0b0db6").getBundleURL("7ChWY") + "Character.80b62d66.png" + "?" + Date.now();

},{"bb4afbbffe0b0db6":"lgJ39"}],"3npH8":[function(require,module,exports) {
module.exports = require("b0835a035f613493").getBundleURL("7ChWY") + "Platform.c1c42828.jpg" + "?" + Date.now();

},{"b0835a035f613493":"lgJ39"}],"2e6o8":[function(require,module,exports) {
module.exports = require("54a5035d5da80ae0").getBundleURL("7ChWY") + "block.5ab50184.jpg" + "?" + Date.now();

},{"54a5035d5da80ae0":"lgJ39"}],"euq6J":[function(require,module,exports) {
module.exports = require("5b0535a18eb87e02").getBundleURL("7ChWY") + "background_music.74f76bc7.wav" + "?" + Date.now();

},{"5b0535a18eb87e02":"lgJ39"}],"3GTnn":[function(require,module,exports) {
// Import PIXI
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Background", ()=>Background);
var _pixiJs = require("pixi.js");
class Background extends _pixiJs.Sprite {
    constructor(texture, width, height){
        super(texture);
        this.width = width; //de instelligen van background worden hier doorgegeven.
        this.height = height;
    }
}

},{"pixi.js":"dsYej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yE1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Char", ()=>Char);
var _pixiJs = require("pixi.js"); // Import PIXI
var _walkSoundWav = require("url:../../sound/walk_sound.wav"); //Import Audio files
var _walkSoundWavDefault = parcelHelpers.interopDefault(_walkSoundWav);
var _jumpSoundWav = require("url:../../sound/jump_sound.wav");
var _jumpSoundWavDefault = parcelHelpers.interopDefault(_jumpSoundWav);
var _injurySoundWav = require("url:../../sound/injury_sound.wav");
var _injurySoundWavDefault = parcelHelpers.interopDefault(_injurySoundWav);
var _fallSoundWav = require("url:../../sound/fall_sound.wav");
var _fallSoundWavDefault = parcelHelpers.interopDefault(_fallSoundWav);
class Char extends _pixiJs.Sprite {
    xspeed = 0;
    yspeed = 2;
    walkLeft = false;
    walkRight = false;
    walkLeftStop = false;
    walkRightStop = false;
    weight = 0.5;
    walkSound = new Audio((0, _walkSoundWavDefault.default));
    jumpSound = new Audio((0, _jumpSoundWavDefault.default));
    injurySound = new Audio((0, _injurySoundWavDefault.default));
    fallSound = new Audio((0, _fallSoundWavDefault.default));
    constructor(texture){
        super(texture);
        this.anchor.set(0);
        this.width = 50; //breedte en lengte van character
        this.height = 70;
        this.x = 350; //startpositie wanneer level geladen wordt
        this.y = 10;
        window.addEventListener("keyup", (e)=>this.onKeyUp(e)); //koppel functies aan toetsen
        window.addEventListener("keydown", (e)=>this.onKeyDown(e));
    }
    resetPosition() {
        this.x = 350;
        this.y = 50;
    }
    update(delta) {
        this.x += delta * this.xspeed; //loopsnelheid character
        this.y += delta * this.yspeed;
        this.yspeed += this.weight; //zwaartekracht voor character
        if (this.walkLeft === true) this.xspeed = -5;
        if (this.walkRight === true) this.xspeed = 5;
        if (this.walkLeft === false && this.walkRight === false) this.xspeed = 0;
        if (this.y > 500) {
            this.resetPosition();
            this.fallSound.play();
        }
    }
    collisionTop(object) {
        if (this.x > object.x + object.width || this.x + this.width < object.x || this.y > object.y + object.height || this.y + this.height < object.y) return false; //geen return wanneer character nergens op staat
        else return true; //return wanneer character ergens op staat
    }
    collisionBottom(object) {
        if (this.y + this.height > object.y && this.y < object.y + object.height) //door gebruik te maken van de hoogte coordinaten van character en object
        {
            if (this.x + this.width > object.x && this.x < object.x + object.width) {
                this.yspeed = 2;
                this.injurySound.play(); //bij collision speel geluid              
            }
        }
    }
    collisionHorizontal(object) {
        if (this.x + this.width >= object.x && this.x + this.width < object.x + object.width) //door gebruik te maken van de horizontale coordinaten van character en object
        {
            if (this.y === object.y || this.y - this.height + 5 < object.y && this.y > object.y - object.height) {
                this.walkRightStop = true;
                this.walkRight = false;
                this.x = object.x - this.width - 1;
            }
        } else this.walkRightStop = false; //als dit allemaal niet het geval is kan character doorlopen
        if (this.x <= object.x + object.width && this.x > object.x) {
            if (this.y === object.y || this.y - this.height + 5 < object.y && this.y > object.y - object.height) {
                this.walkLeftStop = true;
                this.walkLeft = false;
                this.x = object.x + object.width + 1;
            }
        } else this.walkLeftStop = false;
    }
    onKeyDown(e) {
        if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
            if (this.yspeed === 0) {
                this.yspeed = -10;
                this.jumpSound.play();
            }
        }
        switch(e.key.toUpperCase()){
            case "A":
            case "ARROWLEFT":
                if (!this.walkLeftStop) {
                    this.walkLeft = true;
                    this.walkSound.play(); //geluid aan lopen gekoppeld
                }
                break;
            case "D":
            case "ARROWRIGHT":
                if (!this.walkRightStop) {
                    this.walkRight = true;
                    this.walkSound.play(); //geluid aan lopen gekoppeld
                }
                break;
        }
    }
    onKeyUp(e) {
        switch(e.key.toUpperCase()){
            case "A":
            case "ARROWLEFT":
                this.walkLeft = false;
                break;
            case "D":
            case "ARROWRIGHT":
                this.walkRight = false;
                break;
        }
    }
}

},{"pixi.js":"dsYej","url:../../sound/walk_sound.wav":"2AMt7","url:../../sound/jump_sound.wav":"6iCic","url:../../sound/injury_sound.wav":"ZkQOi","url:../../sound/fall_sound.wav":"fNYDy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AMt7":[function(require,module,exports) {
module.exports = require("bc13f1fe31519d4c").getBundleURL("7ChWY") + "walk_sound.f00aacbc.wav" + "?" + Date.now();

},{"bc13f1fe31519d4c":"lgJ39"}],"6iCic":[function(require,module,exports) {
module.exports = require("ea1fcaee90f48e34").getBundleURL("7ChWY") + "jump_sound.ba9f794f.wav" + "?" + Date.now();

},{"ea1fcaee90f48e34":"lgJ39"}],"ZkQOi":[function(require,module,exports) {
module.exports = require("b8dffa0fc09259e4").getBundleURL("7ChWY") + "injury_sound.b31157d0.wav" + "?" + Date.now();

},{"b8dffa0fc09259e4":"lgJ39"}],"fNYDy":[function(require,module,exports) {
module.exports = require("84d5797540d0d1fa").getBundleURL("7ChWY") + "fall_sound.518f0ac1.wav" + "?" + Date.now();

},{"84d5797540d0d1fa":"lgJ39"}],"bSsbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Platform", ()=>Platform);
var _pixiJs = require("pixi.js"); // Import PIXI
class Platform extends _pixiJs.Sprite {
    constructor(texture){
        super(texture);
        this.x = 145; //startpositie platform
        this.y = 300;
        this.width = 500; //hoogte en breedte van platform
        this.height = 50;
    }
}

},{"pixi.js":"dsYej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9cGs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block);
var _pixiJs = require("pixi.js"); // Import PIXI
class Block extends _pixiJs.Sprite {
    constructor(texture){
        super(texture);
        this.x = 350; // Setting the start position
        this.y = 130;
        this.width = 70; // Setting the width & height
        this.height = 72;
    }
}

},{"pixi.js":"dsYej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["18CQu","eOgOM"], "eOgOM", "parcelRequirefac4")

//# sourceMappingURL=audio.bbbd7525.js.map
