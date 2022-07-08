interface TypeFieldParser {
    render(json: any): HTMLElement;
}
export class FormParse{
    json: any;
    parsers: Record<string, TypeFieldParser>;
    el:HTMLElement;
    constructor(json:any,parsers: Record<string, TypeFieldParser>){
        this.el = document.createElement("form");
        this.json = json;
        this.parsers = parsers;
    }

    build(){
        for(let i = 0; i < this.json.length; i++){
            const type = this.json[i].type;
            const _class = this.parsers[type];
            document.body.appendChild(_class.render(this.json[i]))
        }
    }
} 