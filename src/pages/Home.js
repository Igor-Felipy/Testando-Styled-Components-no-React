import React, {Component} from "react"
import styled from "styled-components";

import Post from "../components/Post";
import Menu from "../components/Menu";

import Json from "../services/people.json"

export default class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        const Wrapper = styled.div`
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color:rgba(250,250,250,1);
            width:100%;
            height:100%;
        `
        return(
            <Wrapper>
                <Menu />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1000" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1001x1000" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1000" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1200" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1040" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1030" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1100" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1000x1080" desc="olá" />
                <Post name="Lord" image="https://source.unsplash.com/random/1200x1000" desc="olá" />
            </Wrapper>           
        );
    }
}