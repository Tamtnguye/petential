$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#task-list').toggleClass('active');
    });

    $('#cat').on('click', function () {
        $('#cat').toggleClass('bounce');
    });
    
    var hp = String(document.getElementById("hp").getAttribute("aria-valuenow"));
    var HPpercentage = hp.concat("%");
    document.getElementById("hp-percentage").innerHTML = HPpercentage;

    var exp = String(document.getElementById("exp").getAttribute("aria-valuenow"));
    var EXPpercentage = exp.concat("%");
    document.getElementById("exp-percentage").innerHTML = EXPpercentage;

});