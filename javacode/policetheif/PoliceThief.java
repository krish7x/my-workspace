package javacode.policetheif;

public class PoliceThief {

    public void getPoliceThief() {
        String[] arr = {"P", "T", "P", "T", "T", "P"};

        int k = 1;
        int counter = 0;

        for(int i = 0; i < arr.length; i++) {
            if (i == 0 && arr[i] == "P") {
                if (arr[i + k] == "T") {
                  arr[i + k] = "C"; // C -> caught
                  counter += 1;
                }
              } else {
                if (arr[i] == "P") {
                  if (arr[i - k] == "T") {
                    arr[i - k] = "C";
                    counter += 1;
                  } else if (arr[i + k] == "T") {
                    arr[i + k] = "C";
                    counter += 1;
                  }
                }
              }
        }
        System.out.println(counter);
    }
}