//motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var engine;
var world;

var solo, parado;



function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;
    

    //CRIAR CORPOS
    //1º passo: definir as props do corpo


    //2º passo: criar o corpo

    //3º passo: adicionar no mundo


    //props da bola


    //cria o corpo da bola

    //adiciona ela no mundo
   


    //define o tamanho da ellipse pelo raio
    ellipseMode(RADIUS)
    //posiciona o retângulo a partir do centro
    rectMode(CENTER);
}


function draw() {
    background("cyan");
    
    //atualizar o motor
    Engine.update(motor);

    //colore o solo de marrom

    //desenha um retângulo na posição do solo


    //define a cor do desenho

    //desenha uma ellipse na posição da bola




}
