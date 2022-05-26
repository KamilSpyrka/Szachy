class tile
{
    constructor(x,y,content, player)
    {
        this.x = x;
        this.y = y;
        this.content = content;
        this.player = player;
    }
}

board = new Array(8);

// tablica przechowująca stan rozgrywki
for(let x = 0; x<8; ++x)
{
    board[x] = new Array(8);
    for(let y=0; y<8; ++y)
    {
        board[x][y] = new tile(x, y, " ", 0)
    }
}



$(document).ready(function()
{
    let currentMoves = new Array();
    let current_player = 1;
    let showingMoves = false;
    renderPieces();

    //POSSIBLE MOVES
    $(".tile1, .tile2").mouseover(function ()
    {
        let posX = this.id.substr(1,1);
        let posY = this.id.substr(3,1);
        let tid = "#"+this.id;

        if($(tid).text() != "" && current_player == board[posX][posY].player)
        {
            $(tid).css("cursor", "pointer");
            currentMoves = possibleMoves(posX,posY);
            showingMoves = true;
        }
    })

    $(".tile1, .tile2").mouseout(function ()
    {
        if(showingMoves == true)
        {
            currentMoves.forEach(el =>
            {
                if($(el).attr("class") == "tile1") $(el).css("background-color","#eeeed2");
                if($(el).attr("class") == "tile2") $(el).css("background-color","#769656");


            })
            showingMoves = false;
        }

    })

    let lastpos = "";
    let player_clicks = 0;
    let currentTilePosX;
    let currentTilePosY;
    //HIGHLIGHT TILE
    $(".tile1, .tile2").click(function()
    {
        let posX = this.id.substr(1,1);
        let posY = this.id.substr(3,1);
        let tid = "#"+this.id;

        if(current_player == board[posX][posY].player)
        {
            player_clicks = 1;
            currentTilePosX = posX;
            currentTilePosY = posY;
            $(tid).css("filter", "brightness(1.2)");
            if(lastpos == "")lastpos = tid;

            else if(lastpos != "")
            {
                $(lastpos).css("filter", "brightness(0.8)");
                lastpos = tid;
            }
        }

    })
    //MOVE


        $(".tile1, .tile2").click(function()
        {
            let tid = "#"+this.id;
            let posX = this.id.substr(1,1);
            let posY = this.id.substr(3,1);
            let possibleMove = false;
            let newPosX;
            let newPosY;


            if(player_clicks > 1)
            {
                currentMoves.forEach(el=>
                {
                    if(el == tid)
                    {
                        newPosX = el.substr(2,1);
                        newPosY = el.substr(4,1);
                        possibleMove = true;
                        player_clicks = 0;
                    }
                })

                if(possibleMove == true)
                {
                    move(currentTilePosX,currentTilePosY,newPosX,newPosY);
                    //next player
                    if(current_player == 1)
                    {
                        current_player = 2;
                        $("#score").html("Kolej czarnych (gracz 2)");
                    }
                    else if(current_player == 2)
                    {
                        current_player = 1;
                        $("#score").html("Kolej białych (gracz 1)");
                    }
                    possibleMove == false;
                }
                if(possibleMove == false)
                {

                }
            }
            if(board[posX][posY].player == current_player)
            {
                player_clicks ++;
            }

        })






})
