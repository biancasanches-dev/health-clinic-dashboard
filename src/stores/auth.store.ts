import { action, makeObservable, observable } from "mobx";

interface IUser {
    email: string,
    token: string
}

class AuthStore {
    isAuth = false;
    user: IUser = { email: "", token: ""}; 

    constructor() {
        makeObservable(this, {
            isAuth: observable,
            user: observable,
            login: action,
            logout: action
        })
    }

    login({ email, token }: IUser) {
        this.isAuth = true;
        this.user = {email, token};
    }

    logout() {
        this.isAuth = false;
        this.user = {email: "", token: ""};
    }
}

const authStore = new AuthStore();

export default authStore;