# A physical demonstration of a Frankfurt style thought experiment

This project seeks to model Harry Frankfurt's counter example to the Principle of Alternate Possibilities (PAP). 

**Background**

Consider, how might one define *free will*? A common and intuitive definition is as follows: 
> An Agent A has free will iff A makes some choice *freely*. A choice is made freely iff A could have done otherwise.

The second part of this definition, *"A choice is made freely iff A could have done otherwise."* is known as the Principle of Alternate Possibilities, or PAP.
This seems like a very reasonable principle to define free will around... It would seem absurd to claim that an Agent has free will, if for every choice they make, there is only one option.

Now consider the following thought experiment:
> Assume for the sake of the experiment that choices made under ordinary conditions are free.
> 
> Imagine, without your knowledge, a mad scientist inserts a chip into your brain.
> If at some point you decide to rob a bank, this chip will activate and *force you* not to rob the bank.
> The next day, you go to deposit some money and decide, without the brain chip engaging, not to rob the bank.
>
> Notice, this seems to violate the PAP. When presented with the choice to rob the bank or not there was only one option we could choose. Was the choice free then?

It would seem intuitive to claim that the decision not to rob the bank was made freely, since the brain chip never activates.
This is at tension with the PAP, and may compel one to revise the free will definition to accommodate such examples.

**Project Overview**

While brainchips with the power to dictate choice exist in science fiction alone, there are other ways we might set this thought experiment up to allow for physical demonstrations.

TENS units are medical devices that deliver a low voltage electrical current to specific parts of the body. While these devices are used primarily for pain relief, in turning up the power, a TENS unit will force muscles to contract hard enough to move parts of the body.

See a fun example by Michael Reeves here!
> https://youtu.be/fzJrH_DR6SY?t=56

This project runs locally on a laptop and arduino, and presents users with a choice: Click the button on the left, or click the button on the right. At runtime, the program will randomly select either the left or the right button. If the user selects the same button as the program, nothing happens.
Otherwise, the arduino engages a TENS unit, with electrodes placed strategically on the user's arm to prevent the user from clicking the button!

** Disclaimer: Do not try this at home! Shocking yourself intentionally with a TENS unit turned to the max can be dangerous.**

