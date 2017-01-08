var timer;
var isLongPress = false;
const delayMS = 500; //判斷為長按的時間(毫秒)
var emojiWindow, searchTextBox, emojiList, insertPosition, beforeText, afterText;
var inputBox, selectedNode, selectedNodeOffset;

function longPress(evt) {
  isLongPress = true;
  timer = setTimeout(function () { detectLongPress(evt); }, delayMS);
}

function detectLongPress(evt) {
  if (isLongPress === false) {
    return;
  }

  if (timer) {
    clearTimeout(timer);
  }

  inputBox = evt.target;
  if (inputBox.tagName === "DIV" || inputBox.tagName === "SPAN") {
    selectedNode = document.getSelection();
    if (selectedNode.anchorNode.id !== "emoji-window") {
      selectedNodeOffset = selectedNode.anchorOffset;
    }

    let isInputable = false;

    if (inputBox.isContentEditable === true) {
      isInputable = true;
    }
    else {
      if (inputBox.hasAttribute("contenteditable") === true) {
        if (inputBox.contentEditable !== "false") {
          isInputable = true;
        }
      }
    }

    if (isInputable === false) {
      return;
    }

    emojiWindow.style.left = evt.pageX + "px";
    emojiWindow.style.top = evt.pageY + inputBox.clientHeight + "px";
    emojiWindow.style.display = "block";
    searchTextBox.focus();

    insertPosition = selectedNodeOffset;
  }
  else {
    emojiWindow.style.left = evt.pageX + "px";
    emojiWindow.style.top = evt.pageY + inputBox.clientHeight + "px";
    emojiWindow.style.display = "block";
    searchTextBox.focus();

    insertPosition = inputBox.selectionStart;
  }
}

function longPressRelease(evt) {
  isLongPress = false;
}

function addEmojiWindow() {
  emojiWindow = document.createElement("div");
  emojiWindow.id = "emoji-window";
  emojiWindow.className = "emoji-window";

  searchTextBox = document.createElement("input");
  searchTextBox.id = "search-textbox";
  searchTextBox.type = "text";
  searchTextBox.maxLength = "20";
  searchTextBox.value = "Input Keyword here";
  searchTextBox.className = "tip";
  searchTextBox.addEventListener("keydown", showKeywordText);
  searchTextBox.addEventListener("keyup", showTipText);
  searchTextBox.addEventListener("keyup", getEmojiList);
  emojiWindow.appendChild(searchTextBox);

  closeButton = document.createElement("img");
  closeButton.src = chrome.extension.getURL("close.png");
  closeButton.className = "close";
  closeButton.addEventListener("click", addCloseButtonEvent);
  emojiWindow.appendChild(closeButton);

  emojiList = document.createElement("div");
  emojiList.id = "emoji-list";
  emojiWindow.appendChild(emojiList);

  document.body.appendChild(emojiWindow);
}

function addTextBoxEvent() {
  let inputs = document.getElementsByTagName("input");
  for (let input of inputs) {
    if (input.type === "text") {
      input.addEventListener("mousedown", longPress);
      input.addEventListener("mouseup", longPressRelease);
    }
  }

  let textAreas = document.getElementsByTagName("textarea");
  for (let textArea of textAreas) {
    textArea.addEventListener("mousedown", longPress);
    textArea.addEventListener("mouseup", longPressRelease);
  }

  let divs = document.getElementsByTagName("div");
  for (let div of divs) {
    div.addEventListener("mousedown", longPress);
    div.addEventListener("mouseup", longPressRelease);
  }

  let spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.addEventListener("mousedown", longPress);
    span.addEventListener("mouseup", longPressRelease);
  }
}

function showKeywordText(evt) {
  if (evt.target.value === "Input Keyword here") {
    evt.target.value = "";
    evt.target.className = "keyword";
  }
}

function showTipText(evt) {
  if (evt.target.value === "") {
    evt.target.value = "Input Keyword here";
    evt.target.className = "tip";
  }
}

function getEmojiList(evt) {
  chrome.runtime.sendMessage({ "keyword": evt.target.value }, function (message) {
    let fragment = document.createDocumentFragment();
    let brows = Array.from(message.brow);
    let oldEmojiList = emojiWindow.children["emoji-list"];
    let newEmojiList = document.createElement("div");
    newEmojiList.id = "emoji-list";

    for (let brow of brows) {
      let browEmoji = document.createElement("span");
      browEmoji.innerText = brow;
      browEmoji.className = "brow";
      browEmoji.addEventListener("click", insertEmoji);
      fragment.appendChild(browEmoji);
    }

    newEmojiList.appendChild(fragment);
    emojiWindow.replaceChild(newEmojiList, oldEmojiList);
  });
}

function addCloseButtonEvent(evt) {
  emojiWindow.style.display = "none";
}

function insertEmoji(evt) {
  if (inputBox.tagName === "DIV" || inputBox.tagName === "SPAN") {
    let inputText = inputBox.innerText;
    beforeText = inputText.slice(0, insertPosition);
    afterText = inputText.slice(insertPosition, inputText.length);
    inputBox.innerText = beforeText + evt.target.innerText + afterText;
  }
  else {
    let inputText = inputBox.value;
    beforeText = inputText.slice(0, insertPosition);
    afterText = inputText.slice(insertPosition, inputText.length);
    inputBox.value = beforeText + evt.target.innerText + afterText;
  }
}

addTextBoxEvent();
addEmojiWindow();