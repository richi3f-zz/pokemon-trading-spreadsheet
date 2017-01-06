// Constants
const BATTLE_STATS = ["Hit Points","Attack","Defense","Special Attack","Special Defense","Speed"];
const BATTLE_STATS_ABBR = ["HP","Atk","Def","SpA","SpD","Spe"];
const LANGUAGES = { "JPN": "Japanese", "ENG": "English", "FRE": "French", "GER": "German", "ITA": "Italian", "KOR": "Korean", "SPA": "Spanish", "CHT": "Traditional Chinese", "CHS": "Simplified Chinese" };
const BABY_POKEMON = [172,173,174,175,236,238,239,240,298,360,433,438,439,440,446,447,458];
const FEMALE_ONLY_POKEMON = [29,30,31,113,115,124,241,242,314,380,413,416,440,478,488,548,549,629,630,669,670,671,758,761,762,763];
const POKEMON_WITH_A_GENDER_RATIO_OF_SEVEN_FEMALES_TO_ONE_MALE = [667,668];
const POKEMON_WITH_A_GENDER_RATIO_OF_THREE_FEMALES_TO_ONE_MALE = [35,36,37,38,39,40,173,174,209,210,222,298,300,301,370,431,432,572,573,574,575,576,741,764];
const POKEMON_WITH_A_GENDER_RATIO_OF_ONE_FEMALE_TO_THREE_MALES = [58,59,63,64,65,66,67,68,125,126,239,240,296,297,466,467,532,533,534];
const POKEMON_WITH_A_GENDER_RATIO_OF_ONE_FEMALE_TO_SEVEN_MALES = [1,2,3,4,5,6,7,8,9,133,134,135,136,138,139,140,141,142,143,152,153,154,155,156,157,158,159,160,175,176,196,197,252,253,254,255,256,257,258,259,260,345,346,347,348,369,387,388,389,390,391,392,393,394,395,408,409,410,411,415,446,447,448,468,470,471,495,496,497,498,499,500,501,502,503,511,512,513,514,515,516,564,565,566,567,570,571,650,651,652,653,654,655,656,657,658,696,697,698,699,700,722,723,724,725,726,727,728,729,730,757];
const MALE_ONLY_POKEMON = [32,33,34,106,107,128,236,237,313,381,414,475,538,539,627,628,641,642,645];
const GENDERLESS_POKEMON = [81,82,100,101,120,121,132,137,144,145,146,150,151,201,233,243,244,245,249,250,251,292,337,338,343,344,374,375,376,377,378,379,382,383,384,385,386,436,437,462,474,479,480,481,482,483,484,486,487,489,490,491,492,493,494,599,600,601,615,622,623,638,639,640,643,644,646,647,648,649,703,716,717,718,719,720,721,772,773,774,781,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802];
const POKEMON_WITH_GENDER_DIFFERENCES = [3,12,19,20,25,26,29,32,41,42,44,45,64,65,84,85,97,111,112,118,119,123,129,130,154,165,166,178,185,186,190,194,195,198,202,203,207,208,212,214,215,217,221,224,229,232,396,397,398,399,400,401,402,403,404,405,407,415,417,418,419,424,443,444,445,449,450,453,454,456,457,459,460,461,464,465,473,521,592,593,668,678];
const TAPUS = [785,786,787,788];
const HIDDEN_ABILITIES = {
    "Lightning Rod": [25,26,118,119,172,311],
    "Sheer Force": [31,34,98,99,128,158,159,160,208,296,297,303,328,371,408,409,645,733],
    "Natural Cure": [764],
    "Sand Veil": [74,75,76,231,232,246,618,769,770],
    "Thick Fat": [220,221,473,498,499],
    "Snow Warning": [698,699],
    "Symbiosis": [669,670,671,765],
    "Magic Guard": [63,64,65],
    "Reckless": [111,112,396,397,398,464,500,619,620],
    "Clear Body": [599,600,601],
    "Own Tempo": [270,271,272,322,677],
    "Compound Eyes": [269],
    "Mold Breaker": [529,530,538,539,550,621,701],
    "Poison Heal": [472],
    "Torrent": [515,516],
    "Pressure": [320,321,624,625],
    "Rain Dish": [7,8,9,72,73,278,279,283,755,756],
    "Moxie": [127,130,214,262,373,430,667,668],
    "Harvest": [102,103,357,708,709],
    "Moody": [223,224,235,361,362,399,400],
    "Protean": [352,656,657,658],
    "Sturdy": [369,377,696,703,712,713,777],
    "Zen Mode": [555],
    "Gale Wings": [661,662,663],
    "Cute Charm": [350,759],
    "Tinted Lens": [12,163,164,414,561],
    "Plus": [179,180,181,702],
    "Shell Armor": [324,387,388,389,501,502,503],
    "Minus": [309,310],
    "Unaware": [36,194,195,771],
    "Prankster": [198,302,313,314,447,509,510,678],
    "Long Reach": [722,723,724],
    "Chlorophyll": [1,2,3,470,546,547],
    "Simple": [527,528],
    "Water Veil": [226,367,418,419,456,457,458],
    "Overcoat": [90,91,204,205,372,412,413,540,541,542,589,616,782,783,784],
    "Overgrow": [511,512],
    "Cloud Nine": [108,333,334,463,780],
    "Levitate*": [329,330],
    "Sand Rush": [27,28],
    "Solar Power": [4,5,6,694,695],
    "Blaze": [513,514],
    "Anticipation": [133,598],
    "Damp": [46,47,116,117,230,258,259,260,592,593],
    "Guts": [136,403,404,405],
    "Gluttony": [69,70,71,143,316,317,325,326,446],
    "Infiltrator": [41,42,169,187,188,189,291,336,442,607,608,609,686,687],
    "Sand Force": [50,51,299,422,423,449,450,476,524,525,526],
    "Dry Skin": [124],
    "Honey Gather": [216],
    "Unburden": [106,252,253,254,617,684,685],
    "Sniper": [15,21,22,167,168],
    "Run Away": [10,13,43,48,265,290,401,506],
    "Insomnia": [225,710,711],
    "Technician": [122,286,402,407,439],
    "Swift Swim": [54,55,60,61,62,347,348,564,565,614],
    "Battle Armor": [104,105],
    "Early Bird": [191,192],
    "Intimidate": [211,559,560,725,726,727],
    "Marvel Scale": [147,148],
    "Toxic Boost": [335],
    "Tangled Feet": [84,85],
    "Hydration": [131,134,238,339,340,368,370,580,581],
    "Vital Spirit": [125,126,236,239,240,466,467],
    "Imposter": [132],
    "Serene Grace": [585,586],
    "Static": [145],
    "Oblivious": [363,364,365,757,758],
    "Truant": [632],
    "Quick Feet": [135,263,264,285],
    "Light Metal": [212,374,375,376,379],
    "Limber": [427,428],
    "Gooey": [704,705,706],
    "Sap Sipper": [183,184,203,234,241,298,522,523],
    "Swarm": [595,596,636,637],
    "Pickup": [731,732],
    "Cursed Body": [353,354,478],
    "Frisk": [40,161,162,193,355,356,469,477],
    "Heavy Metal": [304,305,306,436,437],
    "Flash Fire": [155,156,157],
    "Immunity": [207],
    "Hustle": [19,20,29,30,32,33,415,627],
    "White Smoke": [631],
    "Shadow Tag": [574,575,576],
    "Rattled": [129,165,185,206,209,210,261,293,366,438,613],
    "Flame Body": [77,78,146],
    "Motor Drive": [587],
    "Skill Link": [190,424,572,573],
    "Rivalry": [267,519,520,521],
    "Super Luck": [175,176,468],
    "Weak Armor": [95,138,139,140,141,218,219,227,557,558,582,583,584,629,630],
    "Snow Cloak": [144],
    "Poison Touch": [88,89,453,454],
    "Pickpocket": [215,273,274,275,461,688,689],
    "Magician": [653,654,655,707],
    "Inner Focus": [96,97,107,115,197,554,749,750],
    "Soundproof": [410,411,459,460,626],
    "Aroma Veil": [682,683],
    "Leaf Guard": [152,153,154,315,406,548,549],
    "Friend Guard": [35,39,173,174,440,664,665,666],
    "Iron Fist": [166,390,391,392,532,533,534],
    "Unnerve": [23,24,52,53,142,150,217,228,229,248,284,416,610,611,612,760],
    "Speed Boost": [255,256,257,318,319,543,544,545],
    "Adaptability": [341,342,349,690,691,734,735],
    "Drizzle": [186],
    "Stench": [44],
    "Liquid Voice": [728,729,730],
    "Steadfast": [66,67,68,123,237,744,745],
    "Defiant": [56,57,83,393,394,395,432,628,641,642,766],
    "Anger Point": [323,551,552,553,739,740],
    "Analytic": [81,82,120,121,137,233,462,474,504,505,605,606],
    "Justified": [58,59,359,448,475],
    "Multiscale": [149,249],
    "Magic Bounce": [177,178,196],
    "Big Pecks": [16,17,18,441],
    "Bulletproof": [650,651,652],
    "Effect Spore": [45],
    "Telepathy": [202,280,281,282,307,308,360,483,484,487,517,518,714,715,785,786,787,788],
    "Aftermath": [100,101,568,569],
    "Drought": [37,38],
    "Water Absorb": [170,171,331,332,535,536,537,751,752],
    "Ice Body": [86,87,378,471],
    "Rock Head": [697],
    "Flare Boost": [425,426],
    "Iron Barbs*": [597],
    "Pixilate": [700],
    "Huge Power": [659,660],
    "Contrary": [213,327,495,496,497,753,754],
    "Klutz": [531],
    "No Guard": [588,622,623],
    "Regenerator": [79,80,114,199,222,250,465,577,578,579,590,591,594,747,748],
    "Shed Skin*": [11,14,247,266,268],
    "Scrappy": [276,277,294,295,507,508,674,675],
    "Grass Pelt": [672,673],
    "Competitive": [678],
    "Rough Skin": [443,444,445],
    "Storm Drain": [345,346,556],
    "Keen Eye": [431,434,435,451,452],
    "Healer": [113,182,242],
    "Volt Absorb": [312,417],
    "Sweet Veil": [742,743,761,762,763],
    "Wonder Skin": [49,300,301,779]
};
const ALOLAN_HIDDEN_ABILITIES = {
    "Thick Fat": [19,20],
    "Surge Surfer*": [26],
    "Slush Rush": [27,28],
    "Snow Warning": [37,38],
    "Sand Force": [50,51],
    "Rattled": [52,53],
    "Galvanize": [74,75,76],
    "Power of Alchemy": [88,89],
    "Harvest": [103],
    "Rock Head": [105]
};
const TAB_NAMES = { "FT": "For Trade", "LF": "Looking For", "NFT": "Not For Trade", "?": "Other" };
// Stat Attributes object, used for IVs & EVs
var StatAttributes = function() {
    this.hp  = 0;
    this.atk = 0;
    this.def = 0;
    this.spa = 0;
    this.spd = 0;
    this.spe = 0;
};
// Pokémon object
var Pokemon = function() {
    this.dexNo = 0;
    this.name = "";
    this.form = "";
    this.nickname = "";
    this.ot = "";
    this.tid = 0;
    this.level = 1;
    this.gender = undefined;
    this.isShiny = false;
    this.nature = "";
    this.ability = "";
    this.ivs = new StatAttributes();
    this.evs = new StatAttributes();
    this.hiddenPower = "";
    this.eggMoves = [];
    this.balls = [];
    this.language = "";
    this.notes = "";
    this.genderRatio = function() {
        if (FEMALE_ONLY_POKEMON.indexOf(this.dexNo) > -1) {
            return "gender-ratio-1-0";
        } else if (POKEMON_WITH_A_GENDER_RATIO_OF_SEVEN_FEMALES_TO_ONE_MALE.indexOf(this.dexNo) > -1) {
            return "gender-ratio-7-1";        
        } else if (POKEMON_WITH_A_GENDER_RATIO_OF_THREE_FEMALES_TO_ONE_MALE.indexOf(this.dexNo) > -1) {
            return "gender-ratio-3-1";
        } else if (POKEMON_WITH_A_GENDER_RATIO_OF_ONE_FEMALE_TO_THREE_MALES.indexOf(this.dexNo) > -1) {
            return "gender-ratio-1-3";
        } else if (POKEMON_WITH_A_GENDER_RATIO_OF_ONE_FEMALE_TO_SEVEN_MALES.indexOf(this.dexNo) > -1) {
            return "gender-ratio-1-7";
        } else if (MALE_ONLY_POKEMON.indexOf(this.dexNo) > -1) {
            return "gender-ratio-0-1";
        } else if (GENDERLESS_POKEMON.indexOf(this.dexNo) > -1) {
            return "gender-ratio-0-0";
        }    
        return "gender-ratio-1-1";
    };
    this.generation = function() {
        if (this.dexNo > 151) {
            if (this.dexNo > 251) {
                if (this.dexNo > 386) {
                    if (this.dexNo > 493) {
                        if (this.dexNo > 649) {
                            if (this.dexNo > 721) {
                                return 7;
                            }
                            return 6;
                        }
                        return 5;
                    }
                    return 4;
                }
                return 3;
            }
            return 2;
        }
        return 1; 
    };
    this.hasHiddenAbility = function() {
        if (this.form == "Alola Form") {
            return this.ability in ALOLAN_HIDDEN_ABILITIES && ALOLAN_HIDDEN_ABILITIES[this.ability].indexOf(this.dexNo) > -1;
        }
        return this.ability in HIDDEN_ABILITIES && HIDDEN_ABILITIES[this.ability].indexOf(this.dexNo) > -1;
    };
    this.isBaby = function() {
        return BABY_POKEMON.indexOf(this.dexNo) > -1;
    };
};
// Functions
function getSpriteClass(pokemon) {
    var cssClass = pokemon.name;
    switch (pokemon.dexNo) {
        case 29: // NidoranF
            cssClass = "nidoran";
            break;
        case 32: // NidoranM
            cssClass = "nidoran-male";
            break;
        case 521: // Unfezant
        case 592: // Frillish
        case 593: // Jellicent
        case 668: // Pyroar
        case 678: // Meowstic
            if (pokemon.gender == "M") {
                cssClass += "-male";
            }
            break;
        case 669: // Flabébé
            cssClass = cssClass.replace(/é/g, 'e');
            break;
    }
    if (pokemon.form) {
        switch (pokemon.form) {
            case "Normal Forme":
            case "Plant Cloak":
            case "West Sea":
            case "Rotom":
            case "Altered Forme":
            case "Land Forme":
            case "Red-Striped Form":
            case "Spring Form":
            case "Incarnate Forme":
            case "Ordinary Form":
            case "Meadow Pattern":
            case "Red Flower":
            case "Average Size":
            case "Small Size":
            case "Large Size":
            case "Super Size":
            case "50% Forme":
            case "Baile Style":
            case "Midday Form":
            case "Meteor Form":
                break;
            case "Ash-Greninja":
                cssClass = "greninja-ash";
                break;
            default:
                cssClass += "-" + pokemon.form.substring(0, pokemon.form.lastIndexOf(" "));
                break;
        }
    }
    cssClass = cssClass.toLowerCase().replace(' ', '_').replace('\'', '').replace('.', '').replace(':', '').replace('%', '');
    return cssClass.toLowerCase();
}
function getModelUrl(dexNo, spriteClass, gender, isShiny) {
    var modelUrl = "http://www.pkparaiso.com/imagenes/";
    if (dexNo > 721 || spriteClass.endsWith("-alola") || spriteClass.endsWith("-10")) {
        modelUrl += "sol-luna";
    } else {
        modelUrl += "xy";
    }
    modelUrl += "/sprites/animados" + (isShiny ? "-shiny" : '') + "/" + spriteClass
    if (POKEMON_WITH_GENDER_DIFFERENCES.indexOf(dexNo) > -1 && spriteClass.indexOf("-alola") == -1) {
        if (gender == "F") {
            modelUrl += dexNo == 29 ? "_f" : "-f";
        } else {
            modelUrl  = modelUrl.replace("-male", '');
            if (dexNo == 32) modelUrl += "_m";
        }
    } else {
        if (TAPUS.indexOf(dexNo) > -1) {
            modelUrl  = modelUrl.replace("_", '');
        } else if (dexNo == 122) { // Mr. Mime
            modelUrl  = modelUrl.replace("mr", "mr.");
        } else if (dexNo == 772) { // Type: Null
            modelUrl  = modelUrl.replace("-", '');
        }
    }
    return modelUrl  + ".gif";
}
function getTags(pokemon) {
    var tags = [];
    tags.push("gen" + pokemon.generation());
    tags.push(pokemon.genderRatio());
    if (pokemon.isBaby()) tags.push("baby");
    if (pokemon.hasHiddenAbility()) tags.push("hidden-ability");
    if (pokemon.isShiny) tags.push("shiny");
    for (i = 0; i < pokemon.balls.length; i++) {
        tags.push(pokemon.balls[i].toLowerCase().replace(' ', '-').replace('é', 'e'));
    }
    return tags.join(' ');
}
function getData(pokemon) {
    var data = "";
    if (isForIndividualPokemon) {
        Object.keys(pokemon).forEach(function(i) {
            if (typeof pokemon[i] !== "function") {
                if (typeof pokemon[i] === "object") {
                    
                } else {
                    data += " data-" + i + "=\"" + pokemon[i] + "\"";
                }
            }
            
        });
        data += " data-generation=\"" + pokemon.generation() + "\"";
    }
    return data;
}
function filterPokemon() {
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
    // get misc filters
    var showOnlyBabyPokemon = $("#misc-filter [value='baby']:selected").length > 0;
    var showOnlyPokemonWithHiddenAbility = $("#misc-filter [value='hidden-ability']:selected").length > 0;
    var showOnlyShinyPokemon = $("#misc-filter [value='shiny']:selected").length > 0;
    // show Pokémon that have at least one class of each array (generations, balls, ratios)
    $("tbody tr").each(function() {
        var $this = $(this);
        var name = $this.find(".name").text().toLowerCase();
        var query = $("#search-bar").val().toLowerCase();
        if (name.indexOf(query) == -1) return;
        if (showOnlyBabyPokemon && !$this.hasClass("baby")) return;
        if (showOnlyPokemonWithHiddenAbility && !$this.hasClass("hidden-ability")) return;
        if (showOnlyShinyPokemon && !$this.hasClass("shiny")) return;
        if ($this.is(gens.join(',')) && $this.is(ratios.join(',')) && $this.is(balls.join(','))) {
            $this.removeClass("filtered");
        }
    });
}
function getWorksheetUrl(spreadsheetId, worksheetId) {
    return "https://spreadsheets.google.com/feeds/list/" + spreadsheetId + "/" + worksheetId + "/public/values?alt=json";
}
function getSpreadsheetUrl(spreadsheetId) {
    return "https://spreadsheets.google.com/feeds/worksheets/" + spreadsheetId + "/public/basic?alt=json";
}
function getValue(field) {
    if (field) return field.$t;
    return undefined;
}
function isInBlacklist(title) {
    var blacklist = ["template", "config", "item", "database"];
    title = title.toLowerCase();
    for (i = 0; i < blacklist.length; i++) {
        if (title.indexOf(blacklist[i]) > -1) {
            return true;
        }
    }
    return title == "db";
}
function sheetIsForIndividualPokemon(entry) {
    return entry.gsx$nickname ||
        entry.gsx$ot ||
        entry.gsx$tid ||
        entry.gsx$lv ||
        entry.gsx$hpev ||
        entry.gsx$atkev ||
        entry.gsx$defev ||
        entry.gsx$spaev ||
        entry.gsx$spdev ||
        entry.gsx$speev ||
        entry.gsx$ball ||
        entry.gsx$lang ||
        entry.gsx$notes ? true : false;
}
// Default values for config stuff
spreadsheetId = window.location.search.substring(1) || spreadsheetId;
var worksheetId = 1;
var isForIndividualPokemon = false;

