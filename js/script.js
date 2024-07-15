(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "What you’d like to do to the fiat system",
					answer: "escape",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 1
				},
			 	{
					clue: "Resident of Australia",
					answer: "emu",
					position: 7,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "Sly signal",
					answer: "wink",
					position: 8,
					orientation: "across",
					startx: 5,
					starty: 2
				},
				{
					clue: "A tender cut, this one will be hard for Brits",
					answer: "filet",
					position: 9,
					orientation: "across",
					startx: 3,
					starty: 3
				},
				{
					clue: "Too violent for me, rated M",
					answer: "gta",
					position: 9.5,
					orientation: "across",	
					startx: 9,
					starty: 3
				},
				{
					clue: "A title of increased controversy",
					answer: "her",
					position: 11,
					orientation: "across",
					startx: 2,
					starty: 5
				},
				{
					clue: "Don’t do this with the seed phrase if you beat the crossword",
					answer: "hock",
					position: 13,
					orientation: "across",
					startx: 8,
					starty: 5
				},
				{
					clue: "You did this to your draft card",
					answer: "tore",
					position: 14,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "My ear likes to hear one, my ear also has one",
					answer: "drum",
					position: 15,
					orientation: "across",
					startx: 6,
					starty: 6
				},
				{
					clue: "GOAT but better",
					answer: "og",
					position: 15.5,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "heart of the castle",
					answer: "keep",
					position: 16,
					orientation: "across",
					startx: 3,
					starty: 8
				},
				{
					clue: "part of both the S&P 500 and military industrial complex",
					answer: "ge",
					position: 18,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "result of impact",
					answer: "crater",
					position: 20,
					orientation: "across",
					startx: 4,
					starty: 9
				},
				{
					clue: "The ibis and the wolverine both work for one of these",
					answer: "um",
					position: 22,
					orientation: "across",
					startx: 1,
					starty: 10
				},
				{
					clue: "product of destructive distillation",
					answer: "tar",
					position: 23,
					orientation: "across",
					startx: 4,
					starty: 10
				},
				{
					clue: "one of twenty-four, and it’s not a word in your seed phrase",
					answer: "rib",
					position: 24,
					orientation: "across",
					startx: 8,
					starty: 10
				},
				{
					clue: "out to sea!",
					answer: "ebb",
					position: 25,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "many PSAs about this in the 90s",
					answer: "std",
					position: 26,
					orientation: "across",
					startx: 5,
					starty: 11
				},
				{
					clue: "as the fed is to debasement, these folks can be to research",
					answer: "faculty",
					position: 29,
					orientation: "across",
					startx: 5,
					starty: 13
				},
				{
					clue: "southern 'delicacy'",
					answer: "okra",
					position: 30,
					orientation: "across",
					startx: 1,
					starty: 14
				},
				{
					clue: "one of 43’s nicknames inverted and spelled out",
					answer: "em",
					position: 1,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "what I can’t do with fools",
					answer: "suffer",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "don’t confuse us with ice-picks",
					answer: "awls",
					position: 3,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "the food, not the number",
					answer: "pie",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "hippies might hug me",
					answer: "ent",
					position: 5,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "what brings us all together on stacker news",
					answer: "stacking",
					position: 6,
					orientation: "down",
					startx: 11,
					starty: 1
				},
				{
					clue: "the doctor who told me that my tinnitus was permanent",
					answer: "ent",
					position: 7,
					orientation: "down",
					startx: 1,
					starty: 2
				},
				{
					clue: "an mp3 of this should play for every zap",
					answer: "thunder",
					position: 10,
					orientation: "down",
					startx: 8,
					starty: 4
				},
				{
					clue: "another name for motorcycle",
					answer: "hog",
					position: 11,
					orientation: "down",
					startx: 2,
					starty: 5
				},
				{
					clue: "what the IRS does to my taxes when I try to pay in bitcoin",
					answer: "reject",
					position: 12,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					clue: "silent sound",
					answer: "om",
					position: 13.5,
					orientation: "down",
					startx: 9,
					starty: 5
				},
				{
					clue: "the only thing my mouth and shoe share in common",
					answer: "tongue",
					position: 14,
					orientation: "down",
					startx: 1,
					starty: 6
				},
				{
					clue: "if you say this verb slowly enough, it sounds like something you might say while admiring a Picasso",
					answer: "depart",
					position: 15,
					orientation: "down",
					startx: 6,
					starty: 6
				},
				{
					clue: "Bitcoiners are sometimes into a philosophy that refers to these as turnings",
					answer: "eras",
					position: 17,
					orientation: "down",
					startx: 5,
					starty: 8
				},
				{
					clue: "synonym of 15 down but much more dramatic",
					answer: "embark",
					position: 19,
					orientation: "down",
					startx: 2,
					starty: 9
				},
				{
					clue: "world’s most popular epitaph",
					answer: "rip",
					position: 21,
					orientation: "down",
					startx: 9,
					starty: 9
				},
				{
					clue: "get out of the way!",
					answer: "duck",
					position: 27,
					orientation: "down",
					startx: 7,
					starty: 11
				},
				{
					clue: "the toy that taught me my first physics lessons",
					answer: "yoyo",
					position: 28,
					orientation: "down",
					startx: 11,
					starty: 11
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
