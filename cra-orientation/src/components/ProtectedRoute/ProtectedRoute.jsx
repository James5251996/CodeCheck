import React from "react";
import { Route, Redirect } from 'react-router-dom';
// here i need to import the login page component
import { useSelector } from "react-redux";

function ProtectedRoute({ component, children, ...props }) {
    const user = useSelector((store) => store.user);

    const ProtectedComponent = component || (() => children);

    return (
        <Route
            {...props}
        >
            {user.id
                ?
                <ProtectedComponent />
                :
                <LoginPage />
            }
        </Route>
    )
}

export default ProtectedRoute;