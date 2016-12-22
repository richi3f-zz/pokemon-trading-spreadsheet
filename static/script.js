function filterPkmn(option, checked) {
    // hide all Pokémon
    $("tbody tr").addClass("filtered");
    // get selected generations
    var gens = []; var i = 0;
    $("#gen-filter option:selected").each(function() {
        gens[i++] = "." + $(this).val();
    });
    // get selected gender ratios
    var ratios = []; i = 0;
    $("#ratio-filter option:selected").each(function() {
        ratios[i++] = "." + $(this).val();
    });
    // get selected balls
    var balls = []; i = 0;
    $("#ball-filter option:selected").each(function() {
        balls[i++] = "." + $(this).val();
    });
    // show Pokémon that have at least one class of each array (generations, balls, ratios)
    $("tbody tr").each(function() {
        var $this = $(this);
        if ($this.is(gens.join(',')) && $this.is(ratios.join(',')) && $this.is(balls.join(','))) {
            $(this).removeClass("filtered");
        }
    });
}
var handle = 0;
var state = false;
$(document).ready(function() {

    var handle = 0;
    $("tr").hover(function() {
        var $pkmn = $(this).find(".sprite");
        handle = setInterval(function() {
            $pkmn.toggleClass("up");
        }, 150);
    }, function() {
        $(this).find(".sprite").removeClass("up");
        clearInterval(handle);
    });

    $('#q').keyup(function() {
        var value = this.value.toLowerCase().trim();
        $("tbody").find("tr").each(function(index) {
                var id = $(this).find("td").eq(1).text().toLowerCase().trim();
                $(this).toggle(id.indexOf(value) !== -1);
        });
    });
    $("select").multiselect({
        buttonWidth: '140px',
        numberDisplayed: 1,
        includeSelectAllOption: true,
        maxHeight: 420,
        enableClickableOptGroups: true,
        onChange: filterPkmn,
        onSelectAll: filterPkmn
    });
    $("select").multiselect("selectAll", false);
    $("select").multiselect('updateButtonText');
});