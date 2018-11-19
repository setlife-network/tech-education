# Fundamentals of Software
Defend yourself against a changing job market in these times of exponential growth!


#### Introduction
The primary focus of this course is to establish the fundamental concepts involved in programming using more practical and relatable examples. Many people find computer code somewhat overwhelming and even intimidating at first, and may not have the confidence to devote their time to a fully-fledged software course.

The truth is coding can be a lot more like reading and writing a story if you know what to look for. The goal here is to help anyone eager enough to find that confidence before actually choosing a programming language to start learning and therefore, hands-on coding is outside the scope of this course. There is however a final section with a general outline for learning Javascript, complete with free informational resources and recommendations on paid courses.

The current version of this course is v1.0 and shouldn't take a beginner more than 30-60 mins to fully digest. There are advanced topics that will be expanded upon in a future version as well links to external resources that may provide further detail or clarity

Each section includes references to advanced topics that you can research yourself online. Videos covering these advanced topics will be released in the future.

### Fundamentals

- Sequence of Commands/Sequence of Events
- Variable Declaration
- Conditional Logic
- Boolean Logic/Algebra
- Objects & Key-Value Pairs
- Iterative Constructs

### Sequence of Commands/Sequence of Events
---
One way to describe a program would be a number of commands that are generally written top to bottom on separate lines and after the program has started, each line gets __called__ or __activated__ in sequential order. In this context, we can refer to these lines of code as both the Sequence of *Commands* and the Sequence of *Events*, and the difference is one of perspective, relative to the point in **time** you are talking about.

1. If you are referring to the Sequence while writing the code, you can think of each line as a command that will be called at some point in the future.
2. If you are referring to the Sequence while the program is running, you can think of each line as an event that is happening in real time.

This creates two contextual scopes in which to think about a program: one for predicting what is going to happen in the future, and one for figuring out what is happening right now.

Let's say you meet a new friend, and you ask them for their phone number so you can write it down. This is a simple form of writing some commands for yourself to recall later so that you can communicate with them. To communicate with your friend right then and there, you can obviously just talk to them because they are close enough to hear you, but to communicate with them at some point in the future when they aren't around anymore, you know you'll have to take out your phone, dial their number, and start a voice call. In a sense, you save these instructions for later.

If this sounds simple to you, that’s because it is something you do automatically every day without thinking too much about how you would describe it. Conceptually, everything we see happens in one continuous sequence as we feel time moving forwards from the past to the future. This is a natural process that humans have always observed, but we've now been able to replicate this process using computers by writing down and running these lines of _source code_.

Don't overthink this. It is exactly as simple as it sounds. As you learn more about programming, more advanced nuances to this idea become very important to keep in mind when figuring out what a really long sequence of commands is supposed to be doing.


#### Advanced Topics
- Function Behaviors, Callbacks, & Asynchronous Programming

### Variable Declaration
---
When you declare a variable you’re just acknowledging that an observation has been made. The *name* that you give to the variable might be something like `rock` or `tree`, or let’s say `numberOfTrees` for this example. It doesn’t matter what the *value* is just yet, it just needs to be declared that it exists. The most important reason for this is so that we can reference our `numberOfTrees` further down in the sequence of commands and set it equal to `4` or `five` or `1000`. Variables are much more useful when they have a *value*. We can declare a variable and immediately give it a value on the same line, or declare it first, then assign its value on a different line executed later.

So let’s say we know the `numberOfTrees` in the yard is `3`. If you say for some reason that the `numberOfTrees` in the yard is `“blue”`, your program may technically “allow” you to do this, but then you wouldn’t be making much sense and your program won’t really be very useful to anyone who wants to understand what you are programming. It’s important that the language used in your program reads naturally in this sense if you expect it to improved upon by other developers. It’s also helpful for yourself in the future to more easily recall why you wrote your program in a particular way. With strong language skills, it is incredibly useful to leverage your knowledge of grammar and vocabulary to declare variables fluently and with clear intention of what you are designing the program to do. Perhaps `numberOfTreesInTheYard` or `numberOfOakTrees` are more accurate descriptors for your purposes.

