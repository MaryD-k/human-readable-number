module.exports = function toReadable (number) {
  let ed=["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
  "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let des=["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let sot=["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", 
  "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  let numName, kdes, ksot, ked;

  if (number < 20)
    numName=ed[number];
    else
    {
        if (Math.trunc(number / 100)>0)
        {
            ksot=Math.trunc(number / 100);
            numName=sot[ksot-1];
        }
        if(ksot > 0)
        {
            if (Math.trunc((number % 100) / 10) > 0 && (number % 100) >19)
            {
                kdes=Math.trunc((number % 100) / 10);
                numName=numName + " " + des[kdes-2];
            }
        }
        else
        {
            kdes=Math.trunc((number % 100) / 10);
            numName=des[kdes-2];
        }
        if (ksot > 0 || kdes > 0)
        {
            if (((number % 100)<20 && (number % 100)!=0) || ((number % 100) % 10) != 0)
            {
                if (kdes>0)
                {
                    ked=(number % 100) % 10;
                    numName=numName + " " + ed[ked];
                }
                else
                {
                    ked=(number % 100);
                    numName=numName + " " + ed[ked];
                }
            }
        }
        else
        {
            ked=(number % 100) % 10;
            numName=ked[ked];
        }
    }
    return numName;
}
