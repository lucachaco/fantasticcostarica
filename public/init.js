(function($){    // This is the start of the IIFE. The $ parameter is a local alias for jQuery.
  $(function(){  // This is a jQuery shorthand for $(document).ready(), which is a jQuery event that fires when the DOM is fully loaded and ready to be manipulated.

    $('.sidenav').sidenav();  // This initializes all elements with the 'sidenav' class as side navigation components using Materialize's sidenav plugin.//TODO: REMOVE JQUERY

  }); // end of document ready
})(jQuery); // end of jQuery name space, and it immediately invokes the function passing the jQuery object as the $ parameter.
