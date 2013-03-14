var soketti = null;

(function($) {

	var pathname = window.location.pathname;
	var port = 9999;
	var slug = pathname.replace(/^\/games\/labyrinttipeli\/+/, '').replace(/\/$/, '');
	var room = '',
		clientId = '';

	var address = 'http://' + window.location.hostname + ':' + port;

	var socket = io.connect(address);

	soketti = socket; // for debug

	console.log('server address: ' + address);

	// http://socket.io/#how-to-use
	// https://github.com/LearnBoost/socket.io/wiki/Rooms
	socket.on('connecting', function(client) {
		console.log('connecting to server');
	});

	socket.on('connect_failed', function(reason) {
		console.error('unable to connect to server', reason);
	});

	socket.on('connect', function() {
		console.log('connected to server');
		// set clientId
		clientId = socket.socket.sessionid;
	});

	socket.on('clientLeftTheRoom', function(data) {
		console.log('socketId' + data.socketId + ' poistui huoneesta - ' + data.nickName);
		$('.message').text('Pelaaja ' + data.nickName + ' poistui pelistä');

		// remove player from Game.teams[n].tyres
		var playerID = data.socketId;
		GameController.playerID.ent = null;

		for (var i = 0; i < GameController.length; i++) {
			if (GameController[i].ent !== null) {
				log(enti);
			}
		}

		var playerOnline = false;
		if (!playerOnline) {
			Crafty.scene("Lobby");
		}

	});

	socket.on('clientJoinedToRoom', function(data) {
		console.log('socketId ' + data.socketId + ' liittyi huoneeseen - ' + data.nickName);
		$('.message').text('Pelaaja ' + data.nickName + ' liittyi peliin');

		//log('attrScope:' + attrScope + ', attrName:' + attrName + ', attrVal:' + attrVal + ', roomID:' + roomID + ', clientID:' + clientID);
		var addOk = false;

		var userId = data.socketId,
			playerID = data.socketId, // what ????
			playerName = data.nickName,
			teamId = data.teamId || 0; // if undefined = 0

		addOk = addPlayerToTeam(teamId, playerID, userId, playerName);

		if (addOk) {
			GameController[playerID] = {};
			GameController[playerID]['id'] = parseInt(playerID, 10);

			var vehicleCount = 0;
			for (var i = 0; i < Game.teams.length; i++) {
				for (var j = 0; j < Game.teams[i].vehicles.length; j++) {
					GameController[playerID]["vehicleId"] = Game.teams[i].vehicles[j].id;
					vehicleCount += 1;
				}
			}

			if (vehicleCount > 2) {
				$(".QRCode-START").show();
			} else {
				$(".QRCode-START").hide();
			}

			// msgManager.sendUPC(UPC.SEND_MESSAGE_TO_CLIENTS, "STATE_MESSAGE", playerID, null, "play");
			// io.sockets.socket(playerID).emit('c', { action: 'play'});
		}

	});

	// receive control message
	socket.on('c', function(from, data) {
		console.log('from:' + from);
		console.log(data);
		if (typeof data === 'object') {
			controlMessageHandler(from, data);
		}
	});

	setTimeout(function() {
		socket.emit('subscribe', {
			maxClients: 5,
			room: clientId,
			clientRole: 'manager'
		}, function(data) {
			if (_.isObject(data)) {
				$('.message').text(data.msg);

				// set for global var
				room = data.room;
				// push room id to url
				history.replaceState({}, '', pathname.replace(/\/$/, '') + '/' + room);

				Game.sockets.ready = true;
				Game.sockets.roomID = room;

				if (Game.sockets.dashboard) {
					Crafty.trigger("SocketsReadyEvent");
				} else {
					var intervalID = setInterval(function() {
						if (Game.sockets.dashboard) {
							Crafty.trigger("SocketsReadyEvent");
							clearInterval(intervalID);
						}
					}, 500);
				}
			}
		});
	}, 500);

	function controlMessageHandler(from, data) {

		if (_.isString(data.action)) { // action (game level commands)

			if (data.action == "start") { // START
				var vehicleCount = 0;
				for (var i = 0; i < Game.teams.length; i++) {
					vehicleCount += Game.teams[i].vehicles.length;
				}
				if (vehicleCount > 2) {
					Crafty.scene("Game");
				}
			}

			if (data.action == "close" && Game.on) { // CLOSE THE GAME SCENE
				// open DashBoard
				Crafty.scene("Lobby");
				// Reset game
				for (var i = 0; i < Game.teams.length; i++) {
					for (var j = 0; j < Game.teams[i].vehicles.length; j++) {
						Game.teams[i].vehicles[j].ent = null;
					}
				}
			} else if (data.action == "close" && !Game.on) { // CLOSE THE GAME
				window.location = boxi; //game.path;
			}

		} // action
		else if (_.isNumber(data.accel)) { // accelerometer

			var playerID = from;

			if (!_.isUndefined(GameController[playerID]) && !_.isUndefined(GameController[playerID].ent)) {
				if (data.accel < 16) {
					if (!_.isUndefined(GameController[clientID].ent._accRun)) {
						GameController[playerID].ent._accRun = 10;
					}
				} else if (data.accel > 19) {
					if (!_.isUndefined(GameController[clientID].ent._accJump)) {
						GameController[playerID].ent._accJump = 3;
					}
				}
			}

		} // accelerometer
	} // controlMessageHandler

	function addPlayerToTeam(teamId, playerId, userId, playerName) {
		var players = Game.playersInTeam(teamId);
		var vacant = true;
		$(".QRCode-" + teamId).show();
		switch (players) {
			case 0:
				vacant = Game.createTeam(teamId);
				if (vacant) {
					vacant = Game.createVehicle(teamId, playerId, userId, playerName);
					if (vacant) {
						Game.drawVehicle(players, teamId, playerName);
					}
				}
				break;
			case 1:
			case 2:
			case 3:
				vacant = Game.createVehicle(teamId, playerId, userId, playerName);
				if (vacant) {
					Game.drawVehicle(players, teamId, playerName);
				}
				break;
			case 4:
				vacant = Game.createVehicle(teamId, playerId, userId, playerName);
				if (vacant) {
					Game.drawVehicle(players, teamId, playerName);
					$(".QRCode-" + teamId).hide();
				}
				break;
			default:
				vacant = false;
				break;
		}
		return vacant;
	}

	$(document).on("click tap", ".QRCode.START", function(event) {
		Crafty.scene("Game");
	});

	$(document).on("click tap", ".QRCode.CLOSE", function(event) {
		if (!Game.on) {
			window.location = boxi;
		} else {
			// open Lobby
			Crafty.scene("Lobby");
			// Reset game
			for (var i = 0; i < Game.teams.length; i++) {
				for (var j = 0; j < Game.teams[i].vehicles.length; j++) {
					Game.teams[i].vehicles[j].ent = null;
				}
			}
		}
	});

})(jQuery);
