## #Fake Inject

@abstr_hyperlink 

## A Fake Function Inject Assistant for C

Fake inject is a assistant tool for the fake function replacement during unit test. So that it can be easier to replace the dependancy with test double.

## Hello, fake inject!

Say you have such production code.

```C //dice.c

# include 

# include "dice.h"

# include 

int dice_point() { srand(time(NULL)); int r = ( rand() % @abstr_number ) + @abstr_number ; return r; }

int isWon() { int points = dice_point(); if (points > @abstr_number ){ return TRUE; } return FALSE; } @abstr_code_section C

static int closed_share_point(bool write, int value) { static int saved_value; if (write) return saved_value; return saved_value = value; }

void set_points(int points) { closed_share_point(false, points); }

int dice_point_fake() { return closed_share_pont(true, @abstr_number ); } @abstr_code_section C ...

# include "fake_inject.h"

... TEST(DiceTest, GivenDiceWhenPointBiggerThanThreeShallWin) { set_points( @abstr_number + @abstr_number ); SET_FAKE_INJECT(dice_point, dice_point_fake); CHECK_EQUAL( @abstr_number , isWon()); RESET_FAKE_INJECT(dice_point); } ```

## Cheat Sheet

Macro | Description | Example  
---|---|---  
SET_FAKE_INJECT(function_name, fake_name); | Use fake function replace original function. | SET_FAKE_INJECT(dice_point, dice_point_fake);  
RESET_FAKE_INJECT(function_name); | Reset the fake function to original real function. | RESET_FAKE_INJECT(dice_point);
