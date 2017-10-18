$(function() {
  $("form #submit-form").click(function(event){
    var name1Input = $("input#name1").val().toUpperCase();
    var name2Input = $("input#name2").val().toUpperCase();
    var exclamationInput = $("input#exclamation").val().toUpperCase();
    var animalInput = $("input#animal").val().toUpperCase();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
    $("form").hide();

    event.preventDefault();
  });
});
