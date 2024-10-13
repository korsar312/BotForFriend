export namespace BotInterface {
    export interface IBot {
        go(): void;
        send(): void;
    }

    export interface IBotAdapter {
        start(): void;
        goMessage(): void;
    }

    export interface IBotDomain {
        launchBot(): void;
        sendText(): void;
    }
}