$(document).ready(function() {
    $.getJSON(getWorksheetUrl(spreadsheetId, 1), function(data) {
        // read config worksheet if exists
        var entry = data.feed.entry[0];
        if (entry.gsx$ingamename) {
            friendCode = entry.gsx$friendcode.$t || friendCode;
            inGameName = entry.gsx$ingamename.$t || inGameName;
            contactUrl = entry.gsx$contacturl.$t || contactUrl;
            trainerIconUrl = entry.gsx$trainericonurl.$t || trainerIconUrl;
            worksheetId = 2;
        }
        // get worksheet from URL, otherwise it defaults to 1st sheet
        var hash = window.location.hash.slice(-1);
        if (!isNaN(hash) && hash) {
            worksheetId = hash;
        }
        // display trainer info
        $("title").text(inGameName + "'s Pokémon Trading Sheet");
        $("header h1").prepend("<a href=\"" + contactUrl + "\">" + inGameName + "</a>");
        if (friendCode || inGameName) {
            var trainerInfo = "";
            if (!trainerIconUrl) {
                trainerIconUrl = "static/blank.gif";
            }
            trainerInfo += "<img src=\"" + trainerIconUrl + "\" alt=\"\" width=\"48\" height=\"48\">";
            trainerInfo += "<dl>";
            if (inGameName) {
                trainerInfo += "<dt><abbr title=\"In-Game Name\">IGN</abbr></dt>";
                trainerInfo += "<dd>" + inGameName + "</dd>";
            }
            if (friendCode) {
                trainerInfo += "<dt><abbr title=\"Friend Code\">FC</abbr></dt>";
                trainerInfo += "<dd>" + friendCode + "</dd>";
            }
            trainerInfo += "</dl>";
            $("#trainer-info").prepend(trainerInfo);
        }
        // display Pokémon
        displayPokemon();
        // add button links to other tabs
        $.getJSON(getSpreadsheetUrl(spreadsheetId), function(data) {
            var entry = data.feed.entry;
            var tabs = { "FT": "", "LF": "", "NFT": "", "?": "" };
            $(entry).each(function(index){
                var title = getValue(this.title);
                var thisId = index + 1;
                var tab = "<li" + (thisId == worksheetId ? " class=\"current\"" : '') + "><a href=\"#" + thisId + "\">";
                if (title.startsWith("FT:")) {
                    tabs["FT"] += tab + title.slice(3) + "</a>";
                } else if (title.startsWith("LF:")) {
                    tabs["LF"] += tab + title.slice(3) + "</a>";
                } else if (title.startsWith("NFT:")) {
                    tabs["NFT"] += tab + title.slice(4) + "</a>";
                } else if (!isInBlacklist(title)) {
                    tabs["?"] += tab + title + "</a>";
                }
            });
            Object.keys(tabs).forEach(function(i) {
                if (tabs[i]) $("nav > ul").append("<li><abbr title=\"" + TAB_NAMES[i] + "\">" + i + "</abbr><ul>" + tabs[i] + "</ul>");
            });
            // make each button reload the page on click
            $("nav a").each(function() {
                $(this).click(function() {
                    window.location.hash = this.hash;
                    location.reload();
                });
            });
        });
    });
});

