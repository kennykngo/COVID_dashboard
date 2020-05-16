$(document).ready(function () {
  // $("#date").text(moment().format("LL"));
  // $("#time").text(moment().format("LT"));

  // $.ajax({
  //   type: "GET",
  //   url: `https://newsapi.org/sources?apiKey=5f7ab4098d1e4689ac5bb49a9b806b47`,
  //   dataType: "json",
  // }).then(function (res) {
  //   console.log(res);
  // });
  $.ajax({
    type: "GET",
    url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=5f7ab4098d1e4689ac5bb49a9b806b47`,
    dataType: "json",
  }).then(function (res) {
    console.log(res);
    for (i = 0; i < 19; i++) {
      // var headline = res.articles[i].title;
      var link = res.articles[i].url;
      var image = res.articles[i].urlToImage;
      var desc = res.articles[i].description;
      var myDesc = desc.substring(0, 250);
      var source = res.articles[i].source.name.toLowerCase();
      var shorten = source.replace(".com", "");
      var upper = shorten.toUpperCase();

      var card = `<div class="col-sm-4 col-md-4 col-lg-3 col-xl-3" > 
      <div class="card text-white bg-dark mb-3" style="max-height:600px min-width:300;">
      <div class="card-header">${source}</div>
            <img src="${image}" class="card-img-top" style="max-height:200px" alt="use imagination in lieu of image">
             <div class="card-body" >
            <h5 id = "demo" class="card-title">${upper}</h5>
            <p id = "desc${i}" data-id ="${i}" class=card-text truncate">${myDesc}</p>
            <a target="_blank" href="${link}" class="btn btn-primary">Visit</a> 
        </div>
      </div>
    </div>`;
      $(".newsContainer").append(card);
    }

    // console.log(source);
    // console.log((desc.maxLength = 10));
    // console.log(document.getElementById("headline").length);
    // var txt = (document.querySelector("#headline").maxLength = 20);
    // console.log(document.querySelector("#headline").textContent.length);
  });
});

// if ((i % 4 = 0)) {
// }
//
