// package javacode.range;

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// import org.apache.commons.lang3.Range;

// public class Range {

//   public  void getRange() { 
//     Map<String, String> data = new HashMap<>();
//     data.put("date", "1-10");
//     data.put("name", "11-20");
//     data.put("address1", "21-30");
//     data.put("address2", "6-40");
//     data.put("address3", "41-50");
//     data.put("a", "51-60");
//     data.put("b", "61-70");
//     data.put("c", "49-80");
//     data.put("d", "81-90");
//     data.put("e", "91-100");
//     data.put("f", "101-110");
//     data.put("g", "111-120");
//     data.put("h", "9-15");

//     int initialIndex = 0;
//     int initialStartValue = 0;
//     int initialEndValue = 0;
//     int instance = 0;
//     String entryKey = "";
//     List<String> errorList = new ArrayList<>();

//      while (instance < data.size()) {
//       for (Map.Entry<String, String> entry : data.entrySet()) {
//         String[] splitValue = entry.getValue().split("-");
//         int start = Integer.parseInt(splitValue[0]);
//         int end = Integer.parseInt(splitValue[1]);
//         if (initialIndex == 0) {
//           entryKey = entry.getKey();
//           initialStartValue = start;
//           initialEndValue = end;
//         } else {
//           boolean isOverlap = Range.between(initialStartValue, initialEndValue).isOverlappedBy(Range.between(start, end));
//           if (isOverlap) {
//             if(!errorList.contains(entryKey)) {
//               errorList.add(entryKey);
//             }
//             if(!errorList.contains(entry.getKey())) {
//               errorList.add(entry.getKey());
//             }
//           }
//         }
//         initialIndex ++;
//         if (initialIndex == data.size()) {
//           initialIndex = 0;
//         }
//       }
//       for(String errors: errorList) {
//         data.remove(errors);
//       }
//       instance ++;
//     }

//     //logging
//     System.out.println("------------->No Of Errors<---------------------");
//     System.out.println(errorList.size());

//     System.out.println("------------->ERROR LIST<---------------------");
//     errorList.forEach(System.out::println);

//     System.out.println("---------------->DATA<---------------------");
//     for(Map.Entry <String, String> entry: data.entrySet()) {
//       System.out.println("Key --> " + entry.getKey() + "  ,Value --> " + entry.getValue() );
//     }
//   }
// }