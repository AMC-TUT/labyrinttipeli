Crafty.c("Poser", {
    init: function() {
        this.addComponent("2D, Canvas, SpriteAnimation, poser1")
		.animate("idle", [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]])
		.bind("EnterFrame", function(frame) {
			if (!this.isPlaying("idle")) {
				this.stop().animate("idle", 80, -1)
			}
		})
    }
});

Crafty.c("Vehicle", {
    init: function() {
		this.id = 0,
		this.weight = 0,
		this._keyJump = "UP_ARROW",
		this._keyRun = "DOWN_ARROW",
		this._accJump = 0,
		this._accRun = 0,
		this._ka = [10, 10, 10, 10, 10],
		this._shaker = 0,
		this._idle_counter = 0,
		this._speed = 0,
		this._direction = false,
		this._status = "fall",
//		this._jump = false,
		this.playSound = true,
		this._jump_counter = 0,
		this._next_add = 0,
		this._prev_add = 0,
		this._radian = 0,
		this._dreadmillID = 0,
		this.addComponent("2D, Canvas, Collision, Keyboard, Tween, SpriteAnimation, player1")
		.collision()
		.animate("idle_right", [[0, 0]])
		.animate("idle_left", [[0, 1]])
		.animate("walk_right", [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]])
		.animate("walk_left", [[2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1]])
		.animate("jump_right", [[1, 0]])
		.animate("jump_left", [[1, 1]])
		.bind("EnterFrame", function(frame) {
			this._speed = this._accRun;
			this._speed = this._speed < 3 ? this._speed : 3; // max speed = 3
			this._idle_counter += 1;
			if (this._idle_counter > 16) {
				this._ka.shift();
				this._ka.push(this._shaker);
				this._shaker = 0;
				this._idle_counter = 0;
			}
			switch (this._status) {
				case "power":
					if (this.isDown(this._keyRun) || (this._speed > 0)) {
						if (this._direction) {
							if (!this.isPlaying("walk_left")) {
								this.stop().animate("walk_left", 20, -1)
							}
						} else {
							if (!this.isPlaying("walk_right")) {
								this.stop().animate("walk_right", 20, -1)
							}
						}
						Crafty.trigger("movePlatform", this._dreadmillID);
					} else if (this.isDown(this._keyJump) || (this._accJump > 0)) {
						this._status = "jump";
						this._accJump = 0;
					} else {
						if (this._direction) {
							if (!this.isPlaying("idle_left")) {
								this.stop().animate("idle_left", 20, -1)
							}
						} else {
							if (!this.isPlaying("idle_right")) {
								this.stop().animate("idle_right", 20, -1)
							}
						}
					}
					this._accRun = this._accRun < 0.5 ? 0 : this._accRun-0.5;
					break;
				case "fall":
					if (this._direction) {
						if (!this.isPlaying("jump_left")) {
							this.stop().animate("jump_left", 20, -1)
						}
					} else {
						if (!this.isPlaying("jump_right")) {
							this.stop().animate("jump_right", 20, -1)
						}
					}
					if (this.hit('Floor') || this.hit('PlatformTop') || this.hit('LibraTop')) {
						this._status = "walk";
					} else {
						if (this.weight < 80) {
							this.y += 3;
						} else {
							this.y += 4;
						}
					}
					break;
				case "jump":
					if (this.weight < 80) {
						this._speed = 3;
					} else {
						this._speed = 2;
					}
					this._radian += Math.PI / 64;
					this._next_add = 96 * Math.sin(this._radian) - this._prev_add;
					this._prev_add += this._next_add;
					this.y -= this._next_add;
					if (this._direction) {
						this.x -= this._speed;
						if (!this.isPlaying("jump_left")) {
							this.stop().animate("jump_left", 20, -1)
						}
					} else {
						this.x += this._speed;
						if (!this.isPlaying("jump_right")) {
							this.stop().animate("jump_right", 20, -1)
						}
					}
					if (this.playSound) {
						Crafty.audio.play("player_jump");
						this.playSound = false;
					}
					this._jump_counter += 1;
					if (this._jump_counter > 32) {
						if (this.hit('Floor') || this.hit('PlatformTop') || this.hit('LibraTop')) {
							this._jump_counter = 65;
						}
						if (this._jump_counter > 64) {
							this._accRun = 0;
							this.playSound = true
							this._status = "fall";
							this._jump_counter = 0;
							this._radian = 0;
							this._next_add = 0;
							this._prev_add = 0;
						}
					}
					break;
				case "walk":
					if (this.isDown(this._keyRun) || (this._speed > 0)) {
						if (this._speed == 0) {
							this._speed = 1.5;
						}
						if (this._direction) {
							if (!this.isPlaying("walk_left")) {
								this.stop().animate("walk_left", 20, -1)
							}
							this.x -= this._speed;
						} else {
							if (!this.isPlaying("walk_right")) {
								this.stop().animate("walk_right", 20, -1)
							}
							this.x += this._speed;
						}
					} else if (this.isDown(this._keyJump) || (this._accJump > 0)) {
						this._status = "jump";
						this._accJump = 0;
					} else {
						if (this._direction) {
							if (!this.isPlaying("idle_left")) {
								this.stop().animate("idle_left", 20, -1)
							}
						} else {
							if (!this.isPlaying("idle_right")) {
								this.stop().animate("idle_right", 20, -1)
							}
						}
					}
					if (this.hit('Ceiling') || this.hit('PlatformBottom') || this.hit('LibraBottom')) {
						this.y -= 1;
					}
					if (!this.hit('Floor') && !this.hit('PlatformTop') && !this.hit('LibraTop')) {
						this._status = "fall";
					}
					this._accRun = this._accRun < 0.5 ? 0 : this._accRun-0.5;
					break;
			}
			if (this.hit('Door') || this.hit('Wall')) {
				this._direction = !this._direction; // toggle direction
				this.x = this._direction ? this.x - 5 : this.x + 10;
			}
			if (this.x < 0) {
				this._direction = !this._direction; // toggle direction
                this.x = this._direction ? this.x - 5 : this.x + 5;
            }
            if (this.x > 900) {
				this._direction = !this._direction; // toggle direction
                this.x = this._direction ? this.x - 5 : this.x + 5;
            }
		})
    }
});

