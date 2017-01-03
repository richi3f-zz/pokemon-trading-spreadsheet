# Pokémon Trading Spreadsheet

A script made to display Pokémon trading information stored in Google Sheets

## Features

* Filter Pokémon by generation, gender ratio & Poké Ball
* Display breedables, valuable Pokémon (e.g., shinies or RNGs) and wants
* Faster loading than sharing a Google Sheets document

## How to Use

### Tumblr

1. Create a copy of this [spreadsheet](https://docs.google.com/spreadsheets/d/1b5QCn3UfQk7wbxzmcX3Yv8on6GREs12_q83TajSF2mQ/edit?usp=sharing) (`File > Make a Copy…`). You may rename and rearrange tabs, but be careful not to edit the columns! 
2. Fill it with your breedables, shinies, battle-ready Pokémon, or wants.
3. Make your spreadsheet public (`File > Publish to the web…`).
4. Create a new Tumblr blog and go to `Account > Edit Appearance > Edit theme > Edit HTML`.
5. Copy [this](https://raw.githubusercontent.com/richi3f/pokemon-trading-spreadsheet/master/tumblr_theme.html) and then click `Update Preview` followed by `Save`.
6. Edit the Theme Options with your spreadsheet's ID and personal information (IGN, FC, etc.).
7. Go to `Advanced Options` and set `Use default mobile theme` to false.

### GitHub Pages

1. Create a copy of this [spreadsheet](https://docs.google.com/spreadsheets/d/1b5QCn3UfQk7wbxzmcX3Yv8on6GREs12_q83TajSF2mQ/edit?usp=sharing) (`File > Make a Copy…`). You may rename and rearrange tabs, but be careful not to edit the columns!
2. Fill it with your breedables, shinies, battle-ready Pokémon, or wants.
3. Make your spreadsheet public (`File > Publish to the web…`).
4. Clone this repository.
5. Edit `config.js` with your spreadsheet's ID and personal information (IGN, FC, etc.).
6. Go to `Settings` and set the `Source` to `master branch` under the GitHub Pages header.

## How to Update

If files have been updated, you will need to replace files on your end with the new ones. For Tumblr users, this means copying again the [theme](https://raw.githubusercontent.com/richi3f/pokemon-trading-spreadsheet/master/tumblr_theme.html). Those using GitHub Pages will have to download the files I have edited and upload them to their repository.

## Demo

[Google Document](https://docs.google.com/spreadsheets/d/1P9wMb9e0YbhcOua9RQeRCJjllf_L77uV-7i4Q0Yor0o/edit?usp=sharing) → [Result](https://richi3f.github.io/pokemon-trading-spreadsheet/)

## Changelog

* `2016.1.3.0` Fixed Pokémon model for those with special characters in their name. Also added support for Pokémon with models with gender differences.
* `2016.1.2.0` Initial release.

Pokémon is &copy; of Nintendo, 1995-2017.
