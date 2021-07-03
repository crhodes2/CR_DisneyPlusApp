import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/547F15584E421A4CD13F24A38C8B150203F7038A21B975685E3971015EDE6FB3/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C51510A7CA62F530A5D19131B49AC235664E466C7B835464A28CD797EE33FF1/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"></img>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3F7BEDF784F6632A36EA4E8002BB11B8249F2FFC131572CF9AF735A052A3E128/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"></img>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC4E83C45379052B07F7154E83BA329FD8E5BC7A3D06BF338E1DEF1978C620E2/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div `

`

const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div `
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`