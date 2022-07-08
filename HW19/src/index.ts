import { InputTextParser, SelectParser, InputNumberParser, FormParse } from "./component"
import json from "./component/formData.json"


const elementTypeParser = {
    text: new InputTextParser(),
    number: new InputNumberParser(),
    select: new SelectParser()
};
const formParser = new FormParse(json, elementTypeParser);

formParser.build() 