Crafty.c("Floor", {
    init: function() {
        this.addComponent("2D, Canvas")
    }
});

Crafty.c("Ceiling", {
    init: function() {
        this.addComponent("2D, Canvas")
    }
});

Crafty.c("Wall", {
    init: function() {
        this.addComponent("2D, Canvas")
    }
});

Crafty.c("Door", {
    init: function() {
        this.addComponent("2D, Canvas, Tween, barrier")
    }
});

Crafty.c("Trigger", {
    init: function() {
        this.addComponent("2D, Canvas")
    }
});

Crafty.c("PlatformTop", {
    init: function() {
        this.addComponent("2D, Canvas, Tween, platform")
    }
});

Crafty.c("PlatformBottom", {
    init: function() {
        this.addComponent("2D, Canvas, Tween")
    }
});

Crafty.c("Libra", {
    init: function() {
        this.leftWeight = 0,
        this.rightWeight = 0
    }
});

Crafty.c("LibraTop", {
    init: function() {
        this.addComponent("2D, Canvas, Tween, scales")
    }
});

Crafty.c("LibraBottom", {
    init: function() {
        this.addComponent("2D, Canvas, Tween")
    }
});

Crafty.c("Treadmill", {
    init: function() {
        this.addComponent("2D, Canvas")
    }
});

Crafty.c("Key", {
    init: function() {
    	this.firstHit = 1,
        this.addComponent("2D, Canvas, Collision, SpriteAnimation, key")
		.animate("sparkle", [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]])
		.onHit("Vehicle", function(ent) {
			if (this.firstHit) {
				this.firstHit = 0;
				Crafty.trigger("releaseExit");
				Crafty.audio.play("key_collected");
				this.destroy();
			}
		}, function() {
			this.firstHit = 1;
		})
		.bind("EnterFrame", function(frame) {
			if (!this.isPlaying("sparkle")) {
				this.stop().animate("sparkle", 40, -1)
			}
		})
    }
});

