$(".box").focusout( function(e) {
          var reg = /<(.br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE|a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video)*?>/g;
            if (reg.test($('.box').val()) == true) {
              //  alert('HTML Tag are not allowed');
            }
            e.preventDefault();
        });

    function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space 
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}
document.getElementById('search').onkeydown = function(e) {
    if(e.keyCode == 32 && this.value.indexOf(' ') >= 0) {
        document.getElementById('key').innerHTML = "";
        e.preventDefault();
    }else if( e.keyCode == 32 && this.value.length == 0 ){
        e.preventDefault();
    }
    else{
        document.getElementById('key').innerHTML = "";
    }
}