var $scramjetController;(()=>{var e={805(e,t,r){r.d(t,{C:()=>o});class o{methods;id;sendRaw;counter=0;promiseCallbacks=new Map;constructor(e,t,r){this.methods=e,this.id=t,this.sendRaw=r}recieve(e){if(null==e||"object"!=typeof e)return;let t=e[this.id];if(null==t||"object"!=typeof t)return;let r=t.$type;if("response"===r){let e=t.$token,r=t.$data,o=t.$error,s=this.promiseCallbacks.get(e);if(!s)return;this.promiseCallbacks.delete(e),void 0!==o?s.reject(Error(o)):s.resolve(r)}else if("request"===r){let e=t.$method,r=t.$args;this.methods[e](r).then(e=>{this.sendRaw({[this.id]:{$type:"response",$token:t.$token,$data:e?.[0]}},e?.[1])}).catch(e=>{console.error(e),this.sendRaw({[this.id]:{$type:"response",$token:t.$token,$error:e?.toString()||"Unknown error"}},[])})}}call(e,t,r=[]){let o=this.counter++;return new Promise((s,i)=>{this.promiseCallbacks.set(o,{resolve:s,reject:i}),this.sendRaw({[this.id]:{$type:"request",$method:e,$args:t,$token:o}},r)})}}}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{r.r(o),r.d(o,{route:()=>a,shouldRoute:()=>n});var e=r(805);let t={};addEventListener("message",e=>{if(e.data&&"object"==typeof e.data){if(e.data.$sw$setCookieDone&&"object"==typeof e.data.$sw$setCookieDone){let r=e.data.$sw$setCookieDone,o=t[r.id];o&&(o(),delete t[r.id])}if(e.data.$sw$initRemoteTransport&&"object"==typeof e.data.$sw$initRemoteTransport){let{port:t,prefix:r}=e.data.$sw$initRemoteTransport,o=i.find(e=>new URL(r).pathname.startsWith(e.prefix));if(!o)return void console.error("No relevant controller found for transport init");o.rpc.call("initRemoteTransport",t,[t])}}});class s{prefix;id;rpc;constructor(r,o,s){this.prefix=r,this.id=o,this.rpc=new e.C({sendSetCookie:async({cookies:e,options:r})=>{let o=await self.clients.matchAll(),s=[],i=[],n=r?.destination==="document"||r?.destination==="iframe";for(let a of o){let o=Math.random().toString(36).substring(2,10);s.push(o),a.postMessage({$controller$setCookie:{cookies:e,options:r,id:o}}),n||i.push(new Promise(e=>{t[o]=()=>e(o)}))}if(i.length>0){let r,n=!1,a=new Promise(i=>{r=setTimeout(()=>{if(!n){let r=s.filter(e=>void 0!==t[e]);console.error(`timed out waiting for set cookie response (deadlock?): cookies=${e.length} clients=${o.length} pending=${r.length}/${s.length} clientUrls=${o.map(e=>e.url).join(",")}`)}i()},1e3)});try{await Promise.race([a,Promise.any(i).then(()=>{n=!0}).catch(()=>{})])}finally{for(let e of(void 0!==r&&clearTimeout(r),s))delete t[e]}}}},"tabchannel-"+o,(e,t)=>{s.postMessage(e,t)}),s.onmessage=e=>{this.rpc.recieve(e.data)},s.onmessageerror=console.error,this.rpc.call("ready",void 0)}}let i=[];function n(e){let t=new URL(e.request.url);return void 0!==i.find(e=>t.pathname.startsWith(e.prefix))}async function a(e){try{let t=new URL(e.request.url),r=i.find(e=>t.pathname.startsWith(e.prefix)),o=await clients.get(e.clientId),s=[...e.request.headers],n=await r.rpc.call("request",{rawUrl:e.request.url,rawReferrer:e.request.referrer,destination:e.request.destination,mode:e.request.mode,referrer:e.request.referrer,method:e.request.method,body:e.request.body,cache:e.request.cache,forceCrossOriginIsolated:!1,initialHeaders:s,rawClientUrl:o?o.url:void 0,clientId:e.clientId||e.resultingClientId},e.request.body instanceof ReadableStream||e.request.body instanceof ArrayBuffer?[e.request.body]:void 0);return new Response(n.body,{status:n.status,statusText:n.statusText,headers:n.headers})}catch(e){return console.error("Service Worker error:",e),new Response("Internal Service Worker Error: "+e.message,{status:500})}}addEventListener("message",e=>{if(!e.data||"object"!=typeof e.data||!e.data.$controller$init||"object"!=typeof e.data.$controller$init)return;let t=e.data.$controller$init,r=i.findIndex(e=>e.id===t.id);-1!==r&&i.splice(r,1),i.push(new s(t.prefix,t.id,e.ports[0]))}),addEventListener("install",()=>{self.skipWaiting()}),addEventListener("activate",e=>{e.waitUntil(clients.claim())}),setTimeout(async()=>{for(let e of(console.log("service worker activated, notifying clients to revive"),await clients.matchAll()))e.postMessage({$controller$swrevive:{}})},100)})(),$scramjetController=o})();
//# sourceMappingURL=controller.sw.js.map

const blockedKeywords = [];

