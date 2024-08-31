import { Card } from "antd";
import Image from "next/image";

const CardService = ({title, src, description}:{title: string; src: any; description: string;}) => {
  const { Meta } = Card;

  return (
    <Card 
      bordered={false} 
      style={{ padding: '16px' }} 
      cover={<Image src={src} alt="shop" width={100} height={100}/>}
    >
      <Meta title={title} description={description} />
    </Card>
  )
}
export default CardService;