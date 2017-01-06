# Pokémon Trading Spreadsheet

A script made to display Pokémon trading information stored in Google Sheets

## Features

* Display breedables, valuable Pokémon (e.g., shinies or RNGs), wants or your NFT collection
* Faster loading than sharing a Google Sheets document
* Filter Pokémon by generation, gender ratio, Poké Ball, shinyness or HA
* Search for Pokémon (thanks to [Armienn](https://github.com/Armienn))

## How to Use

### Preparation

1. Create a copy of this [spreadsheet](https://docs.google.com/spreadsheets/d/1djWEDpw4w0aLrurcnxkLupkzfB1Gw0_SHB8zZWY3Sts/edit?usp=sharing) (`File > Make a Copy…`).
  * Be careful not to edit the 1st row (headers) of any sheet! 
  * Name your sheets in the following format "FT:Name of my sheet", "LF:Name of another sheet" or "NFT:Yet another sheet". They will be sorted by the script.
  * You may duplicate the "TEMPLATE" sheets (up to a maximum of 8 tabs).
  * Do not move or rename the "CONFIG" or "DB" sheets.
2. Fill your copy of the spreadsheet with your Pokémon.
3. Make your spreadsheet public (`File > Publish to the web…`).

See [Demo](#demo) below if you're unsure of how to fill the spreadsheet.

### Method 1: Beginner

Find the ID of your spreadsheet and paste it at the end of this link: `https://pokemon-trading-spreadsheet.tumblr.com/?spreadsheet-id`

Example: `https://pokemon-trading-spreadsheet.tumblr.com/?1P9wMb9e0YbhcOua9RQeRCJjllf_L77uV-7i4Q0Yor0o`

That's it! Share the resulting link with your potential trade partners.

### Method 2: Advanced

Use any of the following methods if you want a custom URL or want to make changes to the script/styling.

#### Method 2A: Tumblr

1. Create a new Tumblr blog and go to `Account > Edit Appearance > Edit theme > Edit HTML`.
2. Copy [this](https://raw.githubusercontent.com/richi3f/pokemon-trading-spreadsheet/master/tumblr_theme.html) and then click `Update Preview` followed by `Save`.
3. Edit the Theme Options with your spreadsheet's ID and personal information.
4. Go to `Advanced Options` and set `Use default mobile theme` to false.
5. Click `Exit` and you're set to share your Tumblr link.

#### Method 2B: GitHub Pages

1. Clone this repository.
2. Edit `config.js` with your spreadsheet's ID and personal information.
3. Publish ~~or perish~~ (go to `Settings` and set the `Source` to `master branch` under the GitHub Pages header).

#### Method 2: How to Update

This is only for those using **Method 2**. If you're using Mehtod 1, any changes here will be reflected automatically.

If there's been an update, you will need to replace files on your end with the new ones. For Tumblr users, this means copying again the [theme](https://raw.githubusercontent.com/richi3f/pokemon-trading-spreadsheet/master/tumblr_theme.html). Those using GitHub Pages will have to download the files I have edited and upload them to their repository.

## Demo

[Google Document](https://docs.google.com/spreadsheets/d/1P9wMb9e0YbhcOua9RQeRCJjllf_L77uV-7i4Q0Yor0o/edit?usp=sharing) → [Result](https://richi3f.github.io/pokemon-trading-spreadsheet/)

## Changelog

* `2017.1.6.0` Tabs without a prefix ("FT:", "LF:", or "NFT:") are now supported.
* `2017.1.5.0` Added a search bar and support for NFT tabs (once again, thank you to [Armienn](https://github.com/Armienn)). Fixed Alolan Raichu's model and added minor customization to Tumblr theme.
* `2017.1.4.0` Added support for more than 3 tabs (thanks to [Armienn](https://github.com/Armienn)). Added extra filters and fixed Hidden Abilities of Pokémon with an Alola Form.
* `2017.1.3.0` Fixed Pokémon model for those with special characters in their name. Also added support for Pokémon with models with gender differences.
* `2017.1.2.0` Initial release.

Pokémon is &copy; of Nintendo, 1995-2017.
