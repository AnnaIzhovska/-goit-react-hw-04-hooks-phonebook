import styled from '@emotion/styled'

export const Contact = styled.ul`
width: 350px;
padding: 0;
`

export const ContactItem = styled.li`
display: flex;
text-align:center;
align-items:center;
justify-content: space-between;
`

export const BtnDelete = styled.button`
width: 40px;
height: 40px;
border: solid 1.5px #6b6a6a4c;
border-radius: 50%;
padding: 3px;

&:hover{
    color: #09c3e4;
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgba(20, 247, 247, 0.5);}

`

export const Text = styled.p`
font-size: 17px;
font-weight:400;
`
