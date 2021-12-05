function replaceAllLinks() {
    const decodeReferralURL = function (url) {
        const PREFFERED_QUERY_PARAMS = ['location', 'url', 'murl', 'u', 'p'];
        let newURL = null;
    
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);
    
        console.debug(JSON.stringify(Object.fromEntries(params), null, 2))
    
        for (const param of PREFFERED_QUERY_PARAMS) {
            if (params.has(param)) {
                newURL = params.get(param);
                break;
            }
        }
    
        if (newURL) {
            // TODO: Extra processing steps should go here
            console.debug(`Extracted ${newURL} from ${url}`)
        } else {
            console.debug(`Unable to extract URL from ${url}`)
        }
    
        return newURL;
    }

    const linkNodes = document.querySelectorAll(".autolinker_link");
    linkNodes.forEach((node) => {
        const href = node.getAttribute('href');
        hrefDecoded = decodeReferralURL(href);
        if (hrefDecoded) {
            node.setAttribute('href', hrefDecoded)
        }
    })
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.includes('forums.redflagdeals.com')) {
        chrome.scripting.executeScript({
            target: { tabId },
            function: replaceAllLinks
          });
    }
})


