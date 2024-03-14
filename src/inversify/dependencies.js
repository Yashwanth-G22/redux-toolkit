import { Container } from "inversify";
import useInjection from 'inversify-react'
// import { Services } from "./services";

const container = new Container();

container.bind(null).toSelf();

export { container, useInjection }