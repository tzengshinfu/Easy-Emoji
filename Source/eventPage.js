var indexedDB = window.indexedDB;
var emojiDatabase;

var openRequest = indexedDB.open("emojiDatabase", 5);

var emojiDatas = [
    { brow: "😀", keyword: ["grinning", "face"] }
    , { brow: "😁", keyword: ["grinning", "face", "with", "smiling", "eyes"] }
    , { brow: "😂", keyword: ["face", "with", "tears", "of", "joy"] }
    , { brow: "🤣", keyword: ["rolling", "on", "the", "floor", "laughing"] }
    , { brow: "😃", keyword: ["smiling", "face", "with", "open", "mouth"] }
    , { brow: "😄", keyword: ["smiling", "face", "with", "open", "mouth", "and", "smiling", "eyes"] }
    , { brow: "😅", keyword: ["smiling", "face", "with", "open", "mouth", "and", "cold", "sweat"] }
    , { brow: "😆", keyword: ["smiling", "face", "with", "open", "mouth", "and", "closed", "eyes"] }
    , { brow: "😉", keyword: ["winking", "face"] }
    , { brow: "😊", keyword: ["smiling", "face", "with", "smiling", "eyes"] }
    , { brow: "😋", keyword: ["face", "savouring", "delicious", "food"] }
    , { brow: "😎", keyword: ["smiling", "face", "with", "sunglasses"] }
    , { brow: "😍", keyword: ["smiling", "face", "with", "heart-eyes"] }
    , { brow: "😘", keyword: ["face", "blowing", "a", "kiss"] }
    , { brow: "😗", keyword: ["kissing", "face"] }
    , { brow: "😙", keyword: ["kissing", "face", "with", "smiling", "eyes"] }
    , { brow: "😚", keyword: ["kissing", "face", "with", "closed", "eyes"] }
    , { brow: "☺", keyword: ["smiling", "face"] }
    , { brow: "🙂", keyword: ["slightly", "smiling", "face"] }
    , { brow: "🤗", keyword: ["hugging", "face"] }
    , { brow: "🤩", keyword: ["star-struck"] }
    , { brow: "🤔", keyword: ["thinking", "face"] }
    , { brow: "🤨", keyword: ["face", "with", "raised", "eyebrow"] }
    , { brow: "😐", keyword: ["neutral", "face"] }
    , { brow: "😑", keyword: ["expressionless", "face"] }
    , { brow: "😶", keyword: ["face", "without", "mouth"] }
    , { brow: "🙄", keyword: ["face", "with", "rolling", "eyes"] }
    , { brow: "😏", keyword: ["smirking", "face"] }
    , { brow: "😣", keyword: ["persevering", "face"] }
    , { brow: "😥", keyword: ["disappointed", "but", "relieved", "face"] }
    , { brow: "😮", keyword: ["face", "with", "open", "mouth"] }
    , { brow: "🤐", keyword: ["zipper-mouth", "face"] }
    , { brow: "😯", keyword: ["hushed", "face"] }
    , { brow: "😪", keyword: ["sleepy", "face"] }
    , { brow: "😫", keyword: ["tired", "face"] }
    , { brow: "😴", keyword: ["sleeping", "face"] }
    , { brow: "😌", keyword: ["relieved", "face"] }
    , { brow: "😛", keyword: ["face", "with", "stuck-out", "tongue"] }
    , { brow: "😜", keyword: ["face", "with", "stuck-out", "tongue", "and", "winking", "eye"] }
    , { brow: "😝", keyword: ["face", "with", "stuck-out", "tongue", "and", "closed", "eyes"] }
    , { brow: "🤤", keyword: ["drooling", "face"] }
    , { brow: "😒", keyword: ["unamused", "face"] }
    , { brow: "😓", keyword: ["face", "with", "cold", "sweat"] }
    , { brow: "😔", keyword: ["pensive", "face"] }
    , { brow: "😕", keyword: ["confused", "face"] }
    , { brow: "🙃", keyword: ["upside-down", "face"] }
    , { brow: "🤑", keyword: ["money-mouth", "face"] }
    , { brow: "😲", keyword: ["astonished", "face"] }
    , { brow: "☹", keyword: ["frowning", "face"] }
    , { brow: "🙁", keyword: ["slightly", "frowning", "face"] }
    , { brow: "😖", keyword: ["confounded", "face"] }
    , { brow: "😞", keyword: ["disappointed", "face"] }
    , { brow: "😟", keyword: ["worried", "face"] }
    , { brow: "😤", keyword: ["face", "with", "steam", "from", "nose"] }
    , { brow: "😢", keyword: ["crying", "face"] }
    , { brow: "😭", keyword: ["loudly", "crying", "face"] }
    , { brow: "😦", keyword: ["frowning", "face", "with", "open", "mouth"] }
    , { brow: "😧", keyword: ["anguished", "face"] }
    , { brow: "😨", keyword: ["fearful", "face"] }
    , { brow: "😩", keyword: ["weary", "face"] }
    , { brow: "🤯", keyword: ["exploding", "head"] }
    , { brow: "😬", keyword: ["grimacing", "face"] }
    , { brow: "😰", keyword: ["face", "with", "open", "mouth", "and", "cold", "sweat"] }
    , { brow: "😱", keyword: ["face", "screaming", "in", "fear"] }
    , { brow: "😳", keyword: ["flushed", "face"] }
    , { brow: "🤪", keyword: ["crazy", "face"] }
    , { brow: "😵", keyword: ["dizzy", "face"] }
    , { brow: "😡", keyword: ["pouting", "face"] }
    , { brow: "😠", keyword: ["angry", "face"] }
    , { brow: "🤬", keyword: ["face", "with", "symbols", "over", "mouth"] }
    , { brow: "😷", keyword: ["face", "with", "medical", "mask"] }
    , { brow: "🤒", keyword: ["face", "with", "thermometer"] }
    , { brow: "🤕", keyword: ["face", "with", "head-bandage"] }
    , { brow: "🤢", keyword: ["nauseated", "face"] }
    , { brow: "🤮", keyword: ["face", "vomiting"] }
    , { brow: "🤧", keyword: ["sneezing", "face"] }
    , { brow: "😇", keyword: ["smiling", "face", "with", "halo"] }
    , { brow: "🤠", keyword: ["cowboy", "hat", "face"] }
    , { brow: "🤡", keyword: ["clown", "face"] }
    , { brow: "🤥", keyword: ["lying", "face"] }
    , { brow: "🤫", keyword: ["shushing", "face"] }
    , { brow: "🤭", keyword: ["face", "with", "hand", "over", "mouth"] }
    , { brow: "🧐", keyword: ["face", "with", "monocle"] }
    , { brow: "🤓", keyword: ["nerd", "face"] }
    , { brow: "😈", keyword: ["smiling", "face", "with", "horns"] }
    , { brow: "👿", keyword: ["angry", "face", "with", "horns"] }
    , { brow: "👹", keyword: ["ogre"] }
    , { brow: "👺", keyword: ["goblin"] }
    , { brow: "💀", keyword: ["skull"] }
    , { brow: "☠", keyword: ["skull", "and", "crossbones"] }
    , { brow: "👻", keyword: ["ghost"] }
    , { brow: "👽", keyword: ["alien"] }
    , { brow: "👾", keyword: ["alien", "monster"] }
    , { brow: "🤖", keyword: ["robot", "face"] }
    , { brow: "💩", keyword: ["pile", "of", "poo"] }
    , { brow: "😺", keyword: ["smiling", "cat", "face", "with", "open", "mouth"] }
    , { brow: "😸", keyword: ["grinning", "cat", "face", "with", "smiling", "eyes"] }
    , { brow: "😹", keyword: ["cat", "face", "with", "tears", "of", "joy"] }
    , { brow: "😻", keyword: ["smiling", "cat", "face", "with", "heart-eyes"] }
    , { brow: "😼", keyword: ["cat", "face", "with", "wry", "smile"] }
    , { brow: "😽", keyword: ["kissing", "cat", "face", "with", "closed", "eyes"] }
    , { brow: "🙀", keyword: ["weary", "cat", "face"] }
    , { brow: "😿", keyword: ["crying", "cat", "face"] }
    , { brow: "😾", keyword: ["pouting", "cat", "face"] }
    , { brow: "🙈", keyword: ["see-no-evil", "monkey"] }
    , { brow: "🙉", keyword: ["hear-no-evil", "monkey"] }
    , { brow: "🙊", keyword: ["speak-no-evil", "monkey"] }
    , { brow: "👶", keyword: ["baby"] }
    , { brow: "👶🏻", keyword: ["baby", "light", "skin", "tone"] }
    , { brow: "👶🏼", keyword: ["baby", "medium-light", "skin", "tone"] }
    , { brow: "👶🏽", keyword: ["baby", "medium", "skin", "tone"] }
    , { brow: "👶🏾", keyword: ["baby", "medium-dark", "skin", "tone"] }
    , { brow: "👶🏿", keyword: ["baby", "dark", "skin", "tone"] }
    , { brow: "🧒", keyword: ["child"] }
    , { brow: "🧒🏻", keyword: ["child", "light", "skin", "tone"] }
    , { brow: "🧒🏼", keyword: ["child", "medium-light", "skin", "tone"] }
    , { brow: "🧒🏽", keyword: ["child", "medium", "skin", "tone"] }
    , { brow: "🧒🏾", keyword: ["child", "medium-dark", "skin", "tone"] }
    , { brow: "🧒🏿", keyword: ["child", "dark", "skin", "tone"] }
    , { brow: "👦", keyword: ["boy"] }
    , { brow: "👦🏻", keyword: ["boy", "light", "skin", "tone"] }
    , { brow: "👦🏼", keyword: ["boy", "medium-light", "skin", "tone"] }
    , { brow: "👦🏽", keyword: ["boy", "medium", "skin", "tone"] }
    , { brow: "👦🏾", keyword: ["boy", "medium-dark", "skin", "tone"] }
    , { brow: "👦🏿", keyword: ["boy", "dark", "skin", "tone"] }
    , { brow: "👧", keyword: ["girl"] }
    , { brow: "👧🏻", keyword: ["girl", "light", "skin", "tone"] }
    , { brow: "👧🏼", keyword: ["girl", "medium-light", "skin", "tone"] }
    , { brow: "👧🏽", keyword: ["girl", "medium", "skin", "tone"] }
    , { brow: "👧🏾", keyword: ["girl", "medium-dark", "skin", "tone"] }
    , { brow: "👧🏿", keyword: ["girl", "dark", "skin", "tone"] }
    , { brow: "🧑", keyword: ["adult"] }
    , { brow: "🧑🏻", keyword: ["adult", "light", "skin", "tone"] }
    , { brow: "🧑🏼", keyword: ["adult", "medium-light", "skin", "tone"] }
    , { brow: "🧑🏽", keyword: ["adult", "medium", "skin", "tone"] }
    , { brow: "🧑🏾", keyword: ["adult", "medium-dark", "skin", "tone"] }
    , { brow: "🧑🏿", keyword: ["adult", "dark", "skin", "tone"] }
    , { brow: "👨", keyword: ["man"] }
    , { brow: "👨🏻", keyword: ["man", "light", "skin", "tone"] }
    , { brow: "👨🏼", keyword: ["man", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽", keyword: ["man", "medium", "skin", "tone"] }
    , { brow: "👨🏾", keyword: ["man", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿", keyword: ["man", "dark", "skin", "tone"] }
    , { brow: "👩", keyword: ["woman"] }
    , { brow: "👩🏻", keyword: ["woman", "light", "skin", "tone"] }
    , { brow: "👩🏼", keyword: ["woman", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽", keyword: ["woman", "medium", "skin", "tone"] }
    , { brow: "👩🏾", keyword: ["woman", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿", keyword: ["woman", "dark", "skin", "tone"] }
    , { brow: "🧓", keyword: ["older", "adult"] }
    , { brow: "🧓🏻", keyword: ["older", "adult", "light", "skin", "tone"] }
    , { brow: "🧓🏼", keyword: ["older", "adult", "medium-light", "skin", "tone"] }
    , { brow: "🧓🏽", keyword: ["older", "adult", "medium", "skin", "tone"] }
    , { brow: "🧓🏾", keyword: ["older", "adult", "medium-dark", "skin", "tone"] }
    , { brow: "🧓🏿", keyword: ["older", "adult", "dark", "skin", "tone"] }
    , { brow: "👴", keyword: ["old", "man"] }
    , { brow: "👴🏻", keyword: ["old", "man", "light", "skin", "tone"] }
    , { brow: "👴🏼", keyword: ["old", "man", "medium-light", "skin", "tone"] }
    , { brow: "👴🏽", keyword: ["old", "man", "medium", "skin", "tone"] }
    , { brow: "👴🏾", keyword: ["old", "man", "medium-dark", "skin", "tone"] }
    , { brow: "👴🏿", keyword: ["old", "man", "dark", "skin", "tone"] }
    , { brow: "👵", keyword: ["old", "woman"] }
    , { brow: "👵🏻", keyword: ["old", "woman", "light", "skin", "tone"] }
    , { brow: "👵🏼", keyword: ["old", "woman", "medium-light", "skin", "tone"] }
    , { brow: "👵🏽", keyword: ["old", "woman", "medium", "skin", "tone"] }
    , { brow: "👵🏾", keyword: ["old", "woman", "medium-dark", "skin", "tone"] }
    , { brow: "👵🏿", keyword: ["old", "woman", "dark", "skin", "tone"] }
    , { brow: "👨‍⚕️", keyword: ["man", "health", "worker"] }
    , { brow: "👨🏻‍⚕️", keyword: ["man", "health", "worker", "light", "skin", "tone"] }
    , { brow: "👨🏼‍⚕️", keyword: ["man", "health", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍⚕️", keyword: ["man", "health", "worker", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍⚕️", keyword: ["man", "health", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍⚕️", keyword: ["man", "health", "worker", "dark", "skin", "tone"] }
    , { brow: "👩‍⚕️", keyword: ["woman", "health", "worker"] }
    , { brow: "👩🏻‍⚕️", keyword: ["woman", "health", "worker", "light", "skin", "tone"] }
    , { brow: "👩🏼‍⚕️", keyword: ["woman", "health", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍⚕️", keyword: ["woman", "health", "worker", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍⚕️", keyword: ["woman", "health", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍⚕️", keyword: ["woman", "health", "worker", "dark", "skin", "tone"] }
    , { brow: "👨‍🎓", keyword: ["man", "student"] }
    , { brow: "👨🏻‍🎓", keyword: ["man", "student", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🎓", keyword: ["man", "student", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🎓", keyword: ["man", "student", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🎓", keyword: ["man", "student", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🎓", keyword: ["man", "student", "dark", "skin", "tone"] }
    , { brow: "👩‍🎓", keyword: ["woman", "student"] }
    , { brow: "👩🏻‍🎓", keyword: ["woman", "student", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🎓", keyword: ["woman", "student", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🎓", keyword: ["woman", "student", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🎓", keyword: ["woman", "student", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🎓", keyword: ["woman", "student", "dark", "skin", "tone"] }
    , { brow: "👨‍🏫", keyword: ["man", "teacher"] }
    , { brow: "👨🏻‍🏫", keyword: ["man", "teacher", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🏫", keyword: ["man", "teacher", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🏫", keyword: ["man", "teacher", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🏫", keyword: ["man", "teacher", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🏫", keyword: ["man", "teacher", "dark", "skin", "tone"] }
    , { brow: "👩‍🏫", keyword: ["woman", "teacher"] }
    , { brow: "👩🏻‍🏫", keyword: ["woman", "teacher", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🏫", keyword: ["woman", "teacher", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🏫", keyword: ["woman", "teacher", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🏫", keyword: ["woman", "teacher", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🏫", keyword: ["woman", "teacher", "dark", "skin", "tone"] }
    , { brow: "👨‍⚖️", keyword: ["man", "judge"] }
    , { brow: "👨🏻‍⚖️", keyword: ["man", "judge", "light", "skin", "tone"] }
    , { brow: "👨🏼‍⚖️", keyword: ["man", "judge", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍⚖️", keyword: ["man", "judge", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍⚖️", keyword: ["man", "judge", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍⚖️", keyword: ["man", "judge", "dark", "skin", "tone"] }
    , { brow: "👩‍⚖️", keyword: ["woman", "judge"] }
    , { brow: "👩🏻‍⚖️", keyword: ["woman", "judge", "light", "skin", "tone"] }
    , { brow: "👩🏼‍⚖️", keyword: ["woman", "judge", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍⚖️", keyword: ["woman", "judge", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍⚖️", keyword: ["woman", "judge", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍⚖️", keyword: ["woman", "judge", "dark", "skin", "tone"] }
    , { brow: "👨‍🌾", keyword: ["man", "farmer"] }
    , { brow: "👨🏻‍🌾", keyword: ["man", "farmer", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🌾", keyword: ["man", "farmer", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🌾", keyword: ["man", "farmer", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🌾", keyword: ["man", "farmer", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🌾", keyword: ["man", "farmer", "dark", "skin", "tone"] }
    , { brow: "👩‍🌾", keyword: ["woman", "farmer"] }
    , { brow: "👩🏻‍🌾", keyword: ["woman", "farmer", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🌾", keyword: ["woman", "farmer", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🌾", keyword: ["woman", "farmer", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🌾", keyword: ["woman", "farmer", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🌾", keyword: ["woman", "farmer", "dark", "skin", "tone"] }
    , { brow: "👨‍🍳", keyword: ["man", "cook"] }
    , { brow: "👨🏻‍🍳", keyword: ["man", "cook", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🍳", keyword: ["man", "cook", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🍳", keyword: ["man", "cook", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🍳", keyword: ["man", "cook", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🍳", keyword: ["man", "cook", "dark", "skin", "tone"] }
    , { brow: "👩‍🍳", keyword: ["woman", "cook"] }
    , { brow: "👩🏻‍🍳", keyword: ["woman", "cook", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🍳", keyword: ["woman", "cook", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🍳", keyword: ["woman", "cook", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🍳", keyword: ["woman", "cook", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🍳", keyword: ["woman", "cook", "dark", "skin", "tone"] }
    , { brow: "👨‍🔧", keyword: ["man", "mechanic"] }
    , { brow: "👨🏻‍🔧", keyword: ["man", "mechanic", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🔧", keyword: ["man", "mechanic", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🔧", keyword: ["man", "mechanic", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🔧", keyword: ["man", "mechanic", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🔧", keyword: ["man", "mechanic", "dark", "skin", "tone"] }
    , { brow: "👩‍🔧", keyword: ["woman", "mechanic"] }
    , { brow: "👩🏻‍🔧", keyword: ["woman", "mechanic", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🔧", keyword: ["woman", "mechanic", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🔧", keyword: ["woman", "mechanic", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🔧", keyword: ["woman", "mechanic", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🔧", keyword: ["woman", "mechanic", "dark", "skin", "tone"] }
    , { brow: "👨‍🏭", keyword: ["man", "factory", "worker"] }
    , { brow: "👨🏻‍🏭", keyword: ["man", "factory", "worker", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🏭", keyword: ["man", "factory", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🏭", keyword: ["man", "factory", "worker", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🏭", keyword: ["man", "factory", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🏭", keyword: ["man", "factory", "worker", "dark", "skin", "tone"] }
    , { brow: "👩‍🏭", keyword: ["woman", "factory", "worker"] }
    , { brow: "👩🏻‍🏭", keyword: ["woman", "factory", "worker", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🏭", keyword: ["woman", "factory", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🏭", keyword: ["woman", "factory", "worker", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🏭", keyword: ["woman", "factory", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🏭", keyword: ["woman", "factory", "worker", "dark", "skin", "tone"] }
    , { brow: "👨‍💼", keyword: ["man", "office", "worker"] }
    , { brow: "👨🏻‍💼", keyword: ["man", "office", "worker", "light", "skin", "tone"] }
    , { brow: "👨🏼‍💼", keyword: ["man", "office", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍💼", keyword: ["man", "office", "worker", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍💼", keyword: ["man", "office", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍💼", keyword: ["man", "office", "worker", "dark", "skin", "tone"] }
    , { brow: "👩‍💼", keyword: ["woman", "office", "worker"] }
    , { brow: "👩🏻‍💼", keyword: ["woman", "office", "worker", "light", "skin", "tone"] }
    , { brow: "👩🏼‍💼", keyword: ["woman", "office", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍💼", keyword: ["woman", "office", "worker", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍💼", keyword: ["woman", "office", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍💼", keyword: ["woman", "office", "worker", "dark", "skin", "tone"] }
    , { brow: "👨‍🔬", keyword: ["man", "scientist"] }
    , { brow: "👨🏻‍🔬", keyword: ["man", "scientist", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🔬", keyword: ["man", "scientist", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🔬", keyword: ["man", "scientist", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🔬", keyword: ["man", "scientist", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🔬", keyword: ["man", "scientist", "dark", "skin", "tone"] }
    , { brow: "👩‍🔬", keyword: ["woman", "scientist"] }
    , { brow: "👩🏻‍🔬", keyword: ["woman", "scientist", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🔬", keyword: ["woman", "scientist", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🔬", keyword: ["woman", "scientist", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🔬", keyword: ["woman", "scientist", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🔬", keyword: ["woman", "scientist", "dark", "skin", "tone"] }
    , { brow: "👨‍💻", keyword: ["man", "technologist"] }
    , { brow: "👨🏻‍💻", keyword: ["man", "technologist", "light", "skin", "tone"] }
    , { brow: "👨🏼‍💻", keyword: ["man", "technologist", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍💻", keyword: ["man", "technologist", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍💻", keyword: ["man", "technologist", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍💻", keyword: ["man", "technologist", "dark", "skin", "tone"] }
    , { brow: "👩‍💻", keyword: ["woman", "technologist"] }
    , { brow: "👩🏻‍💻", keyword: ["woman", "technologist", "light", "skin", "tone"] }
    , { brow: "👩🏼‍💻", keyword: ["woman", "technologist", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍💻", keyword: ["woman", "technologist", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍💻", keyword: ["woman", "technologist", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍💻", keyword: ["woman", "technologist", "dark", "skin", "tone"] }
    , { brow: "👨‍🎤", keyword: ["man", "singer"] }
    , { brow: "👨🏻‍🎤", keyword: ["man", "singer", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🎤", keyword: ["man", "singer", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🎤", keyword: ["man", "singer", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🎤", keyword: ["man", "singer", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🎤", keyword: ["man", "singer", "dark", "skin", "tone"] }
    , { brow: "👩‍🎤", keyword: ["woman", "singer"] }
    , { brow: "👩🏻‍🎤", keyword: ["woman", "singer", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🎤", keyword: ["woman", "singer", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🎤", keyword: ["woman", "singer", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🎤", keyword: ["woman", "singer", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🎤", keyword: ["woman", "singer", "dark", "skin", "tone"] }
    , { brow: "👨‍🎨", keyword: ["man", "artist"] }
    , { brow: "👨🏻‍🎨", keyword: ["man", "artist", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🎨", keyword: ["man", "artist", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🎨", keyword: ["man", "artist", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🎨", keyword: ["man", "artist", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🎨", keyword: ["man", "artist", "dark", "skin", "tone"] }
    , { brow: "👩‍🎨", keyword: ["woman", "artist"] }
    , { brow: "👩🏻‍🎨", keyword: ["woman", "artist", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🎨", keyword: ["woman", "artist", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🎨", keyword: ["woman", "artist", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🎨", keyword: ["woman", "artist", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🎨", keyword: ["woman", "artist", "dark", "skin", "tone"] }
    , { brow: "👨‍✈️", keyword: ["man", "pilot"] }
    , { brow: "👨🏻‍✈️", keyword: ["man", "pilot", "light", "skin", "tone"] }
    , { brow: "👨🏼‍✈️", keyword: ["man", "pilot", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍✈️", keyword: ["man", "pilot", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍✈️", keyword: ["man", "pilot", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍✈️", keyword: ["man", "pilot", "dark", "skin", "tone"] }
    , { brow: "👩‍✈️", keyword: ["woman", "pilot"] }
    , { brow: "👩🏻‍✈️", keyword: ["woman", "pilot", "light", "skin", "tone"] }
    , { brow: "👩🏼‍✈️", keyword: ["woman", "pilot", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍✈️", keyword: ["woman", "pilot", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍✈️", keyword: ["woman", "pilot", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍✈️", keyword: ["woman", "pilot", "dark", "skin", "tone"] }
    , { brow: "👨‍🚀", keyword: ["man", "astronaut"] }
    , { brow: "👨🏻‍🚀", keyword: ["man", "astronaut", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🚀", keyword: ["man", "astronaut", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🚀", keyword: ["man", "astronaut", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🚀", keyword: ["man", "astronaut", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🚀", keyword: ["man", "astronaut", "dark", "skin", "tone"] }
    , { brow: "👩‍🚀", keyword: ["woman", "astronaut"] }
    , { brow: "👩🏻‍🚀", keyword: ["woman", "astronaut", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🚀", keyword: ["woman", "astronaut", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🚀", keyword: ["woman", "astronaut", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🚀", keyword: ["woman", "astronaut", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🚀", keyword: ["woman", "astronaut", "dark", "skin", "tone"] }
    , { brow: "👨‍🚒", keyword: ["man", "firefighter"] }
    , { brow: "👨🏻‍🚒", keyword: ["man", "firefighter", "light", "skin", "tone"] }
    , { brow: "👨🏼‍🚒", keyword: ["man", "firefighter", "medium-light", "skin", "tone"] }
    , { brow: "👨🏽‍🚒", keyword: ["man", "firefighter", "medium", "skin", "tone"] }
    , { brow: "👨🏾‍🚒", keyword: ["man", "firefighter", "medium-dark", "skin", "tone"] }
    , { brow: "👨🏿‍🚒", keyword: ["man", "firefighter", "dark", "skin", "tone"] }
    , { brow: "👩‍🚒", keyword: ["woman", "firefighter"] }
    , { brow: "👩🏻‍🚒", keyword: ["woman", "firefighter", "light", "skin", "tone"] }
    , { brow: "👩🏼‍🚒", keyword: ["woman", "firefighter", "medium-light", "skin", "tone"] }
    , { brow: "👩🏽‍🚒", keyword: ["woman", "firefighter", "medium", "skin", "tone"] }
    , { brow: "👩🏾‍🚒", keyword: ["woman", "firefighter", "medium-dark", "skin", "tone"] }
    , { brow: "👩🏿‍🚒", keyword: ["woman", "firefighter", "dark", "skin", "tone"] }
    , { brow: "👮", keyword: ["police", "officer"] }
    , { brow: "👮🏻", keyword: ["police", "officer", "light", "skin", "tone"] }
    , { brow: "👮🏼", keyword: ["police", "officer", "medium-light", "skin", "tone"] }
    , { brow: "👮🏽", keyword: ["police", "officer", "medium", "skin", "tone"] }
    , { brow: "👮🏾", keyword: ["police", "officer", "medium-dark", "skin", "tone"] }
    , { brow: "👮🏿", keyword: ["police", "officer", "dark", "skin", "tone"] }
    , { brow: "👮‍♂️", keyword: ["man", "police", "officer"] }
    , { brow: "👮🏻‍♂️", keyword: ["man", "police", "officer", "light", "skin", "tone"] }
    , { brow: "👮🏼‍♂️", keyword: ["man", "police", "officer", "medium-light", "skin", "tone"] }
    , { brow: "👮🏽‍♂️", keyword: ["man", "police", "officer", "medium", "skin", "tone"] }
    , { brow: "👮🏾‍♂️", keyword: ["man", "police", "officer", "medium-dark", "skin", "tone"] }
    , { brow: "👮🏿‍♂️", keyword: ["man", "police", "officer", "dark", "skin", "tone"] }
    , { brow: "👮‍♀️", keyword: ["woman", "police", "officer"] }
    , { brow: "👮🏻‍♀️", keyword: ["woman", "police", "officer", "light", "skin", "tone"] }
    , { brow: "👮🏼‍♀️", keyword: ["woman", "police", "officer", "medium-light", "skin", "tone"] }
    , { brow: "👮🏽‍♀️", keyword: ["woman", "police", "officer", "medium", "skin", "tone"] }
    , { brow: "👮🏾‍♀️", keyword: ["woman", "police", "officer", "medium-dark", "skin", "tone"] }
    , { brow: "👮🏿‍♀️", keyword: ["woman", "police", "officer", "dark", "skin", "tone"] }
    , { brow: "🕵", keyword: ["detective"] }
    , { brow: "🕵🏻", keyword: ["detective", "light", "skin", "tone"] }
    , { brow: "🕵🏼", keyword: ["detective", "medium-light", "skin", "tone"] }
    , { brow: "🕵🏽", keyword: ["detective", "medium", "skin", "tone"] }
    , { brow: "🕵🏾", keyword: ["detective", "medium-dark", "skin", "tone"] }
    , { brow: "🕵🏿", keyword: ["detective", "dark", "skin", "tone"] }
    , { brow: "🕵️‍♂️", keyword: ["man", "detective"] }
    , { brow: "🕵🏻‍♂️", keyword: ["man", "detective", "light", "skin", "tone"] }
    , { brow: "🕵🏼‍♂️", keyword: ["man", "detective", "medium-light", "skin", "tone"] }
    , { brow: "🕵🏽‍♂️", keyword: ["man", "detective", "medium", "skin", "tone"] }
    , { brow: "🕵🏾‍♂️", keyword: ["man", "detective", "medium-dark", "skin", "tone"] }
    , { brow: "🕵🏿‍♂️", keyword: ["man", "detective", "dark", "skin", "tone"] }
    , { brow: "🕵️‍♀️", keyword: ["woman", "detective"] }
    , { brow: "🕵🏻‍♀️", keyword: ["woman", "detective", "light", "skin", "tone"] }
    , { brow: "🕵🏼‍♀️", keyword: ["woman", "detective", "medium-light", "skin", "tone"] }
    , { brow: "🕵🏽‍♀️", keyword: ["woman", "detective", "medium", "skin", "tone"] }
    , { brow: "🕵🏾‍♀️", keyword: ["woman", "detective", "medium-dark", "skin", "tone"] }
    , { brow: "🕵🏿‍♀️", keyword: ["woman", "detective", "dark", "skin", "tone"] }
    , { brow: "💂", keyword: ["guard"] }
    , { brow: "💂🏻", keyword: ["guard", "light", "skin", "tone"] }
    , { brow: "💂🏼", keyword: ["guard", "medium-light", "skin", "tone"] }
    , { brow: "💂🏽", keyword: ["guard", "medium", "skin", "tone"] }
    , { brow: "💂🏾", keyword: ["guard", "medium-dark", "skin", "tone"] }
    , { brow: "💂🏿", keyword: ["guard", "dark", "skin", "tone"] }
    , { brow: "💂‍♂️", keyword: ["man", "guard"] }
    , { brow: "💂🏻‍♂️", keyword: ["man", "guard", "light", "skin", "tone"] }
    , { brow: "💂🏼‍♂️", keyword: ["man", "guard", "medium-light", "skin", "tone"] }
    , { brow: "💂🏽‍♂️", keyword: ["man", "guard", "medium", "skin", "tone"] }
    , { brow: "💂🏾‍♂️", keyword: ["man", "guard", "medium-dark", "skin", "tone"] }
    , { brow: "💂🏿‍♂️", keyword: ["man", "guard", "dark", "skin", "tone"] }
    , { brow: "💂‍♀️", keyword: ["woman", "guard"] }
    , { brow: "💂🏻‍♀️", keyword: ["woman", "guard", "light", "skin", "tone"] }
    , { brow: "💂🏼‍♀️", keyword: ["woman", "guard", "medium-light", "skin", "tone"] }
    , { brow: "💂🏽‍♀️", keyword: ["woman", "guard", "medium", "skin", "tone"] }
    , { brow: "💂🏾‍♀️", keyword: ["woman", "guard", "medium-dark", "skin", "tone"] }
    , { brow: "💂🏿‍♀️", keyword: ["woman", "guard", "dark", "skin", "tone"] }
    , { brow: "👷", keyword: ["construction", "worker"] }
    , { brow: "👷🏻", keyword: ["construction", "worker", "light", "skin", "tone"] }
    , { brow: "👷🏼", keyword: ["construction", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👷🏽", keyword: ["construction", "worker", "medium", "skin", "tone"] }
    , { brow: "👷🏾", keyword: ["construction", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👷🏿", keyword: ["construction", "worker", "dark", "skin", "tone"] }
    , { brow: "👷‍♂️", keyword: ["man", "construction", "worker"] }
    , { brow: "👷🏻‍♂️", keyword: ["man", "construction", "worker", "light", "skin", "tone"] }
    , { brow: "👷🏼‍♂️", keyword: ["man", "construction", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👷🏽‍♂️", keyword: ["man", "construction", "worker", "medium", "skin", "tone"] }
    , { brow: "👷🏾‍♂️", keyword: ["man", "construction", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👷🏿‍♂️", keyword: ["man", "construction", "worker", "dark", "skin", "tone"] }
    , { brow: "👷‍♀️", keyword: ["woman", "construction", "worker"] }
    , { brow: "👷🏻‍♀️", keyword: ["woman", "construction", "worker", "light", "skin", "tone"] }
    , { brow: "👷🏼‍♀️", keyword: ["woman", "construction", "worker", "medium-light", "skin", "tone"] }
    , { brow: "👷🏽‍♀️", keyword: ["woman", "construction", "worker", "medium", "skin", "tone"] }
    , { brow: "👷🏾‍♀️", keyword: ["woman", "construction", "worker", "medium-dark", "skin", "tone"] }
    , { brow: "👷🏿‍♀️", keyword: ["woman", "construction", "worker", "dark", "skin", "tone"] }
    , { brow: "🤴", keyword: ["prince"] }
    , { brow: "🤴🏻", keyword: ["prince", "light", "skin", "tone"] }
    , { brow: "🤴🏼", keyword: ["prince", "medium-light", "skin", "tone"] }
    , { brow: "🤴🏽", keyword: ["prince", "medium", "skin", "tone"] }
    , { brow: "🤴🏾", keyword: ["prince", "medium-dark", "skin", "tone"] }
    , { brow: "🤴🏿", keyword: ["prince", "dark", "skin", "tone"] }
    , { brow: "👸", keyword: ["princess"] }
    , { brow: "👸🏻", keyword: ["princess", "light", "skin", "tone"] }
    , { brow: "👸🏼", keyword: ["princess", "medium-light", "skin", "tone"] }
    , { brow: "👸🏽", keyword: ["princess", "medium", "skin", "tone"] }
    , { brow: "👸🏾", keyword: ["princess", "medium-dark", "skin", "tone"] }
    , { brow: "👸🏿", keyword: ["princess", "dark", "skin", "tone"] }
    , { brow: "👳", keyword: ["person", "wearing", "turban"] }
    , { brow: "👳🏻", keyword: ["person", "wearing", "turban", "light", "skin", "tone"] }
    , { brow: "👳🏼", keyword: ["person", "wearing", "turban", "medium-light", "skin", "tone"] }
    , { brow: "👳🏽", keyword: ["person", "wearing", "turban", "medium", "skin", "tone"] }
    , { brow: "👳🏾", keyword: ["person", "wearing", "turban", "medium-dark", "skin", "tone"] }
    , { brow: "👳🏿", keyword: ["person", "wearing", "turban", "dark", "skin", "tone"] }
    , { brow: "👳‍♂️", keyword: ["man", "wearing", "turban"] }
    , { brow: "👳🏻‍♂️", keyword: ["man", "wearing", "turban", "light", "skin", "tone"] }
    , { brow: "👳🏼‍♂️", keyword: ["man", "wearing", "turban", "medium-light", "skin", "tone"] }
    , { brow: "👳🏽‍♂️", keyword: ["man", "wearing", "turban", "medium", "skin", "tone"] }
    , { brow: "👳🏾‍♂️", keyword: ["man", "wearing", "turban", "medium-dark", "skin", "tone"] }
    , { brow: "👳🏿‍♂️", keyword: ["man", "wearing", "turban", "dark", "skin", "tone"] }
    , { brow: "👳‍♀️", keyword: ["woman", "wearing", "turban"] }
    , { brow: "👳🏻‍♀️", keyword: ["woman", "wearing", "turban", "light", "skin", "tone"] }
    , { brow: "👳🏼‍♀️", keyword: ["woman", "wearing", "turban", "medium-light", "skin", "tone"] }
    , { brow: "👳🏽‍♀️", keyword: ["woman", "wearing", "turban", "medium", "skin", "tone"] }
    , { brow: "👳🏾‍♀️", keyword: ["woman", "wearing", "turban", "medium-dark", "skin", "tone"] }
    , { brow: "👳🏿‍♀️", keyword: ["woman", "wearing", "turban", "dark", "skin", "tone"] }
    , { brow: "👲", keyword: ["man", "with", "chinese", "cap"] }
    , { brow: "👲🏻", keyword: ["man", "with", "chinese", "cap", "light", "skin", "tone"] }
    , { brow: "👲🏼", keyword: ["man", "with", "chinese", "cap", "medium-light", "skin", "tone"] }
    , { brow: "👲🏽", keyword: ["man", "with", "chinese", "cap", "medium", "skin", "tone"] }
    , { brow: "👲🏾", keyword: ["man", "with", "chinese", "cap", "medium-dark", "skin", "tone"] }
    , { brow: "👲🏿", keyword: ["man", "with", "chinese", "cap", "dark", "skin", "tone"] }
    , { brow: "🧕", keyword: ["woman", "with", "headscarf"] }
    , { brow: "🧕🏻", keyword: ["woman", "with", "headscarf", "light", "skin", "tone"] }
    , { brow: "🧕🏼", keyword: ["woman", "with", "headscarf", "medium-light", "skin", "tone"] }
    , { brow: "🧕🏽", keyword: ["woman", "with", "headscarf", "medium", "skin", "tone"] }
    , { brow: "🧕🏾", keyword: ["woman", "with", "headscarf", "medium-dark", "skin", "tone"] }
    , { brow: "🧕🏿", keyword: ["woman", "with", "headscarf", "dark", "skin", "tone"] }
    , { brow: "🧔", keyword: ["bearded", "person"] }
    , { brow: "🧔🏻", keyword: ["bearded", "person", "light", "skin", "tone"] }
    , { brow: "🧔🏼", keyword: ["bearded", "person", "medium-light", "skin", "tone"] }
    , { brow: "🧔🏽", keyword: ["bearded", "person", "medium", "skin", "tone"] }
    , { brow: "🧔🏾", keyword: ["bearded", "person", "medium-dark", "skin", "tone"] }
    , { brow: "🧔🏿", keyword: ["bearded", "person", "dark", "skin", "tone"] }
    , { brow: "👱", keyword: ["blond-haired", "person"] }
    , { brow: "👱🏻", keyword: ["blond-haired", "person", "light", "skin", "tone"] }
    , { brow: "👱🏼", keyword: ["blond-haired", "person", "medium-light", "skin", "tone"] }
    , { brow: "👱🏽", keyword: ["blond-haired", "person", "medium", "skin", "tone"] }
    , { brow: "👱🏾", keyword: ["blond-haired", "person", "medium-dark", "skin", "tone"] }
    , { brow: "👱🏿", keyword: ["blond-haired", "person", "dark", "skin", "tone"] }
    , { brow: "👱‍♂️", keyword: ["blond-haired", "man"] }
    , { brow: "👱🏻‍♂️", keyword: ["blond-haired", "man", "light", "skin", "tone"] }
    , { brow: "👱🏼‍♂️", keyword: ["blond-haired", "man", "medium-light", "skin", "tone"] }
    , { brow: "👱🏽‍♂️", keyword: ["blond-haired", "man", "medium", "skin", "tone"] }
    , { brow: "👱🏾‍♂️", keyword: ["blond-haired", "man", "medium-dark", "skin", "tone"] }
    , { brow: "👱🏿‍♂️", keyword: ["blond-haired", "man", "dark", "skin", "tone"] }
    , { brow: "👱‍♀️", keyword: ["blond-haired", "woman"] }
    , { brow: "👱🏻‍♀️", keyword: ["blond-haired", "woman", "light", "skin", "tone"] }
    , { brow: "👱🏼‍♀️", keyword: ["blond-haired", "woman", "medium-light", "skin", "tone"] }
    , { brow: "👱🏽‍♀️", keyword: ["blond-haired", "woman", "medium", "skin", "tone"] }
    , { brow: "👱🏾‍♀️", keyword: ["blond-haired", "woman", "medium-dark", "skin", "tone"] }
    , { brow: "👱🏿‍♀️", keyword: ["blond-haired", "woman", "dark", "skin", "tone"] }
    , { brow: "🤵", keyword: ["man", "in", "tuxedo"] }
    , { brow: "🤵🏻", keyword: ["man", "in", "tuxedo", "light", "skin", "tone"] }
    , { brow: "🤵🏼", keyword: ["man", "in", "tuxedo", "medium-light", "skin", "tone"] }
    , { brow: "🤵🏽", keyword: ["man", "in", "tuxedo", "medium", "skin", "tone"] }
    , { brow: "🤵🏾", keyword: ["man", "in", "tuxedo", "medium-dark", "skin", "tone"] }
    , { brow: "🤵🏿", keyword: ["man", "in", "tuxedo", "dark", "skin", "tone"] }
    , { brow: "👰", keyword: ["bride", "with", "veil"] }
    , { brow: "👰🏻", keyword: ["bride", "with", "veil", "light", "skin", "tone"] }
    , { brow: "👰🏼", keyword: ["bride", "with", "veil", "medium-light", "skin", "tone"] }
    , { brow: "👰🏽", keyword: ["bride", "with", "veil", "medium", "skin", "tone"] }
    , { brow: "👰🏾", keyword: ["bride", "with", "veil", "medium-dark", "skin", "tone"] }
    , { brow: "👰🏿", keyword: ["bride", "with", "veil", "dark", "skin", "tone"] }
    , { brow: "🤰", keyword: ["pregnant", "woman"] }
    , { brow: "🤰🏻", keyword: ["pregnant", "woman", "light", "skin", "tone"] }
    , { brow: "🤰🏼", keyword: ["pregnant", "woman", "medium-light", "skin", "tone"] }
    , { brow: "🤰🏽", keyword: ["pregnant", "woman", "medium", "skin", "tone"] }
    , { brow: "🤰🏾", keyword: ["pregnant", "woman", "medium-dark", "skin", "tone"] }
    , { brow: "🤰🏿", keyword: ["pregnant", "woman", "dark", "skin", "tone"] }
    , { brow: "🤱", keyword: ["breast-feeding"] }
    , { brow: "🤱🏻", keyword: ["breast-feeding", "light", "skin", "tone"] }
    , { brow: "🤱🏼", keyword: ["breast-feeding", "medium-light", "skin", "tone"] }
    , { brow: "🤱🏽", keyword: ["breast-feeding", "medium", "skin", "tone"] }
    , { brow: "🤱🏾", keyword: ["breast-feeding", "medium-dark", "skin", "tone"] }
    , { brow: "🤱🏿", keyword: ["breast-feeding", "dark", "skin", "tone"] }
    , { brow: "👼", keyword: ["baby", "angel"] }
    , { brow: "👼🏻", keyword: ["baby", "angel", "light", "skin", "tone"] }
    , { brow: "👼🏼", keyword: ["baby", "angel", "medium-light", "skin", "tone"] }
    , { brow: "👼🏽", keyword: ["baby", "angel", "medium", "skin", "tone"] }
    , { brow: "👼🏾", keyword: ["baby", "angel", "medium-dark", "skin", "tone"] }
    , { brow: "👼🏿", keyword: ["baby", "angel", "dark", "skin", "tone"] }
    , { brow: "🎅", keyword: ["santa", "claus"] }
    , { brow: "🎅🏻", keyword: ["santa", "claus", "light", "skin", "tone"] }
    , { brow: "🎅🏼", keyword: ["santa", "claus", "medium-light", "skin", "tone"] }
    , { brow: "🎅🏽", keyword: ["santa", "claus", "medium", "skin", "tone"] }
    , { brow: "🎅🏾", keyword: ["santa", "claus", "medium-dark", "skin", "tone"] }
    , { brow: "🎅🏿", keyword: ["santa", "claus", "dark", "skin", "tone"] }
    , { brow: "🤶", keyword: ["mrs.", "claus"] }
    , { brow: "🤶🏻", keyword: ["mrs.", "claus", "light", "skin", "tone"] }
    , { brow: "🤶🏼", keyword: ["mrs.", "claus", "medium-light", "skin", "tone"] }
    , { brow: "🤶🏽", keyword: ["mrs.", "claus", "medium", "skin", "tone"] }
    , { brow: "🤶🏾", keyword: ["mrs.", "claus", "medium-dark", "skin", "tone"] }
    , { brow: "🤶🏿", keyword: ["mrs.", "claus", "dark", "skin", "tone"] }
    , { brow: "🧙", keyword: ["mage"] }
    , { brow: "🧙🏻", keyword: ["mage", "light", "skin", "tone"] }
    , { brow: "🧙🏼", keyword: ["mage", "medium-light", "skin", "tone"] }
    , { brow: "🧙🏽", keyword: ["mage", "medium", "skin", "tone"] }
    , { brow: "🧙🏾", keyword: ["mage", "medium-dark", "skin", "tone"] }
    , { brow: "🧙🏿", keyword: ["mage", "dark", "skin", "tone"] }
    , { brow: "🧙‍♀️", keyword: ["woman", "mage"] }
    , { brow: "🧙🏻‍♀️", keyword: ["woman", "mage", "light", "skin", "tone"] }
    , { brow: "🧙🏼‍♀️", keyword: ["woman", "mage", "medium-light", "skin", "tone"] }
    , { brow: "🧙🏽‍♀️", keyword: ["woman", "mage", "medium", "skin", "tone"] }
    , { brow: "🧙🏾‍♀️", keyword: ["woman", "mage", "medium-dark", "skin", "tone"] }
    , { brow: "🧙🏿‍♀️", keyword: ["woman", "mage", "dark", "skin", "tone"] }
    , { brow: "🧙‍♂️", keyword: ["man", "mage"] }
    , { brow: "🧙🏻‍♂️", keyword: ["man", "mage", "light", "skin", "tone"] }
    , { brow: "🧙🏼‍♂️", keyword: ["man", "mage", "medium-light", "skin", "tone"] }
    , { brow: "🧙🏽‍♂️", keyword: ["man", "mage", "medium", "skin", "tone"] }
    , { brow: "🧙🏾‍♂️", keyword: ["man", "mage", "medium-dark", "skin", "tone"] }
    , { brow: "🧙🏿‍♂️", keyword: ["man", "mage", "dark", "skin", "tone"] }
    , { brow: "🧚", keyword: ["fairy"] }
    , { brow: "🧚🏻", keyword: ["fairy", "light", "skin", "tone"] }
    , { brow: "🧚🏼", keyword: ["fairy", "medium-light", "skin", "tone"] }
    , { brow: "🧚🏽", keyword: ["fairy", "medium", "skin", "tone"] }
    , { brow: "🧚🏾", keyword: ["fairy", "medium-dark", "skin", "tone"] }
    , { brow: "🧚🏿", keyword: ["fairy", "dark", "skin", "tone"] }
    , { brow: "🧚‍♀️", keyword: ["woman", "fairy"] }
    , { brow: "🧚🏻‍♀️", keyword: ["woman", "fairy", "light", "skin", "tone"] }
    , { brow: "🧚🏼‍♀️", keyword: ["woman", "fairy", "medium-light", "skin", "tone"] }
    , { brow: "🧚🏽‍♀️", keyword: ["woman", "fairy", "medium", "skin", "tone"] }
    , { brow: "🧚🏾‍♀️", keyword: ["woman", "fairy", "medium-dark", "skin", "tone"] }
    , { brow: "🧚🏿‍♀️", keyword: ["woman", "fairy", "dark", "skin", "tone"] }
    , { brow: "🧚‍♂️", keyword: ["man", "fairy"] }
    , { brow: "🧚🏻‍♂️", keyword: ["man", "fairy", "light", "skin", "tone"] }
    , { brow: "🧚🏼‍♂️", keyword: ["man", "fairy", "medium-light", "skin", "tone"] }
    , { brow: "🧚🏽‍♂️", keyword: ["man", "fairy", "medium", "skin", "tone"] }
    , { brow: "🧚🏾‍♂️", keyword: ["man", "fairy", "medium-dark", "skin", "tone"] }
    , { brow: "🧚🏿‍♂️", keyword: ["man", "fairy", "dark", "skin", "tone"] }
    , { brow: "🧛", keyword: ["vampire"] }
    , { brow: "🧛🏻", keyword: ["vampire", "light", "skin", "tone"] }
    , { brow: "🧛🏼", keyword: ["vampire", "medium-light", "skin", "tone"] }
    , { brow: "🧛🏽", keyword: ["vampire", "medium", "skin", "tone"] }
    , { brow: "🧛🏾", keyword: ["vampire", "medium-dark", "skin", "tone"] }
    , { brow: "🧛🏿", keyword: ["vampire", "dark", "skin", "tone"] }
    , { brow: "🧛‍♀️", keyword: ["woman", "vampire"] }
    , { brow: "🧛🏻‍♀️", keyword: ["woman", "vampire", "light", "skin", "tone"] }
    , { brow: "🧛🏼‍♀️", keyword: ["woman", "vampire", "medium-light", "skin", "tone"] }
    , { brow: "🧛🏽‍♀️", keyword: ["woman", "vampire", "medium", "skin", "tone"] }
    , { brow: "🧛🏾‍♀️", keyword: ["woman", "vampire", "medium-dark", "skin", "tone"] }
    , { brow: "🧛🏿‍♀️", keyword: ["woman", "vampire", "dark", "skin", "tone"] }
    , { brow: "🧛‍♂️", keyword: ["man", "vampire"] }
    , { brow: "🧛🏻‍♂️", keyword: ["man", "vampire", "light", "skin", "tone"] }
    , { brow: "🧛🏼‍♂️", keyword: ["man", "vampire", "medium-light", "skin", "tone"] }
    , { brow: "🧛🏽‍♂️", keyword: ["man", "vampire", "medium", "skin", "tone"] }
    , { brow: "🧛🏾‍♂️", keyword: ["man", "vampire", "medium-dark", "skin", "tone"] }
    , { brow: "🧛🏿‍♂️", keyword: ["man", "vampire", "dark", "skin", "tone"] }
    , { brow: "🧜", keyword: ["merperson"] }
    , { brow: "🧜🏻", keyword: ["merperson", "light", "skin", "tone"] }
    , { brow: "🧜🏼", keyword: ["merperson", "medium-light", "skin", "tone"] }
    , { brow: "🧜🏽", keyword: ["merperson", "medium", "skin", "tone"] }
    , { brow: "🧜🏾", keyword: ["merperson", "medium-dark", "skin", "tone"] }
    , { brow: "🧜🏿", keyword: ["merperson", "dark", "skin", "tone"] }
    , { brow: "🧜‍♀️", keyword: ["mermaid"] }
    , { brow: "🧜🏻‍♀️", keyword: ["mermaid", "light", "skin", "tone"] }
    , { brow: "🧜🏼‍♀️", keyword: ["mermaid", "medium-light", "skin", "tone"] }
    , { brow: "🧜🏽‍♀️", keyword: ["mermaid", "medium", "skin", "tone"] }
    , { brow: "🧜🏾‍♀️", keyword: ["mermaid", "medium-dark", "skin", "tone"] }
    , { brow: "🧜🏿‍♀️", keyword: ["mermaid", "dark", "skin", "tone"] }
    , { brow: "🧜‍♂️", keyword: ["merman"] }
    , { brow: "🧜🏻‍♂️", keyword: ["merman", "light", "skin", "tone"] }
    , { brow: "🧜🏼‍♂️", keyword: ["merman", "medium-light", "skin", "tone"] }
    , { brow: "🧜🏽‍♂️", keyword: ["merman", "medium", "skin", "tone"] }
    , { brow: "🧜🏾‍♂️", keyword: ["merman", "medium-dark", "skin", "tone"] }
    , { brow: "🧜🏿‍♂️", keyword: ["merman", "dark", "skin", "tone"] }
    , { brow: "🧝", keyword: ["elf"] }
    , { brow: "🧝🏻", keyword: ["elf", "light", "skin", "tone"] }
    , { brow: "🧝🏼", keyword: ["elf", "medium-light", "skin", "tone"] }
    , { brow: "🧝🏽", keyword: ["elf", "medium", "skin", "tone"] }
    , { brow: "🧝🏾", keyword: ["elf", "medium-dark", "skin", "tone"] }
    , { brow: "🧝🏿", keyword: ["elf", "dark", "skin", "tone"] }
    , { brow: "🧝‍♀️", keyword: ["woman", "elf"] }
    , { brow: "🧝🏻‍♀️", keyword: ["woman", "elf", "light", "skin", "tone"] }
    , { brow: "🧝🏼‍♀️", keyword: ["woman", "elf", "medium-light", "skin", "tone"] }
    , { brow: "🧝🏽‍♀️", keyword: ["woman", "elf", "medium", "skin", "tone"] }
    , { brow: "🧝🏾‍♀️", keyword: ["woman", "elf", "medium-dark", "skin", "tone"] }
    , { brow: "🧝🏿‍♀️", keyword: ["woman", "elf", "dark", "skin", "tone"] }
    , { brow: "🧝‍♂️", keyword: ["man", "elf"] }
    , { brow: "🧝🏻‍♂️", keyword: ["man", "elf", "light", "skin", "tone"] }
    , { brow: "🧝🏼‍♂️", keyword: ["man", "elf", "medium-light", "skin", "tone"] }
    , { brow: "🧝🏽‍♂️", keyword: ["man", "elf", "medium", "skin", "tone"] }
    , { brow: "🧝🏾‍♂️", keyword: ["man", "elf", "medium-dark", "skin", "tone"] }
    , { brow: "🧝🏿‍♂️", keyword: ["man", "elf", "dark", "skin", "tone"] }
    , { brow: "🧞", keyword: ["genie"] }
    , { brow: "🧞‍♀️", keyword: ["woman", "genie"] }
    , { brow: "🧞‍♂️", keyword: ["man", "genie"] }
    , { brow: "🧟", keyword: ["zombie"] }
    , { brow: "🧟‍♀️", keyword: ["woman", "zombie"] }
    , { brow: "🧟‍♂️", keyword: ["man", "zombie"] }
    , { brow: "🙍", keyword: ["person", "frowning"] }
    , { brow: "🙍🏻", keyword: ["person", "frowning", "light", "skin", "tone"] }
    , { brow: "🙍🏼", keyword: ["person", "frowning", "medium-light", "skin", "tone"] }
    , { brow: "🙍🏽", keyword: ["person", "frowning", "medium", "skin", "tone"] }
    , { brow: "🙍🏾", keyword: ["person", "frowning", "medium-dark", "skin", "tone"] }
    , { brow: "🙍🏿", keyword: ["person", "frowning", "dark", "skin", "tone"] }
    , { brow: "🙍‍♂️", keyword: ["man", "frowning"] }
    , { brow: "🙍🏻‍♂️", keyword: ["man", "frowning", "light", "skin", "tone"] }
    , { brow: "🙍🏼‍♂️", keyword: ["man", "frowning", "medium-light", "skin", "tone"] }
    , { brow: "🙍🏽‍♂️", keyword: ["man", "frowning", "medium", "skin", "tone"] }
    , { brow: "🙍🏾‍♂️", keyword: ["man", "frowning", "medium-dark", "skin", "tone"] }
    , { brow: "🙍🏿‍♂️", keyword: ["man", "frowning", "dark", "skin", "tone"] }
    , { brow: "🙍‍♀️", keyword: ["woman", "frowning"] }
    , { brow: "🙍🏻‍♀️", keyword: ["woman", "frowning", "light", "skin", "tone"] }
    , { brow: "🙍🏼‍♀️", keyword: ["woman", "frowning", "medium-light", "skin", "tone"] }
    , { brow: "🙍🏽‍♀️", keyword: ["woman", "frowning", "medium", "skin", "tone"] }
    , { brow: "🙍🏾‍♀️", keyword: ["woman", "frowning", "medium-dark", "skin", "tone"] }
    , { brow: "🙍🏿‍♀️", keyword: ["woman", "frowning", "dark", "skin", "tone"] }
    , { brow: "🙎", keyword: ["person", "pouting"] }
    , { brow: "🙎🏻", keyword: ["person", "pouting", "light", "skin", "tone"] }
    , { brow: "🙎🏼", keyword: ["person", "pouting", "medium-light", "skin", "tone"] }
    , { brow: "🙎🏽", keyword: ["person", "pouting", "medium", "skin", "tone"] }
    , { brow: "🙎🏾", keyword: ["person", "pouting", "medium-dark", "skin", "tone"] }
    , { brow: "🙎🏿", keyword: ["person", "pouting", "dark", "skin", "tone"] }
    , { brow: "🙎‍♂️", keyword: ["man", "pouting"] }
    , { brow: "🙎🏻‍♂️", keyword: ["man", "pouting", "light", "skin", "tone"] }
    , { brow: "🙎🏼‍♂️", keyword: ["man", "pouting", "medium-light", "skin", "tone"] }
    , { brow: "🙎🏽‍♂️", keyword: ["man", "pouting", "medium", "skin", "tone"] }
    , { brow: "🙎🏾‍♂️", keyword: ["man", "pouting", "medium-dark", "skin", "tone"] }
    , { brow: "🙎🏿‍♂️", keyword: ["man", "pouting", "dark", "skin", "tone"] }
    , { brow: "🙎‍♀️", keyword: ["woman", "pouting"] }
    , { brow: "🙎🏻‍♀️", keyword: ["woman", "pouting", "light", "skin", "tone"] }
    , { brow: "🙎🏼‍♀️", keyword: ["woman", "pouting", "medium-light", "skin", "tone"] }
    , { brow: "🙎🏽‍♀️", keyword: ["woman", "pouting", "medium", "skin", "tone"] }
    , { brow: "🙎🏾‍♀️", keyword: ["woman", "pouting", "medium-dark", "skin", "tone"] }
    , { brow: "🙎🏿‍♀️", keyword: ["woman", "pouting", "dark", "skin", "tone"] }
    , { brow: "🙅", keyword: ["person", "gesturing", "no"] }
    , { brow: "🙅🏻", keyword: ["person", "gesturing", "no", "light", "skin", "tone"] }
    , { brow: "🙅🏼", keyword: ["person", "gesturing", "no", "medium-light", "skin", "tone"] }
    , { brow: "🙅🏽", keyword: ["person", "gesturing", "no", "medium", "skin", "tone"] }
    , { brow: "🙅🏾", keyword: ["person", "gesturing", "no", "medium-dark", "skin", "tone"] }
    , { brow: "🙅🏿", keyword: ["person", "gesturing", "no", "dark", "skin", "tone"] }
    , { brow: "🙅‍♂️", keyword: ["man", "gesturing", "no"] }
    , { brow: "🙅🏻‍♂️", keyword: ["man", "gesturing", "no", "light", "skin", "tone"] }
    , { brow: "🙅🏼‍♂️", keyword: ["man", "gesturing", "no", "medium-light", "skin", "tone"] }
    , { brow: "🙅🏽‍♂️", keyword: ["man", "gesturing", "no", "medium", "skin", "tone"] }
    , { brow: "🙅🏾‍♂️", keyword: ["man", "gesturing", "no", "medium-dark", "skin", "tone"] }
    , { brow: "🙅🏿‍♂️", keyword: ["man", "gesturing", "no", "dark", "skin", "tone"] }
    , { brow: "🙅‍♀️", keyword: ["woman", "gesturing", "no"] }
    , { brow: "🙅🏻‍♀️", keyword: ["woman", "gesturing", "no", "light", "skin", "tone"] }
    , { brow: "🙅🏼‍♀️", keyword: ["woman", "gesturing", "no", "medium-light", "skin", "tone"] }
    , { brow: "🙅🏽‍♀️", keyword: ["woman", "gesturing", "no", "medium", "skin", "tone"] }
    , { brow: "🙅🏾‍♀️", keyword: ["woman", "gesturing", "no", "medium-dark", "skin", "tone"] }
    , { brow: "🙅🏿‍♀️", keyword: ["woman", "gesturing", "no", "dark", "skin", "tone"] }
    , { brow: "🙆", keyword: ["person", "gesturing", "ok"] }
    , { brow: "🙆🏻", keyword: ["person", "gesturing", "ok", "light", "skin", "tone"] }
    , { brow: "🙆🏼", keyword: ["person", "gesturing", "ok", "medium-light", "skin", "tone"] }
    , { brow: "🙆🏽", keyword: ["person", "gesturing", "ok", "medium", "skin", "tone"] }
    , { brow: "🙆🏾", keyword: ["person", "gesturing", "ok", "medium-dark", "skin", "tone"] }
    , { brow: "🙆🏿", keyword: ["person", "gesturing", "ok", "dark", "skin", "tone"] }
    , { brow: "🙆‍♂️", keyword: ["man", "gesturing", "ok"] }
    , { brow: "🙆🏻‍♂️", keyword: ["man", "gesturing", "ok", "light", "skin", "tone"] }
    , { brow: "🙆🏼‍♂️", keyword: ["man", "gesturing", "ok", "medium-light", "skin", "tone"] }
    , { brow: "🙆🏽‍♂️", keyword: ["man", "gesturing", "ok", "medium", "skin", "tone"] }
    , { brow: "🙆🏾‍♂️", keyword: ["man", "gesturing", "ok", "medium-dark", "skin", "tone"] }
    , { brow: "🙆🏿‍♂️", keyword: ["man", "gesturing", "ok", "dark", "skin", "tone"] }
    , { brow: "🙆‍♀️", keyword: ["woman", "gesturing", "ok"] }
    , { brow: "🙆🏻‍♀️", keyword: ["woman", "gesturing", "ok", "light", "skin", "tone"] }
    , { brow: "🙆🏼‍♀️", keyword: ["woman", "gesturing", "ok", "medium-light", "skin", "tone"] }
    , { brow: "🙆🏽‍♀️", keyword: ["woman", "gesturing", "ok", "medium", "skin", "tone"] }
    , { brow: "🙆🏾‍♀️", keyword: ["woman", "gesturing", "ok", "medium-dark", "skin", "tone"] }
    , { brow: "🙆🏿‍♀️", keyword: ["woman", "gesturing", "ok", "dark", "skin", "tone"] }
    , { brow: "💁", keyword: ["person", "tipping", "hand"] }
    , { brow: "💁🏻", keyword: ["person", "tipping", "hand", "light", "skin", "tone"] }
    , { brow: "💁🏼", keyword: ["person", "tipping", "hand", "medium-light", "skin", "tone"] }
    , { brow: "💁🏽", keyword: ["person", "tipping", "hand", "medium", "skin", "tone"] }
    , { brow: "💁🏾", keyword: ["person", "tipping", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "💁🏿", keyword: ["person", "tipping", "hand", "dark", "skin", "tone"] }
    , { brow: "💁‍♂️", keyword: ["man", "tipping", "hand"] }
    , { brow: "💁🏻‍♂️", keyword: ["man", "tipping", "hand", "light", "skin", "tone"] }
    , { brow: "💁🏼‍♂️", keyword: ["man", "tipping", "hand", "medium-light", "skin", "tone"] }
    , { brow: "💁🏽‍♂️", keyword: ["man", "tipping", "hand", "medium", "skin", "tone"] }
    , { brow: "💁🏾‍♂️", keyword: ["man", "tipping", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "💁🏿‍♂️", keyword: ["man", "tipping", "hand", "dark", "skin", "tone"] }
    , { brow: "💁‍♀️", keyword: ["woman", "tipping", "hand"] }
    , { brow: "💁🏻‍♀️", keyword: ["woman", "tipping", "hand", "light", "skin", "tone"] }
    , { brow: "💁🏼‍♀️", keyword: ["woman", "tipping", "hand", "medium-light", "skin", "tone"] }
    , { brow: "💁🏽‍♀️", keyword: ["woman", "tipping", "hand", "medium", "skin", "tone"] }
    , { brow: "💁🏾‍♀️", keyword: ["woman", "tipping", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "💁🏿‍♀️", keyword: ["woman", "tipping", "hand", "dark", "skin", "tone"] }
    , { brow: "🙋", keyword: ["person", "raising", "hand"] }
    , { brow: "🙋🏻", keyword: ["person", "raising", "hand", "light", "skin", "tone"] }
    , { brow: "🙋🏼", keyword: ["person", "raising", "hand", "medium-light", "skin", "tone"] }
    , { brow: "🙋🏽", keyword: ["person", "raising", "hand", "medium", "skin", "tone"] }
    , { brow: "🙋🏾", keyword: ["person", "raising", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "🙋🏿", keyword: ["person", "raising", "hand", "dark", "skin", "tone"] }
    , { brow: "🙋‍♂️", keyword: ["man", "raising", "hand"] }
    , { brow: "🙋🏻‍♂️", keyword: ["man", "raising", "hand", "light", "skin", "tone"] }
    , { brow: "🙋🏼‍♂️", keyword: ["man", "raising", "hand", "medium-light", "skin", "tone"] }
    , { brow: "🙋🏽‍♂️", keyword: ["man", "raising", "hand", "medium", "skin", "tone"] }
    , { brow: "🙋🏾‍♂️", keyword: ["man", "raising", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "🙋🏿‍♂️", keyword: ["man", "raising", "hand", "dark", "skin", "tone"] }
    , { brow: "🙋‍♀️", keyword: ["woman", "raising", "hand"] }
    , { brow: "🙋🏻‍♀️", keyword: ["woman", "raising", "hand", "light", "skin", "tone"] }
    , { brow: "🙋🏼‍♀️", keyword: ["woman", "raising", "hand", "medium-light", "skin", "tone"] }
    , { brow: "🙋🏽‍♀️", keyword: ["woman", "raising", "hand", "medium", "skin", "tone"] }
    , { brow: "🙋🏾‍♀️", keyword: ["woman", "raising", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "🙋🏿‍♀️", keyword: ["woman", "raising", "hand", "dark", "skin", "tone"] }
    , { brow: "🙇", keyword: ["person", "bowing"] }
    , { brow: "🙇🏻", keyword: ["person", "bowing", "light", "skin", "tone"] }
    , { brow: "🙇🏼", keyword: ["person", "bowing", "medium-light", "skin", "tone"] }
    , { brow: "🙇🏽", keyword: ["person", "bowing", "medium", "skin", "tone"] }
    , { brow: "🙇🏾", keyword: ["person", "bowing", "medium-dark", "skin", "tone"] }
    , { brow: "🙇🏿", keyword: ["person", "bowing", "dark", "skin", "tone"] }
    , { brow: "🙇‍♂️", keyword: ["man", "bowing"] }
    , { brow: "🙇🏻‍♂️", keyword: ["man", "bowing", "light", "skin", "tone"] }
    , { brow: "🙇🏼‍♂️", keyword: ["man", "bowing", "medium-light", "skin", "tone"] }
    , { brow: "🙇🏽‍♂️", keyword: ["man", "bowing", "medium", "skin", "tone"] }
    , { brow: "🙇🏾‍♂️", keyword: ["man", "bowing", "medium-dark", "skin", "tone"] }
    , { brow: "🙇🏿‍♂️", keyword: ["man", "bowing", "dark", "skin", "tone"] }
    , { brow: "🙇‍♀️", keyword: ["woman", "bowing"] }
    , { brow: "🙇🏻‍♀️", keyword: ["woman", "bowing", "light", "skin", "tone"] }
    , { brow: "🙇🏼‍♀️", keyword: ["woman", "bowing", "medium-light", "skin", "tone"] }
    , { brow: "🙇🏽‍♀️", keyword: ["woman", "bowing", "medium", "skin", "tone"] }
    , { brow: "🙇🏾‍♀️", keyword: ["woman", "bowing", "medium-dark", "skin", "tone"] }
    , { brow: "🙇🏿‍♀️", keyword: ["woman", "bowing", "dark", "skin", "tone"] }
    , { brow: "🤦", keyword: ["person", "facepalming"] }
    , { brow: "🤦🏻", keyword: ["person", "facepalming", "light", "skin", "tone"] }
    , { brow: "🤦🏼", keyword: ["person", "facepalming", "medium-light", "skin", "tone"] }
    , { brow: "🤦🏽", keyword: ["person", "facepalming", "medium", "skin", "tone"] }
    , { brow: "🤦🏾", keyword: ["person", "facepalming", "medium-dark", "skin", "tone"] }
    , { brow: "🤦🏿", keyword: ["person", "facepalming", "dark", "skin", "tone"] }
    , { brow: "🤦‍♂️", keyword: ["man", "facepalming"] }
    , { brow: "🤦🏻‍♂️", keyword: ["man", "facepalming", "light", "skin", "tone"] }
    , { brow: "🤦🏼‍♂️", keyword: ["man", "facepalming", "medium-light", "skin", "tone"] }
    , { brow: "🤦🏽‍♂️", keyword: ["man", "facepalming", "medium", "skin", "tone"] }
    , { brow: "🤦🏾‍♂️", keyword: ["man", "facepalming", "medium-dark", "skin", "tone"] }
    , { brow: "🤦🏿‍♂️", keyword: ["man", "facepalming", "dark", "skin", "tone"] }
    , { brow: "🤦‍♀️", keyword: ["woman", "facepalming"] }
    , { brow: "🤦🏻‍♀️", keyword: ["woman", "facepalming", "light", "skin", "tone"] }
    , { brow: "🤦🏼‍♀️", keyword: ["woman", "facepalming", "medium-light", "skin", "tone"] }
    , { brow: "🤦🏽‍♀️", keyword: ["woman", "facepalming", "medium", "skin", "tone"] }
    , { brow: "🤦🏾‍♀️", keyword: ["woman", "facepalming", "medium-dark", "skin", "tone"] }
    , { brow: "🤦🏿‍♀️", keyword: ["woman", "facepalming", "dark", "skin", "tone"] }
    , { brow: "🤷", keyword: ["person", "shrugging"] }
    , { brow: "🤷🏻", keyword: ["person", "shrugging", "light", "skin", "tone"] }
    , { brow: "🤷🏼", keyword: ["person", "shrugging", "medium-light", "skin", "tone"] }
    , { brow: "🤷🏽", keyword: ["person", "shrugging", "medium", "skin", "tone"] }
    , { brow: "🤷🏾", keyword: ["person", "shrugging", "medium-dark", "skin", "tone"] }
    , { brow: "🤷🏿", keyword: ["person", "shrugging", "dark", "skin", "tone"] }
    , { brow: "🤷‍♂️", keyword: ["man", "shrugging"] }
    , { brow: "🤷🏻‍♂️", keyword: ["man", "shrugging", "light", "skin", "tone"] }
    , { brow: "🤷🏼‍♂️", keyword: ["man", "shrugging", "medium-light", "skin", "tone"] }
    , { brow: "🤷🏽‍♂️", keyword: ["man", "shrugging", "medium", "skin", "tone"] }
    , { brow: "🤷🏾‍♂️", keyword: ["man", "shrugging", "medium-dark", "skin", "tone"] }
    , { brow: "🤷🏿‍♂️", keyword: ["man", "shrugging", "dark", "skin", "tone"] }
    , { brow: "🤷‍♀️", keyword: ["woman", "shrugging"] }
    , { brow: "🤷🏻‍♀️", keyword: ["woman", "shrugging", "light", "skin", "tone"] }
    , { brow: "🤷🏼‍♀️", keyword: ["woman", "shrugging", "medium-light", "skin", "tone"] }
    , { brow: "🤷🏽‍♀️", keyword: ["woman", "shrugging", "medium", "skin", "tone"] }
    , { brow: "🤷🏾‍♀️", keyword: ["woman", "shrugging", "medium-dark", "skin", "tone"] }
    , { brow: "🤷🏿‍♀️", keyword: ["woman", "shrugging", "dark", "skin", "tone"] }
    , { brow: "💆", keyword: ["person", "getting", "massage"] }
    , { brow: "💆🏻", keyword: ["person", "getting", "massage", "light", "skin", "tone"] }
    , { brow: "💆🏼", keyword: ["person", "getting", "massage", "medium-light", "skin", "tone"] }
    , { brow: "💆🏽", keyword: ["person", "getting", "massage", "medium", "skin", "tone"] }
    , { brow: "💆🏾", keyword: ["person", "getting", "massage", "medium-dark", "skin", "tone"] }
    , { brow: "💆🏿", keyword: ["person", "getting", "massage", "dark", "skin", "tone"] }
    , { brow: "💆‍♂️", keyword: ["man", "getting", "massage"] }
    , { brow: "💆🏻‍♂️", keyword: ["man", "getting", "massage", "light", "skin", "tone"] }
    , { brow: "💆🏼‍♂️", keyword: ["man", "getting", "massage", "medium-light", "skin", "tone"] }
    , { brow: "💆🏽‍♂️", keyword: ["man", "getting", "massage", "medium", "skin", "tone"] }
    , { brow: "💆🏾‍♂️", keyword: ["man", "getting", "massage", "medium-dark", "skin", "tone"] }
    , { brow: "💆🏿‍♂️", keyword: ["man", "getting", "massage", "dark", "skin", "tone"] }
    , { brow: "💆‍♀️", keyword: ["woman", "getting", "massage"] }
    , { brow: "💆🏻‍♀️", keyword: ["woman", "getting", "massage", "light", "skin", "tone"] }
    , { brow: "💆🏼‍♀️", keyword: ["woman", "getting", "massage", "medium-light", "skin", "tone"] }
    , { brow: "💆🏽‍♀️", keyword: ["woman", "getting", "massage", "medium", "skin", "tone"] }
    , { brow: "💆🏾‍♀️", keyword: ["woman", "getting", "massage", "medium-dark", "skin", "tone"] }
    , { brow: "💆🏿‍♀️", keyword: ["woman", "getting", "massage", "dark", "skin", "tone"] }
    , { brow: "💇", keyword: ["person", "getting", "haircut"] }
    , { brow: "💇🏻", keyword: ["person", "getting", "haircut", "light", "skin", "tone"] }
    , { brow: "💇🏼", keyword: ["person", "getting", "haircut", "medium-light", "skin", "tone"] }
    , { brow: "💇🏽", keyword: ["person", "getting", "haircut", "medium", "skin", "tone"] }
    , { brow: "💇🏾", keyword: ["person", "getting", "haircut", "medium-dark", "skin", "tone"] }
    , { brow: "💇🏿", keyword: ["person", "getting", "haircut", "dark", "skin", "tone"] }
    , { brow: "💇‍♂️", keyword: ["man", "getting", "haircut"] }
    , { brow: "💇🏻‍♂️", keyword: ["man", "getting", "haircut", "light", "skin", "tone"] }
    , { brow: "💇🏼‍♂️", keyword: ["man", "getting", "haircut", "medium-light", "skin", "tone"] }
    , { brow: "💇🏽‍♂️", keyword: ["man", "getting", "haircut", "medium", "skin", "tone"] }
    , { brow: "💇🏾‍♂️", keyword: ["man", "getting", "haircut", "medium-dark", "skin", "tone"] }
    , { brow: "💇🏿‍♂️", keyword: ["man", "getting", "haircut", "dark", "skin", "tone"] }
    , { brow: "💇‍♀️", keyword: ["woman", "getting", "haircut"] }
    , { brow: "💇🏻‍♀️", keyword: ["woman", "getting", "haircut", "light", "skin", "tone"] }
    , { brow: "💇🏼‍♀️", keyword: ["woman", "getting", "haircut", "medium-light", "skin", "tone"] }
    , { brow: "💇🏽‍♀️", keyword: ["woman", "getting", "haircut", "medium", "skin", "tone"] }
    , { brow: "💇🏾‍♀️", keyword: ["woman", "getting", "haircut", "medium-dark", "skin", "tone"] }
    , { brow: "💇🏿‍♀️", keyword: ["woman", "getting", "haircut", "dark", "skin", "tone"] }
    , { brow: "🚶", keyword: ["person", "walking"] }
    , { brow: "🚶🏻", keyword: ["person", "walking", "light", "skin", "tone"] }
    , { brow: "🚶🏼", keyword: ["person", "walking", "medium-light", "skin", "tone"] }
    , { brow: "🚶🏽", keyword: ["person", "walking", "medium", "skin", "tone"] }
    , { brow: "🚶🏾", keyword: ["person", "walking", "medium-dark", "skin", "tone"] }
    , { brow: "🚶🏿", keyword: ["person", "walking", "dark", "skin", "tone"] }
    , { brow: "🚶‍♂️", keyword: ["man", "walking"] }
    , { brow: "🚶🏻‍♂️", keyword: ["man", "walking", "light", "skin", "tone"] }
    , { brow: "🚶🏼‍♂️", keyword: ["man", "walking", "medium-light", "skin", "tone"] }
    , { brow: "🚶🏽‍♂️", keyword: ["man", "walking", "medium", "skin", "tone"] }
    , { brow: "🚶🏾‍♂️", keyword: ["man", "walking", "medium-dark", "skin", "tone"] }
    , { brow: "🚶🏿‍♂️", keyword: ["man", "walking", "dark", "skin", "tone"] }
    , { brow: "🚶‍♀️", keyword: ["woman", "walking"] }
    , { brow: "🚶🏻‍♀️", keyword: ["woman", "walking", "light", "skin", "tone"] }
    , { brow: "🚶🏼‍♀️", keyword: ["woman", "walking", "medium-light", "skin", "tone"] }
    , { brow: "🚶🏽‍♀️", keyword: ["woman", "walking", "medium", "skin", "tone"] }
    , { brow: "🚶🏾‍♀️", keyword: ["woman", "walking", "medium-dark", "skin", "tone"] }
    , { brow: "🚶🏿‍♀️", keyword: ["woman", "walking", "dark", "skin", "tone"] }
    , { brow: "🏃", keyword: ["person", "running"] }
    , { brow: "🏃🏻", keyword: ["person", "running", "light", "skin", "tone"] }
    , { brow: "🏃🏼", keyword: ["person", "running", "medium-light", "skin", "tone"] }
    , { brow: "🏃🏽", keyword: ["person", "running", "medium", "skin", "tone"] }
    , { brow: "🏃🏾", keyword: ["person", "running", "medium-dark", "skin", "tone"] }
    , { brow: "🏃🏿", keyword: ["person", "running", "dark", "skin", "tone"] }
    , { brow: "🏃‍♂️", keyword: ["man", "running"] }
    , { brow: "🏃🏻‍♂️", keyword: ["man", "running", "light", "skin", "tone"] }
    , { brow: "🏃🏼‍♂️", keyword: ["man", "running", "medium-light", "skin", "tone"] }
    , { brow: "🏃🏽‍♂️", keyword: ["man", "running", "medium", "skin", "tone"] }
    , { brow: "🏃🏾‍♂️", keyword: ["man", "running", "medium-dark", "skin", "tone"] }
    , { brow: "🏃🏿‍♂️", keyword: ["man", "running", "dark", "skin", "tone"] }
    , { brow: "🏃‍♀️", keyword: ["woman", "running"] }
    , { brow: "🏃🏻‍♀️", keyword: ["woman", "running", "light", "skin", "tone"] }
    , { brow: "🏃🏼‍♀️", keyword: ["woman", "running", "medium-light", "skin", "tone"] }
    , { brow: "🏃🏽‍♀️", keyword: ["woman", "running", "medium", "skin", "tone"] }
    , { brow: "🏃🏾‍♀️", keyword: ["woman", "running", "medium-dark", "skin", "tone"] }
    , { brow: "🏃🏿‍♀️", keyword: ["woman", "running", "dark", "skin", "tone"] }
    , { brow: "💃", keyword: ["woman", "dancing"] }
    , { brow: "💃🏻", keyword: ["woman", "dancing", "light", "skin", "tone"] }
    , { brow: "💃🏼", keyword: ["woman", "dancing", "medium-light", "skin", "tone"] }
    , { brow: "💃🏽", keyword: ["woman", "dancing", "medium", "skin", "tone"] }
    , { brow: "💃🏾", keyword: ["woman", "dancing", "medium-dark", "skin", "tone"] }
    , { brow: "💃🏿", keyword: ["woman", "dancing", "dark", "skin", "tone"] }
    , { brow: "🕺", keyword: ["man", "dancing"] }
    , { brow: "🕺🏻", keyword: ["man", "dancing", "light", "skin", "tone"] }
    , { brow: "🕺🏼", keyword: ["man", "dancing", "medium-light", "skin", "tone"] }
    , { brow: "🕺🏽", keyword: ["man", "dancing", "medium", "skin", "tone"] }
    , { brow: "🕺🏾", keyword: ["man", "dancing", "medium-dark", "skin", "tone"] }
    , { brow: "🕺🏿", keyword: ["man", "dancing", "dark", "skin", "tone"] }
    , { brow: "👯", keyword: ["people", "with", "bunny", "ears", "partying"] }
    , { brow: "👯‍♂️", keyword: ["men", "with", "bunny", "ears", "partying"] }
    , { brow: "👯‍♀️", keyword: ["women", "with", "bunny", "ears", "partying"] }
    , { brow: "🧖", keyword: ["person", "in", "steamy", "room"] }
    , { brow: "🧖🏻", keyword: ["person", "in", "steamy", "room", "light", "skin", "tone"] }
    , { brow: "🧖🏼", keyword: ["person", "in", "steamy", "room", "medium-light", "skin", "tone"] }
    , { brow: "🧖🏽", keyword: ["person", "in", "steamy", "room", "medium", "skin", "tone"] }
    , { brow: "🧖🏾", keyword: ["person", "in", "steamy", "room", "medium-dark", "skin", "tone"] }
    , { brow: "🧖🏿", keyword: ["person", "in", "steamy", "room", "dark", "skin", "tone"] }
    , { brow: "🧖‍♀️", keyword: ["woman", "in", "steamy", "room"] }
    , { brow: "🧖🏻‍♀️", keyword: ["woman", "in", "steamy", "room", "light", "skin", "tone"] }
    , { brow: "🧖🏼‍♀️", keyword: ["woman", "in", "steamy", "room", "medium-light", "skin", "tone"] }
    , { brow: "🧖🏽‍♀️", keyword: ["woman", "in", "steamy", "room", "medium", "skin", "tone"] }
    , { brow: "🧖🏾‍♀️", keyword: ["woman", "in", "steamy", "room", "medium-dark", "skin", "tone"] }
    , { brow: "🧖🏿‍♀️", keyword: ["woman", "in", "steamy", "room", "dark", "skin", "tone"] }
    , { brow: "🧖‍♂️", keyword: ["man", "in", "steamy", "room"] }
    , { brow: "🧖🏻‍♂️", keyword: ["man", "in", "steamy", "room", "light", "skin", "tone"] }
    , { brow: "🧖🏼‍♂️", keyword: ["man", "in", "steamy", "room", "medium-light", "skin", "tone"] }
    , { brow: "🧖🏽‍♂️", keyword: ["man", "in", "steamy", "room", "medium", "skin", "tone"] }
    , { brow: "🧖🏾‍♂️", keyword: ["man", "in", "steamy", "room", "medium-dark", "skin", "tone"] }
    , { brow: "🧖🏿‍♂️", keyword: ["man", "in", "steamy", "room", "dark", "skin", "tone"] }
    , { brow: "🧗", keyword: ["person", "climbing"] }
    , { brow: "🧗🏻", keyword: ["person", "climbing", "light", "skin", "tone"] }
    , { brow: "🧗🏼", keyword: ["person", "climbing", "medium-light", "skin", "tone"] }
    , { brow: "🧗🏽", keyword: ["person", "climbing", "medium", "skin", "tone"] }
    , { brow: "🧗🏾", keyword: ["person", "climbing", "medium-dark", "skin", "tone"] }
    , { brow: "🧗🏿", keyword: ["person", "climbing", "dark", "skin", "tone"] }
    , { brow: "🧗‍♀️", keyword: ["woman", "climbing"] }
    , { brow: "🧗🏻‍♀️", keyword: ["woman", "climbing", "light", "skin", "tone"] }
    , { brow: "🧗🏼‍♀️", keyword: ["woman", "climbing", "medium-light", "skin", "tone"] }
    , { brow: "🧗🏽‍♀️", keyword: ["woman", "climbing", "medium", "skin", "tone"] }
    , { brow: "🧗🏾‍♀️", keyword: ["woman", "climbing", "medium-dark", "skin", "tone"] }
    , { brow: "🧗🏿‍♀️", keyword: ["woman", "climbing", "dark", "skin", "tone"] }
    , { brow: "🧗‍♂️", keyword: ["man", "climbing"] }
    , { brow: "🧗🏻‍♂️", keyword: ["man", "climbing", "light", "skin", "tone"] }
    , { brow: "🧗🏼‍♂️", keyword: ["man", "climbing", "medium-light", "skin", "tone"] }
    , { brow: "🧗🏽‍♂️", keyword: ["man", "climbing", "medium", "skin", "tone"] }
    , { brow: "🧗🏾‍♂️", keyword: ["man", "climbing", "medium-dark", "skin", "tone"] }
    , { brow: "🧗🏿‍♂️", keyword: ["man", "climbing", "dark", "skin", "tone"] }
    , { brow: "🧘", keyword: ["person", "in", "lotus", "position"] }
    , { brow: "🧘🏻", keyword: ["person", "in", "lotus", "position", "light", "skin", "tone"] }
    , { brow: "🧘🏼", keyword: ["person", "in", "lotus", "position", "medium-light", "skin", "tone"] }
    , { brow: "🧘🏽", keyword: ["person", "in", "lotus", "position", "medium", "skin", "tone"] }
    , { brow: "🧘🏾", keyword: ["person", "in", "lotus", "position", "medium-dark", "skin", "tone"] }
    , { brow: "🧘🏿", keyword: ["person", "in", "lotus", "position", "dark", "skin", "tone"] }
    , { brow: "🧘‍♀️", keyword: ["woman", "in", "lotus", "position"] }
    , { brow: "🧘🏻‍♀️", keyword: ["woman", "in", "lotus", "position", "light", "skin", "tone"] }
    , { brow: "🧘🏼‍♀️", keyword: ["woman", "in", "lotus", "position", "medium-light", "skin", "tone"] }
    , { brow: "🧘🏽‍♀️", keyword: ["woman", "in", "lotus", "position", "medium", "skin", "tone"] }
    , { brow: "🧘🏾‍♀️", keyword: ["woman", "in", "lotus", "position", "medium-dark", "skin", "tone"] }
    , { brow: "🧘🏿‍♀️", keyword: ["woman", "in", "lotus", "position", "dark", "skin", "tone"] }
    , { brow: "🧘‍♂️", keyword: ["man", "in", "lotus", "position"] }
    , { brow: "🧘🏻‍♂️", keyword: ["man", "in", "lotus", "position", "light", "skin", "tone"] }
    , { brow: "🧘🏼‍♂️", keyword: ["man", "in", "lotus", "position", "medium-light", "skin", "tone"] }
    , { brow: "🧘🏽‍♂️", keyword: ["man", "in", "lotus", "position", "medium", "skin", "tone"] }
    , { brow: "🧘🏾‍♂️", keyword: ["man", "in", "lotus", "position", "medium-dark", "skin", "tone"] }
    , { brow: "🧘🏿‍♂️", keyword: ["man", "in", "lotus", "position", "dark", "skin", "tone"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath", "light", "skin", "tone"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath", "medium-light", "skin", "tone"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath", "medium", "skin", "tone"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath", "medium-dark", "skin", "tone"] }
    , { brow: "🛀", keyword: ["person", "taking", "bath", "dark", "skin", "tone"] }
    , { brow: "🛌", keyword: ["person", "in", "bed"] }
    , { brow: "🛌", keyword: ["person", "in", "bed", "light", "skin", "tone"] }
    , { brow: "🛌", keyword: ["person", "in", "bed", "medium-light", "skin", "tone"] }
    , { brow: "🛌", keyword: ["person", "in", "bed", "medium", "skin", "tone"] }
    , { brow: "🛌", keyword: ["person", "in", "bed", "medium-dark", "skin", "tone"] }
    , { brow: "🛌", keyword: ["person", "in", "bed", "dark", "skin", "tone"] }
    , { brow: "🕴", keyword: ["man", "in", "business", "suit", "levitating"] }
    , { brow: "🕴🏻", keyword: ["man", "in", "business", "suit", "levitating", "light", "skin", "tone"] }
    , { brow: "🕴🏼", keyword: ["man", "in", "business", "suit", "levitating", "medium-light", "skin", "tone"] }
    , { brow: "🕴🏽", keyword: ["man", "in", "business", "suit", "levitating", "medium", "skin", "tone"] }
    , { brow: "🕴🏾", keyword: ["man", "in", "business", "suit", "levitating", "medium-dark", "skin", "tone"] }
    , { brow: "🕴🏿", keyword: ["man", "in", "business", "suit", "levitating", "dark", "skin", "tone"] }
    , { brow: "🗣", keyword: ["speaking", "head"] }
    , { brow: "👤", keyword: ["bust", "in", "silhouette"] }
    , { brow: "👥", keyword: ["busts", "in", "silhouette"] }
    , { brow: "🤺", keyword: ["person", "fencing"] }
    , { brow: "🏇", keyword: ["horse", "racing"] }
    , { brow: "🏇", keyword: ["horse", "racing", "light", "skin", "tone"] }
    , { brow: "🏇", keyword: ["horse", "racing", "medium-light", "skin", "tone"] }
    , { brow: "🏇", keyword: ["horse", "racing", "medium", "skin", "tone"] }
    , { brow: "🏇", keyword: ["horse", "racing", "medium-dark", "skin", "tone"] }
    , { brow: "🏇", keyword: ["horse", "racing", "dark", "skin", "tone"] }
    , { brow: "⛷", keyword: ["skier"] }
    , { brow: "🏂", keyword: ["snowboarder"] }
    , { brow: "🏂", keyword: ["snowboarder", "light", "skin", "tone"] }
    , { brow: "🏂", keyword: ["snowboarder", "medium-light", "skin", "tone"] }
    , { brow: "🏂", keyword: ["snowboarder", "medium", "skin", "tone"] }
    , { brow: "🏂", keyword: ["snowboarder", "medium-dark", "skin", "tone"] }
    , { brow: "🏂", keyword: ["snowboarder", "dark", "skin", "tone"] }
    , { brow: "🏌", keyword: ["person", "golfing"] }
    , { brow: "🏌🏻", keyword: ["person", "golfing", "light", "skin", "tone"] }
    , { brow: "🏌🏼", keyword: ["person", "golfing", "medium-light", "skin", "tone"] }
    , { brow: "🏌🏽", keyword: ["person", "golfing", "medium", "skin", "tone"] }
    , { brow: "🏌🏾", keyword: ["person", "golfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏌🏿", keyword: ["person", "golfing", "dark", "skin", "tone"] }
    , { brow: "🏌️‍♂️", keyword: ["man", "golfing"] }
    , { brow: "🏌🏻‍♂️", keyword: ["man", "golfing", "light", "skin", "tone"] }
    , { brow: "🏌🏼‍♂️", keyword: ["man", "golfing", "medium-light", "skin", "tone"] }
    , { brow: "🏌🏽‍♂️", keyword: ["man", "golfing", "medium", "skin", "tone"] }
    , { brow: "🏌🏾‍♂️", keyword: ["man", "golfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏌🏿‍♂️", keyword: ["man", "golfing", "dark", "skin", "tone"] }
    , { brow: "🏌️‍♀️", keyword: ["woman", "golfing"] }
    , { brow: "🏌🏻‍♀️", keyword: ["woman", "golfing", "light", "skin", "tone"] }
    , { brow: "🏌🏼‍♀️", keyword: ["woman", "golfing", "medium-light", "skin", "tone"] }
    , { brow: "🏌🏽‍♀️", keyword: ["woman", "golfing", "medium", "skin", "tone"] }
    , { brow: "🏌🏾‍♀️", keyword: ["woman", "golfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏌🏿‍♀️", keyword: ["woman", "golfing", "dark", "skin", "tone"] }
    , { brow: "🏄", keyword: ["person", "surfing"] }
    , { brow: "🏄", keyword: ["person", "surfing", "light", "skin", "tone"] }
    , { brow: "🏄", keyword: ["person", "surfing", "medium-light", "skin", "tone"] }
    , { brow: "🏄", keyword: ["person", "surfing", "medium", "skin", "tone"] }
    , { brow: "🏄", keyword: ["person", "surfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏄", keyword: ["person", "surfing", "dark", "skin", "tone"] }
    , { brow: "🏄‍♂️", keyword: ["man", "surfing"] }
    , { brow: "🏄♂️", keyword: ["man", "surfing", "light", "skin", "tone"] }
    , { brow: "🏄♂️", keyword: ["man", "surfing", "medium-light", "skin", "tone"] }
    , { brow: "🏄♂️", keyword: ["man", "surfing", "medium", "skin", "tone"] }
    , { brow: "🏄♂️", keyword: ["man", "surfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏄♂️", keyword: ["man", "surfing", "dark", "skin", "tone"] }
    , { brow: "🏄‍♀️", keyword: ["woman", "surfing"] }
    , { brow: "🏄♀️", keyword: ["woman", "surfing", "light", "skin", "tone"] }
    , { brow: "🏄♀️", keyword: ["woman", "surfing", "medium-light", "skin", "tone"] }
    , { brow: "🏄♀️", keyword: ["woman", "surfing", "medium", "skin", "tone"] }
    , { brow: "🏄♀️", keyword: ["woman", "surfing", "medium-dark", "skin", "tone"] }
    , { brow: "🏄♀️", keyword: ["woman", "surfing", "dark", "skin", "tone"] }
    , { brow: "🚣", keyword: ["person", "rowing", "boat"] }
    , { brow: "🚣🏻", keyword: ["person", "rowing", "boat", "light", "skin", "tone"] }
    , { brow: "🚣🏼", keyword: ["person", "rowing", "boat", "medium-light", "skin", "tone"] }
    , { brow: "🚣🏽", keyword: ["person", "rowing", "boat", "medium", "skin", "tone"] }
    , { brow: "🚣🏾", keyword: ["person", "rowing", "boat", "medium-dark", "skin", "tone"] }
    , { brow: "🚣🏿", keyword: ["person", "rowing", "boat", "dark", "skin", "tone"] }
    , { brow: "🚣‍♂️", keyword: ["man", "rowing", "boat"] }
    , { brow: "🚣🏻‍♂️", keyword: ["man", "rowing", "boat", "light", "skin", "tone"] }
    , { brow: "🚣🏼‍♂️", keyword: ["man", "rowing", "boat", "medium-light", "skin", "tone"] }
    , { brow: "🚣🏽‍♂️", keyword: ["man", "rowing", "boat", "medium", "skin", "tone"] }
    , { brow: "🚣🏾‍♂️", keyword: ["man", "rowing", "boat", "medium-dark", "skin", "tone"] }
    , { brow: "🚣🏿‍♂️", keyword: ["man", "rowing", "boat", "dark", "skin", "tone"] }
    , { brow: "🚣‍♀️", keyword: ["woman", "rowing", "boat"] }
    , { brow: "🚣🏻‍♀️", keyword: ["woman", "rowing", "boat", "light", "skin", "tone"] }
    , { brow: "🚣🏼‍♀️", keyword: ["woman", "rowing", "boat", "medium-light", "skin", "tone"] }
    , { brow: "🚣🏽‍♀️", keyword: ["woman", "rowing", "boat", "medium", "skin", "tone"] }
    , { brow: "🚣🏾‍♀️", keyword: ["woman", "rowing", "boat", "medium-dark", "skin", "tone"] }
    , { brow: "🚣🏿‍♀️", keyword: ["woman", "rowing", "boat", "dark", "skin", "tone"] }
    , { brow: "🏊", keyword: ["person", "swimming"] }
    , { brow: "🏊🏻", keyword: ["person", "swimming", "light", "skin", "tone"] }
    , { brow: "🏊🏼", keyword: ["person", "swimming", "medium-light", "skin", "tone"] }
    , { brow: "🏊🏽", keyword: ["person", "swimming", "medium", "skin", "tone"] }
    , { brow: "🏊🏾", keyword: ["person", "swimming", "medium-dark", "skin", "tone"] }
    , { brow: "🏊🏿", keyword: ["person", "swimming", "dark", "skin", "tone"] }
    , { brow: "🏊‍♂️", keyword: ["man", "swimming"] }
    , { brow: "🏊🏻‍♂️", keyword: ["man", "swimming", "light", "skin", "tone"] }
    , { brow: "🏊🏼‍♂️", keyword: ["man", "swimming", "medium-light", "skin", "tone"] }
    , { brow: "🏊🏽‍♂️", keyword: ["man", "swimming", "medium", "skin", "tone"] }
    , { brow: "🏊🏾‍♂️", keyword: ["man", "swimming", "medium-dark", "skin", "tone"] }
    , { brow: "🏊🏿‍♂️", keyword: ["man", "swimming", "dark", "skin", "tone"] }
    , { brow: "🏊‍♀️", keyword: ["woman", "swimming"] }
    , { brow: "🏊🏻‍♀️", keyword: ["woman", "swimming", "light", "skin", "tone"] }
    , { brow: "🏊🏼‍♀️", keyword: ["woman", "swimming", "medium-light", "skin", "tone"] }
    , { brow: "🏊🏽‍♀️", keyword: ["woman", "swimming", "medium", "skin", "tone"] }
    , { brow: "🏊🏾‍♀️", keyword: ["woman", "swimming", "medium-dark", "skin", "tone"] }
    , { brow: "🏊🏿‍♀️", keyword: ["woman", "swimming", "dark", "skin", "tone"] }
    , { brow: "⛹", keyword: ["person", "bouncing", "ball"] }
    , { brow: "⛹🏻", keyword: ["person", "bouncing", "ball", "light", "skin", "tone"] }
    , { brow: "⛹🏼", keyword: ["person", "bouncing", "ball", "medium-light", "skin", "tone"] }
    , { brow: "⛹🏽", keyword: ["person", "bouncing", "ball", "medium", "skin", "tone"] }
    , { brow: "⛹🏾", keyword: ["person", "bouncing", "ball", "medium-dark", "skin", "tone"] }
    , { brow: "⛹🏿", keyword: ["person", "bouncing", "ball", "dark", "skin", "tone"] }
    , { brow: "⛹️‍♂️", keyword: ["man", "bouncing", "ball"] }
    , { brow: "⛹🏻‍♂️", keyword: ["man", "bouncing", "ball", "light", "skin", "tone"] }
    , { brow: "⛹🏼‍♂️", keyword: ["man", "bouncing", "ball", "medium-light", "skin", "tone"] }
    , { brow: "⛹🏽‍♂️", keyword: ["man", "bouncing", "ball", "medium", "skin", "tone"] }
    , { brow: "⛹🏾‍♂️", keyword: ["man", "bouncing", "ball", "medium-dark", "skin", "tone"] }
    , { brow: "⛹🏿‍♂️", keyword: ["man", "bouncing", "ball", "dark", "skin", "tone"] }
    , { brow: "⛹️‍♀️", keyword: ["woman", "bouncing", "ball"] }
    , { brow: "⛹🏻‍♀️", keyword: ["woman", "bouncing", "ball", "light", "skin", "tone"] }
    , { brow: "⛹🏼‍♀️", keyword: ["woman", "bouncing", "ball", "medium-light", "skin", "tone"] }
    , { brow: "⛹🏽‍♀️", keyword: ["woman", "bouncing", "ball", "medium", "skin", "tone"] }
    , { brow: "⛹🏾‍♀️", keyword: ["woman", "bouncing", "ball", "medium-dark", "skin", "tone"] }
    , { brow: "⛹🏿‍♀️", keyword: ["woman", "bouncing", "ball", "dark", "skin", "tone"] }
    , { brow: "🏋", keyword: ["person", "lifting", "weights"] }
    , { brow: "🏋🏻", keyword: ["person", "lifting", "weights", "light", "skin", "tone"] }
    , { brow: "🏋🏼", keyword: ["person", "lifting", "weights", "medium-light", "skin", "tone"] }
    , { brow: "🏋🏽", keyword: ["person", "lifting", "weights", "medium", "skin", "tone"] }
    , { brow: "🏋🏾", keyword: ["person", "lifting", "weights", "medium-dark", "skin", "tone"] }
    , { brow: "🏋🏿", keyword: ["person", "lifting", "weights", "dark", "skin", "tone"] }
    , { brow: "🏋️‍♂️", keyword: ["man", "lifting", "weights"] }
    , { brow: "🏋🏻‍♂️", keyword: ["man", "lifting", "weights", "light", "skin", "tone"] }
    , { brow: "🏋🏼‍♂️", keyword: ["man", "lifting", "weights", "medium-light", "skin", "tone"] }
    , { brow: "🏋🏽‍♂️", keyword: ["man", "lifting", "weights", "medium", "skin", "tone"] }
    , { brow: "🏋🏾‍♂️", keyword: ["man", "lifting", "weights", "medium-dark", "skin", "tone"] }
    , { brow: "🏋🏿‍♂️", keyword: ["man", "lifting", "weights", "dark", "skin", "tone"] }
    , { brow: "🏋️‍♀️", keyword: ["woman", "lifting", "weights"] }
    , { brow: "🏋🏻‍♀️", keyword: ["woman", "lifting", "weights", "light", "skin", "tone"] }
    , { brow: "🏋🏼‍♀️", keyword: ["woman", "lifting", "weights", "medium-light", "skin", "tone"] }
    , { brow: "🏋🏽‍♀️", keyword: ["woman", "lifting", "weights", "medium", "skin", "tone"] }
    , { brow: "🏋🏾‍♀️", keyword: ["woman", "lifting", "weights", "medium-dark", "skin", "tone"] }
    , { brow: "🏋🏿‍♀️", keyword: ["woman", "lifting", "weights", "dark", "skin", "tone"] }
    , { brow: "🚴", keyword: ["person", "biking"] }
    , { brow: "🚴🏻", keyword: ["person", "biking", "light", "skin", "tone"] }
    , { brow: "🚴🏼", keyword: ["person", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚴🏽", keyword: ["person", "biking", "medium", "skin", "tone"] }
    , { brow: "🚴🏾", keyword: ["person", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚴🏿", keyword: ["person", "biking", "dark", "skin", "tone"] }
    , { brow: "🚴‍♂️", keyword: ["man", "biking"] }
    , { brow: "🚴🏻‍♂️", keyword: ["man", "biking", "light", "skin", "tone"] }
    , { brow: "🚴🏼‍♂️", keyword: ["man", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚴🏽‍♂️", keyword: ["man", "biking", "medium", "skin", "tone"] }
    , { brow: "🚴🏾‍♂️", keyword: ["man", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚴🏿‍♂️", keyword: ["man", "biking", "dark", "skin", "tone"] }
    , { brow: "🚴‍♀️", keyword: ["woman", "biking"] }
    , { brow: "🚴🏻‍♀️", keyword: ["woman", "biking", "light", "skin", "tone"] }
    , { brow: "🚴🏼‍♀️", keyword: ["woman", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚴🏽‍♀️", keyword: ["woman", "biking", "medium", "skin", "tone"] }
    , { brow: "🚴🏾‍♀️", keyword: ["woman", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚴🏿‍♀️", keyword: ["woman", "biking", "dark", "skin", "tone"] }
    , { brow: "🚵", keyword: ["person", "mountain", "biking"] }
    , { brow: "🚵🏻", keyword: ["person", "mountain", "biking", "light", "skin", "tone"] }
    , { brow: "🚵🏼", keyword: ["person", "mountain", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚵🏽", keyword: ["person", "mountain", "biking", "medium", "skin", "tone"] }
    , { brow: "🚵🏾", keyword: ["person", "mountain", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚵🏿", keyword: ["person", "mountain", "biking", "dark", "skin", "tone"] }
    , { brow: "🚵‍♂️", keyword: ["man", "mountain", "biking"] }
    , { brow: "🚵🏻‍♂️", keyword: ["man", "mountain", "biking", "light", "skin", "tone"] }
    , { brow: "🚵🏼‍♂️", keyword: ["man", "mountain", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚵🏽‍♂️", keyword: ["man", "mountain", "biking", "medium", "skin", "tone"] }
    , { brow: "🚵🏾‍♂️", keyword: ["man", "mountain", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚵🏿‍♂️", keyword: ["man", "mountain", "biking", "dark", "skin", "tone"] }
    , { brow: "🚵‍♀️", keyword: ["woman", "mountain", "biking"] }
    , { brow: "🚵🏻‍♀️", keyword: ["woman", "mountain", "biking", "light", "skin", "tone"] }
    , { brow: "🚵🏼‍♀️", keyword: ["woman", "mountain", "biking", "medium-light", "skin", "tone"] }
    , { brow: "🚵🏽‍♀️", keyword: ["woman", "mountain", "biking", "medium", "skin", "tone"] }
    , { brow: "🚵🏾‍♀️", keyword: ["woman", "mountain", "biking", "medium-dark", "skin", "tone"] }
    , { brow: "🚵🏿‍♀️", keyword: ["woman", "mountain", "biking", "dark", "skin", "tone"] }
    , { brow: "🏎", keyword: ["racing", "car"] }
    , { brow: "🏍", keyword: ["motorcycle"] }
    , { brow: "🤸", keyword: ["person", "cartwheeling"] }
    , { brow: "🤸🏻", keyword: ["person", "cartwheeling", "light", "skin", "tone"] }
    , { brow: "🤸🏼", keyword: ["person", "cartwheeling", "medium-light", "skin", "tone"] }
    , { brow: "🤸🏽", keyword: ["person", "cartwheeling", "medium", "skin", "tone"] }
    , { brow: "🤸🏾", keyword: ["person", "cartwheeling", "medium-dark", "skin", "tone"] }
    , { brow: "🤸🏿", keyword: ["person", "cartwheeling", "dark", "skin", "tone"] }
    , { brow: "🤸‍♂️", keyword: ["man", "cartwheeling"] }
    , { brow: "🤸🏻‍♂️", keyword: ["man", "cartwheeling", "light", "skin", "tone"] }
    , { brow: "🤸🏼‍♂️", keyword: ["man", "cartwheeling", "medium-light", "skin", "tone"] }
    , { brow: "🤸🏽‍♂️", keyword: ["man", "cartwheeling", "medium", "skin", "tone"] }
    , { brow: "🤸🏾‍♂️", keyword: ["man", "cartwheeling", "medium-dark", "skin", "tone"] }
    , { brow: "🤸🏿‍♂️", keyword: ["man", "cartwheeling", "dark", "skin", "tone"] }
    , { brow: "🤸‍♀️", keyword: ["woman", "cartwheeling"] }
    , { brow: "🤸🏻‍♀️", keyword: ["woman", "cartwheeling", "light", "skin", "tone"] }
    , { brow: "🤸🏼‍♀️", keyword: ["woman", "cartwheeling", "medium-light", "skin", "tone"] }
    , { brow: "🤸🏽‍♀️", keyword: ["woman", "cartwheeling", "medium", "skin", "tone"] }
    , { brow: "🤸🏾‍♀️", keyword: ["woman", "cartwheeling", "medium-dark", "skin", "tone"] }
    , { brow: "🤸🏿‍♀️", keyword: ["woman", "cartwheeling", "dark", "skin", "tone"] }
    , { brow: "🤼", keyword: ["people", "wrestling"] }
    , { brow: "🤼‍♂️", keyword: ["men", "wrestling"] }
    , { brow: "🤼‍♀️", keyword: ["women", "wrestling"] }
    , { brow: "🤽", keyword: ["person", "playing", "water", "polo"] }
    , { brow: "🤽🏻", keyword: ["person", "playing", "water", "polo", "light", "skin", "tone"] }
    , { brow: "🤽🏼", keyword: ["person", "playing", "water", "polo", "medium-light", "skin", "tone"] }
    , { brow: "🤽🏽", keyword: ["person", "playing", "water", "polo", "medium", "skin", "tone"] }
    , { brow: "🤽🏾", keyword: ["person", "playing", "water", "polo", "medium-dark", "skin", "tone"] }
    , { brow: "🤽🏿", keyword: ["person", "playing", "water", "polo", "dark", "skin", "tone"] }
    , { brow: "🤽‍♂️", keyword: ["man", "playing", "water", "polo"] }
    , { brow: "🤽🏻‍♂️", keyword: ["man", "playing", "water", "polo", "light", "skin", "tone"] }
    , { brow: "🤽🏼‍♂️", keyword: ["man", "playing", "water", "polo", "medium-light", "skin", "tone"] }
    , { brow: "🤽🏽‍♂️", keyword: ["man", "playing", "water", "polo", "medium", "skin", "tone"] }
    , { brow: "🤽🏾‍♂️", keyword: ["man", "playing", "water", "polo", "medium-dark", "skin", "tone"] }
    , { brow: "🤽🏿‍♂️", keyword: ["man", "playing", "water", "polo", "dark", "skin", "tone"] }
    , { brow: "🤽‍♀️", keyword: ["woman", "playing", "water", "polo"] }
    , { brow: "🤽🏻‍♀️", keyword: ["woman", "playing", "water", "polo", "light", "skin", "tone"] }
    , { brow: "🤽🏼‍♀️", keyword: ["woman", "playing", "water", "polo", "medium-light", "skin", "tone"] }
    , { brow: "🤽🏽‍♀️", keyword: ["woman", "playing", "water", "polo", "medium", "skin", "tone"] }
    , { brow: "🤽🏾‍♀️", keyword: ["woman", "playing", "water", "polo", "medium-dark", "skin", "tone"] }
    , { brow: "🤽🏿‍♀️", keyword: ["woman", "playing", "water", "polo", "dark", "skin", "tone"] }
    , { brow: "🤾", keyword: ["person", "playing", "handball"] }
    , { brow: "🤾🏻", keyword: ["person", "playing", "handball", "light", "skin", "tone"] }
    , { brow: "🤾🏼", keyword: ["person", "playing", "handball", "medium-light", "skin", "tone"] }
    , { brow: "🤾🏽", keyword: ["person", "playing", "handball", "medium", "skin", "tone"] }
    , { brow: "🤾🏾", keyword: ["person", "playing", "handball", "medium-dark", "skin", "tone"] }
    , { brow: "🤾🏿", keyword: ["person", "playing", "handball", "dark", "skin", "tone"] }
    , { brow: "🤾‍♂️", keyword: ["man", "playing", "handball"] }
    , { brow: "🤾🏻‍♂️", keyword: ["man", "playing", "handball", "light", "skin", "tone"] }
    , { brow: "🤾🏼‍♂️", keyword: ["man", "playing", "handball", "medium-light", "skin", "tone"] }
    , { brow: "🤾🏽‍♂️", keyword: ["man", "playing", "handball", "medium", "skin", "tone"] }
    , { brow: "🤾🏾‍♂️", keyword: ["man", "playing", "handball", "medium-dark", "skin", "tone"] }
    , { brow: "🤾🏿‍♂️", keyword: ["man", "playing", "handball", "dark", "skin", "tone"] }
    , { brow: "🤾‍♀️", keyword: ["woman", "playing", "handball"] }
    , { brow: "🤾🏻‍♀️", keyword: ["woman", "playing", "handball", "light", "skin", "tone"] }
    , { brow: "🤾🏼‍♀️", keyword: ["woman", "playing", "handball", "medium-light", "skin", "tone"] }
    , { brow: "🤾🏽‍♀️", keyword: ["woman", "playing", "handball", "medium", "skin", "tone"] }
    , { brow: "🤾🏾‍♀️", keyword: ["woman", "playing", "handball", "medium-dark", "skin", "tone"] }
    , { brow: "🤾🏿‍♀️", keyword: ["woman", "playing", "handball", "dark", "skin", "tone"] }
    , { brow: "🤹", keyword: ["person", "juggling"] }
    , { brow: "🤹🏻", keyword: ["person", "juggling", "light", "skin", "tone"] }
    , { brow: "🤹🏼", keyword: ["person", "juggling", "medium-light", "skin", "tone"] }
    , { brow: "🤹🏽", keyword: ["person", "juggling", "medium", "skin", "tone"] }
    , { brow: "🤹🏾", keyword: ["person", "juggling", "medium-dark", "skin", "tone"] }
    , { brow: "🤹🏿", keyword: ["person", "juggling", "dark", "skin", "tone"] }
    , { brow: "🤹‍♂️", keyword: ["man", "juggling"] }
    , { brow: "🤹🏻‍️", keyword: ["man", "juggling", "light", "skin", "tone"] }
    , { brow: "🤹🏼‍️", keyword: ["man", "juggling", "medium-light", "skin", "tone"] }
    , { brow: "🤹🏽‍️", keyword: ["man", "juggling", "medium", "skin", "tone"] }
    , { brow: "🤹🏾‍️", keyword: ["man", "juggling", "medium-dark", "skin", "tone"] }
    , { brow: "🤹🏿‍♂️", keyword: ["man", "juggling", "dark", "skin", "tone"] }
    , { brow: "🤹‍♀️", keyword: ["woman", "juggling"] }
    , { brow: "🤹🏻‍️", keyword: ["woman", "juggling", "light", "skin", "tone"] }
    , { brow: "🤹🏼‍️", keyword: ["woman", "juggling", "medium-light", "skin", "tone"] }
    , { brow: "🤹🏽‍️", keyword: ["woman", "juggling", "medium", "skin", "tone"] }
    , { brow: "🤹🏾‍️", keyword: ["woman", "juggling", "medium-dark", "skin", "tone"] }
    , { brow: "🤹🏿‍️", keyword: ["woman", "juggling", "dark", "skin", "tone"] }
    , { brow: "👫", keyword: ["man", "and", "woman", "holding", "hands"] }
    , { brow: "👬", keyword: ["two", "men", "holding", "hands"] }
    , { brow: "👭", keyword: ["two", "women", "holding", "hands"] }
    , { brow: "💏", keyword: ["kiss"] }
    , { brow: "👩‍❤️‍💋‍👨", keyword: ["kiss", "woman", "man"] }
    , { brow: "👨‍❤️‍💋‍👨", keyword: ["kiss", "man", "man"] }
    , { brow: "👩‍❤️‍💋‍👩", keyword: ["kiss", "woman", "woman"] }
    , { brow: "💑", keyword: ["couple", "with", "heart"] }
    , { brow: "👩‍❤️‍👨", keyword: ["couple", "with", "heart", "woman", "man"] }
    , { brow: "👨‍❤️‍👨", keyword: ["couple", "with", "heart", "man", "man"] }
    , { brow: "👩‍❤️‍👩", keyword: ["couple", "with", "heart", "woman", "woman"] }
    , { brow: "👪", keyword: ["family"] }
    , { brow: "👨‍👩‍👦", keyword: ["family", "man", "woman", "boy"] }
    , { brow: "👨‍👩‍👧", keyword: ["family", "man", "woman", "girl"] }
    , { brow: "👨‍👩‍👧‍👦", keyword: ["family", "man", "woman", "girl", "boy"] }
    , { brow: "👨‍👩‍👦‍👦", keyword: ["family", "man", "woman", "boy", "boy"] }
    , { brow: "👨‍👩‍👧‍👧", keyword: ["family", "man", "woman", "girl", "girl"] }
    , { brow: "👨‍👨‍👦", keyword: ["family", "man", "man", "boy"] }
    , { brow: "👨‍👨‍👧", keyword: ["family", "man", "man", "girl"] }
    , { brow: "👨‍👨‍👧‍👦", keyword: ["family", "man", "man", "girl", "boy"] }
    , { brow: "👨‍👨‍👦‍👦", keyword: ["family", "man", "man", "boy", "boy"] }
    , { brow: "👨‍👨‍👧‍👧", keyword: ["family", "man", "man", "girl", "girl"] }
    , { brow: "👩‍👩‍👦", keyword: ["family", "woman", "woman", "boy"] }
    , { brow: "👩‍👩‍👧", keyword: ["family", "woman", "woman", "girl"] }
    , { brow: "👩‍👩‍👧‍👦", keyword: ["family", "woman", "woman", "girl", "boy"] }
    , { brow: "👩‍👩‍👦‍👦", keyword: ["family", "woman", "woman", "boy", "boy"] }
    , { brow: "👩‍👩‍👧‍👧", keyword: ["family", "woman", "woman", "girl", "girl"] }
    , { brow: "👨‍👦", keyword: ["family", "man", "boy"] }
    , { brow: "👨‍👦‍👦", keyword: ["family", "man", "boy", "boy"] }
    , { brow: "👨‍👧", keyword: ["family", "man", "girl"] }
    , { brow: "👨‍👧‍👦", keyword: ["family", "man", "girl", "boy"] }
    , { brow: "👨‍👧‍👧", keyword: ["family", "man", "girl", "girl"] }
    , { brow: "👩‍👦", keyword: ["family", "woman", "boy"] }
    , { brow: "👩‍👦‍👦", keyword: ["family", "woman", "boy", "boy"] }
    , { brow: "👩‍👧", keyword: ["family", "woman", "girl"] }
    , { brow: "👩‍👧‍👦", keyword: ["family", "woman", "girl", "boy"] }
    , { brow: "👩‍👧‍👧", keyword: ["family", "woman", "girl", "girl"] }
    , { brow: "🤳", keyword: ["selfie"] }
    , { brow: "🤳🏻", keyword: ["selfie", "light", "skin", "tone"] }
    , { brow: "🤳🏼", keyword: ["selfie", "medium-light", "skin", "tone"] }
    , { brow: "🤳🏽", keyword: ["selfie", "medium", "skin", "tone"] }
    , { brow: "🤳🏾", keyword: ["selfie", "medium-dark", "skin", "tone"] }
    , { brow: "🤳🏿", keyword: ["selfie", "dark", "skin", "tone"] }
    , { brow: "💪", keyword: ["flexed", "biceps"] }
    , { brow: "💪🏻", keyword: ["flexed", "biceps", "light", "skin", "tone"] }
    , { brow: "💪🏼", keyword: ["flexed", "biceps", "medium-light", "skin", "tone"] }
    , { brow: "💪🏽", keyword: ["flexed", "biceps", "medium", "skin", "tone"] }
    , { brow: "💪🏾", keyword: ["flexed", "biceps", "medium-dark", "skin", "tone"] }
    , { brow: "💪🏿", keyword: ["flexed", "biceps", "dark", "skin", "tone"] }
    , { brow: "👈", keyword: ["backhand", "index", "pointing", "left"] }
    , { brow: "👈🏻", keyword: ["backhand", "index", "pointing", "left", "light", "skin", "tone"] }
    , { brow: "👈🏼", keyword: ["backhand", "index", "pointing", "left", "medium-light", "skin", "tone"] }
    , { brow: "👈🏽", keyword: ["backhand", "index", "pointing", "left", "medium", "skin", "tone"] }
    , { brow: "👈🏾", keyword: ["backhand", "index", "pointing", "left", "medium-dark", "skin", "tone"] }
    , { brow: "👈🏿", keyword: ["backhand", "index", "pointing", "left", "dark", "skin", "tone"] }
    , { brow: "👉", keyword: ["backhand", "index", "pointing", "right"] }
    , { brow: "👉🏻", keyword: ["backhand", "index", "pointing", "right", "light", "skin", "tone"] }
    , { brow: "👉🏼", keyword: ["backhand", "index", "pointing", "right", "medium-light", "skin", "tone"] }
    , { brow: "👉🏽", keyword: ["backhand", "index", "pointing", "right", "medium", "skin", "tone"] }
    , { brow: "👉🏾", keyword: ["backhand", "index", "pointing", "right", "medium-dark", "skin", "tone"] }
    , { brow: "👉🏿", keyword: ["backhand", "index", "pointing", "right", "dark", "skin", "tone"] }
    , { brow: "☝", keyword: ["index", "pointing", "up"] }
    , { brow: "☝🏻", keyword: ["index", "pointing", "up", "light", "skin", "tone"] }
    , { brow: "☝🏼", keyword: ["index", "pointing", "up", "medium-light", "skin", "tone"] }
    , { brow: "☝🏽", keyword: ["index", "pointing", "up", "medium", "skin", "tone"] }
    , { brow: "☝🏾", keyword: ["index", "pointing", "up", "medium-dark", "skin", "tone"] }
    , { brow: "☝🏿", keyword: ["index", "pointing", "up", "dark", "skin", "tone"] }
    , { brow: "👆", keyword: ["backhand", "index", "pointing", "up"] }
    , { brow: "👆🏻", keyword: ["backhand", "index", "pointing", "up", "light", "skin", "tone"] }
    , { brow: "👆🏼", keyword: ["backhand", "index", "pointing", "up", "medium-light", "skin", "tone"] }
    , { brow: "👆🏽", keyword: ["backhand", "index", "pointing", "up", "medium", "skin", "tone"] }
    , { brow: "👆🏾", keyword: ["backhand", "index", "pointing", "up", "medium-dark", "skin", "tone"] }
    , { brow: "👆🏿", keyword: ["backhand", "index", "pointing", "up", "dark", "skin", "tone"] }
    , { brow: "🖕", keyword: ["middle", "finger"] }
    , { brow: "🖕🏻", keyword: ["middle", "finger", "light", "skin", "tone"] }
    , { brow: "🖕🏼", keyword: ["middle", "finger", "medium-light", "skin", "tone"] }
    , { brow: "🖕🏽", keyword: ["middle", "finger", "medium", "skin", "tone"] }
    , { brow: "🖕🏾", keyword: ["middle", "finger", "medium-dark", "skin", "tone"] }
    , { brow: "🖕🏿", keyword: ["middle", "finger", "dark", "skin", "tone"] }
    , { brow: "👇", keyword: ["backhand", "index", "pointing", "down"] }
    , { brow: "👇🏻", keyword: ["backhand", "index", "pointing", "down", "light", "skin", "tone"] }
    , { brow: "👇🏼", keyword: ["backhand", "index", "pointing", "down", "medium-light", "skin", "tone"] }
    , { brow: "👇🏽", keyword: ["backhand", "index", "pointing", "down", "medium", "skin", "tone"] }
    , { brow: "👇🏾", keyword: ["backhand", "index", "pointing", "down", "medium-dark", "skin", "tone"] }
    , { brow: "👇🏿", keyword: ["backhand", "index", "pointing", "down", "dark", "skin", "tone"] }
    , { brow: "✌", keyword: ["victory", "hand"] }
    , { brow: "✌🏻", keyword: ["victory", "hand", "light", "skin", "tone"] }
    , { brow: "✌🏼", keyword: ["victory", "hand", "medium-light", "skin", "tone"] }
    , { brow: "✌🏽", keyword: ["victory", "hand", "medium", "skin", "tone"] }
    , { brow: "✌🏾", keyword: ["victory", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "✌🏿", keyword: ["victory", "hand", "dark", "skin", "tone"] }
    , { brow: "🤞", keyword: ["crossed", "fingers"] }
    , { brow: "🤞🏻", keyword: ["crossed", "fingers", "light", "skin", "tone"] }
    , { brow: "🤞🏼", keyword: ["crossed", "fingers", "medium-light", "skin", "tone"] }
    , { brow: "🤞🏽", keyword: ["crossed", "fingers", "medium", "skin", "tone"] }
    , { brow: "🤞🏾", keyword: ["crossed", "fingers", "medium-dark", "skin", "tone"] }
    , { brow: "🤞🏿", keyword: ["crossed", "fingers", "dark", "skin", "tone"] }
    , { brow: "🖖", keyword: ["vulcan", "salute"] }
    , { brow: "🖖🏻", keyword: ["vulcan", "salute", "light", "skin", "tone"] }
    , { brow: "🖖🏼", keyword: ["vulcan", "salute", "medium-light", "skin", "tone"] }
    , { brow: "🖖🏽", keyword: ["vulcan", "salute", "medium", "skin", "tone"] }
    , { brow: "🖖🏾", keyword: ["vulcan", "salute", "medium-dark", "skin", "tone"] }
    , { brow: "🖖🏿", keyword: ["vulcan", "salute", "dark", "skin", "tone"] }
    , { brow: "🤘", keyword: ["sign", "of", "the", "horns"] }
    , { brow: "🤘🏻", keyword: ["sign", "of", "the", "horns", "light", "skin", "tone"] }
    , { brow: "🤘🏼", keyword: ["sign", "of", "the", "horns", "medium-light", "skin", "tone"] }
    , { brow: "🤘🏽", keyword: ["sign", "of", "the", "horns", "medium", "skin", "tone"] }
    , { brow: "🤘🏾", keyword: ["sign", "of", "the", "horns", "medium-dark", "skin", "tone"] }
    , { brow: "🤘🏿", keyword: ["sign", "of", "the", "horns", "dark", "skin", "tone"] }
    , { brow: "🤙", keyword: ["call", "me", "hand"] }
    , { brow: "🤙🏻", keyword: ["call", "me", "hand", "light", "skin", "tone"] }
    , { brow: "🤙🏼", keyword: ["call", "me", "hand", "medium-light", "skin", "tone"] }
    , { brow: "🤙🏽", keyword: ["call", "me", "hand", "medium", "skin", "tone"] }
    , { brow: "🤙🏾", keyword: ["call", "me", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "🤙🏿", keyword: ["call", "me", "hand", "dark", "skin", "tone"] }
    , { brow: "🖐", keyword: ["raised", "hand", "with", "fingers", "splayed"] }
    , { brow: "🖐🏻", keyword: ["raised", "hand", "with", "fingers", "splayed", "light", "skin", "tone"] }
    , { brow: "🖐🏼", keyword: ["raised", "hand", "with", "fingers", "splayed", "medium-light", "skin", "tone"] }
    , { brow: "🖐🏽", keyword: ["raised", "hand", "with", "fingers", "splayed", "medium", "skin", "tone"] }
    , { brow: "🖐🏾", keyword: ["raised", "hand", "with", "fingers", "splayed", "medium-dark", "skin", "tone"] }
    , { brow: "🖐🏿", keyword: ["raised", "hand", "with", "fingers", "splayed", "dark", "skin", "tone"] }
    , { brow: "✋", keyword: ["raised", "hand"] }
    , { brow: "✋🏻", keyword: ["raised", "hand", "light", "skin", "tone"] }
    , { brow: "✋🏼", keyword: ["raised", "hand", "medium-light", "skin", "tone"] }
    , { brow: "✋🏽", keyword: ["raised", "hand", "medium", "skin", "tone"] }
    , { brow: "✋🏾", keyword: ["raised", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "✋🏿", keyword: ["raised", "hand", "dark", "skin", "tone"] }
    , { brow: "👌", keyword: ["ok", "hand"] }
    , { brow: "👌🏻", keyword: ["ok", "hand", "light", "skin", "tone"] }
    , { brow: "👌🏼", keyword: ["ok", "hand", "medium-light", "skin", "tone"] }
    , { brow: "👌🏽", keyword: ["ok", "hand", "medium", "skin", "tone"] }
    , { brow: "👌🏾", keyword: ["ok", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "👌🏿", keyword: ["ok", "hand", "dark", "skin", "tone"] }
    , { brow: "👍", keyword: ["thumbs", "up"] }
    , { brow: "👍🏻", keyword: ["thumbs", "up", "light", "skin", "tone"] }
    , { brow: "👍🏼", keyword: ["thumbs", "up", "medium-light", "skin", "tone"] }
    , { brow: "👍🏽", keyword: ["thumbs", "up", "medium", "skin", "tone"] }
    , { brow: "👍🏾", keyword: ["thumbs", "up", "medium-dark", "skin", "tone"] }
    , { brow: "👍🏿", keyword: ["thumbs", "up", "dark", "skin", "tone"] }
    , { brow: "👎", keyword: ["thumbs", "down"] }
    , { brow: "👎🏻", keyword: ["thumbs", "down", "light", "skin", "tone"] }
    , { brow: "👎🏼", keyword: ["thumbs", "down", "medium-light", "skin", "tone"] }
    , { brow: "👎🏽", keyword: ["thumbs", "down", "medium", "skin", "tone"] }
    , { brow: "👎🏾", keyword: ["thumbs", "down", "medium-dark", "skin", "tone"] }
    , { brow: "👎🏿", keyword: ["thumbs", "down", "dark", "skin", "tone"] }
    , { brow: "✊", keyword: ["raised", "fist"] }
    , { brow: "✊🏻", keyword: ["raised", "fist", "light", "skin", "tone"] }
    , { brow: "✊🏼", keyword: ["raised", "fist", "medium-light", "skin", "tone"] }
    , { brow: "✊🏽", keyword: ["raised", "fist", "medium", "skin", "tone"] }
    , { brow: "✊🏾", keyword: ["raised", "fist", "medium-dark", "skin", "tone"] }
    , { brow: "✊🏿", keyword: ["raised", "fist", "dark", "skin", "tone"] }
    , { brow: "👊", keyword: ["oncoming", "fist"] }
    , { brow: "👊🏻", keyword: ["oncoming", "fist", "light", "skin", "tone"] }
    , { brow: "👊🏼", keyword: ["oncoming", "fist", "medium-light", "skin", "tone"] }
    , { brow: "👊🏽", keyword: ["oncoming", "fist", "medium", "skin", "tone"] }
    , { brow: "👊🏾", keyword: ["oncoming", "fist", "medium-dark", "skin", "tone"] }
    , { brow: "👊🏿", keyword: ["oncoming", "fist", "dark", "skin", "tone"] }
    , { brow: "🤛", keyword: ["left-facing", "fist"] }
    , { brow: "🤛🏻", keyword: ["left-facing", "fist", "light", "skin", "tone"] }
    , { brow: "🤛🏼", keyword: ["left-facing", "fist", "medium-light", "skin", "tone"] }
    , { brow: "🤛🏽", keyword: ["left-facing", "fist", "medium", "skin", "tone"] }
    , { brow: "🤛🏾", keyword: ["left-facing", "fist", "medium-dark", "skin", "tone"] }
    , { brow: "🤛🏿", keyword: ["left-facing", "fist", "dark", "skin", "tone"] }
    , { brow: "🤜", keyword: ["right-facing", "fist"] }
    , { brow: "🤜🏻", keyword: ["right-facing", "fist", "light", "skin", "tone"] }
    , { brow: "🤜🏼", keyword: ["right-facing", "fist", "medium-light", "skin", "tone"] }
    , { brow: "🤜🏽", keyword: ["right-facing", "fist", "medium", "skin", "tone"] }
    , { brow: "🤜🏾", keyword: ["right-facing", "fist", "medium-dark", "skin", "tone"] }
    , { brow: "🤜🏿", keyword: ["right-facing", "fist", "dark", "skin", "tone"] }
    , { brow: "🤚", keyword: ["raised", "back", "of", "hand"] }
    , { brow: "🤚🏻", keyword: ["raised", "back", "of", "hand", "light", "skin", "tone"] }
    , { brow: "🤚🏼", keyword: ["raised", "back", "of", "hand", "medium-light", "skin", "tone"] }
    , { brow: "🤚🏽", keyword: ["raised", "back", "of", "hand", "medium", "skin", "tone"] }
    , { brow: "🤚🏾", keyword: ["raised", "back", "of", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "🤚🏿", keyword: ["raised", "back", "of", "hand", "dark", "skin", "tone"] }
    , { brow: "👋", keyword: ["waving", "hand"] }
    , { brow: "👋🏻", keyword: ["waving", "hand", "light", "skin", "tone"] }
    , { brow: "👋🏼", keyword: ["waving", "hand", "medium-light", "skin", "tone"] }
    , { brow: "👋🏽", keyword: ["waving", "hand", "medium", "skin", "tone"] }
    , { brow: "👋🏾", keyword: ["waving", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "👋🏿", keyword: ["waving", "hand", "dark", "skin", "tone"] }
    , { brow: "🤟", keyword: ["love-you", "gesture"] }
    , { brow: "🤟🏻", keyword: ["love-you", "gesture", "light", "skin", "tone"] }
    , { brow: "🤟🏼", keyword: ["love-you", "gesture", "medium-light", "skin", "tone"] }
    , { brow: "🤟🏽", keyword: ["love-you", "gesture", "medium", "skin", "tone"] }
    , { brow: "🤟🏾", keyword: ["love-you", "gesture", "medium-dark", "skin", "tone"] }
    , { brow: "🤟🏿", keyword: ["love-you", "gesture", "dark", "skin", "tone"] }
    , { brow: "✍", keyword: ["writing", "hand"] }
    , { brow: "✍🏻", keyword: ["writing", "hand", "light", "skin", "tone"] }
    , { brow: "✍🏼", keyword: ["writing", "hand", "medium-light", "skin", "tone"] }
    , { brow: "✍🏽", keyword: ["writing", "hand", "medium", "skin", "tone"] }
    , { brow: "✍🏾", keyword: ["writing", "hand", "medium-dark", "skin", "tone"] }
    , { brow: "✍🏿", keyword: ["writing", "hand", "dark", "skin", "tone"] }
    , { brow: "👏", keyword: ["clapping", "hands"] }
    , { brow: "👏🏻", keyword: ["clapping", "hands", "light", "skin", "tone"] }
    , { brow: "👏🏼", keyword: ["clapping", "hands", "medium-light", "skin", "tone"] }
    , { brow: "👏🏽", keyword: ["clapping", "hands", "medium", "skin", "tone"] }
    , { brow: "👏🏾", keyword: ["clapping", "hands", "medium-dark", "skin", "tone"] }
    , { brow: "👏🏿", keyword: ["clapping", "hands", "dark", "skin", "tone"] }
    , { brow: "👐", keyword: ["open", "hands"] }
    , { brow: "👐🏻", keyword: ["open", "hands", "light", "skin", "tone"] }
    , { brow: "👐🏼", keyword: ["open", "hands", "medium-light", "skin", "tone"] }
    , { brow: "👐🏽", keyword: ["open", "hands", "medium", "skin", "tone"] }
    , { brow: "👐🏾", keyword: ["open", "hands", "medium-dark", "skin", "tone"] }
    , { brow: "👐🏿", keyword: ["open", "hands", "dark", "skin", "tone"] }
    , { brow: "🙌", keyword: ["raising", "hands"] }
    , { brow: "🙌🏻", keyword: ["raising", "hands", "light", "skin", "tone"] }
    , { brow: "🙌🏼", keyword: ["raising", "hands", "medium-light", "skin", "tone"] }
    , { brow: "🙌🏽", keyword: ["raising", "hands", "medium", "skin", "tone"] }
    , { brow: "🙌🏾", keyword: ["raising", "hands", "medium-dark", "skin", "tone"] }
    , { brow: "🙌🏿", keyword: ["raising", "hands", "dark", "skin", "tone"] }
    , { brow: "🤲", keyword: ["palms", "up", "together"] }
    , { brow: "🤲🏻", keyword: ["palms", "up", "together", "light", "skin", "tone"] }
    , { brow: "🤲🏼", keyword: ["palms", "up", "together", "medium-light", "skin", "tone"] }
    , { brow: "🤲🏽", keyword: ["palms", "up", "together", "medium", "skin", "tone"] }
    , { brow: "🤲🏾", keyword: ["palms", "up", "together", "medium-dark", "skin", "tone"] }
    , { brow: "🤲🏿", keyword: ["palms", "up", "together", "dark", "skin", "tone"] }
    , { brow: "🙏", keyword: ["folded", "hands"] }
    , { brow: "🙏🏻", keyword: ["folded", "hands", "light", "skin", "tone"] }
    , { brow: "🙏🏼", keyword: ["folded", "hands", "medium-light", "skin", "tone"] }
    , { brow: "🙏🏽", keyword: ["folded", "hands", "medium", "skin", "tone"] }
    , { brow: "🙏🏾", keyword: ["folded", "hands", "medium-dark", "skin", "tone"] }
    , { brow: "🙏🏿", keyword: ["folded", "hands", "dark", "skin", "tone"] }
    , { brow: "🤝", keyword: ["handshake"] }
    , { brow: "💅", keyword: ["nail", "polish"] }
    , { brow: "💅🏻", keyword: ["nail", "polish", "light", "skin", "tone"] }
    , { brow: "💅🏼", keyword: ["nail", "polish", "medium-light", "skin", "tone"] }
    , { brow: "💅🏽", keyword: ["nail", "polish", "medium", "skin", "tone"] }
    , { brow: "💅🏾", keyword: ["nail", "polish", "medium-dark", "skin", "tone"] }
    , { brow: "💅🏿", keyword: ["nail", "polish", "dark", "skin", "tone"] }
    , { brow: "👂", keyword: ["ear"] }
    , { brow: "👂🏻", keyword: ["ear", "light", "skin", "tone"] }
    , { brow: "👂🏼", keyword: ["ear", "medium-light", "skin", "tone"] }
    , { brow: "👂🏽", keyword: ["ear", "medium", "skin", "tone"] }
    , { brow: "👂🏾", keyword: ["ear", "medium-dark", "skin", "tone"] }
    , { brow: "👂🏿", keyword: ["ear", "dark", "skin", "tone"] }
    , { brow: "👃", keyword: ["nose"] }
    , { brow: "👃🏻", keyword: ["nose", "light", "skin", "tone"] }
    , { brow: "👃🏼", keyword: ["nose", "medium-light", "skin", "tone"] }
    , { brow: "👃🏽", keyword: ["nose", "medium", "skin", "tone"] }
    , { brow: "👃🏾", keyword: ["nose", "medium-dark", "skin", "tone"] }
    , { brow: "👃🏿", keyword: ["nose", "dark", "skin", "tone"] }
    , { brow: "👣", keyword: ["footprints"] }
    , { brow: "👀", keyword: ["eyes"] }
    , { brow: "👁", keyword: ["eye"] }
    , { brow: "👁️‍🗨️", keyword: ["eye", "in", "speech", "bubble"] }
    , { brow: "🧠", keyword: ["brain"] }
    , { brow: "👅", keyword: ["tongue"] }
    , { brow: "👄", keyword: ["mouth"] }
    , { brow: "💋", keyword: ["kiss", "mark"] }
    , { brow: "💘", keyword: ["heart", "with", "arrow"] }
    , { brow: "❤", keyword: ["red", "heart"] }
    , { brow: "💓", keyword: ["beating", "heart"] }
    , { brow: "💔", keyword: ["broken", "heart"] }
    , { brow: "💕", keyword: ["two", "hearts"] }
    , { brow: "💖", keyword: ["sparkling", "heart"] }
    , { brow: "💗", keyword: ["growing", "heart"] }
    , { brow: "💙", keyword: ["blue", "heart"] }
    , { brow: "💚", keyword: ["green", "heart"] }
    , { brow: "💛", keyword: ["yellow", "heart"] }
    , { brow: "🧡", keyword: ["orange", "heart"] }
    , { brow: "💜", keyword: ["purple", "heart"] }
    , { brow: "🖤", keyword: ["black", "heart"] }
    , { brow: "💝", keyword: ["heart", "with", "ribbon"] }
    , { brow: "💞", keyword: ["revolving", "hearts"] }
    , { brow: "💟", keyword: ["heart", "decoration"] }
    , { brow: "❣", keyword: ["heavy", "heart", "exclamation"] }
    , { brow: "💌", keyword: ["love", "letter"] }
    , { brow: "💤", keyword: ["zzz"] }
    , { brow: "💢", keyword: ["anger", "symbol"] }
    , { brow: "💣", keyword: ["bomb"] }
    , { brow: "💥", keyword: ["collision"] }
    , { brow: "💦", keyword: ["sweat", "droplets"] }
    , { brow: "💨", keyword: ["dashing", "away"] }
    , { brow: "💫", keyword: ["dizzy"] }
    , { brow: "💬", keyword: ["speech", "balloon"] }
    , { brow: "🗨", keyword: ["left", "speech", "bubble"] }
    , { brow: "🗯", keyword: ["right", "anger", "bubble"] }
    , { brow: "💭", keyword: ["thought", "balloon"] }
    , { brow: "🕳", keyword: ["hole"] }
    , { brow: "👓", keyword: ["glasses"] }
    , { brow: "🕶", keyword: ["sunglasses"] }
    , { brow: "👔", keyword: ["necktie"] }
    , { brow: "👕", keyword: ["t-shirt"] }
    , { brow: "👖", keyword: ["jeans"] }
    , { brow: "🧣", keyword: ["scarf"] }
    , { brow: "🧤", keyword: ["gloves"] }
    , { brow: "🧥", keyword: ["coat"] }
    , { brow: "🧦", keyword: ["socks"] }
    , { brow: "👗", keyword: ["dress"] }
    , { brow: "👘", keyword: ["kimono"] }
    , { brow: "👙", keyword: ["bikini"] }
    , { brow: "👚", keyword: ["woman’s", "clothes"] }
    , { brow: "👛", keyword: ["purse"] }
    , { brow: "👜", keyword: ["handbag"] }
    , { brow: "👝", keyword: ["clutch", "bag"] }
    , { brow: "🛍", keyword: ["shopping", "bags"] }
    , { brow: "🎒", keyword: ["school", "backpack"] }
    , { brow: "👞", keyword: ["man’s", "shoe"] }
    , { brow: "👟", keyword: ["running", "shoe"] }
    , { brow: "👠", keyword: ["high-heeled", "shoe"] }
    , { brow: "👡", keyword: ["woman’s", "sandal"] }
    , { brow: "👢", keyword: ["woman’s", "boot"] }
    , { brow: "👑", keyword: ["crown"] }
    , { brow: "👒", keyword: ["woman’s", "hat"] }
    , { brow: "🎩", keyword: ["top", "hat"] }
    , { brow: "🎓", keyword: ["graduation", "cap"] }
    , { brow: "🧢", keyword: ["billed", "cap"] }
    , { brow: "⛑", keyword: ["rescue", "worker’s", "helmet"] }
    , { brow: "📿", keyword: ["prayer", "beads"] }
    , { brow: "💄", keyword: ["lipstick"] }
    , { brow: "💍", keyword: ["ring"] }
    , { brow: "💎", keyword: ["gem", "stone"] }
    , { brow: "🐵", keyword: ["monkey", "face"] }
    , { brow: "🐒", keyword: ["monkey"] }
    , { brow: "🦍", keyword: ["gorilla"] }
    , { brow: "🐶", keyword: ["dog", "face"] }
    , { brow: "🐕", keyword: ["dog"] }
    , { brow: "🐩", keyword: ["poodle"] }
    , { brow: "🐺", keyword: ["wolf", "face"] }
    , { brow: "🦊", keyword: ["fox", "face"] }
    , { brow: "🐱", keyword: ["cat", "face"] }
    , { brow: "🐈", keyword: ["cat"] }
    , { brow: "🦁", keyword: ["lion", "face"] }
    , { brow: "🐯", keyword: ["tiger", "face"] }
    , { brow: "🐅", keyword: ["tiger"] }
    , { brow: "🐆", keyword: ["leopard"] }
    , { brow: "🐴", keyword: ["horse", "face"] }
    , { brow: "🐎", keyword: ["horse"] }
    , { brow: "🦄", keyword: ["unicorn", "face"] }
    , { brow: "🦓", keyword: ["zebra"] }
    , { brow: "🦌", keyword: ["deer"] }
    , { brow: "🐮", keyword: ["cow", "face"] }
    , { brow: "🐂", keyword: ["ox"] }
    , { brow: "🐃", keyword: ["water", "buffalo"] }
    , { brow: "🐄", keyword: ["cow"] }
    , { brow: "🐷", keyword: ["pig", "face"] }
    , { brow: "🐖", keyword: ["pig"] }
    , { brow: "🐗", keyword: ["boar"] }
    , { brow: "🐽", keyword: ["pig", "nose"] }
    , { brow: "🐏", keyword: ["ram"] }
    , { brow: "🐑", keyword: ["ewe"] }
    , { brow: "🐐", keyword: ["goat"] }
    , { brow: "🐪", keyword: ["camel"] }
    , { brow: "🐫", keyword: ["two-hump", "camel"] }
    , { brow: "🦒", keyword: ["giraffe"] }
    , { brow: "🐘", keyword: ["elephant"] }
    , { brow: "🦏", keyword: ["rhinoceros"] }
    , { brow: "🐭", keyword: ["mouse", "face"] }
    , { brow: "🐁", keyword: ["mouse"] }
    , { brow: "🐀", keyword: ["rat"] }
    , { brow: "🐹", keyword: ["hamster", "face"] }
    , { brow: "🐰", keyword: ["rabbit", "face"] }
    , { brow: "🐇", keyword: ["rabbit"] }
    , { brow: "🐿", keyword: ["chipmunk"] }
    , { brow: "🦔", keyword: ["hedgehog"] }
    , { brow: "🦇", keyword: ["bat"] }
    , { brow: "🐻", keyword: ["bear", "face"] }
    , { brow: "🐨", keyword: ["koala"] }
    , { brow: "🐼", keyword: ["panda", "face"] }
    , { brow: "🐾", keyword: ["paw", "prints"] }
    , { brow: "🦃", keyword: ["turkey"] }
    , { brow: "🐔", keyword: ["chicken"] }
    , { brow: "🐓", keyword: ["rooster"] }
    , { brow: "🐣", keyword: ["hatching", "chick"] }
    , { brow: "🐤", keyword: ["baby", "chick"] }
    , { brow: "🐥", keyword: ["front-facing", "baby", "chick"] }
    , { brow: "🐦", keyword: ["bird"] }
    , { brow: "🐧", keyword: ["penguin"] }
    , { brow: "🕊", keyword: ["dove"] }
    , { brow: "🦅", keyword: ["eagle"] }
    , { brow: "🦆", keyword: ["duck"] }
    , { brow: "🦉", keyword: ["owl"] }
    , { brow: "🐸", keyword: ["frog", "face"] }
    , { brow: "🐊", keyword: ["crocodile"] }
    , { brow: "🐢", keyword: ["turtle"] }
    , { brow: "🦎", keyword: ["lizard"] }
    , { brow: "🐍", keyword: ["snake"] }
    , { brow: "🐲", keyword: ["dragon", "face"] }
    , { brow: "🐉", keyword: ["dragon"] }
    , { brow: "🦕", keyword: ["sauropod"] }
    , { brow: "🦖", keyword: ["t-rex"] }
    , { brow: "🐳", keyword: ["spouting", "whale"] }
    , { brow: "🐋", keyword: ["whale"] }
    , { brow: "🐬", keyword: ["dolphin"] }
    , { brow: "🐟", keyword: ["fish"] }
    , { brow: "🐠", keyword: ["tropical", "fish"] }
    , { brow: "🐡", keyword: ["blowfish"] }
    , { brow: "🦈", keyword: ["shark"] }
    , { brow: "🐙", keyword: ["octopus"] }
    , { brow: "🐚", keyword: ["spiral", "shell"] }
    , { brow: "🦀", keyword: ["crab"] }
    , { brow: "🦐", keyword: ["shrimp"] }
    , { brow: "🦑", keyword: ["squid"] }
    , { brow: "🐌", keyword: ["snail"] }
    , { brow: "🦋", keyword: ["butterfly"] }
    , { brow: "🐛", keyword: ["bug"] }
    , { brow: "🐜", keyword: ["ant"] }
    , { brow: "🐝", keyword: ["honeybee"] }
    , { brow: "🐞", keyword: ["lady", "beetle"] }
    , { brow: "🦗", keyword: ["cricket"] }
    , { brow: "🕷", keyword: ["spider"] }
    , { brow: "🕸", keyword: ["spider", "web"] }
    , { brow: "🦂", keyword: ["scorpion"] }
    , { brow: "💐", keyword: ["bouquet"] }
    , { brow: "🌸", keyword: ["cherry", "blossom"] }
    , { brow: "💮", keyword: ["white", "flower"] }
    , { brow: "🏵", keyword: ["rosette"] }
    , { brow: "🌹", keyword: ["rose"] }
    , { brow: "🥀", keyword: ["wilted", "flower"] }
    , { brow: "🌺", keyword: ["hibiscus"] }
    , { brow: "🌻", keyword: ["sunflower"] }
    , { brow: "🌼", keyword: ["blossom"] }
    , { brow: "🌷", keyword: ["tulip"] }
    , { brow: "🌱", keyword: ["seedling"] }
    , { brow: "🌲", keyword: ["evergreen", "tree"] }
    , { brow: "🌳", keyword: ["deciduous", "tree"] }
    , { brow: "🌴", keyword: ["palm", "tree"] }
    , { brow: "🌵", keyword: ["cactus"] }
    , { brow: "🌾", keyword: ["sheaf", "of", "rice"] }
    , { brow: "🌿", keyword: ["herb"] }
    , { brow: "☘", keyword: ["shamrock"] }
    , { brow: "🍀", keyword: ["four", "leaf", "clover"] }
    , { brow: "🍁", keyword: ["maple", "leaf"] }
    , { brow: "🍂", keyword: ["fallen", "leaf"] }
    , { brow: "🍃", keyword: ["leaf", "fluttering", "in", "wind"] }
    , { brow: "🍇", keyword: ["grapes"] }
    , { brow: "🍈", keyword: ["melon"] }
    , { brow: "🍉", keyword: ["watermelon"] }
    , { brow: "🍊", keyword: ["tangerine"] }
    , { brow: "🍋", keyword: ["lemon"] }
    , { brow: "🍌", keyword: ["banana"] }
    , { brow: "🍍", keyword: ["pineapple"] }
    , { brow: "🍎", keyword: ["red", "apple"] }
    , { brow: "🍏", keyword: ["green", "apple"] }
    , { brow: "🍐", keyword: ["pear"] }
    , { brow: "🍑", keyword: ["peach"] }
    , { brow: "🍒", keyword: ["cherries"] }
    , { brow: "🍓", keyword: ["strawberry"] }
    , { brow: "🥝", keyword: ["kiwi", "fruit"] }
    , { brow: "🍅", keyword: ["tomato"] }
    , { brow: "🥥", keyword: ["coconut"] }
    , { brow: "🥑", keyword: ["avocado"] }
    , { brow: "🍆", keyword: ["eggplant"] }
    , { brow: "🥔", keyword: ["potato"] }
    , { brow: "🥕", keyword: ["carrot"] }
    , { brow: "🌽", keyword: ["ear", "of", "corn"] }
    , { brow: "🌶", keyword: ["hot", "pepper"] }
    , { brow: "🥒", keyword: ["cucumber"] }
    , { brow: "🥦", keyword: ["broccoli"] }
    , { brow: "🍄", keyword: ["mushroom"] }
    , { brow: "🥜", keyword: ["peanuts"] }
    , { brow: "🌰", keyword: ["chestnut"] }
    , { brow: "🍞", keyword: ["bread"] }
    , { brow: "🥐", keyword: ["croissant"] }
    , { brow: "🥖", keyword: ["baguette", "bread"] }
    , { brow: "🥨", keyword: ["pretzel"] }
    , { brow: "🥞", keyword: ["pancakes"] }
    , { brow: "🧀", keyword: ["cheese", "wedge"] }
    , { brow: "🍖", keyword: ["meat", "on", "bone"] }
    , { brow: "🍗", keyword: ["poultry", "leg"] }
    , { brow: "🥩", keyword: ["cut", "of", "meat"] }
    , { brow: "🥓", keyword: ["bacon"] }
    , { brow: "🍔", keyword: ["hamburger"] }
    , { brow: "🍟", keyword: ["french", "fries"] }
    , { brow: "🍕", keyword: ["pizza"] }
    , { brow: "🌭", keyword: ["hot", "dog"] }
    , { brow: "🥪", keyword: ["sandwich"] }
    , { brow: "🌮", keyword: ["taco"] }
    , { brow: "🌯", keyword: ["burrito"] }
    , { brow: "🥙", keyword: ["stuffed", "flatbread"] }
    , { brow: "🥚", keyword: ["egg"] }
    , { brow: "🍳", keyword: ["cooking"] }
    , { brow: "🥘", keyword: ["shallow", "pan", "of", "food"] }
    , { brow: "🍲", keyword: ["pot", "of", "food"] }
    , { brow: "🥣", keyword: ["bowl", "with", "spoon"] }
    , { brow: "🥗", keyword: ["green", "salad"] }
    , { brow: "🍿", keyword: ["popcorn"] }
    , { brow: "🥫", keyword: ["canned", "food"] }
    , { brow: "🍱", keyword: ["bento", "box"] }
    , { brow: "🍘", keyword: ["rice", "cracker"] }
    , { brow: "🍙", keyword: ["rice", "ball"] }
    , { brow: "🍚", keyword: ["cooked", "rice"] }
    , { brow: "🍛", keyword: ["curry", "rice"] }
    , { brow: "🍜", keyword: ["steaming", "bowl"] }
    , { brow: "🍝", keyword: ["spaghetti"] }
    , { brow: "🍠", keyword: ["roasted", "sweet", "potato"] }
    , { brow: "🍢", keyword: ["oden"] }
    , { brow: "🍣", keyword: ["sushi"] }
    , { brow: "🍤", keyword: ["fried", "shrimp"] }
    , { brow: "🍥", keyword: ["fish", "cake", "with", "swirl"] }
    , { brow: "🍡", keyword: ["dango"] }
    , { brow: "🥟", keyword: ["dumpling"] }
    , { brow: "🥠", keyword: ["fortune", "cookie"] }
    , { brow: "🥡", keyword: ["takeout", "box"] }
    , { brow: "🍦", keyword: ["soft", "ice", "cream"] }
    , { brow: "🍧", keyword: ["shaved", "ice"] }
    , { brow: "🍨", keyword: ["ice", "cream"] }
    , { brow: "🍩", keyword: ["doughnut"] }
    , { brow: "🍪", keyword: ["cookie"] }
    , { brow: "🎂", keyword: ["birthday", "cake"] }
    , { brow: "🍰", keyword: ["shortcake"] }
    , { brow: "🥧", keyword: ["pie"] }
    , { brow: "🍫", keyword: ["chocolate", "bar"] }
    , { brow: "🍬", keyword: ["candy"] }
    , { brow: "🍭", keyword: ["lollipop"] }
    , { brow: "🍮", keyword: ["custard"] }
    , { brow: "🍯", keyword: ["honey", "pot"] }
    , { brow: "🍼", keyword: ["baby", "bottle"] }
    , { brow: "🥛", keyword: ["glass", "of", "milk"] }
    , { brow: "☕", keyword: ["hot", "beverage"] }
    , { brow: "🍵", keyword: ["teacup", "without", "handle"] }
    , { brow: "🍶", keyword: ["sake"] }
    , { brow: "🍾", keyword: ["bottle", "with", "popping", "cork"] }
    , { brow: "🍷", keyword: ["wine", "glass"] }
    , { brow: "🍸", keyword: ["cocktail", "glass"] }
    , { brow: "🍹", keyword: ["tropical", "drink"] }
    , { brow: "🍺", keyword: ["beer", "mug"] }
    , { brow: "🍻", keyword: ["clinking", "beer", "mugs"] }
    , { brow: "🥂", keyword: ["clinking", "glasses"] }
    , { brow: "🥃", keyword: ["tumbler", "glass"] }
    , { brow: "🥤", keyword: ["cup", "with", "straw"] }
    , { brow: "🥢", keyword: ["chopsticks"] }
    , { brow: "🍽", keyword: ["fork", "and", "knife", "with", "plate"] }
    , { brow: "🍴", keyword: ["fork", "and", "knife"] }
    , { brow: "🥄", keyword: ["spoon"] }
    , { brow: "🔪", keyword: ["kitchen", "knife"] }
    , { brow: "🏺", keyword: ["amphora"] }
    , { brow: "🌍", keyword: ["globe", "showing", "europe-africa"] }
    , { brow: "🌎", keyword: ["globe", "showing", "americas"] }
    , { brow: "🌏", keyword: ["globe", "showing", "asia-australia"] }
    , { brow: "🌐", keyword: ["globe", "with", "meridians"] }
    , { brow: "🗺", keyword: ["world", "map"] }
    , { brow: "🗾", keyword: ["map", "of", "japan"] }
    , { brow: "🏔", keyword: ["snow-capped", "mountain"] }
    , { brow: "⛰", keyword: ["mountain"] }
    , { brow: "🌋", keyword: ["volcano"] }
    , { brow: "🗻", keyword: ["mount", "fuji"] }
    , { brow: "🏕", keyword: ["camping"] }
    , { brow: "🏖", keyword: ["beach", "with", "umbrella"] }
    , { brow: "🏜", keyword: ["desert"] }
    , { brow: "🏝", keyword: ["desert", "island"] }
    , { brow: "🏞", keyword: ["national", "park"] }
    , { brow: "🏟", keyword: ["stadium"] }
    , { brow: "🏛", keyword: ["classical", "building"] }
    , { brow: "🏗", keyword: ["building", "construction"] }
    , { brow: "🏘", keyword: ["houses"] }
    , { brow: "🏙", keyword: ["cityscape"] }
    , { brow: "🏚", keyword: ["derelict", "house"] }
    , { brow: "🏠", keyword: ["house"] }
    , { brow: "🏡", keyword: ["house", "with", "garden"] }
    , { brow: "🏢", keyword: ["office", "building"] }
    , { brow: "🏣", keyword: ["japanese", "post", "office"] }
    , { brow: "🏤", keyword: ["post", "office"] }
    , { brow: "🏥", keyword: ["hospital"] }
    , { brow: "🏦", keyword: ["bank"] }
    , { brow: "🏨", keyword: ["hotel"] }
    , { brow: "🏩", keyword: ["love", "hotel"] }
    , { brow: "🏪", keyword: ["convenience", "store"] }
    , { brow: "🏫", keyword: ["school"] }
    , { brow: "🏬", keyword: ["department", "store"] }
    , { brow: "🏭", keyword: ["factory"] }
    , { brow: "🏯", keyword: ["japanese", "castle"] }
    , { brow: "🏰", keyword: ["castle"] }
    , { brow: "💒", keyword: ["wedding"] }
    , { brow: "🗼", keyword: ["tokyo", "tower"] }
    , { brow: "🗽", keyword: ["statue", "of", "liberty"] }
    , { brow: "⛪", keyword: ["church"] }
    , { brow: "🕌", keyword: ["mosque"] }
    , { brow: "🕍", keyword: ["synagogue"] }
    , { brow: "⛩", keyword: ["shinto", "shrine"] }
    , { brow: "🕋", keyword: ["kaaba"] }
    , { brow: "⛲", keyword: ["fountain"] }
    , { brow: "⛺", keyword: ["tent"] }
    , { brow: "🌁", keyword: ["foggy"] }
    , { brow: "🌃", keyword: ["night", "with", "stars"] }
    , { brow: "🌄", keyword: ["sunrise", "over", "mountains"] }
    , { brow: "🌅", keyword: ["sunrise"] }
    , { brow: "🌆", keyword: ["cityscape", "at", "dusk"] }
    , { brow: "🌇", keyword: ["sunset"] }
    , { brow: "🌉", keyword: ["bridge", "at", "night"] }
    , { brow: "♨", keyword: ["hot", "springs"] }
    , { brow: "🌌", keyword: ["milky", "way"] }
    , { brow: "🎠", keyword: ["carousel", "horse"] }
    , { brow: "🎡", keyword: ["ferris", "wheel"] }
    , { brow: "🎢", keyword: ["roller", "coaster"] }
    , { brow: "💈", keyword: ["barber", "pole"] }
    , { brow: "🎪", keyword: ["circus", "tent"] }
    , { brow: "🎭", keyword: ["performing", "arts"] }
    , { brow: "🖼", keyword: ["framed", "picture"] }
    , { brow: "🎨", keyword: ["artist", "palette"] }
    , { brow: "🎰", keyword: ["slot", "machine"] }
    , { brow: "🚂", keyword: ["locomotive"] }
    , { brow: "🚃", keyword: ["railway", "car"] }
    , { brow: "🚄", keyword: ["high-speed", "train"] }
    , { brow: "🚅", keyword: ["high-speed", "train", "with", "bullet", "nose"] }
    , { brow: "🚆", keyword: ["train"] }
    , { brow: "🚇", keyword: ["metro"] }
    , { brow: "🚈", keyword: ["light", "rail"] }
    , { brow: "🚉", keyword: ["station"] }
    , { brow: "🚊", keyword: ["tram"] }
    , { brow: "🚝", keyword: ["monorail"] }
    , { brow: "🚞", keyword: ["mountain", "railway"] }
    , { brow: "🚋", keyword: ["tram", "car"] }
    , { brow: "🚌", keyword: ["bus"] }
    , { brow: "🚍", keyword: ["oncoming", "bus"] }
    , { brow: "🚎", keyword: ["trolleybus"] }
    , { brow: "🚐", keyword: ["minibus"] }
    , { brow: "🚑", keyword: ["ambulance"] }
    , { brow: "🚒", keyword: ["fire", "engine"] }
    , { brow: "🚓", keyword: ["police", "car"] }
    , { brow: "🚔", keyword: ["oncoming", "police", "car"] }
    , { brow: "🚕", keyword: ["taxi"] }
    , { brow: "🚖", keyword: ["oncoming", "taxi"] }
    , { brow: "🚗", keyword: ["automobile"] }
    , { brow: "🚘", keyword: ["oncoming", "automobile"] }
    , { brow: "🚙", keyword: ["sport", "utility", "vehicle"] }
    , { brow: "🚚", keyword: ["delivery", "truck"] }
    , { brow: "🚛", keyword: ["articulated", "lorry"] }
    , { brow: "🚜", keyword: ["tractor"] }
    , { brow: "🚲", keyword: ["bicycle"] }
    , { brow: "🛴", keyword: ["kick", "scooter"] }
    , { brow: "🛵", keyword: ["motor", "scooter"] }
    , { brow: "🚏", keyword: ["bus", "stop"] }
    , { brow: "🛣", keyword: ["motorway"] }
    , { brow: "🛤", keyword: ["railway", "track"] }
    , { brow: "⛽", keyword: ["fuel", "pump"] }
    , { brow: "🚨", keyword: ["police", "car", "light"] }
    , { brow: "🚥", keyword: ["horizontal", "traffic", "light"] }
    , { brow: "🚦", keyword: ["vertical", "traffic", "light"] }
    , { brow: "🚧", keyword: ["construction"] }
    , { brow: "🛑", keyword: ["stop", "sign"] }
    , { brow: "⚓", keyword: ["anchor"] }
    , { brow: "⛵", keyword: ["sailboat"] }
    , { brow: "🛶", keyword: ["canoe"] }
    , { brow: "🚤", keyword: ["speedboat"] }
    , { brow: "🛳", keyword: ["passenger", "ship"] }
    , { brow: "⛴", keyword: ["ferry"] }
    , { brow: "🛥", keyword: ["motor", "boat"] }
    , { brow: "🚢", keyword: ["ship"] }
    , { brow: "✈", keyword: ["airplane"] }
    , { brow: "🛩", keyword: ["small", "airplane"] }
    , { brow: "🛫", keyword: ["airplane", "departure"] }
    , { brow: "🛬", keyword: ["airplane", "arrival"] }
    , { brow: "💺", keyword: ["seat"] }
    , { brow: "🚁", keyword: ["helicopter"] }
    , { brow: "🚟", keyword: ["suspension", "railway"] }
    , { brow: "🚠", keyword: ["mountain", "cableway"] }
    , { brow: "🚡", keyword: ["aerial", "tramway"] }
    , { brow: "🛰", keyword: ["satellite"] }
    , { brow: "🚀", keyword: ["rocket"] }
    , { brow: "🛸", keyword: ["flying", "saucer"] }
    , { brow: "🛎", keyword: ["bellhop", "bell"] }
    , { brow: "🚪", keyword: ["door"] }
    , { brow: "🛏", keyword: ["bed"] }
    , { brow: "🛋", keyword: ["couch", "and", "lamp"] }
    , { brow: "🚽", keyword: ["toilet"] }
    , { brow: "🚿", keyword: ["shower"] }
    , { brow: "🛁", keyword: ["bathtub"] }
    , { brow: "⌛", keyword: ["hourglass"] }
    , { brow: "⏳", keyword: ["hourglass", "with", "flowing", "sand"] }
    , { brow: "⌚", keyword: ["watch"] }
    , { brow: "⏰", keyword: ["alarm", "clock"] }
    , { brow: "⏱", keyword: ["stopwatch"] }
    , { brow: "⏲", keyword: ["timer", "clock"] }
    , { brow: "🕰", keyword: ["mantelpiece", "clock"] }
    , { brow: "🕛", keyword: ["twelve", "o’clock"] }
    , { brow: "🕧", keyword: ["twelve-thirty"] }
    , { brow: "🕐", keyword: ["one", "o’clock"] }
    , { brow: "🕜", keyword: ["one-thirty"] }
    , { brow: "🕑", keyword: ["two", "o’clock"] }
    , { brow: "🕝", keyword: ["two-thirty"] }
    , { brow: "🕒", keyword: ["three", "o’clock"] }
    , { brow: "🕞", keyword: ["three-thirty"] }
    , { brow: "🕓", keyword: ["four", "o’clock"] }
    , { brow: "🕟", keyword: ["four-thirty"] }
    , { brow: "🕔", keyword: ["five", "o’clock"] }
    , { brow: "🕠", keyword: ["five-thirty"] }
    , { brow: "🕕", keyword: ["six", "o’clock"] }
    , { brow: "🕡", keyword: ["six-thirty"] }
    , { brow: "🕖", keyword: ["seven", "o’clock"] }
    , { brow: "🕢", keyword: ["seven-thirty"] }
    , { brow: "🕗", keyword: ["eight", "o’clock"] }
    , { brow: "🕣", keyword: ["eight-thirty"] }
    , { brow: "🕘", keyword: ["nine", "o’clock"] }
    , { brow: "🕤", keyword: ["nine-thirty"] }
    , { brow: "🕙", keyword: ["ten", "o’clock"] }
    , { brow: "🕥", keyword: ["ten-thirty"] }
    , { brow: "🕚", keyword: ["eleven", "o’clock"] }
    , { brow: "🕦", keyword: ["eleven-thirty"] }
    , { brow: "🌑", keyword: ["new", "moon"] }
    , { brow: "🌒", keyword: ["waxing", "crescent", "moon"] }
    , { brow: "🌓", keyword: ["first", "quarter", "moon"] }
    , { brow: "🌔", keyword: ["waxing", "gibbous", "moon"] }
    , { brow: "🌕", keyword: ["full", "moon"] }
    , { brow: "🌖", keyword: ["waning", "gibbous", "moon"] }
    , { brow: "🌗", keyword: ["last", "quarter", "moon"] }
    , { brow: "🌘", keyword: ["waning", "crescent", "moon"] }
    , { brow: "🌙", keyword: ["crescent", "moon"] }
    , { brow: "🌚", keyword: ["new", "moon", "face"] }
    , { brow: "🌛", keyword: ["first", "quarter", "moon", "with", "face"] }
    , { brow: "🌜", keyword: ["last", "quarter", "moon", "with", "face"] }
    , { brow: "🌡", keyword: ["thermometer"] }
    , { brow: "☀", keyword: ["sun"] }
    , { brow: "🌝", keyword: ["full", "moon", "with", "face"] }
    , { brow: "🌞", keyword: ["sun", "with", "face"] }
    , { brow: "⭐", keyword: ["white", "medium", "star"] }
    , { brow: "🌟", keyword: ["glowing", "star"] }
    , { brow: "🌠", keyword: ["shooting", "star"] }
    , { brow: "☁", keyword: ["cloud"] }
    , { brow: "⛅", keyword: ["sun", "behind", "cloud"] }
    , { brow: "⛈", keyword: ["cloud", "with", "lightning", "and", "rain"] }
    , { brow: "🌤", keyword: ["sun", "behind", "small", "cloud"] }
    , { brow: "🌥", keyword: ["sun", "behind", "large", "cloud"] }
    , { brow: "🌦", keyword: ["sun", "behind", "rain", "cloud"] }
    , { brow: "🌧", keyword: ["cloud", "with", "rain"] }
    , { brow: "🌨", keyword: ["cloud", "with", "snow"] }
    , { brow: "🌩", keyword: ["cloud", "with", "lightning"] }
    , { brow: "🌪", keyword: ["tornado"] }
    , { brow: "🌫", keyword: ["fog"] }
    , { brow: "🌬", keyword: ["wind", "face"] }
    , { brow: "🌀", keyword: ["cyclone"] }
    , { brow: "🌈", keyword: ["rainbow"] }
    , { brow: "🌂", keyword: ["closed", "umbrella"] }
    , { brow: "☂", keyword: ["umbrella"] }
    , { brow: "☔", keyword: ["umbrella", "with", "rain", "drops"] }
    , { brow: "⛱", keyword: ["umbrella", "on", "ground"] }
    , { brow: "⚡", keyword: ["high", "voltage"] }
    , { brow: "❄", keyword: ["snowflake"] }
    , { brow: "☃", keyword: ["snowman"] }
    , { brow: "⛄", keyword: ["snowman", "without", "snow"] }
    , { brow: "☄", keyword: ["comet"] }
    , { brow: "🔥", keyword: ["fire"] }
    , { brow: "💧", keyword: ["droplet"] }
    , { brow: "🌊", keyword: ["water", "wave"] }
    , { brow: "🎃", keyword: ["jack-o-lantern"] }
    , { brow: "🎄", keyword: ["christmas", "tree"] }
    , { brow: "🎆", keyword: ["fireworks"] }
    , { brow: "🎇", keyword: ["sparkler"] }
    , { brow: "✨", keyword: ["sparkles"] }
    , { brow: "🎈", keyword: ["balloon"] }
    , { brow: "🎉", keyword: ["party", "popper"] }
    , { brow: "🎊", keyword: ["confetti", "ball"] }
    , { brow: "🎋", keyword: ["tanabata", "tree"] }
    , { brow: "🎍", keyword: ["pine", "decoration"] }
    , { brow: "🎎", keyword: ["japanese", "dolls"] }
    , { brow: "🎏", keyword: ["carp", "streamer"] }
    , { brow: "🎐", keyword: ["wind", "chime"] }
    , { brow: "🎑", keyword: ["moon", "viewing", "ceremony"] }
    , { brow: "🎀", keyword: ["ribbon"] }
    , { brow: "🎁", keyword: ["wrapped", "gift"] }
    , { brow: "🎗", keyword: ["reminder", "ribbon"] }
    , { brow: "🎟", keyword: ["admission", "tickets"] }
    , { brow: "🎫", keyword: ["ticket"] }
    , { brow: "🎖", keyword: ["military", "medal"] }
    , { brow: "🏆", keyword: ["trophy"] }
    , { brow: "🏅", keyword: ["sports", "medal"] }
    , { brow: "🥇", keyword: ["1st", "place", "medal"] }
    , { brow: "🥈", keyword: ["2nd", "place", "medal"] }
    , { brow: "🥉", keyword: ["3rd", "place", "medal"] }
    , { brow: "⚽", keyword: ["soccer", "ball"] }
    , { brow: "⚾", keyword: ["baseball"] }
    , { brow: "🏀", keyword: ["basketball"] }
    , { brow: "🏐", keyword: ["volleyball"] }
    , { brow: "🏈", keyword: ["american", "football"] }
    , { brow: "🏉", keyword: ["rugby", "football"] }
    , { brow: "🎾", keyword: ["tennis"] }
    , { brow: "🎱", keyword: ["pool", "8", "ball"] }
    , { brow: "🎳", keyword: ["bowling"] }
    , { brow: "🏏", keyword: ["cricket"] }
    , { brow: "🏑", keyword: ["field", "hockey"] }
    , { brow: "🏒", keyword: ["ice", "hockey"] }
    , { brow: "🏓", keyword: ["ping", "pong"] }
    , { brow: "🏸", keyword: ["badminton"] }
    , { brow: "🥊", keyword: ["boxing", "glove"] }
    , { brow: "🥋", keyword: ["martial", "arts", "uniform"] }
    , { brow: "🥅", keyword: ["goal", "net"] }
    , { brow: "🎯", keyword: ["direct", "hit"] }
    , { brow: "⛳", keyword: ["flag", "in", "hole"] }
    , { brow: "⛸", keyword: ["ice", "skate"] }
    , { brow: "🎣", keyword: ["fishing", "pole"] }
    , { brow: "🎽", keyword: ["running", "shirt"] }
    , { brow: "🎿", keyword: ["skis"] }
    , { brow: "🛷", keyword: ["sled"] }
    , { brow: "🥌", keyword: ["curling", "stone"] }
    , { brow: "🎮", keyword: ["video", "game"] }
    , { brow: "🕹", keyword: ["joystick"] }
    , { brow: "🎲", keyword: ["game", "die"] }
    , { brow: "♠", keyword: ["spade", "suit"] }
    , { brow: "♥", keyword: ["heart", "suit"] }
    , { brow: "♦", keyword: ["diamond", "suit"] }
    , { brow: "♣", keyword: ["club", "suit"] }
    , { brow: "🃏", keyword: ["joker"] }
    , { brow: "🀄", keyword: ["mahjong", "red", "dragon"] }
    , { brow: "🎴", keyword: ["flower", "playing", "cards"] }
    , { brow: "🔇", keyword: ["muted", "speaker"] }
    , { brow: "🔈", keyword: ["speaker", "low", "volume"] }
    , { brow: "🔉", keyword: ["speaker", "medium", "volume"] }
    , { brow: "🔊", keyword: ["speaker", "high", "volume"] }
    , { brow: "📢", keyword: ["loudspeaker"] }
    , { brow: "📣", keyword: ["megaphone"] }
    , { brow: "📯", keyword: ["postal", "horn"] }
    , { brow: "🔔", keyword: ["bell"] }
    , { brow: "🔕", keyword: ["bell", "with", "slash"] }
    , { brow: "🎼", keyword: ["musical", "score"] }
    , { brow: "🎵", keyword: ["musical", "note"] }
    , { brow: "🎶", keyword: ["musical", "notes"] }
    , { brow: "🎙", keyword: ["studio", "microphone"] }
    , { brow: "🎚", keyword: ["level", "slider"] }
    , { brow: "🎛", keyword: ["control", "knobs"] }
    , { brow: "🎤", keyword: ["microphone"] }
    , { brow: "🎧", keyword: ["headphone"] }
    , { brow: "📻", keyword: ["radio"] }
    , { brow: "🎷", keyword: ["saxophone"] }
    , { brow: "🎸", keyword: ["guitar"] }
    , { brow: "🎹", keyword: ["musical", "keyboard"] }
    , { brow: "🎺", keyword: ["trumpet"] }
    , { brow: "🎻", keyword: ["violin"] }
    , { brow: "🥁", keyword: ["drum"] }
    , { brow: "📱", keyword: ["mobile", "phone"] }
    , { brow: "📲", keyword: ["mobile", "phone", "with", "arrow"] }
    , { brow: "☎", keyword: ["telephone"] }
    , { brow: "📞", keyword: ["telephone", "receiver"] }
    , { brow: "📟", keyword: ["pager"] }
    , { brow: "📠", keyword: ["fax", "machine"] }
    , { brow: "🔋", keyword: ["battery"] }
    , { brow: "🔌", keyword: ["electric", "plug"] }
    , { brow: "💻", keyword: ["laptop", "computer"] }
    , { brow: "🖥", keyword: ["desktop", "computer"] }
    , { brow: "🖨", keyword: ["printer"] }
    , { brow: "⌨", keyword: ["keyboard"] }
    , { brow: "🖱", keyword: ["computer", "mouse"] }
    , { brow: "🖲", keyword: ["trackball"] }
    , { brow: "💽", keyword: ["computer", "disk"] }
    , { brow: "💾", keyword: ["floppy", "disk"] }
    , { brow: "💿", keyword: ["optical", "disk"] }
    , { brow: "📀", keyword: ["dvd"] }
    , { brow: "🎥", keyword: ["movie", "camera"] }
    , { brow: "🎞", keyword: ["film", "frames"] }
    , { brow: "📽", keyword: ["film", "projector"] }
    , { brow: "🎬", keyword: ["clapper", "board"] }
    , { brow: "📺", keyword: ["television"] }
    , { brow: "📷", keyword: ["camera"] }
    , { brow: "📸", keyword: ["camera", "with", "flash"] }
    , { brow: "📹", keyword: ["video", "camera"] }
    , { brow: "📼", keyword: ["videocassette"] }
    , { brow: "🔍", keyword: ["left-pointing", "magnifying", "glass"] }
    , { brow: "🔎", keyword: ["right-pointing", "magnifying", "glass"] }
    , { brow: "🔬", keyword: ["microscope"] }
    , { brow: "🔭", keyword: ["telescope"] }
    , { brow: "📡", keyword: ["satellite", "antenna"] }
    , { brow: "🕯", keyword: ["candle"] }
    , { brow: "💡", keyword: ["light", "bulb"] }
    , { brow: "🔦", keyword: ["flashlight"] }
    , { brow: "🏮", keyword: ["red", "paper", "lantern"] }
    , { brow: "📔", keyword: ["notebook", "with", "decorative", "cover"] }
    , { brow: "📕", keyword: ["closed", "book"] }
    , { brow: "📖", keyword: ["open", "book"] }
    , { brow: "📗", keyword: ["green", "book"] }
    , { brow: "📘", keyword: ["blue", "book"] }
    , { brow: "📙", keyword: ["orange", "book"] }
    , { brow: "📚", keyword: ["books"] }
    , { brow: "📓", keyword: ["notebook"] }
    , { brow: "📒", keyword: ["ledger"] }
    , { brow: "📃", keyword: ["page", "with", "curl"] }
    , { brow: "📜", keyword: ["scroll"] }
    , { brow: "📄", keyword: ["page", "facing", "up"] }
    , { brow: "📰", keyword: ["newspaper"] }
    , { brow: "🗞", keyword: ["rolled-up", "newspaper"] }
    , { brow: "📑", keyword: ["bookmark", "tabs"] }
    , { brow: "🔖", keyword: ["bookmark"] }
    , { brow: "🏷", keyword: ["label"] }
    , { brow: "💰", keyword: ["money", "bag"] }
    , { brow: "💴", keyword: ["yen", "banknote"] }
    , { brow: "💵", keyword: ["dollar", "banknote"] }
    , { brow: "💶", keyword: ["euro", "banknote"] }
    , { brow: "💷", keyword: ["pound", "banknote"] }
    , { brow: "💸", keyword: ["money", "with", "wings"] }
    , { brow: "💳", keyword: ["credit", "card"] }
    , { brow: "💹", keyword: ["chart", "increasing", "with", "yen"] }
    , { brow: "💱", keyword: ["currency", "exchange"] }
    , { brow: "💲", keyword: ["heavy", "dollar", "sign"] }
    , { brow: "✉", keyword: ["envelope"] }
    , { brow: "📧", keyword: ["e-mail"] }
    , { brow: "📨", keyword: ["incoming", "envelope"] }
    , { brow: "📩", keyword: ["envelope", "with", "arrow"] }
    , { brow: "📤", keyword: ["outbox", "tray"] }
    , { brow: "📥", keyword: ["inbox", "tray"] }
    , { brow: "📦", keyword: ["package"] }
    , { brow: "📫", keyword: ["closed", "mailbox", "with", "raised", "flag"] }
    , { brow: "📪", keyword: ["closed", "mailbox", "with", "lowered", "flag"] }
    , { brow: "📬", keyword: ["open", "mailbox", "with", "raised", "flag"] }
    , { brow: "📭", keyword: ["open", "mailbox", "with", "lowered", "flag"] }
    , { brow: "📮", keyword: ["postbox"] }
    , { brow: "🗳", keyword: ["ballot", "box", "with", "ballot"] }
    , { brow: "✏", keyword: ["pencil"] }
    , { brow: "✒", keyword: ["black", "nib"] }
    , { brow: "🖋", keyword: ["fountain", "pen"] }
    , { brow: "🖊", keyword: ["pen"] }
    , { brow: "🖌", keyword: ["paintbrush"] }
    , { brow: "🖍", keyword: ["crayon"] }
    , { brow: "📝", keyword: ["memo"] }
    , { brow: "💼", keyword: ["briefcase"] }
    , { brow: "📁", keyword: ["file", "folder"] }
    , { brow: "📂", keyword: ["open", "file", "folder"] }
    , { brow: "🗂", keyword: ["card", "index", "dividers"] }
    , { brow: "📅", keyword: ["calendar"] }
    , { brow: "📆", keyword: ["tear-off", "calendar"] }
    , { brow: "🗒", keyword: ["spiral", "notepad"] }
    , { brow: "🗓", keyword: ["spiral", "calendar"] }
    , { brow: "📇", keyword: ["card", "index"] }
    , { brow: "📈", keyword: ["chart", "increasing"] }
    , { brow: "📉", keyword: ["chart", "decreasing"] }
    , { brow: "📊", keyword: ["bar", "chart"] }
    , { brow: "📋", keyword: ["clipboard"] }
    , { brow: "📌", keyword: ["pushpin"] }
    , { brow: "📍", keyword: ["round", "pushpin"] }
    , { brow: "📎", keyword: ["paperclip"] }
    , { brow: "🖇", keyword: ["linked", "paperclips"] }
    , { brow: "📏", keyword: ["straight", "ruler"] }
    , { brow: "📐", keyword: ["triangular", "ruler"] }
    , { brow: "✂", keyword: ["scissors"] }
    , { brow: "🗃", keyword: ["card", "file", "box"] }
    , { brow: "🗄", keyword: ["file", "cabinet"] }
    , { brow: "🗑", keyword: ["wastebasket"] }
    , { brow: "🔒", keyword: ["locked"] }
    , { brow: "🔓", keyword: ["unlocked"] }
    , { brow: "🔏", keyword: ["locked", "with", "pen"] }
    , { brow: "🔐", keyword: ["locked", "with", "key"] }
    , { brow: "🔑", keyword: ["key"] }
    , { brow: "🗝", keyword: ["old", "key"] }
    , { brow: "🔨", keyword: ["hammer"] }
    , { brow: "⛏", keyword: ["pick"] }
    , { brow: "⚒", keyword: ["hammer", "and", "pick"] }
    , { brow: "🛠", keyword: ["hammer", "and", "wrench"] }
    , { brow: "🗡", keyword: ["dagger"] }
    , { brow: "⚔", keyword: ["crossed", "swords"] }
    , { brow: "🔫", keyword: ["pistol"] }
    , { brow: "🏹", keyword: ["bow", "and", "arrow"] }
    , { brow: "🛡", keyword: ["shield"] }
    , { brow: "🔧", keyword: ["wrench"] }
    , { brow: "🔩", keyword: ["nut", "and", "bolt"] }
    , { brow: "⚙", keyword: ["gear"] }
    , { brow: "🗜", keyword: ["clamp"] }
    , { brow: "⚗", keyword: ["alembic"] }
    , { brow: "⚖", keyword: ["balance", "scale"] }
    , { brow: "🔗", keyword: ["link"] }
    , { brow: "⛓", keyword: ["chains"] }
    , { brow: "💉", keyword: ["syringe"] }
    , { brow: "💊", keyword: ["pill"] }
    , { brow: "🚬", keyword: ["cigarette"] }
    , { brow: "⚰", keyword: ["coffin"] }
    , { brow: "⚱", keyword: ["funeral", "urn"] }
    , { brow: "🗿", keyword: ["moai"] }
    , { brow: "🛢", keyword: ["oil", "drum"] }
    , { brow: "🔮", keyword: ["crystal", "ball"] }
    , { brow: "🛒", keyword: ["shopping", "cart"] }
    , { brow: "🏧", keyword: ["atm", "sign"] }
    , { brow: "🚮", keyword: ["litter", "in", "bin", "sign"] }
    , { brow: "🚰", keyword: ["potable", "water"] }
    , { brow: "♿", keyword: ["wheelchair", "symbol"] }
    , { brow: "🚹", keyword: ["men’s", "room"] }
    , { brow: "🚺", keyword: ["women’s", "room"] }
    , { brow: "🚻", keyword: ["restroom"] }
    , { brow: "🚼", keyword: ["baby", "symbol"] }
    , { brow: "🚾", keyword: ["water", "closet"] }
    , { brow: "🛂", keyword: ["passport", "control"] }
    , { brow: "🛃", keyword: ["customs"] }
    , { brow: "🛄", keyword: ["baggage", "claim"] }
    , { brow: "🛅", keyword: ["left", "luggage"] }
    , { brow: "⚠", keyword: ["warning"] }
    , { brow: "🚸", keyword: ["children", "crossing"] }
    , { brow: "⛔", keyword: ["no", "entry"] }
    , { brow: "🚫", keyword: ["prohibited"] }
    , { brow: "🚳", keyword: ["no", "bicycles"] }
    , { brow: "🚭", keyword: ["no", "smoking"] }
    , { brow: "🚯", keyword: ["no", "littering"] }
    , { brow: "🚱", keyword: ["non-potable", "water"] }
    , { brow: "🚷", keyword: ["no", "pedestrians"] }
    , { brow: "📵", keyword: ["no", "mobile", "phones"] }
    , { brow: "🔞", keyword: ["no", "one", "under", "eighteen"] }
    , { brow: "☢", keyword: ["radioactive"] }
    , { brow: "☣", keyword: ["biohazard"] }
    , { brow: "⬆", keyword: ["up", "arrow"] }
    , { brow: "↗", keyword: ["up-right", "arrow"] }
    , { brow: "➡", keyword: ["right", "arrow"] }
    , { brow: "↘", keyword: ["down-right", "arrow"] }
    , { brow: "⬇", keyword: ["down", "arrow"] }
    , { brow: "↙", keyword: ["down-left", "arrow"] }
    , { brow: "⬅", keyword: ["left", "arrow"] }
    , { brow: "↖", keyword: ["up-left", "arrow"] }
    , { brow: "↕", keyword: ["up-down", "arrow"] }
    , { brow: "↔", keyword: ["left-right", "arrow"] }
    , { brow: "↩", keyword: ["right", "arrow", "curving", "left"] }
    , { brow: "↪", keyword: ["left", "arrow", "curving", "right"] }
    , { brow: "⤴", keyword: ["right", "arrow", "curving", "up"] }
    , { brow: "⤵", keyword: ["right", "arrow", "curving", "down"] }
    , { brow: "🔃", keyword: ["clockwise", "vertical", "arrows"] }
    , { brow: "🔄", keyword: ["anticlockwise", "arrows", "button"] }
    , { brow: "🔙", keyword: ["back", "arrow"] }
    , { brow: "🔚", keyword: ["end", "arrow"] }
    , { brow: "🔛", keyword: ["on!", "arrow"] }
    , { brow: "🔜", keyword: ["soon", "arrow"] }
    , { brow: "🔝", keyword: ["top", "arrow"] }
    , { brow: "🛐", keyword: ["place", "of", "worship"] }
    , { brow: "⚛", keyword: ["atom", "symbol"] }
    , { brow: "🕉", keyword: ["om"] }
    , { brow: "✡", keyword: ["star", "of", "david"] }
    , { brow: "☸", keyword: ["wheel", "of", "dharma"] }
    , { brow: "☯", keyword: ["yin", "yang"] }
    , { brow: "✝", keyword: ["latin", "cross"] }
    , { brow: "☦", keyword: ["orthodox", "cross"] }
    , { brow: "☪", keyword: ["star", "and", "crescent"] }
    , { brow: "☮", keyword: ["peace", "symbol"] }
    , { brow: "🕎", keyword: ["menorah"] }
    , { brow: "🔯", keyword: ["dotted", "six-pointed", "star"] }
    , { brow: "♈", keyword: ["aries"] }
    , { brow: "♉", keyword: ["taurus"] }
    , { brow: "♊", keyword: ["gemini"] }
    , { brow: "♋", keyword: ["cancer"] }
    , { brow: "♌", keyword: ["leo"] }
    , { brow: "♍", keyword: ["virgo"] }
    , { brow: "♎", keyword: ["libra"] }
    , { brow: "♏", keyword: ["scorpius"] }
    , { brow: "♐", keyword: ["sagittarius"] }
    , { brow: "♑", keyword: ["capricorn"] }
    , { brow: "♒", keyword: ["aquarius"] }
    , { brow: "♓", keyword: ["pisces"] }
    , { brow: "⛎", keyword: ["ophiuchus"] }
    , { brow: "🔀", keyword: ["shuffle", "tracks", "button"] }
    , { brow: "🔁", keyword: ["repeat", "button"] }
    , { brow: "🔂", keyword: ["repeat", "single", "button"] }
    , { brow: "▶", keyword: ["play", "button"] }
    , { brow: "⏩", keyword: ["fast-forward", "button"] }
    , { brow: "⏭", keyword: ["next", "track", "button"] }
    , { brow: "⏯", keyword: ["play", "or", "pause", "button"] }
    , { brow: "◀", keyword: ["reverse", "button"] }
    , { brow: "⏪", keyword: ["fast", "reverse", "button"] }
    , { brow: "⏮", keyword: ["last", "track", "button"] }
    , { brow: "🔼", keyword: ["up", "button"] }
    , { brow: "⏫", keyword: ["fast", "up", "button"] }
    , { brow: "🔽", keyword: ["down", "button"] }
    , { brow: "⏬", keyword: ["fast", "down", "button"] }
    , { brow: "⏸", keyword: ["pause", "button"] }
    , { brow: "⏹", keyword: ["stop", "button"] }
    , { brow: "⏺", keyword: ["record", "button"] }
    , { brow: "⏏", keyword: ["eject", "button"] }
    , { brow: "🎦", keyword: ["cinema"] }
    , { brow: "🔅", keyword: ["dim", "button"] }
    , { brow: "🔆", keyword: ["bright", "button"] }
    , { brow: "📶", keyword: ["antenna", "bars"] }
    , { brow: "📳", keyword: ["vibration", "mode"] }
    , { brow: "📴", keyword: ["mobile", "phone", "off"] }
    , { brow: "♀", keyword: ["female", "sign"] }
    , { brow: "♂", keyword: ["male", "sign"] }
    , { brow: "⚕", keyword: ["medical", "symbol"] }
    , { brow: "♻", keyword: ["recycling", "symbol"] }
    , { brow: "⚜", keyword: ["fleur-de-lis"] }
    , { brow: "🔱", keyword: ["trident", "emblem"] }
    , { brow: "📛", keyword: ["name", "badge"] }
    , { brow: "🔰", keyword: ["japanese", "symbol", "for", "beginner"] }
    , { brow: "⭕", keyword: ["heavy", "large", "circle"] }
    , { brow: "✅", keyword: ["white", "heavy", "check", "mark"] }
    , { brow: "☑", keyword: ["ballot", "box", "with", "check"] }
    , { brow: "✔", keyword: ["heavy", "check", "mark"] }
    , { brow: "✖", keyword: ["heavy", "multiplication", "x"] }
    , { brow: "❌", keyword: ["cross", "mark"] }
    , { brow: "❎", keyword: ["cross", "mark", "button"] }
    , { brow: "➕", keyword: ["heavy", "plus", "sign"] }
    , { brow: "➖", keyword: ["heavy", "minus", "sign"] }
    , { brow: "➗", keyword: ["heavy", "division", "sign"] }
    , { brow: "➰", keyword: ["curly", "loop"] }
    , { brow: "➿", keyword: ["double", "curly", "loop"] }
    , { brow: "〽", keyword: ["part", "alternation", "mark"] }
    , { brow: "✳", keyword: ["eight-spoked", "asterisk"] }
    , { brow: "✴", keyword: ["eight-pointed", "star"] }
    , { brow: "❇", keyword: ["sparkle"] }
    , { brow: "‼", keyword: ["double", "exclamation", "mark"] }
    , { brow: "⁉", keyword: ["exclamation", "question", "mark"] }
    , { brow: "❓", keyword: ["question", "mark"] }
    , { brow: "❔", keyword: ["white", "question", "mark"] }
    , { brow: "❕", keyword: ["white", "exclamation", "mark"] }
    , { brow: "❗", keyword: ["exclamation", "mark"] }
    , { brow: "〰", keyword: ["wavy", "dash"] }
    , { brow: "©", keyword: ["copyright"] }
    , { brow: "®", keyword: ["registered"] }
    , { brow: "™", keyword: ["trade", "mark"] }
    , { brow: "#️⃣", keyword: ["keycap", "#"] }
    , { brow: "*️⃣", keyword: ["keycap", "*"] }
    , { brow: "0️⃣", keyword: ["keycap", "0"] }
    , { brow: "1️⃣", keyword: ["keycap", "1"] }
    , { brow: "2️⃣", keyword: ["keycap", "2"] }
    , { brow: "3️⃣", keyword: ["keycap", "3"] }
    , { brow: "4️⃣", keyword: ["keycap", "4"] }
    , { brow: "5️⃣", keyword: ["keycap", "5"] }
    , { brow: "6️⃣", keyword: ["keycap", "6"] }
    , { brow: "7️⃣", keyword: ["keycap", "7"] }
    , { brow: "8️⃣", keyword: ["keycap", "8"] }
    , { brow: "9️⃣", keyword: ["keycap", "9"] }
    , { brow: "🔟", keyword: ["keycap", "10"] }
    , { brow: "💯", keyword: ["hundred", "points"] }
    , { brow: "🔠", keyword: ["input", "latin", "uppercase"] }
    , { brow: "🔡", keyword: ["input", "latin", "lowercase"] }
    , { brow: "🔢", keyword: ["input", "numbers"] }
    , { brow: "🔣", keyword: ["input", "symbols"] }
    , { brow: "🔤", keyword: ["input", "latin", "letters"] }
    , { brow: "🅰", keyword: ["a", "button", "blood", "type"] }
    , { brow: "🆎", keyword: ["ab", "button", "blood", "type"] }
    , { brow: "🅱", keyword: ["b", "button", "blood", "type"] }
    , { brow: "🆑", keyword: ["cl", "button"] }
    , { brow: "🆒", keyword: ["cool", "button"] }
    , { brow: "🆓", keyword: ["free", "button"] }
    , { brow: "ℹ", keyword: ["information"] }
    , { brow: "🆔", keyword: ["id", "button"] }
    , { brow: "ⓜ", keyword: ["circled", "m"] }
    , { brow: "🆕", keyword: ["new", "button"] }
    , { brow: "🆖", keyword: ["ng", "button"] }
    , { brow: "🅾", keyword: ["o", "button", "blood", "type"] }
    , { brow: "🆗", keyword: ["ok", "button"] }
    , { brow: "🅿", keyword: ["p", "button"] }
    , { brow: "🆘", keyword: ["sos", "button"] }
    , { brow: "🆙", keyword: ["up!", "button"] }
    , { brow: "🆚", keyword: ["vs", "button"] }
    , { brow: "🈁", keyword: ["japanese", "here", "button"] }
    , { brow: "🈂", keyword: ["japanese", "service", "charge", "button"] }
    , { brow: "🈷", keyword: ["japanese", "monthly", "amount", "button"] }
    , { brow: "🈶", keyword: ["japanese", "not", "free", "of", "charge", "button"] }
    , { brow: "🈯", keyword: ["japanese", "reserved", "button"] }
    , { brow: "🉐", keyword: ["japanese", "bargain", "button"] }
    , { brow: "🈹", keyword: ["japanese", "discount", "button"] }
    , { brow: "🈚", keyword: ["japanese", "free", "of", "charge", "button"] }
    , { brow: "🈲", keyword: ["japanese", "prohibited", "button"] }
    , { brow: "🉑", keyword: ["japanese", "acceptable", "button"] }
    , { brow: "🈸", keyword: ["japanese", "application", "button"] }
    , { brow: "🈴", keyword: ["japanese", "passing", "grade", "button"] }
    , { brow: "🈳", keyword: ["japanese", "vacancy", "button"] }
    , { brow: "㊗", keyword: ["japanese", "congratulations", "button"] }
    , { brow: "㊙", keyword: ["japanese", "secret", "button"] }
    , { brow: "🈺", keyword: ["japanese", "open", "for", "business", "button"] }
    , { brow: "🈵", keyword: ["japanese", "no", "vacancy", "button"] }
    , { brow: "▪", keyword: ["black", "small", "square"] }
    , { brow: "▫", keyword: ["white", "small", "square"] }
    , { brow: "◻", keyword: ["white", "medium", "square"] }
    , { brow: "◼", keyword: ["black", "medium", "square"] }
    , { brow: "◽", keyword: ["white", "medium-small", "square"] }
    , { brow: "◾", keyword: ["black", "medium-small", "square"] }
    , { brow: "⬛", keyword: ["black", "large", "square"] }
    , { brow: "⬜", keyword: ["white", "large", "square"] }
    , { brow: "🔶", keyword: ["large", "orange", "diamond"] }
    , { brow: "🔷", keyword: ["large", "blue", "diamond"] }
    , { brow: "🔸", keyword: ["small", "orange", "diamond"] }
    , { brow: "🔹", keyword: ["small", "blue", "diamond"] }
    , { brow: "🔺", keyword: ["red", "triangle", "pointed", "up"] }
    , { brow: "🔻", keyword: ["red", "triangle", "pointed", "down"] }
    , { brow: "💠", keyword: ["diamond", "with", "a", "dot"] }
    , { brow: "🔘", keyword: ["radio", "button"] }
    , { brow: "🔲", keyword: ["black", "square", "button"] }
    , { brow: "🔳", keyword: ["white", "square", "button"] }
    , { brow: "⚪", keyword: ["white", "circle"] }
    , { brow: "⚫", keyword: ["black", "circle"] }
    , { brow: "🔴", keyword: ["red", "circle"] }
    , { brow: "🔵", keyword: ["blue", "circle"] }
    , { brow: "🏁", keyword: ["chequered", "flag"] }
    , { brow: "🚩", keyword: ["triangular", "flag"] }
    , { brow: "🎌", keyword: ["crossed", "flags"] }
    , { brow: "🏴", keyword: ["black", "flag"] }
    , { brow: "🏳", keyword: ["white", "flag"] }
    , { brow: "🏳️‍🌈", keyword: ["rainbow", "flag"] }
    , { brow: "🇦🇨", keyword: ["ascension", "island"] }
    , { brow: "🇦🇩", keyword: ["andorra"] }
    , { brow: "🇦🇪", keyword: ["united", "arab", "emirates"] }
    , { brow: "🇦🇫", keyword: ["afghanistan"] }
    , { brow: "🇦🇬", keyword: ["antigua", "and", "barbuda"] }
    , { brow: "🇦🇮", keyword: ["anguilla"] }
    , { brow: "🇦🇱", keyword: ["albania"] }
    , { brow: "🇦🇲", keyword: ["armenia"] }
    , { brow: "🇦🇴", keyword: ["angola"] }
    , { brow: "🇦🇶", keyword: ["antarctica"] }
    , { brow: "🇦🇷", keyword: ["argentina"] }
    , { brow: "🇦🇸", keyword: ["american", "samoa"] }
    , { brow: "🇦🇹", keyword: ["austria"] }
    , { brow: "🇦🇺", keyword: ["australia"] }
    , { brow: "🇦🇼", keyword: ["aruba"] }
    , { brow: "🇦🇽", keyword: ["åland", "islands"] }
    , { brow: "🇦🇿", keyword: ["azerbaijan"] }
    , { brow: "🇧🇦", keyword: ["bosnia", "and", "herzegovina"] }
    , { brow: "🇧🇧", keyword: ["barbados"] }
    , { brow: "🇧🇩", keyword: ["bangladesh"] }
    , { brow: "🇧🇪", keyword: ["belgium"] }
    , { brow: "🇧🇫", keyword: ["burkina", "faso"] }
    , { brow: "🇧🇬", keyword: ["bulgaria"] }
    , { brow: "🇧🇭", keyword: ["bahrain"] }
    , { brow: "🇧🇮", keyword: ["burundi"] }
    , { brow: "🇧🇯", keyword: ["benin"] }
    , { brow: "🇧🇱", keyword: ["st.", "barthélemy"] }
    , { brow: "🇧🇲", keyword: ["bermuda"] }
    , { brow: "🇧🇳", keyword: ["brunei"] }
    , { brow: "🇧🇴", keyword: ["bolivia"] }
    , { brow: "🇧🇶", keyword: ["caribbean", "netherlands"] }
    , { brow: "🇧🇷", keyword: ["brazil"] }
    , { brow: "🇧🇸", keyword: ["bahamas"] }
    , { brow: "🇧🇹", keyword: ["bhutan"] }
    , { brow: "🇧🇻", keyword: ["bouvet", "island"] }
    , { brow: "🇧🇼", keyword: ["botswana"] }
    , { brow: "🇧🇾", keyword: ["belarus"] }
    , { brow: "🇧🇿", keyword: ["belize"] }
    , { brow: "🇨🇦", keyword: ["canada"] }
    , { brow: "🇨🇨", keyword: ["cocos", "keeling", "islands"] }
    , { brow: "🇨🇩", keyword: ["congo-kinshasa"] }
    , { brow: "🇨🇫", keyword: ["central", "african", "republic"] }
    , { brow: "🇨🇬", keyword: ["congo-brazzaville"] }
    , { brow: "🇨🇭", keyword: ["switzerland"] }
    , { brow: "🇨🇮", keyword: ["côte", "d’ivoire"] }
    , { brow: "🇨🇰", keyword: ["cook", "islands"] }
    , { brow: "🇨🇱", keyword: ["chile"] }
    , { brow: "🇨🇲", keyword: ["cameroon"] }
    , { brow: "🇨🇳", keyword: ["china"] }
    , { brow: "🇨🇴", keyword: ["colombia"] }
    , { brow: "🇨🇵", keyword: ["clipperton", "island"] }
    , { brow: "🇨🇷", keyword: ["costa", "rica"] }
    , { brow: "🇨🇺", keyword: ["cuba"] }
    , { brow: "🇨🇻", keyword: ["cape", "verde"] }
    , { brow: "🇨🇼", keyword: ["curaçao"] }
    , { brow: "🇨🇽", keyword: ["christmas", "island"] }
    , { brow: "🇨🇾", keyword: ["cyprus"] }
    , { brow: "🇨🇿", keyword: ["czechia"] }
    , { brow: "🇩🇪", keyword: ["germany"] }
    , { brow: "🇩🇬", keyword: ["diego", "garcia"] }
    , { brow: "🇩🇯", keyword: ["djibouti"] }
    , { brow: "🇩🇰", keyword: ["denmark"] }
    , { brow: "🇩🇲", keyword: ["dominica"] }
    , { brow: "🇩🇴", keyword: ["dominican", "republic"] }
    , { brow: "🇩🇿", keyword: ["algeria"] }
    , { brow: "🇪🇦", keyword: ["ceuta", "and", "melilla"] }
    , { brow: "🇪🇨", keyword: ["ecuador"] }
    , { brow: "🇪🇪", keyword: ["estonia"] }
    , { brow: "🇪🇬", keyword: ["egypt"] }
    , { brow: "🇪🇭", keyword: ["western", "sahara"] }
    , { brow: "🇪🇷", keyword: ["eritrea"] }
    , { brow: "🇪🇸", keyword: ["spain"] }
    , { brow: "🇪🇹", keyword: ["ethiopia"] }
    , { brow: "🇪🇺", keyword: ["european", "union"] }
    , { brow: "🇫🇮", keyword: ["finland"] }
    , { brow: "🇫🇯", keyword: ["fiji"] }
    , { brow: "🇫🇰", keyword: ["falkland", "islands"] }
    , { brow: "🇫🇲", keyword: ["micronesia"] }
    , { brow: "🇫🇴", keyword: ["faroe", "islands"] }
    , { brow: "🇫🇷", keyword: ["france"] }
    , { brow: "🇬🇦", keyword: ["gabon"] }
    , { brow: "🇬🇧", keyword: ["united", "kingdom"] }
    , { brow: "🇬🇩", keyword: ["grenada"] }
    , { brow: "🇬🇪", keyword: ["georgia"] }
    , { brow: "🇬🇫", keyword: ["french", "guiana"] }
    , { brow: "🇬🇬", keyword: ["guernsey"] }
    , { brow: "🇬🇭", keyword: ["ghana"] }
    , { brow: "🇬🇮", keyword: ["gibraltar"] }
    , { brow: "🇬🇱", keyword: ["greenland"] }
    , { brow: "🇬🇲", keyword: ["gambia"] }
    , { brow: "🇬🇳", keyword: ["guinea"] }
    , { brow: "🇬🇵", keyword: ["guadeloupe"] }
    , { brow: "🇬🇶", keyword: ["equatorial", "guinea"] }
    , { brow: "🇬🇷", keyword: ["greece"] }
    , { brow: "🇬🇸", keyword: ["south", "georgia", "and", "south", "sandwich", "islands"] }
    , { brow: "🇬🇹", keyword: ["guatemala"] }
    , { brow: "🇬🇺", keyword: ["guam"] }
    , { brow: "🇬🇼", keyword: ["guinea-bissau"] }
    , { brow: "🇬🇾", keyword: ["guyana"] }
    , { brow: "🇭🇰", keyword: ["hong", "kong", "sar", "china"] }
    , { brow: "🇭🇲", keyword: ["heard", "and", "mcdonald", "islands"] }
    , { brow: "🇭🇳", keyword: ["honduras"] }
    , { brow: "🇭🇷", keyword: ["croatia"] }
    , { brow: "🇭🇹", keyword: ["haiti"] }
    , { brow: "🇭🇺", keyword: ["hungary"] }
    , { brow: "🇮🇨", keyword: ["canary", "islands"] }
    , { brow: "🇮🇩", keyword: ["indonesia"] }
    , { brow: "🇮🇪", keyword: ["ireland"] }
    , { brow: "🇮🇱", keyword: ["israel"] }
    , { brow: "🇮🇲", keyword: ["isle", "of", "man"] }
    , { brow: "🇮🇳", keyword: ["india"] }
    , { brow: "🇮🇴", keyword: ["british", "indian", "ocean", "territory"] }
    , { brow: "🇮🇶", keyword: ["iraq"] }
    , { brow: "🇮🇷", keyword: ["iran"] }
    , { brow: "🇮🇸", keyword: ["iceland"] }
    , { brow: "🇮🇹", keyword: ["italy"] }
    , { brow: "🇯🇪", keyword: ["jersey"] }
    , { brow: "🇯🇲", keyword: ["jamaica"] }
    , { brow: "🇯🇴", keyword: ["jordan"] }
    , { brow: "🇯🇵", keyword: ["japan"] }
    , { brow: "🇰🇪", keyword: ["kenya"] }
    , { brow: "🇰🇬", keyword: ["kyrgyzstan"] }
    , { brow: "🇰🇭", keyword: ["cambodia"] }
    , { brow: "🇰🇮", keyword: ["kiribati"] }
    , { brow: "🇰🇲", keyword: ["comoros"] }
    , { brow: "🇰🇳", keyword: ["st.", "kitts", "and", "nevis"] }
    , { brow: "🇰🇵", keyword: ["north", "korea"] }
    , { brow: "🇰🇷", keyword: ["south", "korea"] }
    , { brow: "🇰🇼", keyword: ["kuwait"] }
    , { brow: "🇰🇾", keyword: ["cayman", "islands"] }
    , { brow: "🇰🇿", keyword: ["kazakhstan"] }
    , { brow: "🇱🇦", keyword: ["laos"] }
    , { brow: "🇱🇧", keyword: ["lebanon"] }
    , { brow: "🇱🇨", keyword: ["st.", "lucia"] }
    , { brow: "🇱🇮", keyword: ["liechtenstein"] }
    , { brow: "🇱🇰", keyword: ["sri", "lanka"] }
    , { brow: "🇱🇷", keyword: ["liberia"] }
    , { brow: "🇱🇸", keyword: ["lesotho"] }
    , { brow: "🇱🇹", keyword: ["lithuania"] }
    , { brow: "🇱🇺", keyword: ["luxembourg"] }
    , { brow: "🇱🇻", keyword: ["latvia"] }
    , { brow: "🇱🇾", keyword: ["libya"] }
    , { brow: "🇲🇦", keyword: ["morocco"] }
    , { brow: "🇲🇨", keyword: ["monaco"] }
    , { brow: "🇲🇩", keyword: ["moldova"] }
    , { brow: "🇲🇪", keyword: ["montenegro"] }
    , { brow: "🇲🇫", keyword: ["st.", "martin"] }
    , { brow: "🇲🇬", keyword: ["madagascar"] }
    , { brow: "🇲🇭", keyword: ["marshall", "islands"] }
    , { brow: "🇲🇰", keyword: ["macedonia"] }
    , { brow: "🇲🇱", keyword: ["mali"] }
    , { brow: "🇲🇲", keyword: ["myanmar", "burma"] }
    , { brow: "🇲🇳", keyword: ["mongolia"] }
    , { brow: "🇲🇴", keyword: ["macau", "sar", "china"] }
    , { brow: "🇲🇵", keyword: ["northern", "mariana", "islands"] }
    , { brow: "🇲🇶", keyword: ["martinique"] }
    , { brow: "🇲🇷", keyword: ["mauritania"] }
    , { brow: "🇲🇸", keyword: ["montserrat"] }
    , { brow: "🇲🇹", keyword: ["malta"] }
    , { brow: "🇲🇺", keyword: ["mauritius"] }
    , { brow: "🇲🇻", keyword: ["maldives"] }
    , { brow: "🇲🇼", keyword: ["malawi"] }
    , { brow: "🇲🇽", keyword: ["mexico"] }
    , { brow: "🇲🇾", keyword: ["malaysia"] }
    , { brow: "🇲🇿", keyword: ["mozambique"] }
    , { brow: "🇳🇦", keyword: ["namibia"] }
    , { brow: "🇳🇨", keyword: ["new", "caledonia"] }
    , { brow: "🇳🇪", keyword: ["niger"] }
    , { brow: "🇳🇫", keyword: ["norfolk", "island"] }
    , { brow: "🇳🇬", keyword: ["nigeria"] }
    , { brow: "🇳🇮", keyword: ["nicaragua"] }
    , { brow: "🇳🇱", keyword: ["netherlands"] }
    , { brow: "🇳🇴", keyword: ["norway"] }
    , { brow: "🇳🇵", keyword: ["nepal"] }
    , { brow: "🇳🇷", keyword: ["nauru"] }
    , { brow: "🇳🇺", keyword: ["niue"] }
    , { brow: "🇳🇿", keyword: ["new", "zealand"] }
    , { brow: "🇴🇲", keyword: ["oman"] }
    , { brow: "🇵🇦", keyword: ["panama"] }
    , { brow: "🇵🇪", keyword: ["peru"] }
    , { brow: "🇵🇫", keyword: ["french", "polynesia"] }
    , { brow: "🇵🇬", keyword: ["papua", "new", "guinea"] }
    , { brow: "🇵🇭", keyword: ["philippines"] }
    , { brow: "🇵🇰", keyword: ["pakistan"] }
    , { brow: "🇵🇱", keyword: ["poland"] }
    , { brow: "🇵🇲", keyword: ["st.", "pierre", "and", "miquelon"] }
    , { brow: "🇵🇳", keyword: ["pitcairn", "islands"] }
    , { brow: "🇵🇷", keyword: ["puerto", "rico"] }
    , { brow: "🇵🇸", keyword: ["palestinian", "territories"] }
    , { brow: "🇵🇹", keyword: ["portugal"] }
    , { brow: "🇵🇼", keyword: ["palau"] }
    , { brow: "🇵🇾", keyword: ["paraguay"] }
    , { brow: "🇶🇦", keyword: ["qatar"] }
    , { brow: "🇷🇪", keyword: ["réunion"] }
    , { brow: "🇷🇴", keyword: ["romania"] }
    , { brow: "🇷🇸", keyword: ["serbia"] }
    , { brow: "🇷🇺", keyword: ["russia"] }
    , { brow: "🇷🇼", keyword: ["rwanda"] }
    , { brow: "🇸🇦", keyword: ["saudi", "arabia"] }
    , { brow: "🇸🇧", keyword: ["solomon", "islands"] }
    , { brow: "🇸🇨", keyword: ["seychelles"] }
    , { brow: "🇸🇩", keyword: ["sudan"] }
    , { brow: "🇸🇪", keyword: ["sweden"] }
    , { brow: "🇸🇬", keyword: ["singapore"] }
    , { brow: "🇸🇭", keyword: ["st.", "helena"] }
    , { brow: "🇸🇮", keyword: ["slovenia"] }
    , { brow: "🇸🇯", keyword: ["svalbard", "and", "jan", "mayen"] }
    , { brow: "🇸🇰", keyword: ["slovakia"] }
    , { brow: "🇸🇱", keyword: ["sierra", "leone"] }
    , { brow: "🇸🇲", keyword: ["san", "marino"] }
    , { brow: "🇸🇳", keyword: ["senegal"] }
    , { brow: "🇸🇴", keyword: ["somalia"] }
    , { brow: "🇸🇷", keyword: ["suriname"] }
    , { brow: "🇸🇸", keyword: ["south", "sudan"] }
    , { brow: "🇸🇹", keyword: ["são", "tomé", "and", "príncipe"] }
    , { brow: "🇸🇻", keyword: ["el", "salvador"] }
    , { brow: "🇸🇽", keyword: ["sint", "maarten"] }
    , { brow: "🇸🇾", keyword: ["syria"] }
    , { brow: "🇸🇿", keyword: ["swaziland"] }
    , { brow: "🇹🇦", keyword: ["tristan", "da", "cunha"] }
    , { brow: "🇹🇨", keyword: ["turks", "and", "caicos", "islands"] }
    , { brow: "🇹🇩", keyword: ["chad"] }
    , { brow: "🇹🇫", keyword: ["french", "southern", "territories"] }
    , { brow: "🇹🇬", keyword: ["togo"] }
    , { brow: "🇹🇭", keyword: ["thailand"] }
    , { brow: "🇹🇯", keyword: ["tajikistan"] }
    , { brow: "🇹🇰", keyword: ["tokelau"] }
    , { brow: "🇹🇱", keyword: ["timor-leste"] }
    , { brow: "🇹🇲", keyword: ["turkmenistan"] }
    , { brow: "🇹🇳", keyword: ["tunisia"] }
    , { brow: "🇹🇴", keyword: ["tonga"] }
    , { brow: "🇹🇷", keyword: ["turkey"] }
    , { brow: "🇹🇹", keyword: ["trinidad", "and", "tobago"] }
    , { brow: "🇹🇻", keyword: ["tuvalu"] }
    , { brow: "🇹🇼", keyword: ["taiwan"] }
    , { brow: "🇹🇿", keyword: ["tanzania"] }
    , { brow: "🇺🇦", keyword: ["ukraine"] }
    , { brow: "🇺🇬", keyword: ["uganda"] }
    , { brow: "🇺🇲", keyword: ["u.s.", "outlying", "islands"] }
    , { brow: "🇺🇳", keyword: ["united", "nations"] }
    , { brow: "🇺🇸", keyword: ["united", "states"] }
    , { brow: "🇺🇾", keyword: ["uruguay"] }
    , { brow: "🇺🇿", keyword: ["uzbekistan"] }
    , { brow: "🇻🇦", keyword: ["vatican", "city"] }
    , { brow: "🇻🇨", keyword: ["st.", "vincent", "and", "grenadines"] }
    , { brow: "🇻🇪", keyword: ["venezuela"] }
    , { brow: "🇻🇬", keyword: ["british", "virgin", "islands"] }
    , { brow: "🇻🇮", keyword: ["u.s.", "virgin", "islands"] }
    , { brow: "🇻🇳", keyword: ["vietnam"] }
    , { brow: "🇻🇺", keyword: ["vanuatu"] }
    , { brow: "🇼🇫", keyword: ["wallis", "and", "futuna"] }
    , { brow: "🇼🇸", keyword: ["samoa"] }
    , { brow: "🇽🇰", keyword: ["kosovo"] }
    , { brow: "🇾🇪", keyword: ["yemen"] }
    , { brow: "🇾🇹", keyword: ["mayotte"] }
    , { brow: "🇿🇦", keyword: ["south", "africa"] }
    , { brow: "🇿🇲", keyword: ["zambia"] }
    , { brow: "🇿🇼", keyword: ["zimbabwe"] }
    , { brow: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", keyword: ["england"] }
    , { brow: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", keyword: ["scotland"] }
    , { brow: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", keyword: ["wales"] }
];

openRequest.onupgradeneeded = function () {
    emojiDatabase = openRequest.result;

    var emojiTable = emojiDatabase.createObjectStore("emojiTable", { keyPath: "id", autoIncrement: true });
    emojiTable.createIndex("keyword", "keyword", { multiEntry: true });

    for (let emojiData of emojiDatas) {
        emojiTable.add(emojiData);
    }
};

openRequest.onsuccess = function () {
    emojiDatabase = openRequest.result;
};

openRequest.onerror = function () {
    indexedDB.deleteDatabase("emojiDatabase");
};

function getEmoji(keyword, callback) {
    var connection = emojiDatabase.transaction("emojiTable", "readonly");
    var emojiTable = connection.objectStore("emojiTable");
    var keywordIndex = emojiTable.index("keyword");
    var brows = "";
    var keyword = keyword.trim().toLowerCase();

    var queryRequest = keywordIndex.openCursor(IDBKeyRange.bound(keyword, keyword + "\uffff"), //Thank to Fong-Wan Chau(http://stackoverflow.com/questions/7086180/indexeddb-fuzzy-search) 
        "next");
    queryRequest.onsuccess = function () {
        var cursor = queryRequest.result;
        if (cursor) {
            brows += cursor.value.brow;
            cursor.continue();
        } else {
            callback({ "brow": brows }); //游標遍歷完成呼叫callback function(=sendResponse)
        }
    }
}

var pageX, pageY;

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (typeof message.keyword !== "undefined") {
            getEmoji(message.keyword, sendResponse);
        }

        if (typeof message.pageX !== "undefined" && typeof message.pageY !== "undefined") {
            pageX = message.pageX;
            pageY = message.pageY;
        }

        return true; //持續開啟通道直到返回brows
    });

chrome.contextMenus.create({ id: "Easy Emoji", title: chrome.i18n.getMessage("appOpenEmojiWindow"), contexts: ["all"] });
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    chrome.tabs.executeScript({
        code: "showEmojiWindow(" + pageX + ", " + pageY + ");"
    });
});