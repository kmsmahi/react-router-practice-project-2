import { useLoaderData } from 'react-router';
import Banner from '../Components/Banner/Banner';
import AllFurnitures from '../Components/Furnitures/AllFurnitures';

const Home = () => {
    const furnitureData=useLoaderData();
    console.log(furnitureData);
    return <>
          <Banner></Banner>
          <div>
            <h1 className='text-6xl font-bold flex gap-2 items-center justify-center mt-10'>Our <span className='text-amber-500'>Furnitures</span></h1>
          </div>
          <div className='lg:grid grid-cols-3 gap-4'>
            {
            furnitureData.map((furniture)=>(
                <AllFurnitures key={furniture.id} furniture={furniture} ></AllFurnitures>
            ))
          }
          </div>
        </>
        
        
    
};

export default Home;