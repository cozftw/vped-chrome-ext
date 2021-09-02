var currentUrl = window.location.href;

if (currentUrl.includes("cdrs_customer.php") || currentUrl.includes("cdrs_vend.php")) {
    var sClass = $('.separator').first().css('background-color');

    var ip = currentUrl.includes("sbc3") ? "185.209.151.21" : "185.209.148.24";

    if (sClass != "rgb(255, 255, 0)") {
        $('.separator').first().css('background-color', 'rgb(255, 255, 0)');

        $('.list-tr').each(function () {

            cur = $(this);

            var cli = cur.find('td:nth-child(3)').html().trim();
            var cld = cur.find('td:nth-child(4)').html().trim();

            cur.find('td:nth-child(2)').append('<a href="https://crdb.voiped.eu/Operations/Dialplan?cli=' + cli + '&cld=' + cld + '&pai=' + cli + '&source=' + ip + '" class="x-menu-item" id="ext-gen701" style="float:right" target="_blank"><img src="/images/zoom.gif">CRDB</a>')

        });
    }
}
else if (currentUrl.includes("sip_logs.php?i_sip_log")) {

    var sClass = $('.separator').first().css('background-color');

    if (sClass != "rgb(255, 255, 0)") {
        $('.separator').first().css('background-color', 'rgb(255, 255, 0)');

        $('.separator').first().next().css('height', '70%');
    }

}
else if (currentUrl.includes("sip_logs.php")) {

    var sClass = $('.separator').first().css('background-color');

    if (sClass != "rgb(255, 255, 0)") {
        $('.separator').first().css('background-color', 'rgb(255, 255, 0)');

        $('.separator').first().next().css('width', '100%');
    }

}
