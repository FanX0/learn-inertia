import React from "react";

import App from "../Layouts/App";

export default function Home({ user, app_name }) {
    return (
        <App title="Home">
            <p>
                My name is {user.name} you can follow me on twitter: @
                {user.username}
            </p>
        </App>
    );
}
