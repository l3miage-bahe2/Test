export interface Node {
    item:string;    
    type:"threat" | "incident";
    affected:NodeChild[];
    detected:NodeChild[];
    impact:NodeChild[];
    recommendation:NodeChild[];    
    expand?:boolean;
    check?:boolean;   
}

interface NodeChild {
    item:string;
    child?:NodeChild[];
    expand?:boolean;
    check?:boolean;                   
}
