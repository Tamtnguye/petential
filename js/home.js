$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#task-list').toggleClass('active');
    });

    $('#cat').on('click', function () {
        $('#cat').toggleClass('bounce');
    });
    
});