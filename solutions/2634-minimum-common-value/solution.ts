function getCommon(nums1: number[], nums2: number[]): number {
  let i = 0, j = 0;  

    while (i <= nums1.length - 1 && j <= nums2.length - 1){
        if (nums1[i] === nums2[j]){
            return nums1[i]
        }
        else if(nums1[i] < nums2[j]){
            i++;
        }else {
            j++
        }
    }

    return -1
};
