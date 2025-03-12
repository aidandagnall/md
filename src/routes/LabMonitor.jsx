import Post from "../components/Post";
import Header from "../components/Header";
import MainLight from "../res/main-light.png";
import MainDark from "../res/main-dark.png";
import ReportLight from "../res/report-light.png";
import ReportDark from "../res/report-dark.png";


function LabMonitor() {
  return (
    <Post
      title="Lab Monitor"
    >
      <p className="text-left">

        Lab Montior is a mobile app that allows students to check
        the status of the general-use labs in the CS department at
        the University of Nottingham.

      </p>
      <Header as="h2">Why?</Header>
      <p className="text-left">

        During my years at UoN, for a variety of reasons, the size
        of each new cohort increased drastically. While in my first
        year there was around 150 starters, this ballooned to 300
        starters in my second year, and 400-450 in my third and
        fourth years.

        <br /><br />

        With all these new students the labs (that during my first
        year were fairly quiet) suddenly became very busy. When
        teaching was timetabled in these spaces, it was often
        requested that any students not enrolled in that module left
        to make sufficient space. This frustration was felt most in
        my third year, when I'd often want to sit down for hours at
        a time to write my dissertation but would often be asked to
        move to find a new space, breaking my train of thought. In
        the worst cases, there was no space left in any of the labs,
        and I'd have to go home earlier than I wanted.

        <br /><br />

        It was during this process that I began to think about how
        this could be solved, and what a solution might look like.
        Though it wasn't until the summer between my third and
        fourth years that I decided to bring this idea to life.
        Thanks to my time a Surgecross Software, a small software
        development company formed from students and graduates from
        UoN, I'd gained some experience with Flutter and it gave me
        the confidence I needed to attempt something on my own.

        <br /><br />
      </p>

      <Header as="h2">What does it do?</Header>

      <p>

        The app allows students to view the live status of the labs
        around the CS building. It shows any timetabled teaching in
        each room, and live reports from students in the room as to
        how busy the room is, and how likely they are to be asked to
        leave. It also shows them the upcoming lab sessions,
        allowing students to figure out where best to work each day.

        <br /><br />

        For the sake of security, all users need to be authenticated
        which is done through Auth0, as I decided it best not
        to reinvent the wheel and potentially risk a vulnerability.
        Though this solution isn't perfect (and had plenty of
        teething issues), it serves it's purpose well at no cost.

        <br /><br />

        One idea that came about during development, was to
        integrate more closely with DTS, the department's technology
        support team.  We got approval for funding from the
        department and placed industrial-grade custom stickers at
        each general access PC in the building. Then, functionality
        was built into the app to allow students to scan these and
        report faults. Then, members of DTS could see these reports
        in the app, track their status, and close them when they'd
        been fixed.

        <br /><br />

        None of this would have
        been possible without the help of [[<a href="https://joe.sieniawski.co.uk" className="text-blue-600 dark:text-blue-400">Jozef Sieniawski</a>]], who
        handled all the server-side deployment and university
        communication, as well as plenty of hours spent sanity
        checking my plans, fixing my UI designs in figma, and
        dealing with my questions.

      </p>

      <Header as="h2">Timeline</Header>

      <p>

        I started working on the project in mid-August 2022, and had
        a beta live on the Play Store and web in September. After
        interfacing with university IT services, we decided it would
        be best to move the project's server into the university
        network and that it would need some authentication. Then,
        after another month of work, the app finally launched on
        both iOS and Google Play stores in October 2022.

      </p>

      <Header as="h2">Client</Header>

      <p>

        The client was written in Flutter, as time was limited and I
        only wanted to maintain one (client) codebase. Even with my
        previous experience, this was a big learning curve for me. I
        leant heavily on material components where possible, to save
        users from my poor UI design work, and attempted to mimic
        it when I needed original components.

        <br /><br />

        Authentication was incorporated long into the development
        process, which unfortunately meant I was pretty much stuck
        in Flutter, for which I found Auth0's documentation
        lacklustre, with multiple conflicting guides, and two
        different packages. This worked out in the end, though
        required no end of trial and error in setting up
        configuration files to get it all to work properly.

      </p>

      <div className="flex dark:hidden flex-row items-center justify-center my-4 w-2/5 mx-auto">
        <img src={MainLight} className="object-scale-down shrink mx-1" alt="Lab Monitor main screen" />
        <img src={ReportLight} className="object-scale-down shrink mx-1" alt="Lab Montior report submission screen" />
      </div>

      <div className="hidden dark:flex flex-row items-center justify-center my-4 w-2/5 mx-auto">
        <img src={MainDark} className="object-scale-down shrink mx-1" alt="Lab Monitor main screen" />
        <img src={ReportDark} className="object-scale-down shrink mx-1" alt="Lab Monitor report submission screen" />
      </div>

      <Header as="h2">Server</Header>

      <p>

        Searching for any excuse to use Kotlin, and wanting a break
        from the boilerplate that comes with Spring, I opted to use
        JetBrains' own Ktor framework, thinking this would be a
        fairly lightweight project and wouldn't need much
        development time - and therefore all that boilerplate
        wouldn't give much benefit.

        <br /><br />

        Unlike with the client, I found Auth0 integration much
        simpler on the server side - I'd worked with JWTs before,
        and JetBrains' documentation made this pretty easy.

        <br /><br />

        As the application moved away from the simple original idea
        and become more complicated, I migrated from my original
        MongoDB instance (not a particularly good choice for this
        application anyway, I just wanted an excuse to try it) to a
        MySQL database. I ended up using Exposed, a Kotlin ORM
        framework, which worked wonderfully for my purposes.

      </p>

      <br />
      <br />
      <p>
        Lab Montior is available now (though you might struggle if you're
        not at UoN) on [[<a href="https://play.google.com/store/apps/details?id=com.aidandagnall.lab_monitor" className="text-blue-600 dark:text-blue-400">Google Play</a>]] and [[<a href="https://apps.apple.com/gb/app/lab-monitor/id6443952035" className="text-blue-600 dark:text-blue-400">App Store</a>]].


        If you're interested in contributing to the project, or adapting it for use elsewhere,
        you can find the source code for the [[<a href="https://github.com/aidandagnall/lab_monitor_client" className="text-blue-600 dark:text-blue-400">Client</a>]] and [[<a href="https://github.com/aidandagnall/lab_monitor_server" className="text-blue-600 dark:text-blue-400">Server</a>]] on GitHub.
      </p>


    </Post>
  )
}

export default LabMonitor;
