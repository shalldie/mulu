require('../css/mulu');

; (function($) {

    $.mulu = function(list) {
        fillDom(list);
        bindEvents();
    };


    function fillDom(list) {
        // 唯一性
        $("#muluWrap").remove();

        // 填充dom
        let wrap = `
    <div id="muluWrap" class="mulu-wrap">
        <div class="mulu-tag">
            <div class="mulu-title">目</div>
            <div class="mulu-title">录</div>
        </div>
        ${getMenus(list)}
    </div>`;

        $('body').append(wrap);
    }

    function getMenus(opts) {
        let result = '';

        $.each(opts, (index, item) => {
            let opt = $.extend({}, {
                title: '',
                opened: true,
                blank: false,
                url: 'javascript:void(0)'
            }, item); // 当前项配置 

            let openClass = opt.opened ? 'mulu-list-open' : '';

            let listContent = opt.list.map(n => `<a href="${n.url}" ${n.blank ? 'target="_blank"' : ''} class="mulu-list-item">${n.title}</a>`).join('');

            let template = `
        <div class="mulu-list ${openClass}">
            <a class="mulu-list-title">${opt.title}</a>
            ${listContent}
        </div>`;

            result += template;
        });
        return result;
    }

    function bindEvents() {
        let wrap = $("#muluWrap");
        let tag = wrap.children('.mulu-tag');
        let titles = wrap.find(".mulu-list-title");


        tag.click(function() {
            wrap.toggleClass('mulu-hidden');
        });

        titles.click(function() {
            $(this).parent().toggleClass('mulu-list-open');
        });
    }
})(jQuery);