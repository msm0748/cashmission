function simulateClick(x,y) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var cb = document.elementFromPoint(x,y);
    cb.dispatchEvent(evt);
};

window.onkeydown = (e) => {
    if(e.keyCode == 49){
        const select = (check) => {
            simulateClick(1336, 213);
            console.log('1');
            check();
        }
        select(() => {simulateClick(1326, 268); console.log('2');});
    }
};