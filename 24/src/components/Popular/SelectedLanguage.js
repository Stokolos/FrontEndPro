import { memo } from "react";

export const SelectedLanguage = memo((props) => {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (<ul className="languages">
        {languages.map((language, index) =>
        (<li
            onClick={props.disabled ? null : () => props.selectLanguageHandler(language)}
            style={props.selectedLanguage === language ? { color: "red"} : null}
            key={index}>
            {language}
        </li>))}
    </ul>)
})