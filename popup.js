const stateElem = document.getElementById("state");

// Set the initial state
chrome.storage.sync.get("state", ({ state }) => {
    stateElem.textContent = state ? "Disable" : "Enable";
});

// Invert state when button clicked and update element text
stateElem.addEventListener("click", () => {
    chrome.storage.sync.get("state", ({ state }) => {
        chrome.storage.sync.set({ state: !state }, () => {
            stateElem.textContent = !state ? "Disable" : "Enable";
        });
    });
})