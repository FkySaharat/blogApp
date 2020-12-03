
export interface Blog{
    id:string;
    header: string;
    body:string;
    publicDate:string;
    createdDate:String;
    writer:string;
    coWriter:string[];
    tag: string[];
    seriesId:string;
}