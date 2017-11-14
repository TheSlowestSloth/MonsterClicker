export class Monster{

    public id: number;
    public hpmax: number;
    public hp: number;
    public image: string;
    public golds: number;
    public xp: number;
    public score: number;
    public $dom: string;

    constructor(id: number, hp: number, image: string, golds: number, xp: number, score: number){

        this.id = id;
        this.hp = hp;
        this.hpmax = hp;
        this.image = image;
        this.golds = golds;
        this.xp = xp;
        this.score = score;

    }

}