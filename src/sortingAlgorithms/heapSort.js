export function getHeapSortAnimations(arr) {

    const animations = [];
    heapSort(arr,arr.length,animations);
    return animations;
  }
  // To heapify a subtree rooted with node i
  // which is an index in arr[].
  // n is size of heap
  function heapify(arr, N,  i,animations)
  {
      // Find largest among root, left child and right child
  
      // Initialize largest as root
      let largest = i;
  
      // left = 2*i + 1
      let left = 2 * i + 1;
  
      // right = 2*i + 2
      let right = 2 * i + 2;
  
      // If left child is larger than root
      if (left < N && arr[left] > arr[largest]){
      animations.push([left,largest,'color']);
      animations.push([left,largest,'revert']);
          largest = left;
    }
      // If right child is larger than largest
      // so far
      if (right < N && arr[right] > arr[largest]){
      animations.push([right,largest,'color']);
      animations.push([right,largest,'revert']);
          largest = right;
    }
      // Swap and continue heapifying if root is not largest
      // If largest is not root
      if (largest !== i) {
      animations.push([i,arr[largest],'swap']);
      animations.push([largest,arr[i],'swap']);
          var temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
          // Recursively heapify the affected
          // sub-tree
          heapify(arr, N, largest,animations);
      }
  }
  
  // Main function to do heap sort
  function heapSort(arr, N,animations)
  {
      // Build max heap
      for (var i =Math.floor( N / 2) - 1; i >= 0; i--) heapify(arr, N, i,animations);
  
      // Heap sort
      for (var i = N - 1; i >= 0; i--) {
      animations.push([i,arr[0],'swap']);
      animations.push([0,arr[i],'swap']);
          var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
          // Heapify root element to get highest element at
          // root again
          heapify(arr, i, 0,animations);
      }
  }
  