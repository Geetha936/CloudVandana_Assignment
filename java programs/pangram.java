import java.util.*;

public class pangram {
        static boolean ispangram(String str){
        str=str.toLowerCase();
        ArrayList<Character> a = new ArrayList<>(List.of('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'));
        int len=str.length();
        if (len<26){
            return false;
        }
        else {
        for(int in=0;in<len;in++)
        {
            if(!a.isEmpty())
            {
                for(char each:a)
                {
                    if (str.charAt(in)==each)
                    {
                        a.remove(Character.valueOf(each));
                        break;
                    }


                }
            }
            else
            {
                return true;
            }

        }
        }
        return false;



    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str=sc.next();
        System.out.println(ispangram(str));
    }
}
