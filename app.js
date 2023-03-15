(() => {
  const quiz = [
    {
      question: "チューリップの花びらは何枚でしょうか？",
      answers: ["3枚", "6枚", "9枚", "12枚"],
      correct: "3枚",
      comment:
        "チューリップの花びらは3枚です。\nチューリップは、一見すると花びらが内側3枚・外側3枚で計6枚あるように見えます。しかし実は、花びらは内側の「3枚だけ」で、外側の3枚は「がく」という葉が変化したものです。「がく」は花がつぼみの頃はつぼみを包んで守り、花が咲いたら花びらを支える役割があります。",
    },
    {
      question: "世界一成長が早い植物はなんでしょうか？？",
      answers: ["竹", "ヒマワリ", "ススキ"],
      correct: "竹",
      comment:
        "世界一成長が早い植物は竹です。\n一言で竹と言ってもいくつか種類があるため、種類によって若干の差はありますが1日に数十cmも伸びます。成長のピーク時には、なんと1日に1m以上も伸びることがあります",
    },
    {
      question: "街路樹（道路に植えられている木）に多いものはどれでしょうか？",
      answers: ["サクラ", "マツ", "イチョウ"],
      correct: "イチョウ",
      comment:
        "街路樹に多い木は「イチョウ」です。\nイチョウの木は火に強く、燃えにくいという特徴があります。また、丈夫なので車が出す排気ガスにも強いため、街路樹に最適な木です。",
    },
    {
      question: "桜は意外にも毒を持った植物です。どこに毒があるでしょうか？",
      answers: ["花", "葉", "枝", "根"],
      correct: "葉",
      comment:
        "桜は葉に毒があります。\n例えば、身近なもので言えば、桜の葉は和菓子の「桜餅」に使われています。この桜の葉は、塩漬けにされたものです。桜の葉を塩漬けにすると「クマリン」という成分が生成されます。それが桜餅独特の匂いの元ですが、肝臓の働きを鈍らせる毒を含む成分でもあります。とは言え、よほど大量に食べない限りは人間の体に影響はありません。",
    },
  ];

  const $dom = document;

  let quizIndex = 0;
  let correctCount = 0;
  const clickHandler = (e) => {
    if (e.target.textContent === quiz[quizIndex].correct) {
      window.alert("正解!\n" + quiz[quizIndex].comment);
      correctCount++;
    } else {
      window.alert("不正解！\n" + quiz[quizIndex].comment);
    }
    quizIndex++;
    if (quizIndex < quiz.length) {
      setupQuiz();
    } else {
      $dom.getElementById("js-message").textContent =
        "クイズは終了です、正解数は" +
        correctCount +
        "/" +
        quiz.length +
        "です！";
      if (correctCount === quiz.length) {
        $dom.getElementById("js-bravo").play();
      }
    }
  };

  const setupQuiz = () => {
    const $question = $dom.getElementById("js-question");
    $question.textContent = quiz[quizIndex].question;
    const $answers = $dom.getElementById("js-answers");
    $answers.textContent = null;

    let index = 0;
    while (index < quiz[quizIndex].answers.length) {
      const $button = $dom.createElement("button");
      $button.setAttribute("type", "button");
      $button.setAttribute("class", "ms-3 btn btn-success");
      $button.textContent = quiz[quizIndex].answers[index];
      $answers.appendChild($button);

      const $buttons = $dom.getElementsByTagName("button");
      $buttons[index].addEventListener("click", (e) => {
        clickHandler(e);
      });

      index++;
    }
  };
  setupQuiz();
})();
