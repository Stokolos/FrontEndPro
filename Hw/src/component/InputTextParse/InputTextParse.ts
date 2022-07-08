interface PropsText {
    type: "text"
    placeholder: string
}


export class InputTextParser {
    protected el: HTMLInputElement
    constructor() {
        this.el = document.createElement("input");
    }

    render(props: PropsText) {
        this.el.type = props.type;
        this.el.placeholder = props.placeholder;
        return this.el;
    }
} 