Another way to think about a variable is to imagine storing things in an empty box. You can throw any label on any box and put whatever you want inside of it. A box labeled `water` might contain a bunch of plastic water bottles or maybe a couple of large water jugs. You decide what the most accurate label should be (`jugsOfWater`, `waterBottles`, etc). The label on the box is your variable's *name* and whatever you put inside it is its *value*. You can close the box up and take it wherever you want throughout your program. You can always open it back up, check to make sure everything is as you left it, take a jug out, put more bottles in, etc. Your variable boxes remain accessible to your program for future use and represent a fundamental form of "data storage".

Again do not overthink how simply this relates to what your mind and senses describe for you throughout the day:
- The *sun* is __hot__
- My *eyes* are __open__
- That *tree* is __tall__

Declaring a variable is just a program-friendly way of saying "this is that" where you make sure to give "this" a name you can make sense of and "that" is a value that makes logical sense to relate to the name you chose.

#### Advanced Topics
- Possible types of variables
- How variables get created and destroyed and how to manage them in different scopes

### Conditional Logic
---
Everyone uses conditional logic pretty much every waking moment of the day without even thinking about it. It’s when you **do** think about it that really opens up your mind to what you can program. The basic idea is: 
- *If* __this__ is true, *then* do __that__, 
- If this is not true (*else*), do __something else__
- Replace the words in bold to fit any decision you want to make

For example, say you are looking at a cup of water and you want to make the decision of whether to pick it up, bring it to your mouth and take a drink. One condition your brain would instinctively use is whether or not the cup has any water in it. If `cupIsEmpty` is `true` then you know there is no need to reach for the cup at all. If `cupIsEmpty` is instead `false` then we might look to another condition about whether or not the cup is within reach of your hands. If `cupIsWithinReach` is `true`, then that’s also a necessary condition you need to drink the cup. Putting multiple conditions together will make a lot more sense after we understand Boolean Logic/Algebra in the next section.

### Boolean Logic/Algebra
---
It’s relatively easy to wrap our heads around `true` and `false`. Either the `cupIsEmpty` is true, or the cup is not empty. Since there are no more than just these 2 options, it’s a simple yes or no answer. We generally want to boil things down to true or false, but sometimes it’s useful to use math equations in combination with our conditional logic.

In our cup of water example, we have a generalized basis for making our decisions by checking if `cupIsEmpty` is true or false. We can mathematize this idea by instead describing a variable called `litersOfWaterInCup` and checking whether or not the value of that variable is `0`. If it's greater than 0 then we can be sure that there is at least some water in the cup and with that logical condition, we decide that it's worth drinking.

We're able to use the mathematical concept of inequalities to decide if there's enough water in the cup to drink (ie: `litersOfWaterInCup > 0`). There are many parallel ideas to basic arithmetic, but to keep things simple for now, let's just say boolean algebra allows us to combine multiple conditions that we can logically make sense of with the following operations.

__AND__
With an AND operator, we require that both conditions must be true

__OR__
With an OR operator, we require that at least 1 condition must be true

### Objects & Key-Value Pairs
---
The idea of a key-value pair is similar to a variable and its value, but conceptualized a little differently. You simply have a name that describes something, for example `numberOfTrees`, and you refer to it as your *key* which allows you to later "unlock" the *value* of `4` that it has been *paired* with. When you have lots of keys, it's important to know that they are all paired with some value.

Much like variables, key-value pairs can be virtually anything so I'll leave a few examples below:

| Key                               |   Value |
| :-------------------------------- |  -----: |
| colorOfTree:                      | "brown" |
| heightOfTreeInMeters:             |       6 |
| numberOfLeavesOnTree:             |     143 |
| widthOfTreeTrunkInCentimeters:    |     100 |
| typeOfTree:                       |   "oak" |

The concept of an *object* is particularly abstract, but they basically let us take our variables and key-value pairs and organize them to understand what our program is doing. Are we talking about 1 tree in someone's back yard? Or an entire forest of trees spanning hundreds of acres? To make this jump in comprehension, we will have to make a distinction between key-value pairs and variables.

