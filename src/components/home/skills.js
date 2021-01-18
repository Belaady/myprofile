import React from 'react';

import image1 from '../../assets/images/Java.jpg';
import image2 from '../../assets/images/Python.jpg';
import image3 from '../../assets/images/Postgre.jpg';
import image4 from '../../assets/images/Spring.jpg';
import image5 from '../../assets/images/Django.jpg';
import image6 from '../../assets/images/Github.jpg';
import image7 from '../../assets/images/Basic.jpg';
import image8 from '../../assets/images/Figma.jpg';
import image9 from '../../assets/images/Adobe.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppSkills() {
  return (
    <div id="skills" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <br></br>
          <h2>SKILLS</h2>
          <br></br>
          
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">
              <Card
                hoverable
                cover={<img alt="Java" src={image1} />}
              >
                <Meta title="Java" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://www.python.org">
              <Card
                hoverable
                cover={<img alt="Python" src={image2} />}
              >
                <Meta title="Python" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://www.postgresql.org">
              <Card
                hoverable
                cover={<img alt="PostgreSQL" src={image3} />}
              >
                <Meta title="PostgreSQL" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://spring.io/projects/spring-framework">
              <Card
                hoverable
                cover={<img alt="Spring" src={image4} />}
              >
                <Meta title="Spring" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://www.djangoproject.com">
              <Card
                hoverable
                cover={<img alt="Django" src={image5} />}
              >
                <Meta title="Django" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <a href="https://github.com/Belaady">
              <Card
                hoverable
                cover={<img alt="Github" src={image6} />}
              >
                <Meta title="Github" />
              </Card>
            </a>
          </Col>
          
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://www.w3schools.com/whatis/">
              <Card
                hoverable
                cover={<img alt="Basic Web Development" src={image7} />}
              >
                <Meta title="Basic Web Development" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <a href="https://bit.ly/37rAMmL">
              <Card
                hoverable
                cover={<img alt="Figma" src={image8} />}
              >
                <Meta title="Figma" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <a href="https://www.adobe.com/sea/products/photoshop.html">
            <Card
              hoverable
              cover={<img alt="Adobe Photoshop" src={image9} />}
            >
              <Meta title="Adobe Photoshop" />
            </Card>
            </a>
          </Col>
        </Row>
      </div>


    </div>
  );
}

export default AppSkills;