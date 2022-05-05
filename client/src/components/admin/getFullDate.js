export const getFullDate = (date) => {
  let Date=''
  let dash=''
var FullDate=date.split(' ') 
/* console.log(FullDate) */
Date=FullDate[0]+"-"+FullDate[2]+"-"+FullDate[1]+"-"+FullDate[3]
return Date;
}