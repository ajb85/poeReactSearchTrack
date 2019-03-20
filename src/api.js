import React, { useEffect } from "react";

function api() {
  useEffect(() => {
    chrome.storage.onChanged.addListener(changes => {
      // When profile changes
      console.log(changes);
    });

    chrome.storage.sync.get(["profiles"], profiles => {
      console.log("Synced profiles: ", profiles);
    });

    chrome.storage.sync.set({ profiles: data }, () => {
      //console.log("saved: ", data);
    });

    for (let profile in props.links) {
      if (props.links[profile].active) {
        setActiveProf(profile);
      }
    }
  }, []);
}

export default api;
