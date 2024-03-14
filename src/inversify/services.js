import { injectable } from "inversify";

@injectable()
export class Services {
    sendJsx(name ) {
        return `this is ${name}`;
    }
}