import { memo, useContext } from "react";
import { AccordionContext } from "./accordion";

export const Header = memo(({ children }) => {
    const { handleChange } = useContext(AccordionContext);
    return (<div onClick={handleChange}>{children}</div>);
});