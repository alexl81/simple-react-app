import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "../common/withRouterComponent/withRouter";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile_reducer";
import {compose} from "redux";
import {redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                redirect("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
//

//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);