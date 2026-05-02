import { useLoaderData } from 'react-router';
import Banner from '../Components/Banner/Banner';
import AllFurnitures from '../Components/Furnitures/AllFurnitures';
const Home = () => {
    const furnitureData=useLoaderData();
    console.log(furnitureData);
    return <>
          <Banner></Banner>
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