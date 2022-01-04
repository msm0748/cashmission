//개발자 모드에 아래 코드 입력

var x, y;
document.onmousemove = (e) => {
  x = e.pageX;
  y = e.pageY;
};

//원하는 위치에 마우스 커서를 두고 아래 코드 입력
console.log(`${x}, ${y}`);

/* 글자 잘 베껴썼는지 검사하기 (F11 후 크기 75%) */

function simulateClick(x, y) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  var cb = document.elementFromPoint(x, y);
  cb.dispatchEvent(evt);
}

window.onkeydown = (e) => {
  if (e.keyCode == 49) {
    simulateClick(2003, 147);
  } else if (e.keyCode == 50) {
    simulateClick(2005, 341);
  } else if (e.keyCode == 51) {
    simulateClick(2006, 391);
  } else if (e.keyCode == 52) {
    simulateClick(2006, 439);
  } else if (e.keyCode == 53) {
    simulateClick(2005, 499);
  } else if (e.keyCode == 192) {
    simulateClick(1754, 1110);
  } else if (e.keyCode == 32) {
    simulateClick(1897, 1110);
  }
};

/* 숨은 글자 찾고 베껴 쓰기 (F11 후 크기 50%) */

function simulateClick(x, y) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  var cb = document.elementFromPoint(x, y);
  cb.dispatchEvent(evt);
}

window.onkeydown = (e) => {
  var textarea = document.querySelector(
    "#app > div > div.MissionContainer__WorkContainer-sc-1f05koo-1.ZcmPw > div > div.LabelingImageTaskRightBar__Container-sc-fubl6n-0.jYYhLO > div.LabelingRightContent__Container-sc-ui9idm-0.elQYbQ > div > div.Pane.horizontal.Pane2 > div > div > div.LabelingPropertyContainer__ItemContainer-sc-1eqfn6b-3.kdaPMj > div:nth-child(4) > div.LabelingInputItemContainer__TextAnswer-sc-15f33n6-0.fwbwmL > textarea"
  );
  if (e.keyCode == 32) {
    simulateClick(3049, 920);
    simulateClick(3049, 1193);
    simulateClick(3049, 1419);
  } else if (e.keyCode == 17) {
    simulateClick(3049, 920);
    simulateClick(3049, 1248);
    simulateClick(3049, 1419);
  }
  setTimeout(() => {
    textarea.style.fontSize = "32px";
    textarea.focus();
  }, 200);
};

/* 악플 75% */

function simulateClick(x, y) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  var cb = document.elementFromPoint(x, y);
  cb.dispatchEvent(evt);
}

window.onkeydown = (e) => {
  if (e.keyCode == 49) {
    simulateClick(1336, 213);
    setTimeout(() => {
      simulateClick(1326, 268);
    }, 200);
  } else if (e.keyCode == 50) {
    simulateClick(1336, 213);
    setTimeout(() => {
      simulateClick(1318, 316);
    }, 200);
  } else if (e.keyCode == 32) {
    simulateClick(1353, 338);
  }
};
