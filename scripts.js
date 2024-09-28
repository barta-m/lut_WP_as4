document.getElementById("submit-data").addEventListener("click", async () => {
    const query = document.getElementById("input-show").value;
    const apiUrl = "https://api.tvmaze.com/search/shows?q=";
    const showContainer = document.querySelector(".show-container");
    showContainer.innerHTML = "";

    const response = await fetch(apiUrl + query);
    const data = await response.json();

    data.forEach(show => {
        const showData = document.createElement("div");
        showData.className = "show-data";

        const img = document.createElement("img");
        img.src = show.show.image.medium;
        console.log(img.src)

        const showInfo = document.createElement("div");
        showInfo.className = "show-info";

        const title = document.createElement("h1");
        title.textContent = show.show.name;

        const summary = document.createElement("p");
        summary.innerHTML = show.show.summary;

        showData.appendChild(img);
        showData.appendChild(showInfo);
        showInfo.appendChild(title);
        showInfo.appendChild(summary);
        showContainer.appendChild(showData);
    });
});
