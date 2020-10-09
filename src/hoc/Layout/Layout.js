import React, { Component } from 'react'

import Auxillary from "hoc/Auxillary/Auxillary";
import Header from 'components/Header/Header';


class Layout extends Component {
    render() {
        return (
            <Auxillary>
                <Header/>


            </Auxillary>
            
        )
    }
}

export default Layout
