"""
File: prove12.txt
Author: Luis Andrade
Date: 9 December 2022
Purpose: Prove Assignment Milestone.
"""
print( """ \n\n\n 
+============================================+
|                                            |
| ¡Welcome to the analyze a dataset program! |
|                                            |
+============================================+""")
print( "\n\n  Please stay one moment please... " )

import time
for second in range(1, 6):
    print(second, "Second")
    time.sleep(1)
print("Are you Ready?")	
print("Ready or not, here I come!")


print("""\n\n
 I¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯I
 º                                                   º
 º       This program containing information         º
 º             about life expectancies               º
 º                  over the years                   º
 º             throughout  the countries             º
 º                   of the world.                   º
 º                                                   º
 I¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯®¯I""")

with open("life-expectancy.csv") as  book_file:
   
   for line in  book_file:
        book = line.strip()
        print(book)

attention_year = input("\n\n   Please Enter the year of your attention: ")


with open("life-expectancy.csv") as life_file:
   next(life_file)
   highest = 0
   highest_data =[]
   lower = 100
   lower_data =[]
   year_highest = 0
   year_highest_data = []
   year_lower = 100
   year_lower_data = []
   year_life_attentions = []
          
   for line in life_file:
      data = line.strip().split(",")
      country = data[0]
      year = data[2]
      life_expectancy = float(data[3])

      if life_expectancy > highest:
         highest = life_expectancy
         highest_data = data

      if life_expectancy < lower:
        lower = life_expectancy
        lower_data = data

      if year == attention_year:
         year_life_attentions.append(life_expectancy) 

         if life_expectancy > year_highest:
           year_highest = life_expectancy
           year_highest_data = data

         if life_expectancy < year_lower:
            year_lower = life_expectancy
            year_lower_data = data

   average = sum(year_life_attentions) / len(year_life_attentions)

   print("\n\n    For your general knowledge remember alway:")
   print(f"The overall highest life expectancy is: {highest_data[3]} from {highest_data[0]} in {highest_data[2]}")
   print(f"The overall lower life expectancy is: {lower_data[3]} from {lower_data[0]} in {lower_data[2]}")
   
   print(f"\n\n    Now for the year {attention_year} that you want to know we have to:")
   print(f"The average life expectancy across all countries was: {average:.2f}")
   print(f"The highest life expectancy was in: {year_highest_data[0]} whit {year_highest_data[3]}")
   print(f"  And lower life expectancy was in: {year_lower_data[0]} whit {year_lower_data[3]}")
   print("                                    *             *")
   print("                                   * *           * *")
   print("                                  *   *         *   *")
   print("                                 *     *       *     *")
   print("                                ***   ***     ***   ***  ")
   print("                                  *   *         *   * ")
   print("                                  *   *         *   *")
   print("                                  *   *         *   * ")
   print("                                  *   *         *   *")
   print("                                  *   *         *   * ")
   print("                                  *   *         *   *")
   print("                                  *****         *****")
   print("According to the file we have to:")
   print("This is the information of The Oxford Martin School.")