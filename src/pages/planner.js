import * as React from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import BuildDataCentre from '../components/builddatacentre'
import { useState } from 'react'
import ResultList from '../components/result-list'

/*
 * Here we'll implement the planner.
 */

const PlannerPage = () => {
  const [results, setResults] = useState(false)
  const [datacenter, setDatacenter] = useState(null)

  const handleSubmit = (datacenter) => {
    setResults(true)
    setDatacenter(datacenter)
  }

  return (
    <Layout>
      <Container className='mt-5'>
        {results ? (
          <ResultList datacenter={datacenter}/>
        ) : (
          <BuildDataCentre onSubmit={
            (datacenter) => handleSubmit(datacenter)
          }/>
        )}
    </Container>
    </Layout>
  )
}

export const Head = () => <title>Planner</title>

export default PlannerPage