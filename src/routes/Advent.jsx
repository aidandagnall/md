import Post from "../components/Post";
import Header from "../components/Header"
import LinkComponent from "../components/Link";
function Advent() {
  return (
    <Post title="Advent of Code">
      <Header as="h2">
        What is Advent of Code?
      </Header>
      <p className="text-left">

        [[<a href="https://adventofcode.com"
          className="text-blue-600 dark:text-blue-400">Advent of
          Code</a>]] is a programming challenge that takes place every
        December. Each day of advent (1st-25th December), a new
        challenge is released with (<span
          className="italic">*generally*</span>) increasing
        difficulty. Each day you are given a Christmas-themed
        puzzle, and you must write a solution to it in any
        programming language you like.

        <br /><br />

        Unlike other programming challenges (LeetCode, etc.), Advent
        of Code only requires a correct answer to be submitted. This
        places the emphasis on solving the problem however you can -
        not by writing perfectly optimised code. For many days,
        people have found it simpler to solve by hand, or by using a
        spreadsheet. However...

        <br /><br />

        After you submit the correct answer, you quickly find out
        there is a second part - and this is true for every day
        other than the 25th. This requires you to extend, overhaul,
        or sometimes completely rewrite your solution to part 1.

        <br /><br />

        There are global leaderboards (though only the first 100
        submissions receive points), and you can create local
        leaderboards with friends to compete against each other.
        Again, good code does not necessarily mean a high score
        (though a good solution often helps with part 2) it is more
        about how quickly you can obtain the correct answer.

      </p>

      <br />

      <Header as="h2">My Attempts</Header>

      <p className="text-left">

        I was introduced to Advent of Code during my first year
        at university, just in time for the start of the 2019
        event. I (naïvely) attempted to complete it in C, but
        within 9 days I had given up. The next year, with
        nothing better to do due to COVID-19, I had much more
        time and decided I'd give it another go, this time in
        Python.  This proved far more manageable, and I
        collected all 50 stars, though it took me a few days
        after the 25th.

        <br /><br />

        In 2021, I was decided to learn Kotlin (primarily for one of
        my university modules), and I figured Advent of Code would
        be a great opportunity to test my existing knowledge, and to
        learn some of the fundamentals that I had missed. As it
        turns out, Kotlin is fantastic for this type of programming
        - with many considerations for competitive programming which
        they discuss in their documentation. It also turned out to
        be a perfect mix of functional and procedural /
        object-oriented programming.

        <br /><br />

        I often find functional styles useful for this type of
        problem solving (and they're often cleaner).  However,
        functional programming is not something I am completely
        comfortable with, and each Advent of Code problem releases
        at 5am GMT (did I forget to mention that bit?), so having a
        more comfortable procedural style was nice to have on early
        mornings when I was still half asleep.

      </p>

      <Header as="h2">Community at UoN</Header>

      <p>

        Thought I found out about Advent of Code from HackSoc, UoN's
        development society, I did my best to let as many people as
        possible know about it. To me, Advent of Code is worth doing
        for any developer, and in particular, any CS student. Not
        only does it help with your degree, learning new skills that
        you can put into practice in your courseworks, but it also
        helps massively when it comes to programming interviews.

        <br /><br />

        So, as a part of this initiative of mine, I tried to get as
        many people as possible involved in my third year,
        leveraging my position in the CS department's mentoring
        scheme. I invited all members of the school to take part,
        and we created a discord channel to discuss our solutions
        each day. The leaderboard I'd created quickly grew with a
        mixture of staff and students, and it was great to see
        people learning new things about not just programming
        techniques, but sharing insights into their chosen
        programming language - getting people to move outside of the
        languages they'd been formally taught and were comfortable
        with.

        <br /><br />

        I wanted to do the same in my final year, but with some more
        advance planning. I delivered a talk to anyone that was
        interested to get them started with the basics. I also
        created a discord server for the school, which will
        hopefully live on after my departure. To go with this server
        I created a Discord bot, which would post leaderboard
        updates using a custom scoring system - one which
        incentivised completing one problem per day, rather than
        solving as quickly as possible. Following my love for Kotlin
        I thought I'd give Kord a go, a Kotlin wrapper for the
        Discord API. Documentation was poor, and I struggled for far
        too long, but in the end had something passable, and
        deployed on Oracle Cloud. This wasn't the first time I'd
        made a Discord bot - I've written a few for various projects
        - but this is the first one that I've had used by more than
        a handful of close friends. It was mostly a success, after
        a week or so of teething issues.

        <br /><br />

        Overall in 2022, 8 people completed all 50 stars by the
        25th, with 80 people completing at least one star over the
        month. This was great to see, and I hope enough people
        remain who will continue to push Advent of Code to students
        in the future.

        <br /><br />

        If you're interested in the bot I created, take a look <LinkComponent to="https://github.com/aidandagnall/aoc-bot" name="here" />,
        or if you'd like to try out Kotlin, you can <LinkComponent to="https://github.com/aidandagnall/aoc-kotin-template" name="try my template" />,
        which has some helpers for reading input
        files, timing your solutions, creating files for each day,
        and running tests. I adapted this from <LinkComponent to="https://github.com/hughjdavey/aoc-kotlin-starter" name="hughjdavey's" /> Kotlin template.


      </p>
    </Post>
  );
}

export default Advent;
