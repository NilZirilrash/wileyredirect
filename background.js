// Note that this is almost verbatim the example provided by Mozilla for
// http -> https redirect. I'm sure that there are extensions out there that
// can achieve this in a more general sense, but this felt simpler. Cheers.

function redirect(requestDetails) {
	console.log("Redirecting: \"" + requestDetails.url + "\" to sane PDF...");
	return {
		redirectUrl: requestDetails.url.replace(
            /(https\:\/\/onlinelibrary\.wiley\.com\/doi\/)epdf(\/*)/,
            "$1pdf$2")
	};
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{urls: ["https://onlinelibrary.wiley.com/doi/epdf/*"]},
	["blocking"]
);
console.log("Wiley epdf redirecter successfully loaded.");
