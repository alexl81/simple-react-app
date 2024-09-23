import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withAuthRedirect (Component) {
    function RedirectComponent (props) {
            if (!props.isAuth) {
                return <Navigate to="/login" />;
            }
            else {
                return <Component {...props} />
            }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;