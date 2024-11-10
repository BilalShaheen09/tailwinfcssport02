import React from 'react'
import Image from 'next/image';

interface propsType{
  title:string;
  desc:string;
  img:string;
  tags: string[];

}

const Card:React.FC<propsType> = ({title ,desc, img, tags}) => {
  return (
    <div className='border border-accent w-[350px] py-5 px-2 md:w-[300px]'data-aos="zoom-in-up">
      <div className='h-[350px]' >
        < Image className='object-cover overflow-hidden w-[300px] h-[350px]'
        src={img}
        width={350}
        height={450}
        alt={title} 
        />
      </div>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) =>(
          <div className='tags' key={el}>
            {el}

          </div>))}
        </div>
      </div>

    </div>
  )
}

export default Card
