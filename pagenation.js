/*
 * @Author: Administrator
 * @Date:   2016-02-21 15:44:01
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-21 17:58:02
 */

    (function(window) {
        'use strict';
        // 1.当前是第几页
        var currentPage = 20;
        // 2.显示几页
        var showPageCount = 5;
        var regin = Math.floor(showPageCount / 2)
            // 3.总共有多少页
        var totalPageCount = 20;
        // 4.从第几页开始显示
        var beginPage = currentPage - regin;
        beginPage = beginPage < 1 ? 1 : beginPage;
        // 5.显示到第几页
        var endPage = beginPage + showPageCount;
        if (endPage > totalPageCount) {
            endPage = totalPageCount + 1;
            beginPage = endPage - showPageCount;
            beginPage = beginPage < 1 ? 1 : beginPage;
        }
        var container = document.getElementsByClassName('pagination')[0];
          var preLi = document.createElement('li');
        preLi.innerHTML = '<a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
         if(beginPage==1){
              preLi.classList.add('disabled');
            }
        container.appendChild(preLi);
        for (var i = beginPage; i < endPage; i++) {
            var liEle = document.createElement('li');
            liEle.innerHTML = '<a href="#">' + i + '</a>';
            if(i==currentPage){
              liEle.classList.add('active');
            }
            container.appendChild(liEle);
        };
        var nextLi = document.createElement('li');
        nextLi.innerHTML = '<a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a>';
        if(currentPage==totalPageCount){
              nextLi.classList.add('disabled');
            }
        container.appendChild(nextLi);
    })(window);

