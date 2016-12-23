<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:output method="html" encoding="utf-8" doctype-system="about:legacy-compat" indent="yes" />
<xsl:variable name="baby" select="'172 173 174 175 236 238 239 240 298 360 433 438 439 440 446 447 458'" />
<xsl:variable name="female-only" select="'29 30 31 113 115 124 241 242 314 380 413 416 440 478 488 548 549 629 630 669 670 671 758 761 762 763'" />
<xsl:variable name="seven-females-per-male" select="'667 668'" />
<xsl:variable name="three-females-per-male" select="'35 36 37 38 39 40 173 174 209 210 222 298 300 301 370 431 432 572 573 574 575 576 741 764'" />
<xsl:variable name="three-males-per-female" select="'58 59 63 64 65 66 67 68 125 126 239 240 296 297 466 467 532 533 534'" />
<xsl:variable name="seven-males-per-female" select="'1 2 3 4 5 6 7 8 9 133 134 135 136 138 139 140 141 142 143 152 153 154 155 156 157 158 159 160 175 176 196 197 252 253 254 255 256 257 258 259 260 345 346 347 348 369 387 388 389 390 391 392 393 394 395 408 409 410 411 415 446 447 448 468 470 471 495 496 497 498 499 500 501 502 503 511 512 513 514 515 516 564 565 566 567 570 571 650 651 652 653 654 655 656 657 658 696 697 698 699 700 722 723 724 725 726 727 728 729 730 757'" />
<xsl:variable name="male-only" select="'32 33 34 106 107 128 236 237 313 381 414 475 538 539 627 628 641 642 645'" />
<xsl:variable name="genderless" select="'81 82 100 101 120 121 137 233 292 337 338 343 344 374 375 376 436 437 462 474 479 489 490 599 600 601 615 622 623 703 774 781'" />



<xsl:template match="/">

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>/u/richi3f's Pokémon Stock</title>
    <link rel="stylesheet" href="static/bootstrap.min.css" />
    <link rel="stylesheet" href="static/style.css" />
</head>

