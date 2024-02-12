function AddToFav(ilanId) {
  var myHeaders = new Headers();
  myHeaders.append("authority", "www.sahibinden.com");
  myHeaders.append("accept", "application/json, text/javascript, */*; q=0.01");
  myHeaders.append("accept-language", "tr,tr-TR;q=0.9,en-US;q=0.8,en;q=0.7");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append(
    "content-type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  myHeaders.append("origin", "https://www.sahibinden.com");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
  );
  myHeaders.append("x-requested-with", "XMLHttpRequest");

  var raw = `classifiedId=${ilanId}&folderId=57237273&source=SEARCH_RESULT`;

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://www.sahibinden.com/ajax/favoriteFolder/saveFavoriteToFolder",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Run() {
  var items = document.querySelectorAll(
    "table#searchResultsTable tr.searchResultsItem"
  );
  for (let item of items) {
    var ilanId = item.getAttribute("data-id");
    if (ilanId != null) {
      await sleep(1000);
      AddToFav(ilanId);
    }
  }
}

Run();
