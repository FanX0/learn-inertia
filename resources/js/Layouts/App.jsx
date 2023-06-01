import React from "react";
import Navbar from "../Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function App({ children, title }) {
    return (
        <div>
            <Head title={title}>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                    crossOrigin="anonymous"
                />
            </Head>
            <Navbar />
            <div className="pt-4"> {children}</div>
        </div>
    );
}