<body>
    <article>
        <h1><a href="http://reddit.com/u/richi3f">/u/richi3f</a>'s Pokémon Stock</h1>
        <h2><xsl:value-of select="shop/title" /></h2>
        <div id="filters">
            <h3>Filters</h3>
            <div class="filter">
                <label for="gen-filter">Generation</label>
                <select id="gen-filter" multiple="multiple">
                    <option value="gen1">Generation I</option>
                    <option value="gen2">Generation II</option>
                    <option value="gen3">Generation III</option>
                    <option value="gen4">Generation IV</option>
                    <option value="gen5">Generation V</option>
                    <option value="gen6">Generation VI</option>
                    <option value="gen7">Generation VII</option>
                </select>
            </div><xsl:comment>
            </xsl:comment><div class="filter">
                <label for="ball-filter">Poké Ball</label>
                <select id="ball-filter" multiple="multiple">
                    <option value="poke-ball">Poké Ball</option>
                    <option value="great-ball">Great Ball</option>
                    <option value="ultra-ball">Ultra Ball</option>
                    <option value="safari-ball">Safari Ball</option>
                    <option value="net-ball">Net Ball</option>
                    <option value="dive-ball">Dive Ball</option>
                    <option value="nest-ball">Nest Ball</option>
                    <option value="repeat-ball">Repeat Ball</option>
                    <option value="timer-ball">Timer Ball</option>
                    <option value="luxury-ball">Luxury Ball</option>
                    <option value="premier-ball">Premier Ball</option>
                    <option value="dusk-ball">Dusk Ball</option>
                    <option value="heal-ball">Heal Ball</option>
                    <option value="quick-ball">Quick Ball</option>
                    <option value="fast-ball">Fast Ball</option>
                    <option value="level-ball">Level Ball</option>
                    <option value="lure-ball">Lure Ball</option>
                    <option value="heavy-ball">Heavy Ball</option>
                    <option value="love-ball">Love Ball</option>
                    <option value="friend-ball">Friend Ball</option>
                    <option value="moon-ball">Moon Ball</option>
                    <option value="sport-ball">Sport Ball</option>
                    <option value="dream-ball">Dream Ball</option>
                    <option value="beast-ball">Beast Ball</option>
                </select>
            </div><xsl:comment>
            </xsl:comment><div class="filter">
                <label for="ratio-filter">Gender Ratio</label>
                <select id="ratio-filter" multiple="multiple">
                    <option value="female">Female Only</option>
                    <option value="seven-females-per-male">7 ♀ : 1 ♂</option>
                    <option value="three-females-per-male">3 ♀ : 1 ♂</option>
                    <option value="one-female-per-male">1 ♀ : 1 ♂</option>
                    <option value="three-males-per-female">1 ♀ : 3 ♂</option>
                    <option value="seven-males-per-female">1 ♀ : 7 ♂</option>
                    <option value="male">Male Only</option>
                    <option value="genderless">Genderless</option>
                </select>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="name" colspan="2" rowspan="2">Pokémon</th>
                    <th class="nature" rowspan="2">Nature</th>
                    <th class="ability" rowspan="2">Ability</th>
                    <th class="ivs" colspan="6"><abbr title="Individual Values">IVs</abbr></th>
                    <th class="hidden-power" rowspan="2">Hidden Power</th>
                    <th class="egg-moves" rowspan="2">Egg Moves</th>
                    <th class="poke-balls" rowspan="2">Poké Ball</th>
                </tr>
                <tr>
                    <th class="hp"><abbr title="Hit Points">HP</abbr></th>
                    <th class="atk"><abbr title="Attack">Atk</abbr></th>
                    <th class="def"><abbr title="Defense">Def</abbr></th>
                    <th class="spa"><abbr title="Special Attack">SpA</abbr></th>
                    <th class="spd"><abbr title="Special Defense">SpD</abbr></th>
                    <th class="spe"><abbr title="Speed">Spe</abbr></th>
                </tr>
            </thead>
            <tbody>
                <xsl:apply-templates select="shop/pokemon">
                    <xsl:sort select="number" data-type="number" />
                </xsl:apply-templates>
            </tbody>
        </table>
        <footer role="contentinfo">
            <p>
                © of <a href="http://twitter.com/richi3f">richi3f</a>, <time datetime="2016">2016</time><br />
                Bootstrap is © of Twitter, <time datetime="2016">2016</time><br />
                <a href="http://davidstutz.github.io/bootstrap-multiselect/">Bootstrap Multiselect</a> is © of <a href="http://davidstutz.de/">David Stutz</a>, <time datetime="2012">2012</time>-<time datetime="2014">2014</time><br />
                Pokémon is © of Nintendo, <time datetime="1995">1995</time>-<time datetime="2016">2016</time>
            </p>
        </footer>
    </article>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="static/bootstrap.min.js"></script>
    <script src="static/bootstrap.multiselect.js"></script>
    <script src="static/script.js"></script>
</body>
</html>

</xsl:template>

<xsl:template match="pokemon">
    <xsl:apply-templates select="set" />
</xsl:template>

