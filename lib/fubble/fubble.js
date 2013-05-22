module.exports = {
  mime: function( req, res ) {
    res.jsonp({
      href: "http://webfaker.org/",
      contentType: "text/html; charset=ISO-8859-1"
    });
  },

  meta: function( req, res ) {
    res.jsonp({
      "href": "https://developer.mozilla.org/en-US/docs/HTML/WebVTT",
      "contentType": "text/html; charset=utf-8",
      "meta": {
        "og": {
          "og:title": "WebVTT",
          "og:type": "website",
          "og:image": "https://developer.mozilla.org/media/img/mdn-logo-sm.png",
          "og:site_name": "Mozilla Developer Network",
          "og:url": "https://developer.mozilla.org/en-US/docs/HTML/WebVTT",
          "og:description": "WebVTT is a format for displaying timed text tracks (e.g. subtitles) with the track element. The primary purpose of WebVTT files is to add subtitles to a video."
        },
        "twitter": {
          "twitter:card": "summary",
          "twitter:url": "https://developer.mozilla.org/en-US/docs/HTML/WebVTT",
          "twitter:title": "WebVTT",
          "twitter:image": "https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png",
          "twitter:site": "@mozhacks",
          "twitter:creator": "@mozhacks",
          "twitter:description": "WebVTT is a format for displaying timed text tracks (e.g. subtitles) with the track element. The primary purpose of WebVTT files is to add subtitles to a video."
        },
        "title": "WebVTT - HTML | MDN"
      }
    });
  },

  img: function ( req, res ) {
    res.jsonp({
      "href": "http://example.com/some-image.png",
      "contentType": "image/png",
      "size": {
        "width": 800,
        "height": 400
      }
    });
  }

};
