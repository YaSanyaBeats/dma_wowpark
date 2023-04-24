/* Temporary */
const gevmeButton1 = document.querySelectorAll('.gevme1');
const gevmeButton2 = document.querySelectorAll('.gevme2');

if(gevmeButton1.length > 0) {
    gevmeButton1.forEach((button) => {
        button.addEventListener('click', (event) => {
            Swal.fire({
                html:
                '<div id="gevme-calendar-block" style="width: 100%; height: 100%"></div>',
                showCloseButton: true,
                didOpen: (popup) => {
                    var meta = document.createElement("meta"),iframe = document.createElement("iframe");meta.setAttribute("name", "viewport");meta.setAttribute("content", "width=device-width, height=device-height, initial-scale=1, maximum-scale=1.0");document.getElementsByTagName("head")[0].appendChild(meta);iframe.setAttribute("src", "https://www.gevme.com/28468243/calendar?top_stripe_color=40b3a5&block_color=2baae1&text_color=ffffff&&btn_block_color=40b3a5&btn_text_color=ffffff&week_starts=sunday&current_view=month&filters=");iframe.setAttribute("width", "100%");iframe.style.width="100%";iframe.style.height="99%";iframe.setAttribute("height", "99%");iframe.setAttribute("frameborder", "0");document.getElementById("gevme-calendar-block").appendChild(iframe);
                }
            })
        })
    })
}

if(gevmeButton2.length > 0) {
    gevmeButton2.forEach((button) => {
        button.addEventListener('click', (event) => {
            Swal.fire({
                html:
                '<div class="gevme-registration-block" data-event="14006646"></div>',
                showCloseButton: true,
                didOpen: (popup) => {
                    (function() { var sc = document.createElement("script"); sc.type = "text/javascript"; sc.src = "https://www.gevme.com/script/embed.js"; document.getElementsByTagName("script")[0].parentNode.appendChild(sc); })();
                }
            })
        })
    })
}