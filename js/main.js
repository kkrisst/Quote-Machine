function getNewQuote() {
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    context: document.body,
    cache: false
  }).done(function(data) {
    $("#quote-area").fadeOut('slow', function() {
      console.log(data[0]);
      $("#quote-content").html(data[0].content);
      $("#quote-author").html(data[0].title);
      $("#quote-area").fadeIn('slow');
    });
  });
}


$(document).ready( function() {
  getNewQuote();
});

$("#new-quote-btn").on("click", function() {
  getNewQuote();
});
