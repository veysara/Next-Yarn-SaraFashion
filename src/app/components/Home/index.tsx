'use client'

import { Button} from "antd";
import Image from "next/image";
import { ShoppingOutlined } from '@ant-design/icons';

const HomeComponent = () => {

  return (
    <div 
      className='xs:w-full xs:m-0 lg:m-auto pt-[125px] bg-red-400 lg:h-[910px]'
      style={{
        background: `
          linear-gradient(150deg, #ecedee, transparent 30%), 
          linear-gradient(330deg, rgb(210, 206, 242), transparent 30%), 
          linear-gradient(225deg, #fff0be, #fbdce7, #e2fae1, powderblue)
        `,
      }}
    >
      
      <div className="container py-[134px] mx-auto">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex-1 min-w-[200px] pt-2">
            <h1 className="text-2xl md:text-7xl font-extrabold text-[#224F34] leading-tight my-6">
              New Collection and Find Your Own Fashion!
            </h1>
            <p className="md:text-2xl">
              Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
            </p>
            <Button
              icon={<ShoppingOutlined style={{ fontSize: '20px', color: '#fff' }} />}
              style={{
                marginTop: "20px",
                width: "100%",
                maxWidth: "220px",
                height: "50px",
                background: "linear-gradient(45deg, #224F34, #C2EFD4)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Shop Now
            </Button>
          </div>
          
          <div className="flex-1 min-w-[200px] bg-#e2fae1-500 p-5"
            style={{
              borderRadius: "30px 110px 50px 80px",
              background: "#224F34"
            }}
          >
            <Image src="/images/pic2.png" alt="intechdev" width={900} height={400} priority unoptimized/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent;


// 'use client'

// import { Button } from "antd";
// import Image from "next/image";
// import { ShoppingOutlined } from '@ant-design/icons';

// const HomeComponent = () => {
//   return (
//     <div 
//       className='w-full m-0 pt-[78px] bg-red-400 lg:h-[910px]'
//       style={{
//         background: `
//           linear-gradient(150deg, #ecedee, transparent 30%), 
//           linear-gradient(330deg, rgb(210, 206, 242), transparent 30%), 
//           linear-gradient(225deg, #fff0be, #fbdce7, #e2fae1, powderblue)
//         `,
//       }}
//     >
//       <div className="container py-[80px] md:py-[134px] mx-auto px-4 md:px-8 lg:px-16">
//         <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
//           <div className="flex-1 w-full text-center lg:text-left pt-2">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#224F34] leading-tight my-6">
//               New Collection and Find Your Own Fashion!
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
//               Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
//             </p>
//             <Button
//               icon={<ShoppingOutlined style={{ fontSize: '20px', color: '#fff' }} />}
//               style={{
//                 marginTop: "20px",
//                 width: "100%",
//                 maxWidth: "220px",
//                 height: "50px",
//                 background: "linear-gradient(45deg, #224F34, #C2EFD4)",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               Shop Now
//             </Button>
//           </div>

//           <div className="flex-1 w-full max-w-lg">
//             <div 
//               className="p-5 mx-auto"
//               style={{
//                 borderRadius: "30px 110px 50px 80px",
//                 background: "#224F34"
//               }}
//             >
//               <Image 
//                 src="/images/pic2.png" 
//                 alt="intechdev" 
//                 width={900} 
//                 height={400} 
//                 priority 
//                 unoptimized 
//                 className="rounded-[30px_110px_50px_80px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomeComponent;
