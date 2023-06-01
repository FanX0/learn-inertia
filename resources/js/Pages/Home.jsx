import React from "react";

import App from "../Layouts/App";

export default function Home({ user, app_name }) {
    return (
        <App title="Home">
            <p>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            My name is {user.name}
                        </div>
                        <div className="card-body">
                            you can follow me on twitter: @{user.username}
                        </div>
                    </div>
                </div>
            </p>
        </App>
    );
}
