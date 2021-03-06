(function($) {
	//==============================================================================
	// VARIABLES
	//==============================================================================
	var orbiter,
	msgManager,
	roomID,
	UPC = net.user1.orbiter.UPC;

	//==============================================================================
	// INITIALIZATION
	//==============================================================================
	function init() {
		// Create the Orbiter instance, used to connect to and communicate with Union
		orbiter = new net.user1.orbiter.Orbiter();
		// Enable logging to the browser's JavaScript console
		// orbiter.getLog().setLevel("debug");
		// orbiter.enableConsole();
		// If required JavaScript capabilities are missing, abort
		if (!orbiter.getSystem().isJavaScriptCompatible()) {
			alert("Sorry! Your browser is not supported.");
			return;
		}
		// Register for Orbiter's connection events
		orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.READY, readyListener, this);
		orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.CLOSE, closeListener, this);
		// Connect to Union
		orbiter.connect("socket.dreamschool.fi", 443);
		//orbiter.connect("amc.pori.tut.fi/game-server/", 80);
		displayChatMessage("Connecting to Union...");
	}

	function displayChatMessage(message) {
		log(message);
	}

	//==============================================================================
	// ORBITER EVENT LISTENERS
	//==============================================================================
	// Triggered when the connection is ready
	function readyListener(e) {
		// Register for incoming messages from Union
		msgManager = orbiter.getMessageManager();
		msgManager.addMessageListener(UPC.JOINED_ROOM, joinedRoomListener, this);
		msgManager.addMessageListener(UPC.CLIENT_ADDED_TO_ROOM, clientAddedListener, this);
		msgManager.addMessageListener(UPC.CLIENT_REMOVED_FROM_ROOM, clientRemovedListener, this);
		msgManager.addMessageListener("GAME_MESSAGE", gameMessageListener, this, [roomID]);
		msgManager.addMessageListener("MOVE_MESSAGE", moveMessageListener, this, [roomID]);
		msgManager.addMessageListener(UPC.CLIENT_ATTR_UPDATE, clientAttributeUpdateListener, this);
		displayChatMessage("Connected.");
		displayChatMessage("Joining room...");
		// set roomID same as init client own ID
		roomID = orbiter.clientID;
		displayChatMessage("Orbiter roomID: " + roomID);
		// Create the chat room
		msgManager.sendUPC(UPC.CREATE_ROOM, roomID);
		// Join the chat room
		msgManager.sendUPC(UPC.JOIN_ROOM, roomID);
	}

	// Triggered when the connection is closed
	function closeListener(e) {
		displayChatMessage("Orbiter connection closed.");
	}

	//==============================================================================
	// LOBBY ROOM EVENT LISTENER
	//==============================================================================
	// Triggered when a JOINED_ROOM message is received
	function joinedRoomListener() {
		displayChatMessage("Lobby ready!");
		Game.sockets.ready = true;
		Game.sockets.roomID = roomID;
		if (Game.sockets.dashboard) {
			//log('SocketsReadyEvent FIRED');
			Crafty.trigger("SocketsReadyEvent");
		} else {
			var intervalID = setInterval( function() {
				if (Game.sockets.dashboard) {
					//log('SocketsReadyEvent FIRED');
					Crafty.trigger("SocketsReadyEvent");
					clearInterval(intervalID);
				}
			}, 500);
		}
	}
 
	// Triggered when another client joins the chat room
	function clientAddedListener(roomID, clientID) {
		displayChatMessage("User" + clientID + " joined the lobby.");
	} 

	// Triggered when another client leaves the chat room
	function clientRemovedListener(roomID, clientID) {
		displayChatMessage("User" + clientID + " left the lobby.");
		//displayChatMessage("function clientRemovedListener(roomID, clientID) ");
		// remove player from Game.teams[n].tyres
		GameController.clientID.ent = null;
		for (var i = 0; i < GameController.length; i++) {
			if (GameController[i].ent != null) {
				log(enti);
			}
		}
		var playerOnline = false;
		if (!playerOnline) {
			Crafty.scene("Lobby");
		}
	}

	//==============================================================================
	// MESSAGE RECEIVING
	//==============================================================================
	// Triggered when a game message is received
	function moveMessageListener(clientID, message) {
		var attrs = message.split(";");
		// attrs[1] = accelerometer value
		if (typeof GameController[clientID] !== "undefined" && typeof GameController[clientID].ent !== "undefined") {
			if (attrs[1] < 16) {
				if (typeof GameController[clientID].ent._accRun !== "undefined") {
					GameController[clientID].ent._accRun = 10;
				}
			} else if (attrs[1] > 19) {
				if (typeof GameController[clientID].ent._accJump !== "undefined") {
					GameController[clientID].ent._accJump = 3;
				}
			}
		}
	}

	// Triggered when a game message is received
	function gameMessageListener(fromClientID, message) {
		displayChatMessage("function gameMessageListener(fromClientID, message)")
		displayChatMessage("fromClientID" + fromClientID + ", message" + message);
		if (message == "START") { // START
			var vehicleCount = 0;
			for (var i = 0; i < Game.teams.length; i++) {
				vehicleCount += Game.teams[i].vehicles.length;
			};
			if (vehicleCount > 2) {
				Crafty.scene("Game");
			}
		}
		if (message == "CLOSE" && Game.on) { // CLOSE THE GAME SCENE
			// open DashBoard
			Crafty.scene("Lobby");
			// Reset game
			for (var i = 0; i < Game.teams.length; i++) {
				for (var j = 0; j < Game.teams[i].vehicles.length; j++) {
					Game.teams[i].vehicles[j].ent = null;
				};
			};
		} else if (message == "CLOSE" && !Game.on) { // CLOSE THE GAME
			window.location = boxi; //game.path;
		}
	}

	function clientAttributeUpdateListener (attrScope, clientID, userID, attrName, attrVal, attrOptions) {
		// debug
		//log('attrScope:' + attrScope + ', attrName:' + attrName + ', attrVal:' + attrVal + ', roomID:' + roomID + ', clientID:' + clientID);
		// when scope is gameRoom
		if (attrScope == roomID) {
			var addOk = false;
			if (attrName == "USERINFO") {
				var userId = attrVal.split(";")[0];
				var playerName = attrVal.split(";")[2];
				var teamId = attrVal.split(";")[3];
				addOk = addPlayerToTeam(teamId, clientID, userId, playerName);
			}
			if (addOk) {
				GameController[clientID] = {};
				GameController[clientID]['id'] = parseInt(clientID);
				var vehicleCount = 0;
				for (var i = 0; i < Game.teams.length; i++) {
					for (var j = 0; j < Game.teams[i].vehicles.length; j++) {
						GameController[clientID]["vehicleId"] = Game.teams[i].vehicles[j].id;
						vehicleCount += 1;
					};
				};
				if (vehicleCount > 2) {
					$(".QRCode-START").show();
				} else {
					$(".QRCode-START").hide();
				}
				msgManager.sendUPC(UPC.SEND_MESSAGE_TO_CLIENTS, "STATE_MESSAGE", clientID, null, "play");
			}
		}
	}

	function addPlayerToTeam(teamId, playerId, userId, playerName) {
		var players = Game.playersInTeam(teamId);
		var vacant = true;
		$(".QRCode-"+teamId).show();
		switch (players) {
			case 0: vacant = Game.createTeam(teamId);
				if (vacant) {
					vacant = Game.createVehicle(teamId, playerId, userId, playerName);
					if (vacant) {
						Game.drawVehicle(players, teamId, playerName);
					}
				}
				break;
			case 1:
			case 2:
			case 3: vacant = Game.createVehicle(teamId, playerId, userId, playerName);
				if (vacant) {
					Game.drawVehicle(players, teamId, playerName);
				}
				break;
			case 4: vacant = Game.createVehicle(teamId, playerId, userId, playerName);
				if (vacant) {
					Game.drawVehicle(players, teamId, playerName);
					$(".QRCode-"+teamId).hide();
				}
				break;
			default: vacant = false;
				break;
		}
		return vacant;
	}

	// init the room
	init();
})(window.jQuery);

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
			};
		};
	}
});