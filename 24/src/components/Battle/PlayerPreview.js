import React from 'react';

const PlayerPreview = ({children, avatar, username}) => {
    return (
        <>
            <div className="column">
                <img className="avatar" src={avatar} alt="Avatar" />
                <h2 className="username">@{username}</h2>
                {children}
            </div>
        </>
    );
};

export default PlayerPreview;