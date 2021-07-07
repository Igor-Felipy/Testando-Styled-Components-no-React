import styled from "styled-components";

import logo from "../images/Friends.png"

const MenuTag = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100vw;
    margin-bottom:20px;
    div{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width:100%;
        margin-top:5px;
    }
`
const LogoButton = styled.button`
    background-color:rgba(0,0,0,0);
    margin-left:30px;
    cursor:pointer;
    img{
        height:50px;
        width:auto;
    }
`
const ListTag = styled.ul`
    display:flex;
    flex-direction:row;
    li{
        margin-left:20px;
        a{
            color:rgba(0,0,0,1);
            &:hover{
                color:rgba(100,100,100,1)
            }
            cursor:pointer
        }
    }
`
const ProfileButton = styled.button`
    background-color:rgba(0,0,0,0);
    margin-Right:30px;
    cursor:pointer;
    border-radius:100%;
    img{
        border-radius:100%;
    }
`
const NewHR = styled.div`
    width:95vw;
    background-color:rgba(200,200,200,1);
    height:0.4px;
`

function Menu() {
    return(
        <MenuTag>
            <div>
                <LogoButton>
                    <img src={logo} alt="" />
                </LogoButton>
                <ListTag>
                    <li><a href="/"></a></li>
                </ListTag>
                <ProfileButton>
                    <img src="https://source.unsplash.com/random/50x50" alt=""/>
                </ProfileButton>
            </div>
            <NewHR />
        </MenuTag>
    );
}

export default Menu;