Crafty.scene("Loading", function() {
	Crafty.e("HTML")
		.append('<br/><br/>'
		+ ' <div class="hero-unit span8 offset1">'
		+ ' <div class="row">'
		+ ' <img src="assets/img/splash.png" class="span6 offset1" alt="" />'
		+ ' </div>'
		+ ' <div class="row">'
		+ ' <div class="progress progress-warning active">'
		+ ' <div class="bar">'
		+ ' </div>'
		+ ' </div>'
		// + ' <div class="file">...</div>'
		+ ' </div>'
		+ ' </div>');
	Crafty.load(
		[
			"assets/img/level0_bg.png",
			"assets/img/lobby_bg.png"
			/*
			"assets/img/menu_bg.png",
			"assets/img/player1.png",
			"assets/img/player2.png",
			"assets/img/player3.png",
			"assets/img/player4.png",
			"assets/img/player5.png"
			*/
		],
		function() {
			setTimeout(function() {
				// go to Lobby scene
				Crafty.scene("Lobby");
			}, 1000);
		},
		function(e) {
			//progress
			$(".progress .bar").css("width", Math.round(e.percent) + "%");
			//$('.file').text(e.src);
		},
		function(e) {
			//error
			alert('Error loading ' + e.src + ' while loading game assets (loaded ' + e.loaded + ' of ' + e.total + ')');
		}
	);
});

Crafty.scene("Lobby", function() {
	Crafty.background("url(assets/img/lobby_bg.png)");
	Game.on = false;
	//Levels.drawAllFarms(0);
	Game.sockets.dashboard = true;
	this.bind('SocketsReadyEvent', _.once(function() { // _.once = singleton pattern impl.
		//log('SocketsReadyEvent');
		_.each(Game.qrcodes.images, function(qrcode) {
			var ent = Crafty.e("2D, DOM, Image, QRCode")
				.attr({ x: qrcode._x, y: qrcode._y, z: 4 });
			var json = { "action": qrcode.action, "roomId": Game.sockets.roomID, "tid": qrcode.id };
			$.ajax({
				type: "GET",
				url: 'http://sportti.dreamschool.fi/galaxy/api/qrcode/JSON',
				data: json,
				cache: true,
				success: function(data) {
					var qr = $(data)[2];
					ent.image( $(qr).attr('src') );
					if (!_.isUndefined(qrcode.action)) {
						ent.addComponent(qrcode.action.toUpperCase());
						var componentName = qrcode.id;
						if (_.isUndefined(qrcode.id)) {
							componentName = qrcode.action.toUpperCase();
						}
						ent.addComponent("QRCode-"+componentName);
						Crafty.e("2D, DOM, Label, Text, QRCode-"+componentName)
							.attr({ x: qrcode._x, y: qrcode._ly, z: 4, w: 150, h: 20 })
							.text("<strong>" + qrcode.label + "</strong>");
						$(".QRCode-START").hide();
					}
				}
			});
		});
	}));
	if (Game.dashboard.generated) {
		Crafty.trigger("SocketsReadyEvent");
	}
	Crafty.e("2D, DOM, GameRules, Text")
		.attr({ x: 128, y: 460, z: 4, w: 704, h: 200 })
		.text("<strong>Tavoite: </strong>" + Game.description);
	GameController = {};
	Game.level = 0;
	Game.teams = [];
	Game.hiScore = [];
	Game.levelScore = [];
	Game.dashboard.generated = true;
});

Crafty.scene("Game", function() {
	Game.on = true;
	Game.generateGame(Game.level);
	var ent = Crafty.e("2D, DOM, Image, QRCode")
		.attr({ x: 804, y: 558, z: 4 });
	var json = { "action": 'close', "roomId": Game.sockets.roomID };
	$.ajax({
		type: "GET",
		url: 'http://sportti.dreamschool.fi/galaxy/api/qrcode/JSON',
		data: json,
		cache: true,
		success: function(data) {
			var qr = $(data)[2];
			ent.image( $(qr).attr('src') );
			ent.addComponent('CLOSE');
			ent.addComponent("QRCode-CLOSE");
			Crafty.e("2D, DOM, Label, Text, QRCode-CLOSE")
				.attr({ x: 804, y: 682, z: 4, w: 150, h: 20 })
				.text("<strong>" + "Keskeyt&auml;" + "</strong>");
		}
	});
});

Crafty.scene("GameOver", function() {
	Crafty.background("url(assets/img/menu_bg.png)");
	var table = '<h3>Tulokset</h3><table class="table"> <thead> <tr> <th>#</th> <th>Pisteet</th> <th>Joukkuebonus</th> <th>Kokonaispisteet</th> <th>Pelaajat</th> </tr> </thead> <tbody>';
	for (var i = 0; i < Game.hiScore.length; i++) {
		table += "<tr><td>" + (i + 1) + "</td><td>" + Game.hiScore[i].score + "</td><td>" + Game.hiScore[i].teamBonus + "</td><td>" + Game.hiScore[i].totalScore +"</td><td>" + Game.hiScore[i].name + "</td></tr>";
	}
	table += '</tbody> </table>';
	Crafty.e("2D, DOM, ScoreTable, Text")
		.attr({ x: 50, y: 42, z: 4, w: 700, h: 600 })
		.text(table);
	var ent = Crafty.e("2D, DOM, Image, QRCode")
		.attr({ x: 804, y: 548, z: 4 });
	var json = { "action": 'close', "roomId": Game.sockets.roomID };
	$.ajax({
		type: "GET",
		url: 'http://sportti.dreamschool.fi/galaxy/api/qrcode/JSON',
		data: json,
		cache: true,
		success: function(data) {
			var qr = $(data)[2];
			ent.image( $(qr).attr('src') );
			ent.addComponent('CLOSE');
			ent.addComponent("QRCode-CLOSE");
			Crafty.e("2D, DOM, Label, Text, QRCode-CLOSE")
				.attr({ x: 804, y: 672, z: 4, w: 150, h: 20 })
				.text("<strong>" + "Jatka" + "</strong>");
		}
	});
});