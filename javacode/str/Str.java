package javacode.str;

public class Str {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0)
            return 0;

        if (haystack.contains(needle)) {
            return haystack.indexOf(needle, 0);
        } else {
            return -1;
        }
    }
}
