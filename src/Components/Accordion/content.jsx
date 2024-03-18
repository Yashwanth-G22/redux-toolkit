import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";


export const Content = memo(() => {
    const { watch, handleSubmit, register } = useForm();
    const onSubmit = useCallback((data) => console.log(data), []);

    console.log(watch(onSubmit))

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='test' defaultValue='testing' ref={register} />
            <input name='2ndTest' ref={register({ required: true })} />
        </form>
    </>)
});