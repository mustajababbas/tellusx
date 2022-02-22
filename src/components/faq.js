import { Accordion } from "react-bootstrap";

function Faq(){

return(

<>

  <Accordion defaultActiveKey={['0']} alwaysOpen className="faq-list">

    <Accordion.Item eventKey="0">

      <Accordion.Header>
      1) What is an NFT? 
      </Accordion.Header>

      <Accordion.Body>
      NFT Stands for ‘Non-Fungible Token’ or non-replaceable token. It is a unique unit of data that is accounted for in a digital ledger using the blockchain technology. An NFT could represent real-world objects like art, music, in-game tokens or videos. The cryptographic transaction process ensures the authentication of each digital file by providing a digital signature that is used to track NFT ownership.
      </Accordion.Body>

    </Accordion.Item>

    <Accordion.Item eventKey="1">

      <Accordion.Header>
      2) What does ‘Minting’ mean?
      </Accordion.Header>
      <Accordion.Body>
      Minting’ or to mint is the process by which your digital art or content becomes a part of the blockchain
      </Accordion.Body>
      
    </Accordion.Item>


    <Accordion.Item eventKey="2">

        <Accordion.Header>
        3) So, what’s the deal with the Tx-Gang? 
        </Accordion.Header>
      <Accordion.Body>
      The Tx. Gang is a tri-serial 3D collection of digital assets found on the Ethereum Blockchain. Inception is the first series of the 
      project, followed by Mutation & Liberation.

      <br/><br/>

      The Inception series is a collection of 8000 unique Tx. Tyga teen NFTs built for the metaverse. Not only are our Tygas extremely rare & precious, 
      they draw a lot of inspiration from all the real-life tigers; You, Me, and Us. The DNA of each Tyga is securely contained in the ERC-721 standard, 
      and every Tyga holder will have a guaranteed access to exclusive rewards & benefits, including VIP access to all our future drops, IRL events with 
      industry best influencers & crypto whales, AMA with the biggest names known to us, Airdrops, The Tx. Store & much more.  
      <br/><br/>

      More importantly, each holder will be able to access the TellusX Club, our virtual HQ that all of us together will establish before the launch of the Liberation series. 

      </Accordion.Body>
      
    </Accordion.Item>


    <Accordion.Item eventKey="3">

        <Accordion.Header>
        4) How can I buy a Tx-Gang NFT?
        </Accordion.Header>
      <Accordion.Body>
      You can buy our Tx Tyga NFT from our website when we launch. 
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="4">

        <Accordion.Header>
         5) What will be the mint price? 
        </Accordion.Header>
      <Accordion.Body>
      This item is TBA. 
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="5">

        <Accordion.Header>
            6) When is the mint? 
        </Accordion.Header>
      <Accordion.Body>
      Dates for private mint as well as the public mint is TBA. We will be communicating all the details about the mint on our Discord.  
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="6">

        <Accordion.Header>
            7) What is a Gas Fee? 
        </Accordion.Header>
      <Accordion.Body>
        A general <b>reference for approximate transaction fees on</b> the Ethereum blockchain, gas price refers to the amount of ETH (in gwei) that must be paid to 
        miners for processing transactions on the network.
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="7">

        <Accordion.Header>
            8) What is Whitelist & why is it important?
        </Accordion.Header>
      <Accordion.Body>
        Being in the whitelist assures you of a spot to mint an NFT, before the public mint. All our whitelisted gang members will be able to participate 
        in the private minting alongside the current & future VIPs of the project. 
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="8">

      <Accordion.Header>
          9) What are the KRAs of our gang members? 
        </Accordion.Header>

        <Accordion.Body>
            Whether you’re an aspiring Tx Tyga holder or just a Tx Gang supporter, each of you play a pivotal role to ensure that our brand 
            flourishes. Even if you secure a Free NFT, it may not appreciate in value unless marketed to the larger audience. In a world that 
            feeds on overnight hype, we’re in search of our Genesis gang similar to the early adopters of Cryptopunkz & BAYC, who strongly 
            believed in their community’s vision. It is those individuals that help ‘create’ a brand & help sustain it in the long-run. 

                <br/><br/>

            As creators, it will be an honor to work closely with all such individuals whose contribution to the community is immense, 
            and for all the right reasons, they will be rewarded & regarded highly besides being awarded the title of an OG gang member. 

        </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="9">

        <Accordion.Header>
          10) How can gang members help in promoting the brand? 
          </Accordion.Header>
        <Accordion.Body>
        Join our discord to know. 
        </Accordion.Body>

    </Accordion.Item>


  </Accordion>

</>

)

}

export default Faq;