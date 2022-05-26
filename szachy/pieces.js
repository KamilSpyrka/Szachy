class figure
{
    constructor(x,y, player, symbol)
    {
        this.symbol = symbol;
        this.x = x;
        this.y = y;
        this.player = player;
    }

    create()
    {
        board[this.x][this.y].player = this.player;
        let divID = "#x" + this.x + "y" + this.y;
        $(divID).html(this.symbol);
        board[this.x][this.y].content = this.symbol;

    }


}
