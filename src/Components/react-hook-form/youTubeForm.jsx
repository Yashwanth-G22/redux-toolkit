import React, { useCallback } from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
let renderCount = 0;
export const YouTubeForm = () => {
    const methods = useForm({
        defaultValues: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json()
            console.log(data.email)
            return {
                userName: "IronMan",
                email: data.email,
                channel: ""
            }
        }
    });
    const { register, control, handleSubmit, formState: { errors } } = methods;
    const submit = useCallback((data) => console.log('submitted form', data), []);
    renderCount++;
    return (
        <StyledDiv>
            <h2>Render Count({renderCount / 2})</h2>
            <form onSubmit={handleSubmit(submit)}>
                <StyledLabel htmlFor='userName'>UserName</StyledLabel>
                <StyledInput type='text' {...register('userName', {
                    required: {
                        value: true,
                        message: 'name is required'
                    }
                })} />
                <p style={{ color: 'red' }}>{errors.userName?.message}</p>
                <StyledLabel htmlFor='e-mail'>E-mail</StyledLabel>
                <StyledInput type='email'{...register('email', {
                    required: {
                        value: true,
                        message: 'plz enter correct email id'
                    },
                    validate: (valid) => {
                        return (
                            valid !== 'yashwanth@gmail.com' || 'enter another email'
                        )
                    }
                })} />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
                <StyledLabel htmlFor='channel'>Channel</StyledLabel>
                <StyledInput type='text' {...register('channel', {
                    required: {
                        value: true,
                        message: 'channel name is required'
                    }
                })} />
                <p style={{ color: 'red' }}>{errors.channel?.message}</p>

                <button>Submit Form</button>
            </form>
            <DevTool control={control} />
        </StyledDiv>
    )
};

export const StyledInput = styled.input`
    border: 1px solid black;
`;
export const StyledLabel = styled.label``;
export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    text-align: center;
    gap: 10px;
`;
