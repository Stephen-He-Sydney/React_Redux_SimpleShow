$(document).ready(function () {
    console.log("ready!");

    //Make error message disappear
    // window.setInterval(function () {
    //     $(".alert").fadeTo(6000, 0).slideUp(6000, function () {
    //         $(this).remove();
    //     });
    // }, 4000);

    $('.menu-collapsed').addClass('d-none');
    $('.sidebar-submenu').addClass('d-none');
    $('.submenu-icon').addClass('d-none');

    // Hide submenus
    $('#body-row .collapse').collapse('hide');

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left');

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function () {
        SidebarCollapse();
    });

});

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-block');
    $('.sidebar-submenu').toggleClass('d-block');
    $('.submenu-icon').toggleClass('d-block');
    $('#sidebar-container').toggleClass('sidebar-collapsed sidebar-expanded');

    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

$(document).on('click', '.mega-dropdown', function (e) {
    e.stopPropagation()
})