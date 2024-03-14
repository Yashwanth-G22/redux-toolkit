import { memo } from "react";

export const Common = memo(({name} ) => {
    return <h2>This is common {name} </h2>
});