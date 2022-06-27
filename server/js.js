const fs= require('fs')
const getNames =()=>{

    const arrayImages = ["القيمة الاجمالية حسب كل سنة $"]
     const arrayGrades=[0.3,0.2,0.1,0.2,0.1,0.2]

for (let i=0; i<4; i++) {
/* console.log("{\"text\":"+"\""+arrayImages[i]+"\",\"id\":"+"\"c1"+(i+1)+"\",\"g\":\""+arrayGrades[i]+"\"},")
 */
console.log("c1"+(i+1)+":{ch:false,g:0},")

}

}
getNames()