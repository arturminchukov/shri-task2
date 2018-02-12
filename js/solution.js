(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var count=0;
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                count+=check(map,i,j,"l");
            }
        }

        return count;
    }

    function check(map,rowpos,colpos,direction){
        if(map[rowpos][colpos]===ISLAND){
            map[rowpos][colpos]=2;
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
        else
            return 0;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
