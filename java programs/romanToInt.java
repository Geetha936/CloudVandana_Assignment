import java.util.Scanner;
public class romanToInt {
    static int convert(char ch)
    {
        if(ch=='I'){
            return 1;
        } else if (ch=='V')
        {
            return  5;
        } else if (ch=='X')
        {
            return 10;
        } else if (ch=='L'){
            return 50;

        } else if (ch=='C'){
            return 100;
        } else if (ch=='D'){
            return 500;
        }
         else if(ch=='M'){
        return 1000;
    }
         return -1;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str =sc.next();
        int len=str.length();
        int res=0;
        int i=0;
        while(i<len){
            int a=convert(str.charAt(i));
            if(i+1 < len){
                int b=convert(str.charAt(i+1));
                if(b>a){
                    i=i+2;
                    res=res+b-a;
                }
                else{
                    res+=a;
                    i++;}
            }
            else{
                res+=a;
                i++;}
        }
        System.out.println(res);

    }
}
