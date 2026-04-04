document.addEventListener('DOMContentLoaded', function() {
  var filterButtons = document.querySelectorAll('.werk-filter');
  var werkItems = document.querySelectorAll('.werk-item');

  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(function(b) {
        b.classList.remove('active', 'btn-green');
        b.classList.add('btn-outline-secondary');
      });
      this.classList.add('active', 'btn-green');
      this.classList.remove('btn-outline-secondary');

      var filter = this.getAttribute('data-filter');

      werkItems.forEach(function(item) {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          var categories = item.getAttribute('data-categories');
          if (categories && categories.indexOf(filter) !== -1) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});
