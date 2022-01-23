import React from 'react';

const Book = ({img,title,author,price}) => {
    const clickHandler=() =>{
       alert(price);
       
    };
     
     return(
     <article className='book'>
       <img src={img} alt=""/>
       <h1>{title}</h1> 
       <h4>{author}</h4> 
       <h2>{price}</h2>
       <button type='button' onClick={clickHandler}>Add to cart</button>
       </article>
     );
   };

export default Book