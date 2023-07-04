import * as React from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'

const My = () => {

    return (
        <Layout>
            <Container className='mt-5'>
                <h1>You have none!</h1>
                <br></br>
                <h2>coming soon...</h2>
                <br></br>
            </Container>
        </Layout>
    )
}

export const Head = () => <title>Data Centers</title>

export default My