// WISP CONFIGURATION
const WISP_CONFIG = {
	DEFAULT_WISP_URL: 'wss://catclass.net/wisp/'
};

// ADS CONFIGURATION
const ADS_CONFIG = {
	ADS_ENABLED: true,        // Set to true to enable ads
	ADS_TIME: 1,               // Cooldown in hours between ad impressions
	ADS_URL: 'https://dyingefforlessefforlessours.com/is512uku?key=6247f54f4075423c926111eca1468a86'
};

// IndexedDB helpers for persistent cooldown tracking
const DB_NAME = 'CatclassAdsDB';
const DB_VERSION = 1;
const STORE_NAME = 'adMetrics';

async function openAdDatabase() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve(request.result);
		request.onupgradeneeded = (e) => {
			const db = e.target.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME);
			}
		};
	});
}

async function getLastAdTime() {
	try {
		const db = await openAdDatabase();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const store = tx.objectStore(STORE_NAME);
			const request = store.get('lastAdShowTime');
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result ?? 0);
		});
	} catch (err) {
		console.warn('[ads] Failed to get last ad time:', err);
		return 0;
	}
}

async function setLastAdTime() {
	try {
		const db = await openAdDatabase();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readwrite');
			const store = tx.objectStore(STORE_NAME);
			const request = store.put(Date.now(), 'lastAdShowTime');
			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve();
		});
	} catch (err) {
		console.warn('[ads] Failed to set last ad time:', err);
	}
}

async function isAdCooldownPassed() {
	const lastAdTime = await getLastAdTime();
	const cooldownMs = ADS_CONFIG.ADS_TIME * 60 * 60 * 1000;
	const now = Date.now();
	return (now - lastAdTime) >= cooldownMs;
}

async function handleShowAds() {
	if (!ADS_CONFIG.ADS_ENABLED) {
		console.log('[ads] Ads are disabled');
		return;
	}

	const cooldownPassed = await isAdCooldownPassed();
	if (!cooldownPassed) {
		const lastAdTime = await getLastAdTime();
		const remainingMs = ADS_CONFIG.ADS_TIME * 60 * 60 * 1000 - (Date.now() - lastAdTime);
		const remainingMins = Math.ceil(remainingMs / 60000);
		console.log(`[ads] Cooldown active. Ads available again in ${remainingMins} minutes`);
		return;
	}

	try {
		const clients = await self.clients.matchAll({ type: 'window' });
		if (clients.length > 0) {
			clients[0].postMessage({ type: '$openAdWindow', url: ADS_CONFIG.ADS_URL });
			await setLastAdTime();
			console.log('[ads] Ad window opened');
		}
	} catch (err) {
		console.error('[ads] Failed to open ad window:', err);
	}
}

self.addEventListener("activate", (event) => {
	event.waitUntil(clients.claim());
});

// Ad message handler
self.addEventListener('message', (event) => {
	if (event.data?.type === '$showAds') {
		handleShowAds().catch(err => console.error('[ads] Error in handleShowAds:', err));
	}
});


async function handleRequest(event) {
	const url = event.request.url;
	// URL format: https://host/~/sj/{controllerId}/{frameId}/{encodedUrl}
	const match = url.match(/\/~\/sj\/[a-z0-9]+\/[a-z0-9]+\/(.*)/);
	if (match) {
		try {
			const decoded = decodeURIComponent(match[1]);
			const href = new URL(decoded).href;
			const host = new URL(decoded).hostname;
		} catch (e) {
			// URL parsing failed, let it through
		}
	}
	return $scramjetController.route(event);
}

// A fetch for a /~/sj/{controllerId}/{frameId}/... URL can arrive before the
// SW has processed the $controller$init postMessage that registers that
// frame's prefix (shouldRoute checks a list only populated by that message).
// There's no handshake forcing the frame's first navigation to wait for it,
// so this is a genuine race - normally narrow, but widened by anything that
// delays the main thread around controller construction (e.g. parsing a
// large inlined bundle). Retry briefly instead of treating "not registered
// yet" the same as "not a proxy request" (which would otherwise fall through
// to a real network fetch of that path and 404, since no such file exists).
const PROXY_URL_PATTERN = /\/~\/sj\/[a-z0-9]+\/[a-z0-9]+\//;

async function waitForRoute(event, timeoutMs) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		if ($scramjetController.shouldRoute(event)) return true;
		await new Promise((r) => setTimeout(r, 25));
	}
	return $scramjetController.shouldRoute(event);
}

self.addEventListener("fetch", (event) => {
	const should = $scramjetController.shouldRoute(event);
	const isProxyUrl = event.request.url.includes("/~/sj/");
	if (isProxyUrl) {
		console.log("[sw] fetch", event.request.url, "shouldRoute:", should);
	}
	if (should) {
		event.respondWith(handleRequest(event));
	} else if (isProxyUrl && PROXY_URL_PATTERN.test(event.request.url)) {
		event.respondWith(
			(async () => {
				const routed = await waitForRoute(event, 8000);
				if (routed) return handleRequest(event);
				console.warn("[sw] Proxy route never registered within timeout:", event.request.url);
				return new Response("Proxy route registration timed out - try reloading.", { status: 504 });
			})()
		);
	}
});
