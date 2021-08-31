


  

{
    Set<Integer> checkSet = new HashSet<>();
    for(int v : a)
    {
        if(checkSet.contains(v))
        {
            return false;
        }
        checkSet.add(v);
    }
    return true;
}

  static boolean allUniqueWithArray(int[] a) {
    boolean[] check = new boolean[256];
    for (int v : a) {
      if (check[v]) {
        return false;
      }
      check[v] = true;
    }
    return true;
  }

  static boolean allUniqueWithStreams(int[] a) {
    Set<Integer> set = Arrays.stream(a).boxed().collect(Collectors.toSet());
    return set.size() == a.length;
  }
  
  
  

