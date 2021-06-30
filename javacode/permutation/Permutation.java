package javacode.permutation;


public class Permutation {

  public Integer getFactorial(int n) {
        if(n == 0) return 0;
        if(n == 1) return 1;
        return n * getFactorial(n - 1);
    }

}