interface InputNumberParserProps {
    type: "number"
    minValue: string
    maxValue: string
}


export class InputNumberParser {
    protected readonly el: HTMLInputElement;
    constructor() {
        this.el = document.createElement("input");
    }

    render(props: InputNumberParserProps) {
        this.el.type = props.type;
        this.el.min = props.minValue;
        this.el.max = props.maxValue;
        return this.el;
    }
} 