$(document).ready(function() {
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.blog-item').hide();
      $('.' + pageInfo).show();
    });
});