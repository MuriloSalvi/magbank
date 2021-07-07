import React from 'react'
import './Institucional.scss'
import {Container,Row, Col } from 'react-bootstrap';
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconText from './IconText'

const Institucional =()=>{
return(
  <section className='institucional text-light py-5'>
    <Container>
    <Row ClassName>
    <Col xs={12} lg={5} />
      <Col xs={12} lg={7}>
        <h2 className='intitucional__title my-5'>Já Nascemos digital</h2>
        <p className ='mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
            porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque.
            Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
            ultrices. Proin purus ante, congue vel arcu ac, porta condimentum
            mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim
            nec diam.
        </p>
        <div className='px-2'>
          <IconText icon ={faMobileAlt} color='#fff' className='mb-2'>
            Sem fila e sem burocacia
          </IconText>
          <IconText icon ={faMobile} color ='#fff' className='mb-2'>
            Simples e prático
          </IconText>
          <IconText icon ={faGlobe} color ='#fff' className='mb-2'>
            Abertura de conta 100% online
          </IconText>
          <IconText icon ={faShieldAlt} color ='#fff' className='mb-2'>
            Transações mais seguras
          </IconText>
        </div>
      </Col>
    </Row>
  </Container>
  </section>
)
 
}

export default Institucional;