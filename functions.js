$(document).ready(function (){

    
    var aux=0,aux2= [0,0,0];
    var cadena="";

    $("input").focus(function(){
        $(this).css("background-color","yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color","white");
    });
    $("input").keydown(function(){
        $(this).css("background-color","green");
    });
    $("input").keyup(function(){
        $(this).css("background-color","gray");
    });
    $("p:first").css("color","red");
    $("#sqlmouse").mouseenter(function(){
        $("#sqlmouse").css("background-image","url(imagenes/COD.jpg)");
    });
    $("#sqlmouse").mouseleave(function(){
        $("#sqlmouse").css("background-image","url(imagenes/halo.jpg)");
    });
    $("#sqlmouse").mousedown(function(){
        $("#sqlmouse2").css("background-image","url(imagenes/WARCRAFT.jpg)");
    });
    $("#sqlmouse").mouseup(function(){
        $("#sqlmouse").css("background-image","url(imagenes/GTA5.jpg)");
    });


    $("#hola").click(function (){
        $("#hola").css("color","red");
        $("#hola").css("background-color","yellow");
        }
    );
    $("#foto").click(function (){
        $("#foto").hide();
    });

    $("#halo").click(function(){
        $("p.intro").css("background-color","green");
        aux++;cadena="";aux2[0]++;
        
        if(aux2[0]<4){
            if(aux2[0!=3]){
                if(aux%2==0){
                    
                    $(".halo").css("border","10px");
                    $(".halo").css("border-style","solid");
                    $(".halo").css("border-color","pink");
                    
                    cadena+="<tr><td>"+aux+"</td><td>"+"Halo2"+"</td>"+"<td>"+"Rosa"+"</td><td>"+aux2[0]+"</td></tr>"
                }
                else{
                        
                    $(".halo").css("border","10px");
                    $(".halo").css("border-style","solid");
                    $(".halo").css("border-color","red");
                    cadena+="<tr><td>"+aux+"</td><td>"+"Halo2"+"</td>"+"<td>"+"Rojo"+"</td><td>"+aux2[0]+"</td></tr>"
                }
                $("#tabla").append(cadena);      
            }
            else{
                $(".halo").css("border","10px");
                $(".halo").css("border-style","solid");
                $(".halo").css("border-color","red");
                cadena+="<tr class="+'table-warning'+"><td>"+aux+"</td><td>"+"Halo2"+"</td>"+"<td>"+"Rojo"+"</td><td>"+aux2[0]+"</td></tr>"
                $("#tabla").append(cadena);
            }
        }
       

        else{
            $("#halo").hide();
            $(".halo").hide();
        }
        
    });
    $("#gears").click(function(){
        $("h1:first").hide();
        aux++;cadena="";aux2[1]++;
        $(".gears").css("border","10px");
        $(".gears").css("border-style","solid");
        $(".gears").css("border-color","blue");

        cadena+="<tr><td>"+aux+"</td><td>"+"Gears"+"</td>"+"<td>"+"Azul"+"</td><td>"+aux2[1]+"</td></tr>"
        console.log(cadena);
    $("#tabla").append(cadena);
    });
    $("#fifa").click(function(){
        aux++;cadena="";aux2[2]++;
        $(".fifa").css("border","10px");
        $(".fifa").css("border-style","solid");
        $(".fifa").css("border-color","green");

        cadena+="<tr><td>"+aux+"</td><td>"+"Fifa"+"</td>"+"<td>"+"Verde"+"</td><td>"+aux2[2]+"</td></tr>"
    console.log(cadena);
    $("#tabla").append(cadena);
    cadena="";
    });

    $("p").click(function(){
        $(this).css("color","gray");
        $(this).css("font-size","110%");
    });
});