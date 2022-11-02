export function getInsertionSortAnimations(arr) {

    /// 'color' means color change in the animation
    /// 'revert' means change the color back to its initial state
    /// 'swap' arr[hole] takes the value of arr[hole - 1]
  
    const animations = [];
  
    for(let i = 1;i < arr.length;++i) {
  
        const val = arr[i];
        let hole = i;
  
        while(hole > 0 && arr[hole - 1] > val) {
  
            animations.push([hole, hole - 1, 'color']);
            animations.push([hole, hole - 1, 'revert']);
            animations.push([hole, arr[hole - 1], 'swap']);
  
            arr[hole] = arr[hole - 1];
            hole--;
        }
  
        animations.push([hole, i, 'color']);
        animations.push([hole, i, 'revert']);
        animations.push([hole, val, 'swap']);
  
        arr[hole] = val;
    }
    return animations;
  }