If you note the table above, you can see that the keys are all describing qualities of a `tree`. We have 5 key-value pairs acting as 5 variable boxes that each store information about 5 different characteristics about the `tree`. This might get unwieldy if we have to keep track of 5 different variables floating around our code. By defining an *object*, we can group them all together into a single variable called `tree` or maybe even `Tree` to indicate it's a bit different than a regular old variable (don't forget those language skills).

You might imagine a large chest with conveniently labeled internal compartments that each contain 1 of the 5 variables boxes we were handling individually before. Objects are useful for organizing variables in the form of key-value pairs and carrying them around your program for later use.

From here the visual analogy of boxes and chests starts to break down as there is no limit to how many boxes we can place within chests, to then place within bigger and bigger chests... We can define another object called `Forest` that contains 100 different `Trees` all with different values for their `color` or `heightInMeters` or `numberOfLeaves`. We could keep going and define an even bigger object called `North America` that contains thousands of different `Forests` that each contain different `Trees` and so on...

This last idea can be overwhelming with increasing levels of scale. Programs that are able to keep track of all of these objects within objects need to contain strong *iterative constructs* to help normal people understand what to do with all these `Trees` and `Forests` without getting totally lost thinking about how many variables there are. Check out the next section for more of the basics on this.

### Iterative Constructs
---
So this is where things start to get interesting. An iteration is a set of instructions that run from start to finish and can then be repeated. Let's say you have 20 bottles of water that are sitting on your counter. You want to put them all in the pantry and can only carry 2 bottles at a time. To complete this task starting from your countertop, you would have to:
1. Pick up 2 bottles
2. Walk to the pantry
3. Find empty space for 2 bottles
4. Place the 2 bottles in the empty space
5. Walk back to the counter
6. Pick up another 2 bottles
7. Walk back to the pantry
8. Find empty space for 2 more bottles
9. Place the 2 bottles in the empty space
10. Walk back to the counter
...

At this point you can see that I'm writing a lot of the same lines over and over. This is an indication that you can use an iterative construct to save time instead of repeatedly writing more lines of code than you really need. You could simply take steps 1-5 and remember to repeat them ten (10) times to make sure all 20 bottles made it into the pantry. As long as you can see the `numberOfBottlesOnCounter` decreasing every time you pick them up or even the `numberOfBottlesInPantry` increasing every time you place them, then you know exactly when to command the program to stop repeating steps 1-5. Before step 1 gets called, you would just declare some variables, keep an eye on their values with some conditional logic, and your iterative construct should know exactly what to do to complete the task.

There are a few different kinds of iterative constructs, but we won't get into them just yet. As long as you understand that you are able to repeat a set of instructions over and over until you have achieved a certain goal, the rest is semantics and proper syntax. 

#### Advanced Topics
- Infinite iterations
- Filtering, mapping, reducing

### Learning to Code

If you'd like to start actually learning to code and test programs, here's a general outline aimed at someone who has never written a program before:
1. Read through the [W3Schools JS Tutorial](https://www.w3schools.com/js/default.asp) starting from the first section. You can probably stop and move on to the next item when you reach JS Bitwise since advanced topics start around there.
2. Review the fundamentals above and try to write a few lines of actual Javascript code that demonstrates each principle (ex: `var cupIsEmpty = true`)
3. Take a look at some [examples of Java programming](https://www.youtube.com/watch?v=WPvGqX-TXP0). Watch the video at normal speed. Optionally, you can figure out how to run Eclipse and do what he does alongside the video. For beginners, it's a common misconception that you should worry about picking a single language and getting good at it. Translating between Java and Javascript might be useful in some rare cases, but to be truly software literate means being able to reason through programming fundamentals and understand what a program is doing, regardless of the syntax or language.
4. Practice Javascript in the [Google Dev Tools console](https://developers.google.com/web/tools/chrome-devtools/console/) while reading [You Don't Know Javascript: Up & Going](https://github.com/getify/You-Dont-Know-JS/tree/master/up%20%26%20going) - Chapters 1 & 2 (the chapter labeled "Strict Mode" is a good stopping point)