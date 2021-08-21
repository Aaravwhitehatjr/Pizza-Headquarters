menu_list_array = ["Garlic Chicken Pizza","Margherita Pizza","Cheese Burst Pizza","Veg Paneer Pizza","Tomato, Corn and Basil Pizza","Mozzarella Cheese Pizza", "Veg Brocolli Pizza"];
    
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="http://pngimg.com/uploads/pizza/pizza_PNG43986.png"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}