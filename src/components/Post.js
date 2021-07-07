import styled from "styled-components";

const PostTag = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-items:center;
    padding:10px;
    background-color:white;
    width:350px;
    margin-top:20px
`;
const Title = styled.h1`
    color:#353839;
    font-weight:bold;
    font-size:25px;
    width:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
`;
const Image = styled.img`
    width:350px;
    heigth:auto;
`;
const DescTag = styled.p`
    width:350px;
    color:#353839;
    font-size: 15px;
`;
const RedButton = styled.button`
    width: 175px;
    height: 50px;
    background-color: #ff6961;
    color:white;
    border:none;
    cursor:pointer;
    &:hover{
        background-color: #ff7971;
    }
`;
const GreenButton = styled.button`
    width: 175px;
    height: 50px;
    background-color: #77dd77;
    color:white;
    border:none;
    cursor:pointer;
    &:hover{
        background-color: #87ed87;
    }
`;
function Post(props) {
    const username = props.name;
    const userImage = props.image;
    const userDesc = props.desc;
    return(
        <PostTag>
            <Title>{username}</Title>
            <Image src={userImage} />
            <DescTag>{userDesc}</DescTag>
            <div style={styles.DivButton}>
                <GreenButton>Like</GreenButton>
                <RedButton>Deslike {username}</RedButton>
            </div>
        </PostTag>
    );
}

const styles = {
    DivButton : {
        Display: "flex",
        JustifyContent:"center",
        AlignItems:"center"
    }
}

export default Post;