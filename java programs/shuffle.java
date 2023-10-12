import java.util.*;
public class shuffle {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6,7};
        int len=arr.length;
        Random rand = new Random();
        for(int i=0;i<len;i++){
            int index= rand.nextInt(len);
            int temp=arr[index];
            arr[index]=arr[i];
            arr[i]=temp;

        }
        System.out.println(Arrays.toString(arr));
    }
}
