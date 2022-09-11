/* Test zone */
/* delete */

const test = "am plecat la film"

function reverse(str,start,end) {
        let temp;
       
        while (start <= end) {
            temp = str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
        }
}

function reverseWords(s) {
    s=s.split("");
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        if (s[end] == ' ')
        {
            reverse(s, start, end);
            start = end + 1;
        }
    }
    // Reverse the last word
    reverse(s, start, s.length - 1);
        
    // Reverse the entire String
    reverse(s, 0, s.length - 1);
    return s.join("");
}
     
console.log(reverseWords(test))

/*
affiliateId: "1"
cashbackValue:"până la 6%"
categoryId: "3"
detailsId: "1-2405"
domain: "dyfashion.ro"
id: "2405"
logo: "https://img.2performant.com/system/paperclip/campaign_logos/pics/9467/medium/9467.jpg"
name: "dyfashion.ro"
shopStatus: "No status"
trimmedDomain: "dyfashion.ro"
url: "https://www.dyfashion.ro"
*/