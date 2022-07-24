import bcrypt from 'bcryptjs';
const data ={
  users: [
    {
      name: 'Sanskruti',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Vidhi',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],  
  products: [
      {
        
        name: 'Shipp',
        category: 'Noise Cancellation',
        image: '/images/d1.jpg',
        price: 160,
        countInStock:10,
        brand: ' AWL',
        rating: 4.5,
        numReviews: 15,
        description:'soft and high quality',
        video:'https://www.youtube.com/watch?v=Dd1VIeTMGQs',
      },
      {
          
          name: 'Sonix',
          category: 'Noise Cancellation',
          image: '/images/p1.jpg',
          price: 1600,
          countInStock:0,
          brand: 'AWL',
          rating: 4.0,
          numReviews: 16,
          description:'soft and high quality',
          video:'https://www.youtube.com/watch?v=kKyrqI9vnWw',
        },
        {
        
          name: 'Loud',
          category: 'Noise Cancellation',
          image: '/images/d3.jpg',
          price: 1200,
          brand: 'Bass',
          rating: 4.5,
          countInStock:10,
          numReviews: 10,
          description:'soft and high quality',
          video:'https://www.youtube.com/watch?v=ZPHvH7D6qQY',
        },
        {
       
          name: 'Rooster',
          category: 'Wireless',
          image: '/images/p1.jpg',
          price: 1260,
          countInStock:10,
          brand: 'Bass',
          rating: 3.0,
          numReviews: 13,
          description:'soft and high quality',
          video:'https://www.youtube.com/watch?v=FUiu-cdu6mA',
        },
        {
      
          name: 'Willow',
          category: 'Wireless',
          image: '/images/p2.jpg',
          price: 3600,
          brand: ' AWL',
          countInStock:15,
          rating: 4.5,
          numReviews: 14,
          description:'soft and high quality',
          video:'https://www.youtube.com/watch?v=xFe_ZYtfsZg',
        },
        {
        
          name: 'Tuneit',
          category: 'Wireless',
          image: '/images/p3.jpg',
          price: 1160,
          brand: 'AWL',
          countInStock:0,
          rating: 4.0,
          numReviews: 17,
          description:'soft and high quality',
          video:'https://www.youtube.com/watch?v=vuoxprrEwbg',
        },


    ],
};
export default data;