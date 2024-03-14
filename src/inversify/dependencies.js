import { Container } from "inversify";
import useInjection from 'inversify-react'
import { Services } from "./services";

const container = new Container();

container.bind(Services).toSelf();

export { container, useInjection }