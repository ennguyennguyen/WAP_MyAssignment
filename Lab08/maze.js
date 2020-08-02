$(document).ready(function() {
    let startState = false;

    $("#start").on("click", function() {
        // -- clicked
        if(start == true) return;

        // -- remove error class
        $(".boundary").removeClass("youlose");

        // -- set start state
        if (start = false) start = true;

        // -- If mouse action hit the boundary --> return lose
        $(".boundary").on("mouseenter", function() {
           lose();
           deactivateEvents();
        });

        // -- If mouse action go out of the maze --> return lose
        $("#maze").on("mouseleave", function () {
           lose();
           deactivateEvents();
        });

        // -- If mouse go to the "End" --> return win
        $("#end").on("mouseenter", function() {
           win();
           deactivateEvents();
        });
    });
});

// -- UTILITIES FUNCTIONS
// - Lose
function lose () {
    $(".boundary").addClass("youlose");
    $("#status").text("You lose. Click 'S' to start");
    start = false;
}

// - Win
function win () {
    $("#status").text("You WIN!!! Click 'S' to start");
    start = false;
}

// - Deactivate all events
function deactivateEvents() {
    $(".boundary").off("mouseenter");
    $("#maze").off("mouseleave");
    $("#end").off("mouseenter");
}