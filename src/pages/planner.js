import * as React from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import BuildDataCentre from '../components/builddatacentre'

/*
 * Here we'll implement the planner.
 */

const PlannerPage = () => {
  return (
    <Layout>
      <Container className='mt-5'>
      <BuildDataCentre></BuildDataCentre>
    </Container>
    </Layout>
  )
}

export const Head = () => <title>Planner</title>

export default PlannerPage