function displayPokemon(){
    $.getJSON(getWorksheetUrl(spreadsheetId, worksheetId), function(data) {
        var entry = data.feed.entry;
        if (entry && entry[0]) {
            isForIndividualPokemon = sheetIsForIndividualPokemon(entry[0]);
        }
        $(entry).each(function(){
            var pokemon = new Pokemon();
            pokemon.dexNo = Number(getValue(this.gsx$dexno));
            pokemon.name = getValue(this.gsx$name);
            pokemon.form = getValue(this.gsx$form);
            pokemon.nature = getValue(this.gsx$nature);
            pokemon.ability = getValue(this.gsx$ability);
            pokemon.ivs.hp = getValue(this.gsx$hpiv) || "x";
            pokemon.ivs.atk = getValue(this.gsx$atkiv) || "x";
            pokemon.ivs.def = getValue(this.gsx$defiv) || "x";
            pokemon.ivs.spa = getValue(this.gsx$spaiv) || "x";
            pokemon.ivs.spd = getValue(this.gsx$spdiv) || "x";
            pokemon.ivs.spe = getValue(this.gsx$speiv) || "x";
            pokemon.hiddenPower = getValue(this.gsx$hiddenpower);
            pokemon.eggMoves = [
                getValue(this.gsx$eggmove1),
                getValue(this.gsx$eggmove2),
                getValue(this.gsx$eggmove3),
                getValue(this.gsx$eggmove4)
                ].filter(function(e){return e;});
            pokemon.gender = getValue(this.gsx$sex);
            switch (pokemon.genderRatio()) {
                case "gender-ratio-1-0":
                    pokemon.gender = 'F';
                    break;
                case "gender-ratio-0-1":
                    pokemon.gender = 'M';
                    break;
                case "gender-ratio-0-0":
                    pokemon.gender = '-';
                    break;
            }
            pokemon.isShiny = getValue(this.gsx$shiny);
            pokemon.nickname = getValue(this.gsx$nickname);
            pokemon.ot = getValue(this.gsx$ot);
            pokemon.tid = getValue(this.gsx$tid);
            pokemon.level = getValue(this.gsx$lv);
            pokemon.evs.hp = getValue(this.gsx$hpev);
            pokemon.evs.atk = getValue(this.gsx$atkev);
            pokemon.evs.def = getValue(this.gsx$defev);
            pokemon.evs.spa = getValue(this.gsx$spaev);
            pokemon.evs.spd = getValue(this.gsx$spdev);
            pokemon.evs.spe = getValue(this.gsx$speev);
            if (getValue(this.gsx$ball)) {
                pokemon.balls.push(getValue(this.gsx$ball));
            }
            pokemon.language = getValue(this.gsx$lang);
            pokemon.notes = getValue(this.gsx$notes);
            if (this.gsx$_dcgjs) pokemon.balls.push("Poké Ball");
            if (this.gsx$_ddv49) pokemon.balls.push("Great Ball");
            if (this.gsx$_d415a) pokemon.balls.push("Ultra Ball");
            if (this.gsx$_d5fpr) pokemon.balls.push("Master Ball");
            if (this.gsx$_d6ua4) pokemon.balls.push("Safari Ball");
            if (this.gsx$_d88ul) pokemon.balls.push("Level Ball");
            if (this.gsx$_dkvya) pokemon.balls.push("Lure Ball");
            if (this.gsx$_dmair) pokemon.balls.push("Moon Ball");
            if (this.gsx$_dnp34) pokemon.balls.push("Friend Ball");
            if (this.gsx$_dp3nl) pokemon.balls.push("Love Ball");
            if (this.gsx$_df9om) pokemon.balls.push("Heavy Ball");
            if (this.gsx$_dgo93) pokemon.balls.push("Fast Ball");
            if (this.gsx$_di2tg) pokemon.balls.push("Sport Ball");
            if (this.gsx$_djhdx) pokemon.balls.push("Premier Ball");
            if (this.gsx$_dw4je) pokemon.balls.push("Repeat Ball");
            if (this.gsx$_dxj3v) pokemon.balls.push("Timer Ball");
            if (this.gsx$_dyxo8) pokemon.balls.push("Nest Ball");
            if (this.gsx$_e0c8p) pokemon.balls.push("Net Ball");
            if (this.gsx$_dqi9q) pokemon.balls.push("Dive Ball");
            if (this.gsx$_drwu7) pokemon.balls.push("Luxury Ball");
            if (this.gsx$_dtbek) pokemon.balls.push("Heal Ball");
            if (this.gsx$_dupz1) pokemon.balls.push("Quick Ball");
            if (this.gsx$_e7d2q) pokemon.balls.push("Dusk Ball");
            if (this.gsx$_e8rn7) pokemon.balls.push("Cherish Ball");
            if (this.gsx$_ea67k) pokemon.balls.push("Dream Ball");
            if (this.gsx$_ebks1) pokemon.balls.push("Beast Ball");
            
            var row = "<tr class=\"" + getTags(pokemon) + "\"" + getData(pokemon) + ">";
            // Sprite
            row += "<td class=\"sprite\"><span class=\"menu-sprite " + getSpriteClass(pokemon) + "\" title=\"" + pokemon.name + "\">" + pokemon.dexNo + "</span></td>";
            // Name
            row += "<td class=\"name\">" + (pokemon.dexNo == 29 || pokemon.dexNo == 32 ? "Nidoran" : pokemon.name);
            if (pokemon.gender == "F") {
                 row += " <span class=\"gender female\" title=\"Female\">&#x2640;</span>";
            } else if (pokemon.gender == "M") {
                 row += " <span class=\"gender male\" title=\"Male\">&#x2642;</span>";
            }
            if (pokemon.form) {
                row += "<br><span class=\"form\">" + pokemon.form + "</span>";
            }
            row += "</td>";
            // Nature
            row += "<td class=\"nature " + pokemon.nature.toLowerCase() + "\">" + pokemon.nature + "</td>";
            // Ability
            row += "<td class=\"ability\">" + (pokemon.ability.endsWith('*') ? pokemon.ability.slice(0,-1) : pokemon.ability) + "</td>";
            // IVs & EVs
            var statAttribute;
            for (i = 0; i < BATTLE_STATS.length; i++) {
                statAttribute = pokemon.ivs[BATTLE_STATS_ABBR[i].toLowerCase()];
                if (isNaN(statAttribute)) {
                    switch (statAttribute) {
                        case "2x":
                            statAttribute = "<abbr title=\"Any even value\">" + statAttribute;
                            break;
                        case "2x+1":
                            statAttribute = "<abbr title=\"Any odd value\">" + statAttribute;
                            break;
                        default:
                            statAttribute = "<abbr title=\"Any value\">" + statAttribute;
                            break;
                    }
                    statAttribute += "</abbr>";
                }
                row += "<td class=\"" + BATTLE_STATS_ABBR[i].toLowerCase() + "\">" + statAttribute + "</td>";
            }
            if (isForIndividualPokemon) {
                var formattedIvs = [];
                for (i = 0; i < BATTLE_STATS.length; i++) {
                    statAttribute = pokemon.ivs[BATTLE_STATS_ABBR[i].toLowerCase()];
                    formattedIvs.push("<abbr title=\"" + BATTLE_STATS[i] + " IV\">" + statAttribute + "</abbr>");
                }
                row += "<td class=\"ivs hidden\">" + formattedIvs.join('/') + "</td>";
                var formattedEvs = [];
                for (i = 0; i < BATTLE_STATS.length; i++) {
                    statAttribute = pokemon.evs[BATTLE_STATS_ABBR[i].toLowerCase()];
                    if (statAttribute) {
                        formattedEvs.push("<abbr title=\"" + BATTLE_STATS[i] + " EV\">" + statAttribute + " " + BATTLE_STATS_ABBR[i] + "</abbr>");
                    }
                }
                formattedEvs = formattedEvs.join(' / ');
                if (!formattedEvs) {
                    formattedEvs = "Not EV-trained";
                }
                row += "<td class=\"evs hidden\">" + formattedEvs + "</td>";
            }
            // Hidden Power
            row += "<td class=\"hidden-power\">";
            if (pokemon.hiddenPower) {
                row += "<span title=\"" + pokemon.hiddenPower + "\"";
                row += " class=\"hidden-power " + pokemon.hiddenPower.toLowerCase() + "\">";
                row += pokemon.hiddenPower + "</span>";
            } else {
                row += "???";
            }
            row += "</td>";
            // Egg Moves
            row += "<td class=\"egg-moves\">" + pokemon.eggMoves.join(', ') + "</td>";       
            // Poké Balls
            row += "<td class=\"poke-balls rows" + Math.ceil(pokemon.balls.length / 3) + "\">";
            for (i = 0; i < pokemon.balls.length; i++) {
                row += "<span title=\"" + pokemon.balls[i] + "\"";
                row += " class=\"item-sprite " + pokemon.balls[i].toLowerCase().replace(' ', '-').replace('é', 'e');
                row += " row" + Math.ceil((i + 1)/ 3) + "\">";
                row += pokemon.balls[i] + "</span>";
            }
            row += "</td></tr>";
            $("tbody").append(row);
        });
        $("#loader").fadeOut("slow");
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
        if (isForIndividualPokemon) {
            $("body").addClass("shiny");
            // Show modal
            $("tr").click(function() {
                var $this = $(this);
                var $pokemonInfo = $("#pokemon-info");
                var dexNo = Number($this.data("dexno"));
                var isShiny = $this.data("isshiny");
                if (isShiny) $pokemonInfo.addClass("shiny");
                // Name, Nickname, Sex & Level
                var name = dexNo == 29 || dexNo == 32 ? "Nidoran" : $this.data("name");
                var nickname = $this.data("nickname");
                if (nickname) {
                    name = nickname + " (" + name + ")";
                }
                $pokemonInfo.find(".name").text(name);
                var gender = $this.data("gender");
                if (gender == "F") {
                    $pokemonInfo.find(".gender").html("&#x2640;").attr("class", "gender female");
                } else if (gender == "M") {
                    $pokemonInfo.find(".gender").html("&#x2642;").attr("class", "gender male");
                } else {
                    $pokemonInfo.find(".gender").text('').attr("class", "gender");
                }
                $pokemonInfo.find(".level").text("Lv. " + $this.data("level"));
                // Pokémon Sprite
                var $sprite = $this.find(".menu-sprite");
                var spriteClass = $sprite.attr("class").split(' ')[1];
                $("#pokemon-info h1").prepend("<span class=\"menu-sprite " + spriteClass + "\">" + $this.data("dexno") + "</span>");
                // Pokémon Model
                var generation = Number($this.data("generation"));
                $(new Image())
                    .attr("class", "model")
                    .attr("src", getModelUrl(dexNo, spriteClass, gender, isShiny))
                    .appendTo($("#pokemon-info figure")).fadeIn();
                // Trainer
                $pokemonInfo.find(".trainer").next().text($this.data("ot") + " (" + $this.data("tid") + ")");
                // Nature & Ability
                $pokemonInfo.find(".nature").next().text($this.data("nature"));
                var ability = $this.data("ability");
                $pokemonInfo.find(".ability").next().text(ability.endsWith('*') ? ability.slice(0,-1) : ability);
                // Language
                var language = $this.data("language");
                $pokemonInfo.find(".language").text(language).attr("title", LANGUAGES[language]);
                // IVs & EVs
                var statAttributes = $this.find(".ivs").html();
                $pokemonInfo.find(".ivs").next().html(statAttributes);
                statAttributes = $this.find(".evs").html();
                $pokemonInfo.find(".evs").next().html(statAttributes);
                // Egg Moves
                var eggMoves = $this.find(".egg-moves").text().split(', ');
                if (eggMoves[0]) {
                    for (i = 0; i < eggMoves.length; i++) {
                        $("#pokemon-info ul").append("<li>" + eggMoves[i]);
                    }
                }
                // Poké Ball
                var ball = $sprite.attr("title");
                $sprite = $this.find(".item-sprite");
                spriteClass = $sprite.attr("class").split(' ')[1];
                $("#pokemon-info figure").append("<span class=\"item-sprite " + spriteClass + "\" title=\"" + ball + "\">" + ball + "</span>");
                // Notes
                var notes = $this.data("notes");
                if (notes) {
                    $("#pokemon-info").append("<p class=\"notes\">" + notes + "</p>");
                }
                // Unhide modal
                $("#modal").removeClass("hidden");
            });
            $("#modal").click(function() {
                $("#pokemon-info .menu-sprite").remove();
                $("#pokemon-info .item-sprite").remove();
                $("#pokemon-info figure img").remove();
                $("#pokemon-info ul li").remove();
                $("#pokemon-info .notes").remove();
                $("#pokemon-info").removeClass("shiny");
                $("#modal").addClass("hidden");
            });
            $("#pokemon-info").click(function(e) {
                e.stopPropagation();
            });
        }
    });
    $("select").multiselect({
        buttonWidth: '140px',
        numberDisplayed: 0,
        includeSelectAllOption: true,
        maxHeight: 420,
        enableClickableOptGroups: true,
        onChange: filterPokemon,
        onSelectAll: filterPokemon
    });
    $("#search-bar").on("input", filterPokemon);
    $("select:not(#misc-filter)").multiselect("selectAll", false);
    $("select").multiselect('updateButtonText');
}
