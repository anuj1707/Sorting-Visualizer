export function getSelectionSortAnimations(arr) {
    const  animations = [];
    for(let i = 0; i < arr.length-1; i++){
      let k = i;
      for(let j = i+1 ; j<arr.length ;j++){
        if(arr[j]<arr[k]){
          animations.push([j,k,'color']);
          animations.push([j,k,'revert']);
          k = j;
        }
      }
      if(k !== i){
        
        animations.push([i,arr[k],'swap']);
        animations.push([k,arr[i],'swap']);
        var temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
      }
    }
  return animations;
  }