import React from 'react'
import "./style.css";
import "./Mediaquerry.css";

import {  FaHome }  from 'react-icons/fa';
import img1 from '../components/assets/image 7.png'
import img2 from '../components/assets/image all.png'
import img3 from '../components/assets/image 10.png'
import img4 from '../components/assets/image 13.png'
import img5 from '../components/assets/image 16.png'
import img6 from '../components/assets/image 17.png'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    
    <div className="flex  mt-3 ms-3 sm:gap-[50px] gap-2  ">
    <FaHome className=' sm:text-3xl text-2xl  text-[#550D0E]'/>
    <a href="" className='sm:text-2xl text-[#550D0E] ' >Contact</a>
    <a href="" className='sm:text-2xl text-[#550D0E] ' >Help</a>
  
    <div className="hii ms-auto me-5">
    <a href="" className='sm:text-2xl text-[#550D0E] ' >Sign up</a>
     
    </div>
  
    </div>
   
   

<div className="second   bg-[#E7D6AC] mt-3  flex flex-row md:mx-auto ">

<h2 className='title text-[#550D0E] lg:text-4xl lg:ml-[50px] ml-0 md:text-3xl mt-2 md:ml-[60px] sm:text-3xl sm:ml-[60px] '>BookSpace</h2>
<form class="d-flex lg:mx-auto md:ml-[250px] sm:ml-[20px] ml-0">
<input class="form-control h-[50px] sm:w-[200px] mt-2 me-2 lg:w-[350px]" type="search" placeholder="Search" aria-label="Search"/>
<button class=" search btn btn-outline-success sm:w-[100px] h-[50px] w-[140px] mt-2" type="submit">Search</button>
</form>

</div>


    

<div className="third msx-w-[1360px]  flex lg:flex-row flex-col">



<div className="thirdone   bg-[#F9F4DB] basis-[30%] mt-[39px] p-4 h-[450px] lg:text-center md:text-center">

<h1 className='firstheading text-[#550D0E] text-2xl font-serif'>Books by Categories</h1>

<img src={img1} alt="" className='md:mx-auto' />

<div className="items text-[#550D0E] text-xl ">

<h1 className=' font-bold'>Science Fiction</h1>
<h1 className='mt-3' >Dark Pyschology</h1>
<h1 className='mt-3'>Category 3</h1>
<h1 className='mt-3'>Category 4</h1>
<h1 className=' mt-3 font-bold'>More</h1>

</div>

</div>




<div className="thirdtwo  lg:ml-[180px]    mt-[40px]   ">
<img src={img2} className='img-fluid ' alt="image" />
</div>




</div>



<div className="thirdthird  basis-[20%] md:mx-auto mt-5   bg-[#F9F4DB] p-4  h-[250px] w-[400px]  ">
<img src={img3} alt="image" className=' mt-2 mx-auto' />
<h1 className='text-center mt-2 text-[#550D0E]'>Learn about new offers by</h1>
<h1 className='text-center text-[#550D0E]'> joining our news letter </h1>
<input type="text" placeholder='Email' className='mt-2 ml-5  ' />
<button className='w-[100px] h-[30px] bg-[#E7D6AC] mt-2  ml-5  rounded-3xl mt-3 text-[#550D0E]'>Sign Up</button>


</div>
    
    


<h1 className="text-center text-4xl text-[#550D0E] mt-5">Science Fiction</h1>
<div className='fourth  mx-auto py-[20] mt-5 grid sm:grid-cols-3  gap-5 mb-5'>


<div className="sub1 md:ml-5">
<h1 className='font-bold text-xl text-[#550D0E] '>What I learned from the trees</h1>
<h1 className='text-xl text-[#550D0E] ms-5'>L.E Bowman</h1>
<img src={img4} alt="image" className='ms-4 ' />

<h1 className='font-bold text-2xl text-[#550D0E] ms-4 '>$25.00</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] ms-4 mt-2  rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>



<div className="sub2 md:ml-5">
<h1 className='font-bold text-xl text-[#550D0E]'>Thief River Falls</h1>
<h1 className='text-xl text-[#550D0E] '>Brian Freeman</h1>
<img src={img5} alt="image" className='' />

<h1 className='font-bold text-2xl text-[#550D0E] '>$10.54</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] mt-2 rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>



<div className="sub3 md:mx-auto ">
<h1 className='font-bold text-xl text-[#550D0E] '>If It Bleeds</h1>
<h1 className='text-xl text-[#550D0E] '>Brian Freeman</h1>
<img src={img6} alt="image" className='' />

<h1 className='font-bold text-2xl  text-[#550D0E] '>$13.57</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] mt-2   rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>













</div>













    

    
    </>
  )
}

export default Home