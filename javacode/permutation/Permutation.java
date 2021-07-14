package javacode.permutation;

import java.util.ArrayList;
import java.util.List;

public class Permutation {

    public void printAllRecursive(int n, int[] elements) {
        if (n == 1) {
            List<Integer> temp = convertToArr(elements);
            printArr(temp);
        } else {
            for (int i = 0; i < n - 1; i++) {
                printAllRecursive(n - 1, elements);
                if (n % 2 == 0) {
                    swap(elements, i, n - 1);
                } else {
                    swap(elements, 0, n - 1);
                }
            }
            printAllRecursive(n - 1, elements);
        }
    }

    private void swap(int[] elements, int a, int b) {
        int tmp = elements[a];
        elements[a] = elements[b];
        elements[b] = tmp;
    }

    private List<Integer> convertToArr(int[] elements) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < elements.length; i++) {
            list.add(elements[i]);
        }
        return list;
    }

    private List<List<Integer>> printArr(List<Integer> temp) {
        List<List<Integer>> list = new ArrayList<>();
        list.add(temp);
        return list;
    }
}
