export function getLinearSortAnimations(array){
    const animations = [];
    
    for(let i = 0; i  < array.length ; i++){
      for(let j = i+1; j < array.length;j++){
        animations.push([i , j, 'color']);
        animations.push([i , j, 'revert']);
        if(array[j] < array[i]){
          animations.push([i,array[j],'swap']);
          animations.push([j,array[i],'swap']);
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    
    return animations;
    }