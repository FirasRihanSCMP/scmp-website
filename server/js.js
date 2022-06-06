const fs= require('fs')
const getNames =()=>{
    let newarray=[[
        'events/sws2022/DSC_2668.JPG.webp',
        'events/sws2022/IMG_2870.JPG.webp',
        'events/sws2022/IMG_2879.JPG.webp',
        'events/sws2022/071A2052.JPG',
        'events/sws2022/071A2068.JPG.webp',
        'events/sws2022/071A2088.JPG.webp',
        'events/sws2022/071A2089.JPG.webp',
        'events/sws2022/071A2101.JPG.webp',
        'events/sws2022/071A2113.JPG.webp',
        'events/sws2022/071A2127.JPG.webp',
        'events/sws2022/071A2130.JPG.webp',
        'events/sws2022/071A2139.JPG.webp',
        'events/sws2022/071A2144.JPG.webp',
        'events/sws2022/IMG_0009.JPG.webp'
      ]]
    const arrayImages = ['DSC_2668.JPG.webp',
    'IMG_2870.JPG.webp',
    'IMG_2879.JPG.webp'  , '071A2052.JPG',         '071A2068.JPG.webp',
    '071A2088.JPG.webp',    '071A2089.JPG.webp',
    '071A2101.JPG.webp',    '071A2113.JPG.webp',    '071A2127.JPG.webp',
    '071A2130.JPG.webp',    '071A2139.JPG.webp',
    '071A2144.JPG.webp',    
    'IMG_0009.JPG.webp'
  
  ]

for (const file of arrayImages) {

newarray.push('events/sws2022/'+file)

}
console.log(newarray)
}
getNames()