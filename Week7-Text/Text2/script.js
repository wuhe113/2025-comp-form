const storyGrammar = {
  start: "It was a dark and stormy night, and the $phrase1. $name, cursed with night blindness, $phrase2. The $noun3 grew closer and closer. Finally, $name was $verb2 by $phrase1 and the sky remained dark.",
  phrase1: "$object $verb3 $noun4 ",
  phrase2: "$adverb $verb1 the $object $noun3",
  subject: "$noun | $adjective $noun",
  object:
    "$adjective1 $noun1 like a $adjective2 $noun2",
  adverb: "exceptionally | somewhat",
  adjective1: " tenebrous | gloomy | bloodcurdling | horrific | arcane | wild",
  adjective2: " terrible | huge | striking | ghastly | awful ",
  noun1: "rock | wind | rain | light | fog ",
  noun2: "monster | banshee | cthulhu | ghost | zombie ",
  noun3: "footsteps | yells | rustling | knocking sounds | gurgling ",
  noun4: "windows on the buildings | trees on the streets | doors above the houses",
  verb1: "heard | saw | felt ",
  verb2: "attacked | eat | eroded |  murdered | stabbed | killed ",
  verb3: "lashed against | crushed | struck |  hit ",
  name: "Accolon | Arthur | Lancelot | Cador | Ector | Gareth"
};

const context = {};

const g = RiTa.grammar(storyGrammar, context);

display(g.expand());

function display(...strings) {
  const div = document.createElement("div");

  div.classList.add("text");

  // div.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
  div.innerText = strings.join("\n");
  document.body.append(div);
}


window.onscroll = function(e){
  if (window.scrollY > 3000) {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";

  } else {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

  }
};
