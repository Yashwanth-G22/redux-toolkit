import { memo } from "react";
import Accordion from "./Accordion/accordion";

export const Main = memo(() => {
    return (
        <Accordion>
            <Accordion.Header><button>Click this</button></Accordion.Header>
            <Accordion.Content><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam,
                non alias illo ut id! Laboriosam placeat blanditiis id accusamus numquam,
                reiciendis iusto quibusdam. Debitis odio veniam voluptatum placeat nemo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam,
                non alias illo ut id! Laboriosam placeat blanditiis id accusamus numquam,
                reiciendis iusto quibusdam. Debitis odio veniam voluptatum placeat nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam,
                non alias illo ut id! Laboriosam placeat blanditiis id accusamus numquam,
                reiciendis iusto quibusdam. Debitis odio veniam voluptatum placeat nemo.</p></Accordion.Content>
        </Accordion>
    );
});
