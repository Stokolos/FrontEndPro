import React from "react";
import { fetchPopularRepos } from "../utils/api";
import { SelectedLanguage } from "./SelectedLanguage";
import { Repos } from "./Repos";
import Loading from "./Loading";


class Popular extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedLanguage: "All",
            repos: null,
            action: false
        }
    }

    fetchPopularReposHamdler = (language) => {
        fetchPopularRepos(language)
            .then(data => this.setState({ repos: data, action: false }))
    }
    componentDidMount() {
        this.fetchPopularReposHamdler(this.state.selectedLanguage)
    }

    selectLanguage = (language) => {
        this.setState({action:true})
        this.setState({ selectedLanguage: language, repos: null}, ()=>{
            this.fetchPopularReposHamdler(this.state.selectedLanguage)
        })
    }

    render() {
        return (
            <>
                <Loading active={this.state.action}/>
                <SelectedLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.selectLanguage}
                    disabled={this.state.action}
                />
                <Repos data={this.state.repos}/>
            </>
        )
    }
}

export default Popular