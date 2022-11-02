export function getBubbleSortAnimations(array){
    const animations = [];

    if(array.length <= 1) return array;
    
    for(let i = 0; i < array.length ; i++){
      for(let j = 0 ; j<array.length-i-1 ; j++){
        animations.push([j,j+1,'color']);
        animations.push([j,j+1,'revert']);
        
        if(array[j] > array[j+1]){
    
          animations.push([j,array[j+1],'swap']);  
           animations.push([j+1,array[j],'swap']);  
          var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
    
        }
      }
    }
    return animations;
   
  }