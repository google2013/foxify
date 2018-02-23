$(document).ready(function() {
	
	/* ===== Affix Sidebar ===== */
	/* Ref: http://getbootstrap.com/javascript/#affix-examples */

    	
	$('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
        }
    });
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-nav', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
     $('#cards-wrapper .item-inner').matchHeight();
     $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    


		/* clipboard */
		
    var pre = document.getElementsByTagName('pre');

    for (var i = 0; i < pre.length; i++) {
      var button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';

      var img = document.createElement('img');
      img.src = 'assets/images/clippy.svg'

      button.prepend(img);

      pre[i].appendChild(button);
    }

    var copyCode = new Clipboard('.copy-button', {
      target: function(trigger) {
        return trigger.previousElementSibling;
      }
    });

    copyCode.on('success', function(event) {
      event.clearSelection();
      event.trigger.textContent = 'Copied';
      window.setTimeout(function() {
        event.trigger.textContent = 'Copy';

        var img = document.createElement('img');
        img.src = 'assets/images/clippy.svg'

        event.trigger.prepend(img);
      }, 2000);
    });

    copyCode.on('error', function(event) {
      event.trigger.textContent = 'Press "Ctrl + C" to copy';
      window.setTimeout(function() {
        event.trigger.textContent = 'Copy';

        var img = document.createElement('img');
        img.src = 'assets/images/clippy.svg'

        event.trigger.prepend(img);
      }, 2000);
    });

});