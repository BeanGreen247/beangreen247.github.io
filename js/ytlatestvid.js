var channelID = "UCQbA5Nc4oq6uMS2idDWsxkw";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});

document.write(
    "<section id='video' class='services bg-primary'>" +
            "<div class='container'>" +
                "<div class='row text-center'>" +
                    "<div class='col-lg-10 col-lg-offset-1'>" +
                    "<div>" +
                        "<h1 class='text-center'>Latest Video</h1>" +
                        "<hr class='small'>" +
                        "<iframe class='latestVideoEmbed' id='youtube_video' vnum='0' width='85%' height='452' frameborder='0' allowfullscreen></iframe>" +
                        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</section>"
)