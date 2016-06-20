(function(){

  'use strict';

  var open = document.getElementById('js-open'),
      status = document.getElementById('js-status');

  open.addEventListener('click', function() {
    var child, id;

    open.disabled = true;
    status.innerHTML = 'open';

    child = window.open('https://github.com/', '', 'width=800,height=600,status=0,toolbar=0');
    id = setInterval(function() {
      if (child.closed) {
        clearInterval(id);

        open.disabled = false;
        status.innerHTML = 'closed';
      }
    }, 500);
  }, false);

}());
