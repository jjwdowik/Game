


window.addEventListener('load',function(e) {
var Q = window.Q = Quintus().setup({
	width: 800,
	height: 600,
	scaleToFit: true
	})
	.include("Sprites, Scenes, 2D, Input")
	.controls();


Q.Class.extend("First", {
	init: function() {
		console.log("initiation of first class");
	},

	doIt: function() {
		alert("yup");
	}
});

Q.Sprite.extend("Player", {
	init: function(p) {
		this._super(p, {
			health: 20,
			damage: 2,
			x: 2,
			y: 1,
			w: 20,
			h: 20
		});
	}

	update: function(dt) {
		this.trigger('prestep',dt);
	  if(this.step) { this.step(dt); }
	  this.trigger('step',dt);
	  this.refreshMatrix();
	  Q._invoke(this.children,"frame",dt);
	}

});


// alert(firstPlayer.p.health);


Q.scene("level1", function(stage) {
	var player1 = stage.insert(new Q.Player());
});


Q.stageScene(null);
Q.stageScene("level1", 1);


});