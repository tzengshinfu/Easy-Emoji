var emojiWindow, searchTextBox, emojiList, copied;

function addEmojiWindow() {
  emojiWindow = document.createElement("div");
  emojiWindow.id = "emoji-window";
  emojiWindow.className = "emoji-window";
  emojiWindow.draggable = true;
  let emojiWindowHead = document.createElement("div");
  emojiWindowHead.style.display = "flex";

  searchTextBox = document.createElement("input");
  searchTextBox.id = "search-textbox";
  searchTextBox.type = "text";
  searchTextBox.maxLength = "20";
  searchTextBox.value = "Input Keyword here";
  searchTextBox.className = "tip";
  searchTextBox.addEventListener("keydown", showKeywordText);
  searchTextBox.addEventListener("keyup", showTipText);
  searchTextBox.addEventListener("keyup", getEmojiList);
  let searchTextBoxContainer = document.createElement("div");
  searchTextBoxContainer.appendChild(searchTextBox);
  emojiWindowHead.appendChild(searchTextBoxContainer);

  clearButton = document.createElement("img");
  clearButton.src = chrome.extension.getURL("clear.png");
  clearButton.className = "close";
  clearButton.addEventListener("click", addClearButtonEvent);
  let clearButtonContainer = document.createElement("div");
  clearButtonContainer.appendChild(clearButton);
  emojiWindowHead.appendChild(clearButtonContainer);

  closeButton = document.createElement("img");
  closeButton.src = chrome.extension.getURL("close.png");
  closeButton.className = "close";
  closeButton.addEventListener("click", addCloseButtonEvent);
  let closeButtonContainer = document.createElement("div");
  closeButtonContainer.style.textAlign = "right";
  closeButtonContainer.appendChild(closeButton);
  closeButtonContainer.style.flexGrow = 2;
  emojiWindowHead.appendChild(closeButtonContainer);

  emojiList = document.createElement("div");
  emojiList.style.width = "100%";
  emojiList.id = "emoji-list";

  emojiWindow.appendChild(emojiWindowHead);
  emojiWindow.appendChild(emojiList);

  document.body.appendChild(emojiWindow);
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
  if (evt.target.value !== "Input Keyword here") {
    chrome.runtime.sendMessage({ "keyword": evt.target.value }, function (message) {
      let fragment = document.createDocumentFragment();
      let brows = Array.from(message.brow);
      let oldEmojiList = emojiWindow.children["emoji-list"];
      let newEmojiList = document.createElement("div");
      newEmojiList.id = "emoji-list";

      for (let brow of brows) {
        let browEmoji = document.createElement("span");
        browEmoji.textContent = brow;
        browEmoji.className = "brow";
        browEmoji.addEventListener("mousedown", copyEmoji, true);
        fragment.appendChild(browEmoji);
      }

      newEmojiList.appendChild(fragment);
      emojiWindow.replaceChild(newEmojiList, oldEmojiList);
    });
  }
}

function addCloseButtonEvent(evt) {
  emojiWindow.style.display = "none";
}

function addClearButtonEvent(evt) {
  searchTextBox.value = "Input Keyword here";
  searchTextBox.className = "tip";
}

function getEmojiWindowPosition(evt) {
  chrome.runtime.sendMessage({ "pageX": evt.pageX, "pageY": evt.pageY }, function (message) {
  });
}

function showEmojiWindow(pageX, pageY) {
  emojiWindow.style.left = pageX + "px";
  emojiWindow.style.top = pageY + "px";
  emojiWindow.style.display = "block";
  searchTextBox.focus();
}

function copyEmoji(evt) {
  emojiWindow.draggable = false;
  let range = document.createRange();
  range.selectNode(evt.target);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().empty();
  let oldSearchText = searchTextBox.value;
  searchTextBox.value = chrome.i18n.getMessage("appCopied");
  searchTextBox.className = "copied";
  setTimeout(function () {
    searchTextBox.value = oldSearchText;
    searchTextBox.className = "tip";
  }, 1000);
  emojiWindow.draggable = true;
}

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    //return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    emojiWindow.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    emojiWindow.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    //return false;
} 

addEmojiWindow();
emojiWindow.addEventListener('dragstart',drag_start, true); //Thank to robertc(http://stackoverflow.com/questions/7278409/html5-drag-and-drop-to-move-a-div-anywhere-on-the-screen) 
document.body.addEventListener('dragover',drag_over, true); 
document.body.addEventListener('drop',drop, true);
document.addEventListener("contextmenu", function (evt) {getEmojiWindowPosition(evt);});