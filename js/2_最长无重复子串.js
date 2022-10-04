var lengthOfLongestSubstring = function(s) {
  let left = right = length = maxLength = 0
  let set = new Set()
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      length ++
      if (length > maxLength) {
        maxLength = length
      }
      right ++
    } else {
      while (set.has(s[right])) {
        set.delete(s[left])
        length --
        left ++
      }
      set.add(s[right])
      length ++
      right ++
    }
  }
  return maxLength
}