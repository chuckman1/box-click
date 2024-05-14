for (let i = 0; i < 16; i++) {
    $("#boxContainer").append("<div class='box toggleColor'></div>")
}

$("#boxContainer").on("click", ".box", function() {
    $(this).toggleClass("toggleColor")
})