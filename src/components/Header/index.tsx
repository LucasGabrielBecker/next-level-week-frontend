import React, {useContext} from 'react'
import Switch from 'react-switch'

import { Container } from "./styles"

const Header: React.FC = () => {

    return(
        <Container>
            Hello world
            <Switch 
                onChange={()=>{}}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor="#FFF"
                onColor="#333"
            />
        </Container>
    )
}

export default Header;