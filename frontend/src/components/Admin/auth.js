import connect from 'react-redux/es/connect/connect';
const adminAuth = (nextState, replace, next)=>{
    if (!this.props.auth) {
      replace({
        pathname: "/login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
};
const mapStateToProps = state => {
    return {
        auth: state.auth.status,
    };
};

export default connect(mapStateToProps, null)(adminAuth);