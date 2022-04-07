import React from 'react';
import {render} from "@testing-library/react";
import Message from "../Message";



describe('Message test', () => {
    it('render author & text', () => {
        const component = render(<Message text='test' author='author1'/>)
        const text =component.getByText('author:test');
        expect(text).toBeDefined();
    })
})
