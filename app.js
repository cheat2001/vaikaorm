const pot = document.querySelectorAll(".pot");
const questionBlock = document.querySelector(".question-block");

let audio = new Audio("Breaking_Glasses.mp3");
// Dynamic questions
const lb1 = document.querySelector(".lb1");
const lb2 = document.querySelector(".lb2");
const lb3 = document.querySelector(".lb3");
const titleQuestion = document.querySelector(".title-question");

let count = 0;
// function for new hit pot
function newHit() {
  questionBlock.classList.add("question-block-show");
  audio.play();
  audio.volume = 0.5;
  count++;
}
pot[0].addEventListener("click", () => {
  pot[0].style.marginTop = 1400 + "px";
  titleQuestion.innerHTML = "តើស្រះពេញតួមានប៉ុន្មានតួ?";
  lb1.innerHTML = "ក.មាន១៦តួ";
  lb2.innerHTML = "ខ.មាន១៤តួ";
  lb3.innerHTML = "គ.មាន១៥តួ";
  newHit();
});
pot[1].addEventListener("click", () => {
  pot[1].style.marginTop = 1400 + "px";
  titleQuestion.innerHTML = "តើប្រាសាទអង្គរវត្តផ្ដើមកសាងដោយស្ដេចអង្គណា?";
  lb1.innerHTML = "ក.ព្រះបាទជ័យវរ្ម័នទី២";
  lb2.innerHTML = "ខ.ព្រះបាទជ័យវរ្ម័នទី៧";
  lb3.innerHTML = "គ.ព្រះបាទសូរ្យវរ្ម័នទី២";
  newHit();
});

pot[2].addEventListener("click", () => {
  pot[2].style.marginTop = 1400 + "px";
  titleQuestion.innerHTML =
    "តើពាក្យថាសង្គ្រាន្តតើពាក្យនេះមានប្រភពមកពីប្រទេសណា?";
  lb1.innerHTML = "ក.ប្រទេសថៃ";
  lb2.innerHTML = "ខ.ប្រទេភូមា";
  lb3.innerHTML = "គ.ប្រទេសឥណ្ឌា";
  newHit();
});

pot[3].addEventListener("click", () => {
  pot[3].style.marginTop = 1400 + "px";
  titleQuestion.innerHTML = "តើល្បែងមួយណាដែលជាល្បែងប្រជាប្រិយខ្មែរ?";
  lb1.innerHTML = "ក.លេងបៀរ";
  lb2.innerHTML = "ខ.លេងបាល់ទាត់";
  lb3.innerHTML = "គ.ពង្រាត់សង្សា";
  newHit();
});

pot[4].addEventListener("click", () => {
  pot[4].style.marginTop = 1400 + "px";
  newHit();
});
let checktoWin;
const rdb3 = document.querySelector(".rdb3");
const rdb2 = document.querySelector(".rdb2");
const rdb1 = document.querySelector(".rdb1");
const statusBlock = document.querySelector(".status-block");
const statusTxt = document.querySelector(".status");
const telling = document.querySelector(".telling");
const correct = document.querySelector(".correct");
const getReward = document.querySelector(".Get-reward");
document.body.addEventListener("click", () => {
  if (rdb3.checked) {
    questionBlock.classList.remove("question-block-show");
    statusBlock.classList.add("status-block-show");
    statusTxt.innerHTML = "🎊អ្នកឆ្លើយបានត្រឹមត្រូវ🎊";
    telling.innerHTML = "🏆🏆👏🥰👏🏆🏆";
    rdb3.checked = false;
    checktoWin = true;
  } else if (rdb2.checked) {
    questionBlock.classList.remove("question-block-show");
    statusBlock.classList.add("status-block-show");
    statusTxt.innerHTML = "😥ចម្លើយរបស់អ្នកមិនត្រឹមត្រូវទេ😥";
    checktoWin = false;
    rdb2.checked = false;
  } else if (rdb1.checked) {
    questionBlock.classList.remove("question-block-show");
    statusBlock.classList.add("status-block-show");
    statusTxt.innerHTML = "😥ចម្លើយរបស់អ្នកមិនត្រឹមត្រូវទេ😥";
    rdb1.checked = false;
    checktoWin = false;
  }
});
const giftBlock = document.querySelector(".gift-block");

// play block

const btnPlay = document.querySelector(".btn-play");
const playBlock = document.querySelector(".play-block");
const helpBlock = document.querySelector(".help-block");
const nextBtn = document.querySelector(".next-btn");

let khmerSong = new Audio("khmerSong.mp3");
btnPlay.addEventListener("click", () => {
  playBlock.classList.add("play-hide");
  khmerSong.play();
  helpBlock.classList.add("help-block-show");
});

nextBtn.addEventListener("click", () => {
  helpBlock.classList.remove("help-block-show");
});

// play again

const playAgain = document.querySelector(".play-again");

playAgain.addEventListener("click", () => {
  giftBlock.classList.remove("gift-block-show");
  if (count === 5) {
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
});

const giftRan = [
  { text: "Coca Cola ១កំប៉ុង", img: "coca.png" },
  { text: "Angkor Beer ១កំប៉ុង", img: "angkorBeer.png" },
  { text: "Tiger Beer ១កំប៉ុង", img: "tigerBeer.png" },
  { text: "Freshy ១កំប៉ុង", img: "freshy.png" },
  { text: "Pepsi ១កំប៉ុង", img: "pepsi.png" },
  { text: "អន្សមជ្រូក១", img: "onsom.jpg" },
  { text: "អន្សមចេក១ចាន", img: "onsombanana.jpg" },
  { text: "នំគម១ចាន", img: "nomKorm.jpg" },
  { text: "KOI Coffee ១កែវ", img: "koi.png" },
  { text: "Amazon Coffee ១កែវ", img: "amazon.png" },
  { text: "Wurkz ១កំប៉ុង", img: "wurkz.png" },
  { text: "IZE ១កំប៉ុង", img: "ize.png" },
  { text: "១ ដុល្លា", img: "1dollar.png" },
  { text: "មី ១កញ្ចប់", img: "mama.png" },
  { text: "ក្រមា​១", img: "krama.png" },
];
const openGift = document.querySelector(".open-gift");
const giftText = document.querySelector(".gift-text");
const imgGift = document.querySelector(".img-gift");
getReward.addEventListener("click", () => {
  let ran = Math.floor(Math.random() * 15);
  giftBlock.classList.add("gift-block-show");
  statusBlock.classList.remove("status-block-show");
  if (checktoWin) {
    giftText.innerHTML = giftRan[ran].text;
    imgGift.style.backgroundImage = `url(${giftRan[ran].img})`;
    openGift.style.display = "block";
  } else {
    giftText.innerHTML = "ឆ្លើយអត់ត្រូវផងចង់បានរង្វាន់";
    imgGift.style.backgroundImage = "url('Unamused.png')";
    openGift.style.display = "none";
  }
});

const spinner = document.querySelector(".spinner");

setTimeout(() => {
  spinner.classList.add("spinner-hide");
}, 3000);
