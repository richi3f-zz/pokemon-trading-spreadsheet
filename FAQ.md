# FAQ

**Q:** How do I obtain my trainer icon?

> Log in to the [Pokémon Global Link](https://3ds.pokemon-gl.com/), register/sync your game and right-click the icon to save it.

**Q:** How do I rename my tabs?

> Double click on your tab's name. Add one of the following prefixes to have your tabs sorted: "FT:" (For Trade), "LF:" (Looking For), or "NFT:" (Not For Trade). Additionally, you may add the "!:" prefix to hide your tab altogether.

**Q:** Is there a way to hide one of my tabs?

> Yes! If a tab starts with the "!:" prefix it will be ignored by the script.

**Q:** Can I rename columns?

> Yes! Some columns that can be renamed are:
> - "Sex" or "Gender"
> - "Lv", "Lvl" or "Level"
> - "Egg Move" or "Relearn Move"
> - "Lang" or "Language"
> - "Notes", "Note", "Comments" or "Comment"
>
> Additionally, Poké Ball columns may be replaced with the their name instead of using icons.

**Q:** Can I remove/hide columns?

> The "Dex No" column should not be removed at all costs.
>
> If you're using the "Valuable Pokémon" tab template, you may remove any column.
>
> If you're using the "Breedables" tab template, removing a column will mess up with the Poké Balls. The reason for this is that since the headers are images instead of text the script must reference them by position. A workaround is to replace the images with the name of the Poké Ball (e.g., "Great", "Dive", "Lure", Love", etc.). This should allow you to remove columns you don't need.

**Q:** Can I do away with the drop-down menu (or input custom text in the cells)?

> Yes! The spreadsheet has data validation to make it easier for you to fill and easier for the script to handle. However, you may remove this validation at any time in order to input *custom text*. For instance, doing so should allow you to enter the words "Any" or "Random" instead of a set Nature/Ability.
>
> To remove data validation in Google Sheets, right-click on a cell or column, select `Data validation…` and press `Remove validation`.

**Q:** How do I mark an IV as even/odd?

> For odd IVs, you can write "2x+1," "odd" or "O." For even IVs, input "2x," "even" or "E." Case-insensitive

**Q:** Is there a way to mark a Hyper trained stat?

> Yes! When filling your Pokémon's IVs, you may write "HT" or (if you want to be more specific) a number followed by "\*" (e.g., "27\*").

**Q:** How do I mark an ability as hidden?

> The script recognizes hidden abilities automatically and applies italics to them. Do note though that this relies on the Pokédex number being correct so make sure to not mess with the formula on the first column. If the dex number is not showing up, copy/drag the Google Sheets formula from another cell.
>
> Some Pokémon have no HA in their current form but may obtain it through evolution (e.g., Ferroseed, Metapod) or maybe had it previously (e.g., Flygon, Alolan Raichu). To mark these special cases, you may add an "\*" at the end of the ability's name (e.g., "Surge Surfer\*").
