import * as React from 'react';
import { useInjection } from "inversify-react";
import { memo } from "react";
import { Services } from "./services";

export const Child = memo(() => {
    const userServices = useInjection(Services);

    const data = userServices.sendJsx('yashwanth')

    return (
        <div>
            <h2>{data}</h2>
        </div>
    )
});