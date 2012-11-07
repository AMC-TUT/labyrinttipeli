var Levels = {
	level:[
		{
			id : 1,
			teams: [
				{
					id : 1,
					vehicles : [
						{ c: "player1", _x: 256, _y: 620, _weight: 96, _keyRun: "Q", _keyJump: "A" },
						{ c: "player2", _x: 288, _y: 620, _weight: 64, _keyRun: "W", _keyJump: "S" },
						{ c: "player3", _x: 320, _y: 620, _weight: 96, _keyRun: "E", _keyJump: "D" },
						{ c: "player4", _x: 352, _y: 620, _weight: 64, _keyRun: "R", _keyJump: "F" },
						{ c: "player5", _x: 384, _y: 620, _weight: 96, _keyRun: "T", _keyJump: "G" }
					],
					posers : [
						{ c: "poser1", _x: 32, _y: 16 },
						{ c: "poser2", _x: 96, _y: 16 },
						{ c: "poser3", _x: 160, _y: 16 },
						{ c: "poser4", _x: 224, _y: 16 },
						{ c: "poser5", _x: 290, _y: 16 }
					]
				}
			],
			lock: {_x: 384, _y: 302},
			key: {_x: 822, _y: 112},
			time: 150,
			floors: [
				{ _x: 138, _y: 250, _width: 310, _height: 10 },
				{ _x: 544, _y: 250, _width: 411, _height: 10 },
				{ _x: 5, _y: 324, _width: 133, _height: 10 },
				{ _x: 5, _y: 398, _width: 165, _height: 10 },
				{ _x: 310, _y: 398, _width: 512, _height: 10 },
				{ _x: 170, _y: 472, _width: 138, _height: 10 },
				{ _x: 822, _y: 472, _width: 133, _height: 10 },
				{ _x: 138, _y: 546, _width: 460, _height: 10 },
				{ _x: 726, _y: 546, _width: 229, _height: 10 },
				{ _x: 5, _y: 620, _width: 133, _height: 10 },
				{ _x: 598, _y: 620, _width: 138, _height: 10 },
				{ _x: 0, _y: 694, _width: 960, _height: 10 }
			],
			walls: [
				{ _x: 640, _y: 107, _width: 22, _height: 47 },
				{ _x: 298, _y: 255, _width: 22, _height: 296 },
				{ _x: 726, _y: 551, _width: 22, _height: 148 }
			],
			doors: [
				{
					trigger: { _x: 416, _y: 536 },
					barrier: { _x: 646, _y: 154 }
				}
			],
			platforms: [],
			libras: []
		},
		{
			id : 2,
			teams: [
				{
					id : 1,
					vehicles : [
						{ c: "player1", _x: 96, _y: 620, _weight: 96, _keyRun: "Q", _keyJump: "A" },
						{ c: "player2", _x: 128, _y: 620, _weight: 64, _keyRun: "W", _keyJump: "S" },
						{ c: "player3", _x: 160, _y: 620, _weight: 96, _keyRun: "E", _keyJump: "D" },
						{ c: "player4", _x: 224, _y: 620, _weight: 64, _keyRun: "R", _keyJump: "F" },
						{ c: "player5", _x: 288, _y: 620, _weight: 96, _keyRun: "T", _keyJump: "G" }
					],
					posers : [
						{ c: "poser1", _x: 32, _y: 16 },
						{ c: "poser2", _x: 96, _y: 16 },
						{ c: "poser3", _x: 160, _y: 16 },
						{ c: "poser4", _x: 224, _y: 16 },
						{ c: "poser5", _x: 290, _y: 16 }
					]
				}
			],
			lock: {_x: 352, _y: 154},
			key: {_x: 822, _y: 408},
			time: 150,
			floors: [
				{ _x: 5, _y: 250, _width: 133, _height: 10 },
				{ _x: 266, _y: 250, _width: 556, _height: 10 },
				{ _x: 138, _y: 324, _width: 128, _height: 10 },
				{ _x: 822, _y: 324, _width: 133, _height: 10 },
				{ _x: 5, _y: 398, _width: 133, _height: 10 },
				{ _x: 266, _y: 398, _width: 689, _height: 10 },
				{ _x: 138, _y: 472, _width: 128, _height: 10 },
				{ _x: 5, _y: 546, _width: 379, _height: 10 },
				{ _x: 512, _y: 546, _width: 443, _height: 10 },
				{ _x: 384, _y: 620, _width: 128, _height: 10 },
				{ _x: 0, _y: 694, _width: 960, _height: 10 }
			],
			walls: [
				{ _x: 469, _y: 107, _width: 22, _height: 47 },
				{ _x: 640, _y: 255, _width: 22, _height: 195 },
				{ _x: 640, _y: 551, _width: 22, _height: 148 }
			],
			doors: [
				{
					trigger: { _x: 726, _y: 388 },
					barrier: { _x: 646, _y: 450 }
				},
				{
					trigger: { _x: 512, _y: 388 },
					barrier: { _x: 475, _y: 154 }
				}
			],
			platforms: [],
			libras: []
		},
		{
			id : 3,
			teams: [
				{
					id : 1,
					vehicles : [
						{ c: "player1", _x: 256, _y: 620, _weight: 96, _keyRun: "Q", _keyJump: "A" },
						{ c: "player2", _x: 288, _y: 620, _weight: 64, _keyRun: "W", _keyJump: "S" },
						{ c: "player3", _x: 320, _y: 620, _weight: 96, _keyRun: "E", _keyJump: "D" },
						{ c: "player4", _x: 352, _y: 620, _weight: 64, _keyRun: "R", _keyJump: "F" },
						{ c: "player5", _x: 384, _y: 620, _weight: 96, _keyRun: "T", _keyJump: "G" }
					],
					posers : [
						{ c: "poser1", _x: 32, _y: 16 },
						{ c: "poser2", _x: 96, _y: 16 },
						{ c: "poser3", _x: 160, _y: 16 },
						{ c: "poser4", _x: 224, _y: 16 },
						{ c: "poser5", _x: 290, _y: 16 }
					]
				}
			],
			lock: {_x: 694, _y: 302},
			key: {_x: 822, _y: 112},
			time: 200,
			floors: [
				{ _x: 138, _y: 250, _width: 182, _height: 10 },
				{ _x: 640, _y: 250, _width: 315, _height: 10 },
				{ _x: 5, _y: 324, _width: 133, _height: 10 },
				{ _x: 5, _y: 398, _width: 165, _height: 10 },
				{ _x: 448, _y: 398, _width: 374, _height: 10 },
				{ _x: 170, _y: 472, _width: 138, _height: 10 },
				{ _x: 822, _y: 472, _width: 133, _height: 10 },
				{ _x: 138, _y: 546, _width: 460, _height: 10 },
				{ _x: 726, _y: 546, _width: 229, _height: 10 },
				{ _x: 5, _y: 620, _width: 133, _height: 10 },
				{ _x: 598, _y: 620, _width: 138, _height: 10 },
				{ _x: 0, _y: 694, _width: 960, _height: 10 }
			],
			walls: [
				{ _x: 298, _y: 255, _width: 22, _height: 296 },
				{ _x: 640, _y: 255, _width: 22, _height: 148 },
				{ _x: 726, _y: 551, _width: 22, _height: 148 }
			],
			doors: [],
			platforms: [
				{
					id: 1,
					trigger: { _x: 384, _y: 526},
					barrier: { _x: 544, _y: 250, _l: 320, _r: 544}
				}
			],
			libras: []
		},
		{
			id : 4,
			teams: [
				{
					id : 1,
					vehicles : [
						{ c: "player1", _x: 256, _y: 620, _weight: 96, _keyRun: "Q", _keyJump: "A" },
						{ c: "player2", _x: 288, _y: 620, _weight: 64, _keyRun: "W", _keyJump: "S" },
						{ c: "player3", _x: 320, _y: 620, _weight: 96, _keyRun: "E", _keyJump: "D" },
						{ c: "player4", _x: 352, _y: 620, _weight: 64, _keyRun: "R", _keyJump: "F" },
						{ c: "player5", _x: 384, _y: 620, _weight: 96, _keyRun: "T", _keyJump: "G" }
					],
					posers : [
						{ c: "poser1", _x: 32, _y: 16 },
						{ c: "poser2", _x: 96, _y: 16 },
						{ c: "poser3", _x: 160, _y: 16 },
						{ c: "poser4", _x: 224, _y: 16 },
						{ c: "poser5", _x: 290, _y: 16 }
					]
				}
			],
			lock: {_x: 448, _y: 598},
			key: {_x: 74, _y: 112},
			time: 200,
			floors: [
				{ _x: 5, _y: 250, _width: 336, _height: 10 },
				{ _x: 469, _y: 250, _width: 107, _height: 10 },
				{ _x: 672, _y: 250, _width: 182, _height: 10 },
				{ _x: 341, _y: 324, _width: 133, _height: 10 },
				{ _x: 106, _y: 398, _width: 492, _height: 10 },
				{ _x: 726, _y: 398, _width: 128, _height: 10 },
				{ _x: 598, _y: 472, _width: 128, _height: 10 },
				{ _x: 106, _y: 546, _width: 129, _height: 10 },
				{ _x: 363, _y: 546, _width: 235, _height: 10 },
				{ _x: 726, _y: 546, _width: 229, _height: 10 },
				{ _x: 235, _y: 620, _width: 128, _height: 10 },
				{ _x: 598, _y: 620, _width: 138, _height: 10 },
				{ _x: 0, _y: 694, _width: 960, _height: 10 }
			],
			walls: [
				{ _x: 752, _y: 107, _width: 22, _height: 148 },
				{ _x: 469, _y: 255, _width: 22, _height: 296 },
				{ _x: 726, _y: 551, _width: 22, _height: 148 }
			],
			doors: [],
			platforms: [],
			libras: [
				{
					left: { _x: 10, _y: 546, _height: 286 },
					right: { _x: 854, _y: 398, _height: 286 }
				}
			]
		},
		{
			id : 5,
			teams: [
				{
					id : 1,
					vehicles : [
						{ c: "player1", _x: 256, _y: 620, _weight: 96, _keyRun: "Q", _keyJump: "A" },
						{ c: "player2", _x: 288, _y: 620, _weight: 64, _keyRun: "W", _keyJump: "S" },
						{ c: "player3", _x: 320, _y: 620, _weight: 96, _keyRun: "E", _keyJump: "D" },
						{ c: "player4", _x: 352, _y: 620, _weight: 64, _keyRun: "R", _keyJump: "F" },
						{ c: "player5", _x: 384, _y: 620, _weight: 96, _keyRun: "T", _keyJump: "G" }
					],
					posers : [
						{ c: "poser1", _x: 32, _y: 16 },
						{ c: "poser2", _x: 96, _y: 16 },
						{ c: "poser3", _x: 160, _y: 16 },
						{ c: "poser4", _x: 224, _y: 16 },
						{ c: "poser5", _x: 290, _y: 16 }
					]
				}
			],
			lock: {_x: 855, _y: 155},
			key: {_x: 42, _y: 112},
			time: 450,
			floors: [
				{ _x: 5, _y: 250, _width: 283, _height: 10 },
				{ _x: 790, _y: 250, _width: 165, _height: 10 },
				{ _x: 544, _y: 324, _width: 246, _height: 10 },
				{ _x: 138, _y: 398, _width: 150, _height: 10 },
				{ _x: 657, _y: 398, _width: 165, _height: 10 },
				{ _x: 5, _y: 472, _width: 101, _height: 10 },
				{ _x: 544, _y: 472, _width: 101, _height: 10 },
				{ _x: 822, _y: 472, _width: 133, _height: 10 },
				{ _x: 5, _y: 546, _width: 266, _height: 10 },
				{ _x: 726, _y: 546, _width: 229, _height: 10 },
				{ _x: 598, _y: 620, _width: 138, _height: 10 },
				{ _x: 0, _y: 694, _width: 960, _height: 10 }
			],
			walls: [
				{ _x: 640, _y: 107, _width: 22, _height: 370 },
				{ _x: 266, _y: 403, _width: 22, _height: 148 },
				{ _x: 726, _y: 551, _width: 22, _height: 148 }
			],
			doors: [],
			platforms: [
				{
					id: 1,
					trigger: { _x: 106, _y: 526},
					barrier: { _x: 288, _y: 250, _l: 288, _r: 416}
				},
				{
					id: 2,
					trigger: { _x: 138, _y: 674},
					barrier: { _x: 288, _y: 398, _l: 288, _r: 416}
				},
				{
					id: 3,
					trigger: { _x: 416, _y: 674},
					barrier: { _x: 288, _y: 546, _l: 288, _r: 416}
				}
			],
			libras: []
		}
	],
	generateFloors: function(level) {
		for (var i = 0; i < Levels.level[level].floors.length; i++) {
			var ent = Crafty.e('Floor').attr({ x: Levels.level[level].floors[i]._x, y: Levels.level[level].floors[i]._y, z: 2, w: Levels.level[level].floors[i]._width, h: 2 });
			ent.addComponent('Collision');
			//ent.addComponent('Collision').addComponent('Color').color('yellow');
			var ent = Crafty.e('Ceiling').attr({ x: Levels.level[level].floors[i]._x, y: Levels.level[level].floors[i]._y + 2, z: 2, w: Levels.level[level].floors[i]._width, h: Levels.level[level].floors[i]._height - 2 });
			ent.addComponent('Collision');
			//ent.addComponent('Collision').addComponent('Color').color('blue');
		}
	},
	generateWalls: function(level) {
		for (var i = 0; i < Levels.level[level].walls.length; i++) {
			var ent = Crafty.e('Wall').attr({ x: Levels.level[level].walls[i]._x, y: Levels.level[level].walls[i]._y, z: 2, w: Levels.level[level].walls[i]._width, h: Levels.level[level].walls[i]._height });
			ent.addComponent('Collision');
			//ent.addComponent('Collision').addComponent('Color').color('red');
		}
	},
	generateDoors: function(level) {
		_.each(Levels.level[level].doors, function(door) {
			var ent = Crafty.e('Trigger').attr({ x: door.trigger._x + 5, y: door.trigger._y, z: 2, w: 54, h: 2 });
			ent.addComponent('Collision');
			//ent.addComponent('Collision').addComponent('Color').color('green');
			ent._door = Crafty.e('Door').attr({ x: door.barrier._x, y: door.barrier._y, z: 2, w: 10, h: 96 });
			ent._door.addComponent('Collision');
			//ent._door.addComponent('Collision').addComponent('Color').color('green');
			ent.playSound = true;
			ent.barrierMoving = false;
			ent.bind('EnterFrame', function(frame) {
				if (frame.frame % 4 === 0) {
					if (this.hit("Vehicle")) {
						if (this._door._y > (door.barrier._y - 92)) {
							this.barrierMoving = true;
							var move = this._door._y - 4;
							this._door.tween({ y: move }, 4);
						} else {
							this.barrierMoving = false;
						}
					} else {
						if (this._door._y < door.barrier._y) {
							this.barrierMoving = true;
							var move = this._door._y + 4;
							this._door.tween({ y: move }, 4);
						} else {
							this.barrierMoving = false;
						}
					}
					if (this.barrierMoving) {
						if (this.playSound) {
							this.playSound = false;
							Crafty.audio.play("barrier_move");
						}
					} else {
						this.playSound = true;
					}
				}
			});
			var floor = Crafty.e('Floor').attr({ x: door.trigger._x, y: door.trigger._y + 2, z: 2, w: 64, h: 2 });
			floor.addComponent('Collision');
			//floor.addComponent('Collision').addComponent('Color').color('yellow');
			var ceiling = Crafty.e('Ceiling').attr({ x: door.trigger._x, y: door.trigger._y + 4, z: 2, w: 64, h: 6 });
			ceiling.addComponent('Collision');
			//ceiling.addComponent('Collision').addComponent('Color').color('blue');
			//var leftBlock = Crafty.e('Wall').attr({ x: door.trigger._x, y: door.trigger._y + 4, z: 2, w: 5, h: 6 });
			//leftBlock.addComponent('Collision');
			//leftBlock.addComponent('Collision').addComponent('Color').color('red');
			//var rightBlock = Crafty.e('Wall').attr({ x: door.trigger._x + 59, y: door.trigger._y + 4, z: 2, w: 5, h: 6 });
			//rightBlock.addComponent('Collision');
			//rightBlock.addComponent('Collision').addComponent('Color').color('red');
		});
	},
	generatePlatforms: function(level) {
		_.each(Levels.level[level].platforms, function(platform) {
			var ent = Crafty.e('Treadmill').attr({ x: platform.trigger._x + 5, y: platform.trigger._y, z: 2, w: 86, h: 2 });
			ent.addComponent('Collision');
			//ent.addComponent('Collision').addComponent('Color').color('green');
			ent.firstHit = true;
			ent.playSound = true;
			ent._platformtop = Crafty.e('PlatformTop').attr({ x: platform.barrier._x, y: platform.barrier._y, z: 2, w: 96, h: 20 });
			ent._platformtop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2]));
			//ent._platformtop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2])).addComponent('Color').color('lime');
			ent._platformtop._direction = true;
			ent._platformbottom = Crafty.e('PlatformBottom').attr({ x: platform.barrier._x, y: platform.barrier._y + 2, z: 2, w: 96, h: 18 });
			ent._platformbottom.addComponent('Collision');
			//ent._platformbottom.addComponent('Collision').addComponent('Color').color('cyan');
			ent.bind('movePlatform', function(id) {
				if (id == platform.id) {
					this._power = true;
				}
			});
			ent.onHit("Vehicle", function (ent) {
				if (this.firstHit) {
					ent[0].obj._status = "power";
					ent[0].obj._dreadmillID = platform.id;
					this.firstHit = false;
				}
			}, function() {
				this.firstHit = true;
			});
			ent._platformtop.onHit("Vehicle", function (ent) {
				if (this._moving) {
					var player = ent[0].obj;
					var move = this._direction ? player._x+1 : player._x-1;
					player.tween({ x: move }, 1);
				}
			});
			ent.bind('EnterFrame', function(frame) {
				if (frame.frame % 4 === 0) {
					if (this._power) {
						this._power = false;
						if (this._platformtop._x < platform.barrier._l) {
							this._platformtop._direction = true;
						} else if (this._platformtop._x > (platform.barrier._r)) {
							this._platformtop._direction = false;
						}
						var move = this._platformtop._direction ? this._platformtop._x+4 : this._platformtop._x-4;
						this._platformtop.tween({ x: move }, 4);
						this._platformbottom.tween({ x: move }, 4);
						this._platformtop._moving = true;
					} else {
						this._platformtop._moving = false;
					}
					if (this._platformtop._moving) {
						if (this.playSound) {
							this.playSound = false;
							Crafty.audio.play("platform_move");
						}
					} else {
						this.playSound = true;
					}
				}
			});
			var floor = Crafty.e('Floor').attr({ x: platform.trigger._x, y: platform.trigger._y + 2, z: 2, w: 96, h: 2 });
			floor.addComponent('Collision');
			//floor.addComponent('Collision').addComponent('Color').color('yellow');
			var ceiling = Crafty.e('Ceiling').attr({ x: platform.trigger._x, y: platform.trigger._y + 4, z: 2, w: 96, h: 16 });
			ceiling.addComponent('Collision');
			//ceiling.addComponent('Collision').addComponent('Color').color('blue');
			var leftBlock = Crafty.e('Wall').attr({ x: platform.trigger._x, y: platform.trigger._y + 4, z: 2, w: 5, h: 16 });
			leftBlock.addComponent('Collision');
			//leftBlock.addComponent('Collision').addComponent('Color').color('red');
			var rightBlock = Crafty.e('Wall').attr({ x: platform.trigger._x + 91, y: platform.trigger._y + 4, z: 2, w: 5, h: 16 });
			rightBlock.addComponent('Collision');
			//rightBlock.addComponent('Collision').addComponent('Color').color('red');
		});
	},
	generateLibra: function(level) {
		_.each(Levels.level[level].libras, function(libra) {
			var ent = Crafty.e('Libra');
			ent.lefttop = Crafty.e('LibraTop').attr({ x: libra.left._x, y: libra.left._y, z: 2, w: 96, h: 20 });
			ent.lefttop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2]));
			//ent.lefttop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2])).addComponent('Color').color('lime');
			ent.leftbottom = Crafty.e('LibraBottom').attr({ x: libra.left._x, y: libra.left._y + 2, z: 2, w: 96, h: 8 });
			ent.leftbottom.addComponent('Collision');
			//ent.leftbottom.addComponent('Collision').addComponent('Color').color('cyan');
			ent.righttop = Crafty.e('LibraTop').attr({ x: libra.right._x, y: libra.right._y, z: 2, w: 96, h: 20 });
			ent.righttop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2]));
			//ent.righttop.addComponent('Collision').collision(new Crafty.polygon([0,0], [96,0], [96,2], [0,2])).addComponent('Color').color('lime');
			ent.rightbottom = Crafty.e('LibraBottom').attr({ x: libra.right._x, y: libra.right._y + 2, z: 2, w: 96, h: 8 });
			ent.rightbottom.addComponent('Collision');
			//ent.rightbottom.addComponent('Collision').addComponent('Color').color('cyan');
			ent.lefttop.onHit("Vehicle", function (ent) {
				var player = ent[0].obj;
				if (this.moving) {
					if (ent[0].obj._status == "walk") {
						var move = this.direction ? player._y-1 : player._y+1;
						player.tween({ y: move }, 1);
					}
				}
			});
			ent.righttop.onHit("Vehicle", function (ent) {
				var player = ent[0].obj;
				if (this.moving) {
					if (ent[0].obj._status == "walk") {
						var move = this.direction ? player._y-1 : player._y+1;
						player.tween({ y: move }, 1);
					}
				}
			});
			ent.leftBalance = libra.left._y;
			ent.rightBalance = libra.right._y;
			ent.leftScale = libra.left._height;
			ent.rightScale = libra.right._height;
			ent.playSound = true;
			ent.bind('EnterFrame', function(frame) {
				if (frame.frame % 4 === 0) {
					this.leftWeight = 1;
					this.rightWeight = 1;
					if (this.lefttop.hit("Vehicle") || this.righttop.hit("Vehicle")) {
						var entities = Crafty.map.search({_x: this.lefttop._x, _y: this.lefttop._y -8, _w: 96, _h: 8 });
						for (var i = 0; i < entities.length; i++) {
							if (entities[i].__c.Vehicle == true) {
								this.leftWeight += entities[i].weight;
							}
						}
						var entities = Crafty.map.search({_x: this.righttop._x, _y: this.righttop._y -8, _w: 96, _h: 8 });
						for (var i = 0; i < entities.length; i++) {
							if (entities[i].__c.Vehicle == true) {
								this.rightWeight += entities[i].weight;
							}
						}
					}
					this.leftDestination = this.leftBalance - (this.leftScale/2) + (this.leftWeight/(this.leftWeight + this.rightWeight))*this.leftScale;
					this.rightDestination = this.rightBalance - (this.rightScale/2) + (this.rightWeight/(this.leftWeight + this.rightWeight))*this.rightScale;
					var leftMove = this.lefttop._y - this.leftDestination;
					if (leftMove < 0) {
						if (leftMove < -4) {
							leftMove = this.lefttop._y + 4;
						} else {
							leftMove = this.lefttop._y - leftMove;
						}
						var moveBottom = leftMove + 2;
						this.lefttop.direction = false;
						this.lefttop.tween({ y: leftMove }, 4);
						this.leftbottom.tween({ y: moveBottom }, 4);
						this.lefttop.moving = true;
					} else if (leftMove > 0) {
						if (leftMove > 4) {
							leftMove = this.lefttop._y - 4;
						} else {
							leftMove = this.lefttop._y - leftMove;
						}
						var moveBottom = leftMove + 2;
						this.lefttop.direction = true;
						this.lefttop.tween({ y: leftMove }, 4);
						this.leftbottom.tween({ y: moveBottom }, 4);
						this.lefttop.moving = true;
					} else {
						this.lefttop.moving = false;
					}
					var rightMove = this.righttop._y - this.rightDestination;
					if (rightMove < 0) {
						if (rightMove < -4) {
							rightMove = this.righttop._y + 4;
						} else {
							rightMove = this.righttop._y - rightMove;
						}
						var moveBottom = rightMove + 2;
						this.righttop.direction = false;
						this.righttop.tween({ y: rightMove }, 4);
						this.rightbottom.tween({ y: moveBottom }, 4);
						this.righttop.moving = true;
					} else if (rightMove > 0){
						if (rightMove > 4) {
							rightMove = this.righttop._y - 4;
						} else {
							rightMove = this.righttop._y - rightMove;
						}
						var moveBottom = rightMove + 2;
						this.righttop.direction = true;
						this.righttop.tween({ y: rightMove }, 4);
						this.rightbottom.tween({ y: moveBottom }, 4);
						this.righttop.moving = true;
					} else {
						this.righttop.moving = false;
					}
					if (this.lefttop.moving) {
						if (this.playSound) {
							this.playSound = false;
							Crafty.audio.play("scales_move");
						}
					} else {
						this.playSound = true;
					}
				}
			});
		});
	},
	generateExit: function(level) {
		var ent = Crafty.e('Exit').attr({ x: Levels.level[level].lock._x, y: Levels.level[level].lock._y, z: 2, w: 64, h: 96 });
		ent.addComponent('Collision');
		//ent.addComponent('Collision').addComponent('Color').color('red');
		var ent = Crafty.e('Key').attr({ x: Levels.level[level].key._x, y: Levels.level[level].key._y, z: 2, w: 64, h: 64 });
		ent.addComponent('Collision');
		//ent.addComponent('Collision').addComponent('Color').color('red');
	},
	generateLogic: function(level) {
		Game.levelScore = [];
		var ent = Crafty.e('Engine');
		var _timer = Crafty.e('Timer').attr({ x: 804, y: 10, z: 4 });
		_timer.timeLeft = Levels.level[level].time;
	},
	generatePlayers: function(level) {
		for (var i = 0; i < Game.teams.length; i++) {
			for (var j = 0; j < Levels.level[level].teams.length; j++) {
				if (Game.teams[i].id == Levels.level[level].teams[j].id) {
					for (var k = 0; k < Game.teams[i].vehicles.length; k++) {
						var ent = Crafty.e('Vehicle').attr({x: Levels.level[level].teams[j].vehicles[k]._x, y: Levels.level[level].teams[j].vehicles[k]._y, z: 3, w: 64, h: 64});
						ent.teamId = Game.teams[i].id;
						ent.id = Game.teams[i].vehicles[k].id;
						ent.weight = Levels.level[level].teams[j].vehicles[k]._weight;
						ent.addComponent(Levels.level[level].teams[j].vehicles[k].c);
						ent.addComponent('Collision').collision(new Crafty.polygon([24,48], [40,48], [40,64], [24,64]));
						ent._keyRun = Levels.level[level].teams[j].vehicles[k]._keyRun;
						ent._keyJump = Levels.level[level].teams[j].vehicles[k]._keyJump;
                        _.each(GameController, function(obj) {
                            if (obj.vehicleId == Game.teams[i].vehicles[k].id) {
                                obj["ent"] = ent;
                            }
                        });
                        _.each(Game.hiScore, function(high_score) {
                        	if (high_score.id == Game.teams[i].vehicles[k].id) {
								var ent = Crafty.e('Poser').attr({ x: Levels.level[level].teams[j].posers[k]._x, y: Levels.level[level].teams[j].posers[k]._y, z: 3 });
								ent.addComponent('poser' + (k + 1));
								Crafty.e("2D, DOM, Text, ScoreplateText").attr({ x: Levels.level[level].teams[j].posers[k]._x - 16, y: Levels.level[level].teams[j].posers[k]._y - 16, z: 3, w: 96, h: 16 }).text(high_score.name);
								Crafty.e("2D, DOM, Text, ScoreplateText").attr({ x: Levels.level[level].teams[j].posers[k]._x - 16, y: Levels.level[level].teams[j].posers[k]._y + 64, z: 3, w: 96, h: 16 }).text(high_score.totalScore);
							}
                        })
					}
				}
			}
		}
	}
}