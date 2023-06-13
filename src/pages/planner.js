import * as React from 'react'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import BuildDataCentre from '../components/builddatacentre'
import { useState } from 'react'

/*
 * Here we'll implement the planner.
 */

const PlannerPage = () => {
  const [results, setResults] = useState(false)
  const [kWh, setKWh] = useState(1)
  const [kWhArray, setKWhArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  const handleSubmit = (datacenter) => {
    setResults(true)
    setKWh(datacenter.kWh)
    setKWhArray(datacenter.kWhArray)
  }

  return (
    <Layout>
      <Container className='mt-5'>
        {results ? (
          <div>
            <h1>Results</h1>
            <p>Here are your results:</p>
            <p>{kWh}</p>
            <p>{kWhArray}</p>
          </div>
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