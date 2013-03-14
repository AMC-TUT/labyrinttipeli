<?php session_start(); ?>
<!doctype html>
<html> <!-- manifest="game.appcache" -->
	<head>
		<meta charset="utf-8">
		<title>Labyrinttipeli</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="assets/css/bootstrap.css">
		<link rel="stylesheet" href="assets/css/style.css">
	</head>
	<body>
		<div style="position:absolute; left:0px; top:0px; width: 100%; font-size:20px; z-index:99;" class="message"></div>
		<div class="row">
			<div id="cr-stage" class="span12"></div>
		</div>
		<script>
		var hostname = window.location.hostname,
			port = window.location.port,
			search = window.location.search;

		var boxi = search.match(/box=1/g) ? 'http://sportti.dreamschool.fi/hikiboksi/' : 'http://sportti.dreamschool.fi/';
		// dev
		boxi = 'http://' + hostname + ':' + port;

		</script>
		<script src="assets/js/vendor/jquery-1.7.1.min.js"></script>
		<script src="assets/js/vendor/underscore-min.js"></script>
		<script src="assets/js/plugins.js"></script>
		<script src="assets/js/vendor/crafty-0.5.1.js"></script>
		<script src="assets/js/components.js"></script>
		<script src="assets/js/scenes.js"></script>
		<script src="assets/js/game.js"></script>
		<script src="assets/js/levels.js"></script>
		<script src="assets/js/sounds.js"></script>
		<script src="assets/js/sprites.js"></script>
		<!--<script src="assets/js/vendor/OrbiterMicro_1.1.0.514.js"></script>-->
		<script src="/static/socket.io-client/dist/socket.io.min.js"></script>
		<script src="assets/js/sockets.js"></script>
	</body>
</html>
