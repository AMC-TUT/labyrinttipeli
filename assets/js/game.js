window.onload = function() {
	Crafty.init(Game.width, Game.height);
	Crafty.scene("Loading");
};

var GameController = {
/*
	929: { // mobiles socket clientID for direct & fast access
		ent: null, // viittaus entiteettiin, jonka ohjaukseen osallistuu
		tyre: null, // left or right tyre
	},
	3: { //  id
		ent: null, // viittaus entiteettiin
		tyres: {
			left: 9, // left player id
			right: 13 // right player id
		},
		acc: {
			left: 5, // accelerometer value for left tyre set by socket
			right: 6, // accelerometer value for left tyre set by socket
		}
	}
*/
};

var Game = {
	width: 960,
	height: 704,
	on: false, // game is ongoing, true when the game is on
	sockets: {
		ready: false,
		roomID: 0,
		dashboard: false
	},
	dashboard: {
		generated: false
	},
	description: "Hae pelikent&auml;lt&auml; yhteisty&ouml;ss&auml; muiden pelaajien kanssa avain. Kun joku pelaajista poimii avaimen, aukeaa ovi josta poistutaan seuraavaan kentt&auml;&auml;n. My&ouml;s ajan loppuessa siirryt&auml;&auml;n seuraavaan kentt&auml;&auml;n, mutta silloin j&auml;&auml; pisteit&auml; saamatta. Pelihahmoja ohjataan juoksemalla ja hypp&auml;&auml;m&auml;ll&auml;. Pelihahmo vaihtaa kulkusuuntaa t&ouml;rm&auml;tty&auml;&auml;n sein&auml;&auml;n tai esteeseen. Peliss&auml; on viisi kentt&auml;&auml; ja pelaajia tarvitaan 3-5.",
	qrcodes: {
		generated: 0,
		images: [
			{ _x: 128, _y: 300, action: 'join', id: 1, _ly: 424, label: 'Liity Peliin' }, // 1
			{ _x: 420, _y: 300, action: 'start', _ly: 424, label: 'Aloita peli' }, // start
			{ _x: 712, _y: 300, action: 'close', _ly: 424, label: 'Sulje peli' } // close
		]
	},
	lobbyroom: {
		vehicles: [
			{ _x: 148, _y: 166},
			{ _x: 298, _y: 166},
			{ _x: 448, _y: 166},
			{ _x: 598, _y: 166},
			{ _x: 748, _y: 166}
		]
	},
//	teams: [], // add teams when players join to union
/* */
	teams: [
		{
			id : 1,
			vehicles : [
				{
					id: 1,
					name : "Matti",
				},
				{
					id: 2,
					name : "Marti",
				},
				{
					id: 3,
					name : "Reijo",
				}
			]
		}
	],
/* */
	level: 0,
	hiScore: [],
	levelScore: [],
	playersInTeam: function(teamId) {
		var counter = 0;
		for (var i = 0; i < Game.teams.length; i++) {
			if (Game.teams[i].id == teamId) {
				counter = Game.teams[i].vehicles.length;
			}
		}
		return counter
	},
	createTeam: function(teamId) {
		var team =
			{
				id: teamId,
				vehicles: [],
			};
		Game.teams.push(team);
		return true;
	},
	createVehicle: function(teamId, playerId, playerName) {
		var success = false;
		for (var i = 0; i < Game.teams.length; i++) {
			if (Game.teams[i].id == teamId) {
				var vehicle = {
					id: parseInt(playerId),
					name: playerName
				}
				Game.teams[i].vehicles.push(vehicle);
				success = true;
			}
		}
		return success;
	},
	drawVehicle: function(vehicle, teamId, playerName) {
		var ent = Crafty.e('Poser').attr({ x: Game.lobbyroom.vehicles[vehicle]._x, y: Game.lobbyroom.vehicles[vehicle]._y, z: 3 });
		ent.addComponent('poser' + (vehicle + 1));
		Crafty.e("2D, DOM, Text, NameplateText").attr({ x: Game.lobbyroom.vehicles[vehicle]._x - 16, y: Game.lobbyroom.vehicles[vehicle]._y - 76, z: 3, w: 96, h: 20 }).text(playerName);
	},
	generateHiScore: function() {
		if (!(Game.hiScore.length > 0)) {
			_.each(Game.teams, function(team) {
				_.each(team.vehicles, function(vehicle) {
					var player = {
						id: vehicle.id,
						name: vehicle.name,
						score: 0,
						teamBonus: 0,
						totalScore: 0
					}
					Game.hiScore.push(player);
				})
			})
		}
	},
	generateGame: function(level) {
		Crafty.background("url(assets/img/level"+level+"_bg.png)");
		Game.generateHiScore();
		Levels.generateFloors(level);
		Levels.generateWalls(level);
		Levels.generateDoors(level);
		Levels.generatePlatforms(level);
		Levels.generateLibra(level);
		Levels.generateExit(level);
		Levels.generateLogic(level);
		Levels.generatePlayers(level);
	}

};