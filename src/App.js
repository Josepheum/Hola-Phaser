import Phaser from 'phaser';
import {useState,useEffect} from 'react';
import Escena from './componentes/Escena';


function App() {
	
	//uso state de una variable listo, para evitar aplicación duplicada.
	const [listo, setListo]= useState(false);
	useEffect(()=>{
		    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 1 }
            }
        },
        scene:[Escena]
        //scene: {
        //    preload: preload,
        //    create: create
        //}
    };
    
    	//Juego
    var game = new Phaser.Game(config);
    
    //Gatillo para cuando el juego esta completamente listo.
    game.events.on("LISTO",setListo)
    
    //Evita duplicado del lienzo.
    return ()=> {
		setListo(false);
		game.destroy(true);
	}
		
},[listo]);

	

    function preload ()
    {
        //this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.load.image('fondo', 'imagenes/cave.jpeg');
        this.load.image('hola', 'imagenes/hola.png');
        this.load.image('punto', 'imagenes/punto.png')
        this.load.image('estrella','imagenes/estrella.png')

    }

    function create ()
    {
        this.add.image(400, 300, 'fondo');

        var particles = this.add.particles('estrella');

        var emitter = particles.createEmitter({
            speed: 50,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'hola');

        logo.setVelocity(100, 200);
        logo.setBounce(1, .7);
        logo.setCollideWorldBounds(true);
        logo.setBlendMode('DODGE');

        emitter.startFollow(logo);
    }
}

export default App;
