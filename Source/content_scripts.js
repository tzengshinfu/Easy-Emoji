var emojiWindow, searchTextBox, emojiList, copied;

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
        browEmoji.addEventListener("mousedown", copyEmoji);
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

addEmojiWindow();

document.addEventListener("contextmenu", function (evt) {
  getEmojiWindowPosition(evt);
});

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
}