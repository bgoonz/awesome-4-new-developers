

public class test {
  
  static boolean testsPass() {
    int[] a1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    int[] a2 = { 1, 2, 3, 4, 5, 1, 2, 8, 9 };
    boolean b1 = allUniqueWithSet(a1);
    boolean b2 = allUniqueWithSet(a2);
    boolean b3 = allUniqueWithStreams(a1);
    boolean b4 = allUniqueWithStreams(a2);
    boolean b5 = allUniqueWithArray(a1);
    boolean b6 = allUniqueWithArray(a2);
    return b1 && b3 && b5 && !b2 && !b4 && !b6;
  }
  
  
  
  
  
  
}

