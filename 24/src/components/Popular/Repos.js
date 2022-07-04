import Loading from "./Loading"

export const Repos = (props) => {

    return (<ul className="popular-list">
            {props.data ? props.data.map((repo, index) => (
                <li key={repo.id} className="popular-item">
                    <div className="popular-rank">#{index + 1}</div>
                    <ul className="space-list-items">
                        <li>
                            <img className="avatar" src={repo.owner.avatar_url} alt={"Avatar"} />
                        </li>
                        <li>
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count}</li>
                    </ul> 
                </li>
            )) : <Loading active="True"/>}
    </ul>)
}