function updatePingDisplay() {
    const pingDisplay = document.getElementById("ping-display");
    const url = "http://localhost"; // You can use your own server or a public endpoint

    const startTime = Date.now();
    fetch(url, { method: "HEAD", cache: "no-store", mode: "no-cors" })
        .then(() => {
            // const endTime = Date.now();
            const ping = Date.now() - startTime;
            console.log("host="+url, "time="+ping+"ms")
            if (ping > 500) {
                // pingDisplay.textContent = "<span style=\"color: red;\">999ms</span>";
                pingDisplay.innerHTML = "<span style=\"color: #d33333;\">999ms</span>";
            } else if (ping > 250) {
                // pingDisplay.textContent = `<span style=\"color: yellow;\">${ping} ms</span>`;
                pingDisplay.innerHTML = `<span style=\"color: #ffc400;\">${ping} ms</span>`;
            } else {
                // pingDisplay.textContent = `<span style=\"color: green;\">${ping} ms</span>`;
                pingDisplay.innerHTML = `<span style=\"color: #3f3d;\">${ping} ms</span>`;
            }
        })
        .catch(error => {
            console.error(error);
            // pingDisplay.textContent = "<span style=\"color: red;\">999ms</span>";
            pingDisplay.innerHTML = "<span style=\"color: #d33333;\">999ms</span>";
        });
}

// Update ping every 5 seconds
setInterval(updatePingDisplay, 1000);

// Initial ping calculation
updatePingDisplay();
