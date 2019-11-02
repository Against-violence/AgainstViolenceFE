//更改用户状态信息
export const userStatus = (state, user) => {
    if (user) {
        state.currentUser = user;
        state.isLogin = true
    } else if (user === null) {
        localStorage.setItem("userName", null);
        localStorage.setItem("userToken", "");
        state.currentUser = null;
        state.isLogin = false;
        state.token = "";
    }
}

export const userToken = (state, userToken) => {
    if (userToken) {
        state.token = userToken;
    } else {
        state.token = null;
    }
}