import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Guest({ children, title }) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={`${title} | FanX`}>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="col-md-4">
                <Link href="/">Logo</Link>
                {children}
            </div>
        </div>
    );
}
