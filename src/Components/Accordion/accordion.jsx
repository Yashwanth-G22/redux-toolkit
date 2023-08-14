import { Header } from "./header";
import { Content } from "./content";
import { createContext, useCallback, useState } from "react";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;
function Accordion({ children }) {
    const [enable, Disable] = useState(false);
    const handleChange = useCallback(() => Disable((prev => !prev)), []);
    const values = {
        enable,
        handleChange
    }
    return (
        <Provider value={values}>{children}</Provider>
    );
};
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;