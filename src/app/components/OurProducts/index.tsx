import { Card, Typography, Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

type TabKey2 = 'weedingDress' | 'workDress' | 'outfits';

const tabListNoTitle = [
  { key: 'weedingDress', label: 'Wedding dress' },
  { key: 'workDress', label: 'Work dress' },
  { key: 'outfits', label: 'Outfits of the week' },
];

// Content for each tab with multiple cards in the "Article" tab
const contentListNoTitle: Record<TabKey2, JSX.Element> = {
  weedingDress: (
    <Row gutter={[16, 16]} justify="center">
      {Array.from({ length: 4 }, (_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={
              <img
                width={400} 
                height={400} 
                className="object-cover w-full h-[580px] mx-auto"
                alt={`Article ${index + 1}`}
                // Add your custom image URL for the first card (index 0)
                src={
                  index === 0
                    ? '/images/pic19.jpg'
                    : index === 1
                    ? '/images/pic21.jpg'
                    : index === 2
                    ? '/images/pic22.jpg'
                    : index === 3
                    ? '/images/pic20.jpg'
                    : `https://via.placeholder.com/300?text=Article+${index + 1}`
                }
                style={{
                  height: '400px'
                }}
              />
            }
            style={{ 
              borderRadius: '8px', 
              overflow: 'hidden'
            }}
          >
            <Card.Meta
              title={`Article Title ${index + 1}`}
              description="This is a detailed description of the article content, highlighting the main points and providing a summary."
            />

            <Button 
              style={{
                marginTop: "20px"
              }}
            >Detail {<ArrowRightOutlined />}</Button>
          </Card>
        </Col>
      ))}
    </Row>
  ),
  workDress: (
    <Row gutter={[16, 16]} justify="center">
      {Array.from({ length: 4 }, (_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={
              <img
                width={400} 
                height={400} 
                className="object-cover w-full h-[580px] mx-auto"
                alt={`Article ${index + 1}`}
                // Add your custom image URL for the first card (index 0)
                src={
                  index === 0
                    ? '/images/pic25.jpg'
                    : index === 1
                    ? '/images/pic24.jpg'
                    : index === 2
                    ? '/images/pic23.jpg'
                    : index === 3
                    ? '/images/pic26.jpg'
                    : `https://via.placeholder.com/300?text=Article+${index + 1}`
                }
                style={{
                  height: '400px'
                }}
              />
            }
            style={{ 
              borderRadius: '8px', 
              overflow: 'hidden'
            }}
          >
            <Card.Meta
              title={`Article Title ${index + 1}`}
              description="This is a detailed description of the article content, highlighting the main points and providing a summary."
            />
          </Card>
        </Col>
      ))}
    </Row>
  ),
  outfits: (
    <Row gutter={[16, 16]} justify="center">
      {Array.from({ length: 4 }, (_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={
              <img
                width={400} 
                height={400} 
                className="object-cover w-full h-[580px] mx-auto"
                alt={`Article ${index + 1}`}
                // Add your custom image URL for the first card (index 0)
                src={
                  index === 0
                    ? '/images/pic18.jpg'
                    : index === 1
                    ? '/images/pic8.jpg'
                    : index === 2
                    ? '/images/pic10.jpg'
                    : index === 3
                    ? '/images/pic12.jpg'
                    : `https://via.placeholder.com/300?text=Article+${index + 1}`
                }
                style={{
                  height: '400px'
                }}
              />
            }
            style={{ 
              borderRadius: '8px', 
              overflow: 'hidden'
            }}
          >
            <Card.Meta
              title={`Article Title ${index + 1}`}
              description="This is a detailed description of the article content, highlighting the main points and providing a summary."
            />
          </Card>
        </Col>
      ))}
    </Row>
  ),
};

const { Title, Text } = Typography;

const OurProductComponent: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<TabKey2>('outfits');

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key as TabKey2);
  };

  return (
    <div className="py-16" style={{ background: 'red' }}>
      <div className="container mx-auto">
        <Title
          level={1}
          className="text-center text-4xl md:text-6xl font-bold text-[#224F34] mb-6 mt-5"
        >
          Our products
        </Title>
        <Text className="text-center text-lg md:text-2xl text-gray-700 mb-10 block">
          Get in on the trend with our curated selection of best-selling styles.
        </Text>

        <div className="card-container">
          <Card
            style={{
              width: '100%',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            onTabChange={onTab2Change}
            tabProps={{ size: 'middle' }}
          >
            {contentListNoTitle[activeTabKey2]}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurProductComponent;
