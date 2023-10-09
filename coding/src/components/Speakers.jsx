import React from 'react'
import { Card, SimpleGrid } from '@chakra-ui/react'

const Speakers = () => {
  return (
    <div className='speakers' style={{ marginTop: "2%" }}>
      <h2>Trending Speakers</h2>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 2fr))' style={{ width: "80%", margin: "auto", marginBottom: "135px" }}>
        <Card style={{ borderRadius: "11.981px", backgroundColor: "#FFF", boxshadow: "0px 3.59424px 11.38177px 0px rgba(0, 0, 0, 0.19)", width: "221.645px" }}>
          <img src="../images/Name Card1.svg" alt="card1" />
        </Card>
        <Card style={{ borderRadius: "11.981px", backgroundColor: "#FFF", boxshadow: "0px 3.59424px 11.38177px 0px rgba(0, 0, 0, 0.19)", width: "221.645px" }}>
          <img src="../images/Name Card2.svg" alt="card1" />
        </Card>
        <Card style={{ borderRadius: "11.981px", backgroundColor: "#FFF", boxshadow: "0px 3.59424px 11.38177px 0px rgba(0, 0, 0, 0.19)", width: "221.645px" }}>
          <img src="../images/Name Card3.svg" alt="card1" />
        </Card>
        <Card style={{ borderRadius: "11.981px", backgroundColor: "#FFF", boxshadow: "0px 3.59424px 11.38177px 0px rgba(0, 0, 0, 0.19)", width: "221.645px" }}>
          <img src="../images/Name Card4.svg" alt="card1" />
        </Card>
        <Card style={{ borderRadius: "11.981px", backgroundColor: "#FFF", boxshadow: "0px 3.59424px 11.38177px 0px rgba(0, 0, 0, 0.19)", width: "221.645px" }}>
          <img src="../images/Name Card5.svg" alt="card1" />
        </Card>

      </SimpleGrid>
    </div>
  )
}

export default Speakers