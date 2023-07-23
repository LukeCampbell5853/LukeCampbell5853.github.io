function make_popup(svg, id) {
  svg.getElementById(id).addEventListener("mousedown", function() {
    document.getElementById(id).style.display = "block";
    document.getElementById("diagram").style.display = "none";
  }, false);
}

function close() {
  var popups = document.getElementsByClassName("box");
  for (i = 0; i < popups.length; i++) {
    popups[i].style.display = "none";
  }
  document.getElementById("diagram").style.display = "block";
}

const diagram = document.getElementById("diagram");
diagram.addEventListener("load", function() {
  const svg = diagram.contentDocument;

  const ids = ["alkanes", "alkenes", "alkynes", "haloalkanes", "sugars", "alcohols", "aldehydes", "ketones", "carboxylic_acids", "amides", "amines", "esters", "carboxylate_ions", "alkanes_haloalkanes", "alkenes_alkanes", "alkenes_haloalkanes", "alkenes_alcohols", "alkynes_haloalkanes", "alkynes_alkenes", "haloalkanes_alcohols", "alcohols_haloalkanes", "alcohols_amines", "alcohols_alkenes", "alcohols_ketones", "alcohols_esters", "alcohols_aldehydes", "aldehydes_alcohols", "sugars_alcohols", "aldehydes_carboxylic_acids", "carboxylic_acids_carboxylate_ions", "carboxylic_acids_amides", "alcohols_carboxylic_acids"]

  for (i = 0; i < ids.length; i++) {
    make_popup(svg, ids[i])
  }

  svg.getElementById("amines_amides").addEventListener("mousedown", function() {
    document.getElementById("carboxylic_acids_amides").style.display = "block";
    document.getElementById("diagram").style.display = "none";
  }, false);

  svg.getElementById("carboxylic_acid_esters").addEventListener("mousedown", function() {
    document.getElementById("alcohols_esters").style.display = "block";
    document.getElementById("diagram").style.display = "none";
  }, false);

}, false);

var crosses = document.getElementsByClassName("back")

for (i = 0; i < crosses.length; i++) {
  crosses[i].addEventListener("mousedown", close, false);
}
