'use client'

import { Row, Col, Typography, Card } from "antd";
import shopItems from '@/data/shopItems.json';
import Image from 'next/image';

const { Meta } = Card;
const { Title, Text } = Typography;

const ShopComponent = () => {
  return (
    <div 
      className='py-16'
      style={{
        background: "#C2EFD4"
      }}
    >
      <div className="container mx-auto">
        <Title 
          level={1} 
          className="text-center text-4xl md:text-6xl font-bold text-[#224F34] mb-6 mt-5"
        >
          Best Selling
        </Title>
        <Text 
          className="text-center text-lg md:text-2xl text-gray-700 mb-10 block"
        >
          Get in on the trend with our curated selection of best-selling styles.
        </Text>
        <Row 
          gutter={[16, 16]} 
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        >
          {shopItems.map((service: any, index: number) => (
            <Col 
              key={index} 
              xs={24} sm={12} md={8} lg={6}
            >
              <Card
                hoverable
                cover={
                  <Image 
                    alt={service.title} 
                    src={service.image} 
                    width={400} 
                    height={400} 
                    className="object-cover w-full h-[580px] mx-auto"
                    quality={100}
                  />
                }
              >
                <Meta 
                  title={service.title} 
                  description={service.description} 
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ShopComponent;
