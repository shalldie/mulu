require('../css/mulu');

; (function ($) {
    let defaults = {

    };

    $.mulu = function (options) {

        let opt = $.extends({}, defaults, options);
    };


    function fillDom(opt) {
        // 唯一性
        $(".mulu-wrap").remove();

        // 填充dom
        let wrap = `
    <div class="mulu-wrap">
        <div class="mulu-tag">
            <div class="mulu-title">目</div>
            <div class="mulu-title">录</div>
        </div>
        <div class="mulu-list mulu-list-open">
            <a class="mulu-list-title">一、项目管理</a>
            <a class="mulu-list-item">项目</a>
            <a class="mulu-list-item">我的任务</a>
            <a class="mulu-list-item">填写项目周报</a>
            <a class="mulu-list-item">历史项目周报</a>
        </div>
        <div class="mulu-list mulu-list-open">
            <a class="mulu-list-title">二、数据统计</a>
            <a class="mulu-list-item">项目</a>
            <a class="mulu-list-item">我的任务</a>
        </div>
        <div class="mulu-list">
            <a class="mulu-list-title">三、人事管理</a>
            <a class="mulu-list-item">项目</a>
            <a class="mulu-list-item">我的任务</a>
            <a class="mulu-list-item">填写项目周报</a>
            <a class="mulu-list-item">历史项目周报</a>
        </div>
        <div class="mulu-list">
            <div class="mulu-list-title">四、基础管理</div>
            <a class="mulu-list-item">项目</a>
            <a class="mulu-list-item">我的任务</a>
            <a class="mulu-list-item">填写项目周报</a>
            <a class="mulu-list-item">历史项目周报</a>
        </div>

    </div>`;
    }

    function getMenus(opts) {
        let result = '';

        $.each(opts, (index, item) => {
            let opt = $.extend({}, defaults, item); // 当前项配置 
        });
    }
})(jQuery);