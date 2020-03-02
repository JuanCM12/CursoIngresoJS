function mostrar()
{
    var planetas;

    
    planetas = (prompt("Ingrese un planeta")).toLowerCase();
    switch (planetas) {
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
         alert ("Aca hace mas frio");        
            break;
        case "tierra":
         alert ("Aca vivimos");
            break;
        case "mercurio":
        case "venus":
          alert ("Aca hace mas calor");
            break;          
        default:
          alert ("Usted no ha ingresado un planeta valido");  
            break;
    }

}
