import * as React from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'

/*
 * Here we'll implement the planner.
 */

const PlannerPage = () => {
  return (
    <Layout>
      <Container className='mt-5'>
        <p className=''>Coming soon...</p>

        <p class="placeholder-glow">
          <span class="placeholder col-4"></span>
        </p>

        <a class="btn btn-primary disabled placeholder col-2"></a>
      </Container>
    </Layout>
  )
}

export const Head = () => <title>Planner</title>

export default PlannerPage