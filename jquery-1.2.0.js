$("head").append("<script src='//infoey.github.io/infoey/plugins-rtl.min.js'/>");
$(".separator a").append("<div class='quote-share'><a class='quote-fb' expr:href='&quot;http://www.facebook.com/share.php?v=4&amp;u=&quot; + data:blog.url + &quot;&amp;t=&quot; + data:blog.title' rel='nofollow' target='_blank'><i class='fa fa-facebook'/></a><a class='quote-wt' expr:href='&quot;http://twitter.com/share?url=&quot; + data:blog.url + &quot;&amp;text=&quot; + data:blog.title' rel='nofollow' target='_blank'><i class='fa fa-twitter'/></a><a alt='WhatsApp' class='quote-wa' data-action='share/whatsapp/share' expr:href='&quot;whatsapp://send?text=&quot; + data:blog.title + &quot; - &quot; + data:blog.url ' rel='nofollow'><i aria-hidden='true' class='fa fa-whatsapp'/></a></div>");
$('.post_author_profile').append("<div class='quote-follow'><ul class='author_social'><li><a class='uk-icon-button icon_twitter uk-icon' data-uk-icon='twitter' href='http://twitter.com/youssefgeek' target='_blank' data-uk-tooltip='تابعنا على Twitter' aria-expanded='false'><svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' data-svg='twitter'><path d='M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74'></path></svg></a></li><li><a class='uk-icon-button icon_facebook uk-icon' data-uk-icon='facebook' href='http://facebook.com/th3youssefinfo' target='_blank' data-uk-tooltip='تابعنا على Facebook' aria-expanded='false'><svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' data-svg='facebook'><path d='M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z'></path></svg></a></li><li><a class='uk-icon-button icon_youtube uk-icon' data-uk-icon='youtube' href='https://www.youtube.com/channel/UCjDOS9tXYDeZ6WPeJOnFn_w?sub_confirmation=1' target='_blank' data-uk-tooltip='تابعنا على Youtube' aria-expanded='false'><svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' data-svg='youtube'><path d='M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z'></path></svg></a></li></ul></div>");
const html = document.querySelector("html");
const daynight = document.querySelector(".night-day");
const input = document.querySelector(".switch");
input.addEventListener("click", (e) => {
  html.classList.toggle("darkmode");
  daynight.classList.toggle("active");
  });
$(document).ready(function() {
 if($("#copreater").attr("href")!="http://www.infoey.com/" )
 {
   window.location.href="http://www.infoey.com/";
 }
  if($("#copreater").html()!= 'Designed By Infoey'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'none'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('visibility')== 'hidden'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('width')== '0'){
   window.location.href="http://www.infoey.com/";
  }
  if($("#copreater").css('font-size')== '0'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'table-column-group'){
   window.location.href="http://www.infoey.com/";
  }
if($("#copreater").css('display')== 'table-column'){
   window.location.href="http://www.infoey.com/";
  }
});
window.onload = function() {
    var e = document.getElementById("copreater");
    if (e == null) {
        window.location.href = "http://www.infoey.com/"
    }
    e.setAttribute("href", "http://www.infoey.com/");
    e.setAttribute("ref", "dofollow");
    e.setAttribute("target", "_blank");
    e.setAttribute("title", "By Infoey");
    e.innerHTML = "Designed By Infoey"
}
$(document)['ready'](function() {
        $('#copreater')['html'](
                "<a href='http://www.infoey.com/' target='_blank' id='copreater' rel='dofollow' title='By Infoey'>Designed By Infoey</a>"
        );
        setInterval(function() {
                if (!$('#copreater:visible')['length']) {
                        window['location']['href'] = 'http://www.infoey.com/'
                }
        }, 100)
});
});
