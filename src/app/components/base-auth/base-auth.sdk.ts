declare namespace BASEAuthSDK {
    export interface Account {
        publicKey: string;
        sig: string;
        message: string;
    }

    export interface BASENodeAPI {
        getAllOffers(): Promise<any>;
        getData(): Promise<any>;
        updateData(): Promise<any>;
    }

    export interface WidgetParams {
        verificationMessage: string;
        buttonStyle?: Object;
    }

    export class Widget {
        constructor(params: WidgetParams);
        insertLoginButton(selector: string);
        waitForLogin(): Promise<Account>;
        listenForLogin(handler): void;
        listenForLogout(handler): void;
        getAllOffers(): Promise<any>;
        getData(): Promise<any>;
        updateData(): Promise<any>;
    }
}
