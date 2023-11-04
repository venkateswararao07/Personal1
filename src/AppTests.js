import React from "react";

import App from "./App";

import{render,screen} from "@testing-library/react";

import render from 'react-test-renderer'

describe("App component testing",()=>{
    test("snapshot testing for app component",()=>{
        const AppComponent = render.create(<App/>).toJSON()
    })
})

