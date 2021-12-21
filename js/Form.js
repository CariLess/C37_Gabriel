class Form {

  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');
  }
  hide(){
    
  }

  display(){
    var title = createElement('h2')
    title.html("Juego De Carreras De Autos");
    title.position(130, 0);

    this.input.position(130, 160);
    

    this.button.mousePressed(()=>{
      
    });

  }
}
