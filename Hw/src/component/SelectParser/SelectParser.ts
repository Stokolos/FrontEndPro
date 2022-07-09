//interface SelectParserProps {
//    type: "select"
//    options: Array<object>
//}

interface Options {
    value: string
    displayName: string
}

export class SelectParser {
    protected readonly el: HTMLSelectElement;
    protected options: any;

    constructor() {
        this.el = document.createElement("select");
    }
    createOptions(props:any) {
        const options = props.options;
        const arr = options.map(((item: Options): HTMLOptionElement => {
            const el = document.createElement("option");
            el.textContent = item.displayName;
            el.value = item.value
            return el;
        }))
        return arr;
    }

    render(props:any):HTMLElement {
        const arrOfOptions = this.createOptions(props);


        arrOfOptions.forEach((element: any): void => {
            this.el.appendChild(element)
        });

        return this.el;
    }


} 