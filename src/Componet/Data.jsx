// import React, { useState } from 'react';

// function Data() {
//     const [data] = useState([
//         {
//             img1: 'public/thumbnail-2.webp',
//             logo: 'public/channel-2.jpg',
//             title: 'Jetha कैसे रख पाएगा निर्जला उपवास? | Taarak Mehta Ka Ooltah Chashmah',
//             chenel: 'Sony SAB',
//             time: '989K views · 1 months ago',
//         },
//           {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },
//         {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },
//         {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },
//         {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },
//         {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },
//         {
//             img1: 'public/2.webp',
//             logo: 'public/channel-5.jpg',
//             title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
//             chenel: 'Tanmay Bhat',
//             time: '5.4M views · 7 months ago',
//         },

//     ]);

//     return (
//         <div className="h-screen w-full flex gap-5 flex-wrap">
//             {data.map((val, index) => (
//                 <div key={index} className=''>
//                     <div className='h-50 w-80  rounded-lg '>
//                         <div>
//                             <img className='rounded-xl' src={val.img1} alt="" />
//                         </div>
//                         <div className="flex justify-center gap-2 p-3">
//                             <div>
//                                 <img className='rounded-full' src={val.logo} alt="" />
//                             </div>
//                             <div>
//                                 <div className='font-semibold text-sm'>{val.title}</div>
//                                 <div className='mt-3 text-gray-500'>{val.chenel}</div>
//                                 <div className='text-gray-500'>{val.time}</div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Data;

// {/* <div class="video-container">
//     <div class="thumbnail-logo">
//         <img class="thumbnail" src="thumbnails/thumbnail-2.webp" alt="">
//             <div class="timeline">14.50</div>
//     </div>
//     <div class="video-info-grid">
//         <div class="channel-logo">
//             <img class="profile-logo" src="channels/channel-2.jpg" alt="">
//         </div>
//         <div class="video-info">
//             <p class="video-title">Jetha कैसे रख पाएगा निर्जला उपवास? | Taarak Mehta Ka Ooltah Chashmah</p>
//             <p class="video-owner">Sony SAB</p>
//             <p class="video-views">989K views · 1 months ago</p>
//         </div>
//     </div>
// </div> */}


import React, { useState } from 'react';

function Data() {
  const [data] = useState([
    {
      img1: '/thumbnail-2.webp',
      logo: '/channel-2.jpg',
      title: 'Jetha कैसे रख पाएगा निर्जला उपवास? | Taarak Mehta Ka Ooltah Chashmah',
      chenel: 'Sony SAB',
      time: '989K views · 1 month ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-6.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-5.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-5.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-6.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-5.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-5.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-6.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },
    {
      img1: '/2.webp',
      logo: '/channel-5.jpg',
      title: 'THIS IS BEST COLLEGE PRIVATE COLLEGE OF INDIA',
      chenel: 'Tanmay Bhat',
      time: '5.4M views · 7 months ago',
    },

  ]);

  return (
    <div className='bg-gray-200 w-full'>
      <div className='container mx-auto'>
        <div className="flex flex-wrap ms-40 gap-x-9 gap-y-10 p-6 bg-gray-200">
          
          {data.map((val, index) => (
            <div key={index} className="w-80">
              <img className="rounded-xl w-full mb-3" src={val.img1} alt="thumbnail" />
              <div className="flex gap-3">
                <img className="w-10 h-10 rounded-full" src={val.logo} alt="channel logo" />
                <div>
                  <p className="font-semibold text-sm leading-tight">{val.title}</p>
                  <p className="text-gray-500 text-sm">{val.chenel}</p>
                  <p className="text-gray-500 text-sm">{val.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Data;
