export class Item{
    
        public damage: number;
        public level: number;
        public price: number;
        public image: string;
        public available: boolean = false;
        public sold: boolean = false;
        public $dom: string;
    
        constructor(damage: number, level: number, price: number, image: string){
    
            this.damage = damage;
            this.level = level;
            this.price = price;
            this.image = image;
    
        }
    
    }