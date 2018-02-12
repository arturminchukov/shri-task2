(function (root) {
    debugger;
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */

     var x=0,y=0,xglob,yglob,multiTime=1;
     var timerId;


     
    function visualizeSolution(map) {
        timerId=setInterval(function(){check(map,x,y,"l")}, 1500,);
    }




    function check(map,rowpos,colpos,direction){
        x=rowpos;
        y=colpos;
        changeColor("red");
     
        if(map[rowpos][colpos]===ISLAND){
            map[rowpos][colpos]=2;
            xglob=x;
            yglob=y;
            clearInterval(timerId);
            if (rowpos>0 && direction!=="t") {
                setTimeout(check, 1000*multiTime, map,rowpos,colpos-1,"b");
                multiTime++;
            }
            if (colpos>0 && direction !=="l") {
                setTimeout(check, 1000*multiTime, map,rowpos,colpos-1,"r");  
                multiTime++;
            }
            if (rowpos<map.length-1 && direction!=="b") {
                setTimeout(check, 1000*multiTime, map,rowpos+1,colpos,"t");
                multiTime++;
            }
            if (colpos<map[rowpos].length-1 && direction!=="r") {
                setTimeout(check, 1000*multiTime, map,rowpos,colpos+1,"l");
                multiTime++;
            }
        }
        else{
            //setTimeout(changeColor, 500, "blue");
        }
        if(x==map.length-1 && y==map[x].length-1)
            clearInterval(timerId);
        else if (y==map[x].length-1){
            x++;
            y=0;
        }
        else
            y++;

    }

    function changeColor(color){
        document.body.children[0].children[0].children[x+1].children[y].style.backgroundColor = color;
    }


    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution(root.SHRI_ISLANDS.MAP);
})(this);
