// jquery ready start
$(document).ready(function () {
    //================================ 
    // Set Active Menu - Sidebar
    //================================
    // get window url path
    var path = window.location;
    // get active menu
    var activeItem = $('#sidebarMenu .list-group a[href="' + path + '"');
    // Show Sub Menu
    activeItem.siblings('ul').removeClass('d-none');
    // add active class
    activeItem.closest('li').addClass('active');
    // if child menu contain active list item class
    $('.child-menu li.active').closest('ul').removeClass('d-none');

})
// jquery end


