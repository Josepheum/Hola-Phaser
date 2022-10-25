import Phaser from 'phaser';
import {useState,useEffect} from 'react';
import App from '../App.js';


class Escena extends Phaser.Scene{
	
	preload ()
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

    create ()
    {
        this.add.image(400, 300, 'fondo');

        var particles = this.add.particles('estrella');

        var emitter = particles.createEmitter({
            speed: 50,
            scale: { start: 0.8, end: 0 },
            blendMode: 'ADD'
        });
        var particles = this.add.particles('estrella');
        var emitter1 = particles.createEmitter({
			//frame: ['red', 'blue','green','yellow'],
            x:200,
            offsetY: 150,
            speed: 100,
            scale: { start: 0.4, end: 0 },
            blendMode: 'REST',
            gravityX: 330,
            frequency: 50,
            maxParticles: 10,
            
            //moveToX: 325,
            //moveToY: 165
			
        });

        var hola = this.physics.add.image(400, 100, 'hola');

        hola.setVelocity(100, 200);
        hola.setBounce(1, .7);
        hola.setCollideWorldBounds(true);
        hola.setBlendMode('DODGE');

        emitter.startFollow(hola);
        emitter1.startFollow(hola);

    }
}

export default Escena;

