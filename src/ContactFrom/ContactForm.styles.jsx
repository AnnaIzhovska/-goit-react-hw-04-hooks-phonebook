import styled from '@emotion/styled'

export const Title2 = styled.h2`
font-size: 17px;
font-weight: 500;
margin: 0;
justify-content:center;
padding-bottom: 10px;
`

export const Input = styled.input`
min-width:350px;
display: flex;
padding:5px;
margin-bottom: 20px;
cursor: pointer;
border:  solid 1.5px #6b6a6a4c;
border-radius:5px;

&:hover{
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgba(20, 247, 247, 0.5);
}`

export const Button = styled.button`
padding: 5px;
border:  solid 1.5px #6b6a6a4c;
border-radius:5px;

&:hover{
    color: #09c3e4;
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgba(20, 247, 247, 0.5); 
}
`