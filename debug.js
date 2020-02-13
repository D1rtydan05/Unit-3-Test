"use strict" //bruh
//function for test
function test1(){
    var input = "^><^>>>^<^v<v^^vv^><<^<><<vv^<>^<^v>^vv<>v><vv^^<>>^^^v<<vv><<^>^<^v<^>^v><<<v^<v<<<v<<vv<v<^><^>><>v>v^<<v^^<^v<><^>^<<^^^>v>>v^^<v>>^>vv><v>>^>>v^>^v>^<^^v>^>^^v<v>^^<v<>>v^^v><^><^<<>v^<^<^v<v>v^>>>v^v^>^<>^v<^^vv<v>^>^<>^^<vv^<><<v<^<^^>vv<>^>v<^>^v>v^>^v<>^><>><vv<>v^v<><>v^v>>>>v^^>^><^^<v<^><^<v>>^v^v<>v<<<^<<vvvv<<v^vv^>v^^^<^^^<v>>v<^v>>>>>v<^^^^>v<^<><v>>>>>";
    var output = document.getElementById("output");
    
    //Creates and initialized all of the variables for the program
    var pos = Array (); //new?? / are there parenthesis or brackets? IS it an array???
    var x = 0;
    var y = 0;    
    var ans = 0;

    //creates a grid array with one element "0,0"
    var grid = ["0, 0"]; //parenthesis?
    //splits everything in the grid array 
    grid = input.split(" "); //space?

    pos.push(x + ", " + y);

    //checks each grid element for the symbol in it and then moves accordingly 
    for(var i = 0; i < grid.length; i++){
        var check = false; //WHAT DO I DO WITH THIS CHECK
        if(grid[i] === "^"){
            x++;
        }else if(grid[i] === ">"){
            y++;
        }else if(grid[i] === "v"){
            x--;
        }else if(grid[i] === "<"){
            y--;
        } // are these x and y's moving right?
        pos.push(x + ", " + y);
    }
            //missing "}" ?
    //loop that will make sure no position is counted twice 
    loop:
    for(var j = 0; j < pos.length; j++){
        for(var i = j+1; i< pos.length - 1; i++){ //is this supposed to look like that?
            if(pos[i] === pos[j]){
                continue loop;
            }
        }
        ans++; //ans++ here?
    }

    output.innerHTML = ans; // WHat da hail is textContent and anchor???
}











//function for test 2
function test2(){
    var input = "^><^>>>^<^v<v^^vv^><<^<><<vv^<>^<^v>^vv<>v><vv^^<>>^^^v<<vv><<^>^<^v<^>^v><<<v^<v<<<v<<vv<v<^><^>><>v>v^<<v^^<^v<><^>^<<^^^>v>>v^^<v>>^>vv><v>>^>>v^>^v>^<^^v>^>^^v<v>^^<v<>>v^^v><^><^<<>v^<^<^v<v>v^>>>v^v^>^<>^v<^^vv<v>^>^<>^^<vv^<><<v<^<^^>vv<>^>v<^>^v>v^>^v<>^><>><vv<>v^v<><>v^v>>>>v^^>^><^^<v<^><^<v>>^v^v<>v<<<^<<vvvv<<v^vv^>v^^^<^^^<v>>v<^v>>>>>v<^^^^>v<^<><v>>>>>";
    var output = document.getElementById("output");
    var pos = Array (); // brackets?
    var x1 = 0;
    var y1 = 0;   
    var x2 = 0;
    var y2 = 0;  
    var ans = 0;

        //does it close here? when does test2 end?
    //grid array that store all of the positions that were visited
    var grid = ["0, 0"];
    grid = input.split(" ");// space?

    pos.push("0, 0");// "0, 0" ??

    //checks all the even values
    for(var i = 0; i < grid.length; i++){
        var check = false;
        if(i % 2 === 0){
            if(grid[i] === "^"){
                x1++;
            }else if(grid[i] === ">"){
                y1++;
            }else if(grid[i] === "v"){
                x1--;
            }else if(grid[i] === "<"){
                y1--;
            }
            pos.push(x1 + ", " + y1);
        }
        //checks all of the odd values
        if(i % 2 === 1){
            if(grid[i] === "^"){
                x2++;
            }else if(grid[i] === ">"){
                y2++;
            }else if(grid[i] === "v"){
                x2--;
            }else if(grid[i] === "<"){
                y2--;
            }
            pos.push(x2 + ", " + y2);
        }
    }

    //loop to check repeats
    loop:  //LOOSE????
    for(var j = 0; j < pos.length; j++){
        for(var i = j+1; i<pos.length-1; i++){ //does this look right?
            if(pos[i] === pos[j]){
                continue loop;
            }
        }
        ans++;
    }

    output.innerHTMl = ans; //no document ?
}
// WHERE DOES IT E N D
 //T W O !?!?!?!?