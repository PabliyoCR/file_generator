export interface FILE {
    name : string
    lines : LINE[]
}

export interface LINE {
    property : string;
    value : string;
    enabled : boolean
}