<xsl:template match="set">
<tr>
    <xsl:attribute name="class">
        <xsl:if test="ability/@hidden">hidden-ability </xsl:if>
        <xsl:text>gen</xsl:text>
        <xsl:choose>
            <xsl:when test="../number &lt;= 151">1 </xsl:when>
            <xsl:when test="../number &lt;= 251">2 </xsl:when>
            <xsl:when test="../number &lt;= 386">3 </xsl:when>
            <xsl:when test="../number &lt;= 493">4 </xsl:when>
            <xsl:when test="../number &lt;= 649">5 </xsl:when>
            <xsl:when test="../number &gt; 721">7 </xsl:when>
            <xsl:otherwise>6 </xsl:otherwise>
        </xsl:choose>
        <xsl:if test="contains(concat(' ', $baby, ' '),concat(' ', ../number, ' '))">baby </xsl:if>
        <xsl:choose>
            <xsl:when test="contains(concat(' ', $female-only, ' '),concat(' ', ../number, ' '))">female </xsl:when>
            <xsl:when test="contains(concat(' ', $seven-females-per-male, ' '),concat(' ', ../number, ' '))">seven-females-per-male </xsl:when>
            <xsl:when test="contains(concat(' ', $three-females-per-male, ' '),concat(' ', ../number, ' '))">three-females-per-male </xsl:when>
            <xsl:when test="contains(concat(' ', $three-males-per-female, ' '),concat(' ', ../number, ' '))">three-males-per-female </xsl:when>
            <xsl:when test="contains(concat(' ', $seven-males-per-female, ' '),concat(' ', ../number, ' '))">seven-males-per-female </xsl:when>
            <xsl:when test="contains(concat(' ', $male-only, ' '),concat(' ', ../number, ' '))">male </xsl:when>
            <xsl:when test="contains(concat(' ', $genderless, ' '),concat(' ', ../number, ' '))">genderless </xsl:when>
            <xsl:otherwise>one-female-per-male </xsl:otherwise>
        </xsl:choose>
        <xsl:for-each select="poke-ball">
            <xsl:value-of select="concat(translate(substring-before(., ' Ball'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZé', 'abcdefghijklmnopqrstuvwxyze'), '-ball ')" />
        </xsl:for-each>
    </xsl:attribute>
    <td class="sprite">
        <span>
            <xsl:attribute name="class">
                <xsl:choose>
                    <xsl:when test="form/@css">
                        <xsl:value-of select="concat('menu-sprite ', form/@css)" />
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="concat('menu-sprite ', translate(../name, 'ABCDEFGHIJKLMNOPQRSTUVWXYZé. ', 'abcdefghijklmnopqrstuvwxyze-'))" />
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:attribute name="title">
                <xsl:value-of select="../name" />
            </xsl:attribute>
            <xsl:value-of select="../number" />
        </span>
    </td>
    <td class="name">
        <xsl:value-of select="../name" />
        <xsl:if test="form">
            <br />
            <span class="form">
                <xsl:value-of select="form" />
            </span>
        </xsl:if>
    </td>
    <td>
        <xsl:attribute name="class">
            <xsl:value-of select="concat('nature ', translate(nature, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))" />
        </xsl:attribute>
        <xsl:value-of select="nature" />
    </td>
    <td class="ability"><xsl:value-of select="ability" /></td>
    <xsl:apply-templates select="ivs/@*" />
    <td class="hidden-power">
        <xsl:choose>
            <xsl:when test="hidden-power">
                <span title="{hidden-power}">
                    <xsl:attribute name="class">
                        <xsl:value-of select="concat('hidden-power ', translate(hidden-power, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'))" />
                    </xsl:attribute>
                </span>
            </xsl:when>
            <xsl:otherwise>None</xsl:otherwise>
        </xsl:choose>
    </td>
    <td class="egg-moves">
        <xsl:choose>
            <xsl:when test="(egg-move)[1]">
                <xsl:value-of select="(egg-move)[1]" />
                <xsl:if test="(egg-move)[2]">, <xsl:value-of select="(egg-move)[2]" />
                    <xsl:if test="(egg-move)[3]">, <xsl:value-of select="(egg-move)[3]" />
                        <xsl:if test="(egg-move)[4]">, <xsl:value-of select="(egg-move)[4]" />
                        </xsl:if>
                    </xsl:if>
                </xsl:if>
            </xsl:when>
            <xsl:otherwise>
                <abbr title="Not Available">N/A</abbr>
            </xsl:otherwise>
        </xsl:choose>
    </td>
    <td>
        <xsl:attribute name="class">
            <xsl:value-of select="concat('poke-balls rows', ceiling(count(poke-ball) div 3))" />
        </xsl:attribute> 
        <xsl:for-each select="poke-ball">
            <span>
                <xsl:attribute name="class">
                    <xsl:value-of select="concat('row', ceiling(position() div 3))" />
                    <xsl:value-of select="concat(' item-sprite ', translate(substring-before(., ' Ball'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZé', 'abcdefghijklmnopqrstuvwxyze'), '-ball')" />
                </xsl:attribute>
                <xsl:attribute name="title">
                    <xsl:value-of select="." />
                </xsl:attribute>
                <xsl:value-of select="." />
            </span>
        </xsl:for-each>
    </td>
</tr>
</xsl:template>

<xsl:template match="ivs/@*">
<td>
    <xsl:attribute name="class">
        <xsl:value-of select="local-name()" />
    </xsl:attribute>
    <xsl:choose>
        <xsl:when test=". != ''">
            <xsl:value-of select="." />
        </xsl:when>
        <xsl:otherwise>x</xsl:otherwise>
    </xsl:choose>
</td>    
</xsl:template>
</xsl:stylesheet>
