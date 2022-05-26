function possibleMoves(x,y)
{
    let moves = new Array();


    //PAWN WHITE
    if(board[x][y].content == "♙")
    {
        //MOVE
        if (board[x - 1][y].content == " ") {
            let moveLocation = "#x" + (x - 1) + "y" + y;
            moves.push(moveLocation);

            $(moveLocation).css("background-color", "#baca44");
        }
        if (board[x - 2][y].content == " " && x == 6 && board[x - 1][y].content == " ") {
            let moveLocation = "#x" + (x - 2) + "y" + y;
            moves.push(moveLocation);
            $(moveLocation).css("background-color", "#baca44");
        }
        //ATTACK
        if (x != 0 && y != 0) {
            if (board[x - 1][y - 1].player == 2) {
                let moveLocation = "#x" + (x - 1) + "y" + (y - 1);
                moves.push(moveLocation);
                $(moveLocation).css("background-color", "#800020");
            }
        }

        if (x != 0 && y < 7) {
            if (board[x - 1][parseInt(y) + 1].player == 2) {
                let moveLocation = "#x" + (x - 1) + "y" + (parseInt(y) + 1);
                moves.push(moveLocation);
                $(moveLocation).css("background-color", "#800020");
            }
        }

    }

        //PAWN BLACK
        if(board[x][y].content == "♟") {
            //MOVE
            if (board[parseInt(x) + 1][y].content == " ") {
                let moveLocation = "#x" + (parseInt(x) + 1) + "y" + y;
                moves.push(moveLocation);

                $(moveLocation).css("background-color", "#baca44");
            }

            if (x == 1 && board[parseInt(x) + 2][y].content == " " && board[parseInt(x) + 1][y].content == " ") {
                let moveLocation = "#x" + (parseInt(x) + 2) + "y" + y;
                moves.push(moveLocation);
                $(moveLocation).css("background-color", "#baca44");
            }
            //ATTACK
            if (x != 7 && y != 0) {
                if (board[parseInt(x) + 1][y - 1].player == 1) {
                    let moveLocation = "#x" + (parseInt(x) + 1) + "y" + (y - 1);
                    moves.push(moveLocation);
                    $(moveLocation).css("background-color", "#800020");
                }
            }

            if (x != 7 && y < 7) {
                if (board[parseInt(x) + 1][parseInt(y) + 1].player == 1) {
                    let moveLocation = "#x" + (parseInt(x) + 1) + "y" + (parseInt(y) + 1);
                    moves.push(moveLocation);
                    $(moveLocation).css("background-color", "#800020");
                }
            }
        }

    //ROOK
    if(board[x][y].content == "♖" || board[x][y].content == "♜")
    {
        //MOVE to BOTTOM
        if(x<7)
        {
            for(i=parseInt(x)+1; i<8; ++i)
            {

                if(board[i][y].player == 0)
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[i][y].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }

        //MOVE TOP
        if(x>0)
        {
            for(i=parseInt(x)-1; i>=0; --i)
            {
                if(board[i][y].player == 0)
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[i][y].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }


        //MOVE LEFT
        if(y>0)
        {
            for(i=parseInt(y)-1; i>=0; --i)
            {
                if(board[x][i].player == 0)
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[x][i].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }
        //MOVE RIGHT
        if(y<7)
        {
            for(i=parseInt(y)+1; i<8; ++i)
            {
                if(board[x][i].player == 0)
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[x][i].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }



    }
    //KNIGHT
    if(board[x][y].content == "♘" || board[x][y].content == "♞")
    {
        //MOVE TOP RIGHT
        if(y < 7 && x > 2)
        {
            if(board[parseInt(x)-2][parseInt(y)+1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)-2)+"y"+(parseInt(y)+1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK TOP RIGHT
            else if(board[parseInt(x)-2][parseInt(y)+1].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)-2)+"y"+(parseInt(y)+1);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }
        //MOVE TOP LEFT
        if(y > 0 && x > 2)
        {
            if(board[parseInt(x)-2][parseInt(y)-1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)-2)+"y"+(parseInt(y)-1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK TOP LEFT
            else if(board[parseInt(x)-2][parseInt(y)-1].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)-2)+"y"+(parseInt(y)-1);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }
        //MOVE BOTTOM RIGHT
        if(y < 7 && x < 6)
        {
            if(board[parseInt(x)+2][parseInt(y)+1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)+2)+"y"+(parseInt(y)+1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK TOP RIGHT
            else if(board[parseInt(x)+2][parseInt(y)+1].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)+2)+"y"+(parseInt(y)+1);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }

        //MOVE BOTTOM LEFT
        if(y > 0 && x < 6)
        {
            if(board[parseInt(x)+2][parseInt(y)-1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)+2)+"y"+(parseInt(y)-1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK TOP LEFT
            else if(board[parseInt(x)+2][parseInt(y)-1].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)+2)+"y"+(parseInt(y)-1);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }

        //MOVE LEFT SIDE-BOTTOM
        if(y > 2 && x<7)
        {
            if(board[parseInt(x)+1][parseInt(y)-2].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)-2);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK LEFT SIDE-BOTTOM
            else if(board[parseInt(x)+1][parseInt(y)-2].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)-2);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }
        //MOVE LEFT SIDE-TOP
        if(y > 2 && x>1)
        {
            if(board[parseInt(x)-1][parseInt(y)-2].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)-2);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK LEFT SIDE-TOP
            else if(board[parseInt(x)-1][parseInt(y)-2].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)-2);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }
        //MOVE RIGHT SIDE-BOTTOM
        if(y < 6 && x<7)
        {
            if(board[parseInt(x)+1][parseInt(y)+2].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)+2);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK LEFT SIDE-BOTTOM
            else if(board[parseInt(x)+1][parseInt(y)+2].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)+2);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }
        //MOVE RIGHT SIDE-TOP
        if(y < 6 && x>1)
        {
            if(board[parseInt(x)-1][parseInt(y)+2].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)+2);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            //ATTACK LEFT SIDE-TOP
            else if(board[parseInt(x)-1][parseInt(y)+2].player != board[x][y].player)
            {
                let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)+2);
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
            }
        }

    }
    //BISHOP
    if(board[x][y].content == "♗" || board[x][y].content == "♝")
    {
        let countX = x;
        let countY = y;
        //MOVE DOWN-RIGHT
        while(countX < 7 && countY <7)
        {
            countX++;
            countY++;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE DOWN-LEFT
        countX = x;
        countY = y;
        while(countX < 7 && countY > 0)
        {
            countX++;
            countY--;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE TOP-RIGHT
        countX = x;
        countY = y;
        while(countX > 0 && countY <7)
        {
            countX--;
            countY++;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE TOP-LEFT
        countX = x;
        countY = y;
        while(countX > 0 && countY >0)
        {
            countX--;
            countY--;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
    }

    //QUEEN
    if(board[x][y].content == "♕" || board[x][y].content == "♛")
    {
        let countX = x;
        let countY = y;
        //MOVE DOWN-RIGHT
        while(countX < 7 && countY <7)
        {
            countX++;
            countY++;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE DOWN-LEFT
        countX = x;
        countY = y;
        while(countX < 7 && countY > 0)
        {
            countX++;
            countY--;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE TOP-RIGHT
        countX = x;
        countY = y;
        while(countX > 0 && countY <7)
        {
            countX--;
            countY++;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }
        //MOVE TOP-LEFT
        countX = x;
        countY = y;
        while(countX > 0 && countY >0)
        {
            countX--;
            countY--;
            if(board[countX][countY].player == 0)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            else if(board[countX][countY].player != board[x][y].player)
            {
                let moveLocation = "#x"+countX+"y"+countY;
                $(moveLocation).css("background-color", "#800020");
                moves.push(moveLocation);
                break
            }
            else break;
        }

        if(x<7)
        {
            for(i=parseInt(x)+1; i<8; ++i)
            {

                if(board[i][y].player == 0)
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[i][y].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }

        //MOVE TOP
        if(x>0)
        {
            for(i=parseInt(x)-1; i>=0; --i)
            {
                if(board[i][y].player == 0)
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[i][y].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+i+"y"+y;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }


        //MOVE LEFT
        if(y>0)
        {
            for(i=parseInt(y)-1; i>=0; --i)
            {
                if(board[x][i].player == 0)
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[x][i].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }
        //MOVE RIGHT
        if(y>0)
        {
            for(i=parseInt(y)+1; i<8; ++i)
            {
                if(board[x][i].player == 0)
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
                else if(board[x][i].player == board[x][y].player) break;
                //ATTACK
                else
                {
                    let moveLocation = "#x"+x+"y"+i;
                    $(moveLocation).css("background-color", "#800020");
                    moves.push(moveLocation);
                    break;
                }
            }
        }
    }
    //KING
    if(board[x][y].content == "♔" || board[x][y].content == "♚")
    {
        //MOVES BOTTOM
        if(x<7)
        {
            if(board[parseInt(x)+1][y].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)+1)+"y"+parseInt(y);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            if(y<7)
            {
                if(board[parseInt(x)+1][parseInt(y)+1].player == 0)
                {
                    let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)+1);
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
            }
            if(y>0)
            {
                if(board[parseInt(x)+1][parseInt(y)-1].player == 0)
                {
                    let moveLocation = "#x"+(parseInt(x)+1)+"y"+(parseInt(y)-1);
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
            }
        }
        //MOVES TOP
        if(x>0)
        {
            if(board[parseInt(x)-1][y].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x)-1)+"y"+parseInt(y);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
            if(y<7)
            {
                if(board[parseInt(x)-1][parseInt(y)+1].player == 0)
                {
                    let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)+1);
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
            }
            if(y>0)
            {
                if(board[parseInt(x)-1][parseInt(y)-1].player == 0)
                {
                    let moveLocation = "#x"+(parseInt(x)-1)+"y"+(parseInt(y)-1);
                    $(moveLocation).css("background-color", "#baca44");
                    moves.push(moveLocation);
                }
            }
        }
        //MOVES LEFT
        if(y>0)
        {
            if(board[parseInt(x)][parseInt(y)-1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x))+"y"+(parseInt(y)-1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
        }
        //MOVES RIGHT
        if(y<7)
        {
            if(board[parseInt(x)][parseInt(y)+1].player == 0)
            {
                let moveLocation = "#x"+(parseInt(x))+"y"+(parseInt(y)+1);
                $(moveLocation).css("background-color", "#baca44");
                moves.push(moveLocation);
            }
        }
    }


        return moves;
}

function move(xstart, ystart, xend, yend)
{

        let tid1 = "#x"+xstart+"y"+ystart;
        let tid2 = "#x"+xend+"y"+yend;
        if(board[xend][yend].content == "♔") alert("Czarny wygrał");
        if(board[xend][yend].content == "♚") alert("Biały wygrał");
        //CHANGE POSITION
        $(tid2).html($(tid1).text());
        $(tid1).html(" ");
        board[xend][yend].player = board[xstart][ystart].player;
        board[xend][yend].content = board[xstart][ystart].content;

        board[xstart][ystart].player = 0;
        board[xstart][ystart].content = " ";


}