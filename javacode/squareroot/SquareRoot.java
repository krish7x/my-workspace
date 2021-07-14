package javacode.squareroot;

public class SquareRoot {
    public int mySqrt(int x) {
        int temp = 0;
        int squareroot = x / 2;
        while (squareroot - temp != 0) {
            temp = squareroot;
            squareroot = (temp + (x / temp)) / 2;
        }
        return squareroot;
    }
}
