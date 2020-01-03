import React from 'react';
import {Layout as ThemeLayout, Header, Main, Container} from 'theme-ui'

const Layout = ({children}) => (
    <ThemeLayout>
        <Header><h1>Gatsby Events Theme</h1></Header>
        <Main>
            <Container>
                {children}
                <p>To achieve component shadowing add the folder/component to this site's src directory.<br />
Remember to add the theme as a dependency to take advantage of it.</p>
<p>Remember to publish your theme to npm</p>
            </Container>
        </Main>
    </ThemeLayout>
)

export default Layout;