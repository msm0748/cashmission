//개발자 모드에 아래 코드 입력

var x, y;
document.onmousemove = (e) => {
  x = e.pageX;
  y = e.pageY;
};

//원하는 위치에 마우스 커서를 두고 아래 코드 입력
console.log(`${x}, ${y}`);

/* 글자 잘 베껴썼는지 검사하기 (F11 후 크기 50%) */

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
    "#app > div.MuiBox-root.jss6 > div > div.MuiBox-root.jss8 > div > div > div.LabelingValidationPanel__Container-sc-8zanhw-1.hLcnQB > div:nth-child(7) > div.LabelingInputItemContainer__TextAnswer-sc-15f33n6-0.fwbwmL > textarea"
  );
  if (e.key == "1") {
    simulateClick(3030, 144);
  } else if (e.key == "2") {
    simulateClick(3030, 396);
  } else if (e.key == "3") {
    simulateClick(3030, 590);
  } else if (e.key == "+") {
    simulateClick(2801, 1672);
  } else if (e.key == "Enter") {
    simulateClick(2955, 1692);
  } else if (e.key == "0") {
    textarea.style.fontSize = "32px";
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
function focus() {
  var textarea = document.querySelector(
    "#app > div > div.MissionContainer__WorkContainer-sc-1f05koo-1.ZcmPw > div > div.LabelingImageTaskRightBar__Container-sc-fubl6n-0.jYYhLO > div.LabelingRightContent__Container-sc-ui9idm-0.elQYbQ > div > div.Pane.horizontal.Pane2 > div > div > div.LabelingPropertyContainer__ItemContainer-sc-1eqfn6b-3.iUfbbT > div:nth-child(4) > div.LabelingInputItemContainer__TextAnswer-sc-15f33n6-0.fwbwmL > textarea"
  );
  setTimeout(() => {
    textarea.style.fontSize = "32px";
    textarea.focus();
  }, 200);
}
window.oncontextmenu = (e) => {
  e.preventDefault();
  simulateClick(3049, 966);
  simulateClick(3049, 1193);
  simulateClick(3049, 1419);
  focus();
};

window.onkeydown = (e) => {
  if (e.keyCode == 32) {
    simulateClick(3049, 920);
    simulateClick(3049, 1193);
    simulateClick(3049, 1419);
    focus();
  } else if (e.keyCode == 17 && e.keyCode == 16) {
    simulateClick(3049, 920);
    simulateClick(3049, 1248);
    simulateClick(3049, 1419);
    focus();
  }
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
