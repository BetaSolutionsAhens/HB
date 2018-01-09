
// Define data for the popup
var data = [
  {
    username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.
    
    userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.
    
    userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
    
    userLocation: 'Pittsburgh, PA'
  },
  
  {
    username: "Paul Irish",
    userWebsite_href: 'http://paulirish.com',
    userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
    userLocation: 'San Francisco'

  },
  
  {
    username: "Chris Coyier",
    userWebsite_href: 'https://css-tricks.com',
    userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1668225011/Gravatar2_bigger.png',
    userLocation: 'Palo Alto, California'
  }
];

// initalize popup
$('.pop_over').magnificPopup({ 
  key: 'my-popup', 
  items: data,
  type: 'inline',
  inline: {
    // Define markup. Class names should match key names.
    markup: '<div class="white-popup"><div class="mfp-close"></div>'+
              '<a class="mfp-userWebsite">'+
                '<div class="mfp-userAvatarUrl"></div>'+
                '<h2 class="mfp-username"></h2>'+
              '</a>'+
              '<div class="mfp-userLocation"></div>'+
            '</div>'
  },
  gallery: {
    enabled: true 
  },
  callbacks: {
    markupParse: function(template, values, item) {
      // optionally apply your own logic - modify "template" element based on data in "values"
      // console.log('Parsing:', template, values, item);
    }
  }
});