Crafty.c("Exit", {
    init: function() {
    	this.firstHit = 1,
    	this._doorOpen = false;
        this.addComponent("2D, Canvas, Collision, SpriteAnimation, exit")
		.animate("close", [[0, 0]])
		.animate("open", [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]])
		.bind("releaseExit", function() {
			this._doorOpen = true;
		})
		.onHit("Vehicle", function(ent) {
			if (this._doorOpen) {
				if (this.firstHit) {
					this.firstHit = 0;
					Crafty.audio.play("exit_level");
					Crafty.trigger("CountBases", ent[0].obj.id);
					ent[0].obj.destroy();
				}
			}
		}, function() {
			this.firstHit = 1;
		})
		.bind("EnterFrame", function(frame) {
			if (this._doorOpen) {
				if (!this.isPlaying("open")) {
					this.stop().animate("open", 40, -1)
				}
			} else {
				if (!this.isPlaying("close")) {
					this.stop().animate("close", 20, -1)
				}
			}
		})
    }
});

Crafty.c("Engine", {
	init: function() {
		this.bind('CountBases', function(id) {
			var level_over = false;
			if (id > 0) {
				var numberOfPlayers = 0;
				_.each(Game.teams, function(team) {
					_.each(team.vehicles, function(vehicle) {
						if (vehicle.id == id) {
							var timerText = $(".Timer").text();
							var exitTime = parseInt(timerText.replace("Aika: ", ""));
							player = {
								id: vehicle.id,
								name: vehicle.name,
								score: exitTime
							}
							Game.levelScore.push(player);
						}
						numberOfPlayers++;
					})
				})
				if (Game.levelScore.length == numberOfPlayers) {
					level_over = true;
				}
			} else {
				_.each(Game.teams, function(team) {
					_.each(team.vehicles, function(vehicle) {
						var didntmakeit = true;
						_.each(Game.levelScore, function(score) {
							if (score.id == vehicle.id) {
								didntmakeit = false;
							}
						})
						if (didntmakeit) {
							player = {
								id: vehicle.id,
								name: vehicle.name,
								score: 0
							}
							Game.levelScore.push(player);
							level_over = true;
						}
					})
				})
			}
			if (level_over) {
				var team_bonus = 0;
				_.each(Game.levelScore, function(score) {
					team_bonus += score.score;
				})
				team_bonus = Math.floor(team_bonus/Game.levelScore.length);
				_.each(Game.hiScore, function(high_score) {
					_.each(Game.levelScore, function(level_score) {
						if (high_score.id == level_score.id) {
							high_score.score += level_score.score;
							high_score.teamBonus += team_bonus;
							high_score.totalScore += level_score.score + team_bonus;
						}
					})
				})
				Game.hiScore = Game.hiScore.sort( function(a, b) { return b.totalScore - a.totalScore});
				Game.level++;
				if (Levels.level.length == Game.level) {
					var entities = Crafty.map.search({_x: 0, _y: 0, _w: Game.width, _h: Game.height });
					for (var i = 0; i < entities.length; i++) {
						entities[i].destroy();
					}
					this.destroy();
					Crafty.scene("GameOver");
				} else {
					var entities = Crafty.map.search({_x: 0, _y: 0, _w: Game.width, _h: Game.height });
					for (var i = 0; i < entities.length; i++) {
						entities[i].destroy();
					}
					Game.levelScore = [];
					this.destroy();
					Crafty.scene("Game");
				}
			}
		})
	}
});

Crafty.c('Timer', {
	interval: null,
	timeWas: 0,
	timeNow: 0,
	timeLeft: 0,
	init: function() {
		this.timeWas = 0,
		this.timeNow = 0,
		this.timeLeft = 0,
		this.addComponent("2D", "DOM", "Text")
		this.interval = setInterval('Crafty.trigger("Tick")', 1000);
		this.text("Aika: " + this.timeLeft);
		this.bind("StopTimer", function() {
			clearInterval(this.interval);
		});
		this.bind("Tick", function() {
			var kello = new Date();
			this.timeNow = Math.floor(kello.getTime()/1000);
			if (this.timeNow > this.timeWas) {
				if (this.timeLeft > 0) {
					this.timeLeft -= 1;
					if (this.timeLeft < 11) {
						if (this.timeLeft > 0) {
							Crafty.audio.play("time_running");
						} else {
							Crafty.audio.play("time_out");
						}
					}
				} else {
					Crafty.trigger("CountBases", 0);
				}
				this.text("Aika: " + this.timeLeft);
			}
			this.timeWas = this.timeNow;
		});
	}
});
