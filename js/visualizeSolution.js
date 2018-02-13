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

      var timerId;


    function visualizeSolution(map) {
        debugger;
        var count=0,i=0,j=0;
        timerId= setInterval(function(){
            if(i<map.length)
                check(map,i,j,"l");
            else
                clearInterval(timerId);
            if(j < map[i].length-1)
                j++;
            else{
                j=0;
                i++;
            }
        }, 1000);

        return count;
    }

    
    function check(map,rowpos,colpos,direction){
        changeColor(rowpos,colpos,"red");
        if(map[rowpos][colpos]===ISLAND){
            map[rowpos][colpos]=2;
            changeColor(rowpos,colpos,"yellow");
            if (rowpos>0 && direction!=="t") {
                check(map,rowpos-1,colpos,"b");
            }
            if (colpos>0 && direction !=="l") {
                check(map,rowpos,colpos-1,"r");
            }
            if (rowpos<map.length-1 && direction!=="b") {
                check(map,rowpos+1,colpos,"t");
            }
            if (colpos<map[rowpos].length-1 && direction!=="r") {
                check(map,rowpos,colpos+1,"l");
            }
            return 1;
        }
        else{
            if(map[rowpos][colpos]==2)
                setTimeout(changeColor, 1000,rowpos,colpos,"yellow");
            else
                setTimeout(changeColor, 1000,rowpos,colpos,"blue");
            return 0;
        }

    }
        

    function changeColor(x,y,color){
        document.body.children[0].children[0].children[x+1].children[y].style.backgroundColor = color;
    }


    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution(root.SHRI_ISLANDS.MAP);
})(this);
