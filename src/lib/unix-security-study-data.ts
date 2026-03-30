export type UnixSecurityTopic = {
  slug: string;
  title: string;
  content: string;
  commands: { cmd: string; desc: string }[];
  tips: string[];
  flashcards: { front: string; back: string }[];
};

export type UnixSecurityDomain = {
  key: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  topics: UnixSecurityTopic[];
};

export const UNIX_SECURITY_STUDY: UnixSecurityDomain[] = [
  {
    key: "system-fundamentals",
    name: "System Fundamentals",
    level: "beginner",
    topics: [
      {
        slug: "terminal-basics",
        title: "The Terminal and How Your System Works",
        content: `Your Mac has two layers you can interact with. The GUI, which is icons, windows, and clicks. And the Terminal, which is the raw engine underneath. Every click in the GUI is actually a command running behind the scenes. The Terminal lets you talk to the OS directly, in its own language.\n\nThink of it like this: the GUI is an automatic car. The Terminal is a manual. More control, steeper learning curve, far more powerful.\n\nTo open it on macOS: Spotlight (Command+Space), type Terminal, hit Enter.\n\n**What is a Process?**\n\nEvery time you open an app or the system does something, it creates a process. A process is a running program with its own ID number called a PID (Process ID). Right now your Mac has hundreds of processes running. Most are invisible background services. Some belong to you, some belong to root.\n\nWho runs a process matters enormously in security. A process run by root has unlimited power over your system. A process run by you only has your permissions.\n\n**Your First Commands**\n\n\`whoami\` prints your current username. Simple, but fundamental. In security, identity is everything.\n\n\`pwd\` (Print Working Directory) tells you which folder you are currently inside. The Terminal always has a current location, just like Finder.\n\n\`ls -la\` lists everything in the current folder. The flags: \`-l\` gives long format showing permissions, owner, size, date. \`-a\` shows all files including hidden ones (files starting with a dot).\n\nReading the permission string \`drwxr-xr-x\`:\n- First character: \`d\` = directory, \`-\` = file, \`l\` = symlink\n- Next 3: owner's permissions (r=read, w=write, x=execute)\n- Next 3: group's permissions\n- Last 3: everyone else's permissions\n\nMalware often hides in files starting with a dot (hidden files) or sets unusual permissions.\n\n**Pipes and Filters**\n\nThe pipe \`|\` takes output from one command and feeds it into another. Like an assembly line.\n\n\`grep\` filters text and only shows lines matching a pattern. \`grep -v\` shows lines that do NOT match (invert). \`grep -i\` is case-insensitive.\n\n\`sudo\` (Super User Do) runs a command as root. Many security commands need this because reading process details and network connections is sensitive. Your system asks for your password to confirm you're authorizing it.`,
        commands: [
          { cmd: "whoami", desc: "Print your current username" },
          { cmd: "pwd", desc: "Print your current directory" },
          { cmd: "ls -la ~/", desc: "List home directory including hidden files" },
          { cmd: "ps aux | wc -l", desc: "Count how many processes are running" },
          { cmd: "ps aux | grep $(whoami)", desc: "Show only your processes" },
          { cmd: "sudo ls /private/var/log", desc: "List system logs as root" },
        ],
        tips: [
          "Run 'ps aux | grep $(whoami)' regularly to see what is running under your account",
          "Hidden files (starting with .) are not shown by default. Always use ls -la when investigating",
          "If a process is running as root but you did not start it, that is worth investigating",
          "Use TAB to autocomplete paths. It also confirms the path actually exists",
        ],
        flashcards: [
          { front: "What does PID stand for?", back: "Process ID. A unique number assigned to every running process on the system" },
          { front: "Why does it matter who owns a process?", back: "A process running as root has unlimited system access. A process running as your user is limited to your permissions" },
          { front: "What does the first character in ls -l output tell you?", back: "The file type: d=directory, -=regular file, l=symbolic link, p=pipe" },
          { front: "What does grep -v do?", back: "Inverts the match, showing only lines that do NOT contain the search pattern" },
          { front: "What does sudo do?", back: "Runs the following command as root (the superuser), prompting for your password first" },
          { front: "How do you see hidden files in a directory?", back: "ls -a or ls -la. Hidden files start with a dot and are excluded from normal ls output" },
        ],
      },
      {
        slug: "processes-deep-dive",
        title: "Processes: ps, top, and kill",
        content: `Understanding what is running on your system is the foundation of security monitoring. If something malicious is on your machine, it is running as a process. You just need to find it.\n\n**ps aux**\n\nThis is the most useful process command. It shows every process running on the system.\n\nThe output columns:\n- \`USER\` — who owns the process\n- \`PID\` — process ID\n- \`%CPU\` and \`%MEM\` — resource usage\n- \`COMMAND\` — what is actually running\n\nRun \`ps aux | grep -v root | grep -v $(whoami)\` to see processes not owned by root or you. Those are worth paying attention to.\n\n**top**\n\n\`top\` gives a live view of the busiest processes. Press \`q\` to quit. On macOS, \`top -o cpu\` sorts by CPU usage. If something is using 90% CPU for no reason, investigate it.\n\n**kill and pkill**\n\n\`kill PID\` sends a termination signal to the process. The process can ignore it.\n\n\`kill -9 PID\` sends SIGKILL, which forces the process to stop immediately. It cannot be ignored.\n\n\`pkill -f name\` kills all processes whose full command matches the name. Useful when you know the name but not the PID.\n\n**What Suspicious Looks Like**\n\nThings to watch for in your process list:\n- A process with a vague or random-looking name\n- A process using high CPU or memory with no obvious reason\n- A process running as root that you do not recognize\n- Multiple instances of the same process when there should only be one\n- A process whose \`COMMAND\` path is inside /tmp or a user home directory`,
        commands: [
          { cmd: "ps aux", desc: "Show all processes from all users" },
          { cmd: "ps aux | grep -v root | grep -v $(whoami)", desc: "Show processes not owned by root or you" },
          { cmd: "top -o cpu", desc: "Live process view sorted by CPU usage (macOS)" },
          { cmd: "ps aux | sort -k3 -rn | head -10", desc: "Top 10 processes by CPU usage" },
          { cmd: "kill -9 PID", desc: "Force kill a process by its PID" },
          { cmd: "pkill -f processname", desc: "Kill processes by matching the command name" },
        ],
        tips: [
          "Processes in /tmp or /var/tmp are suspicious. Legitimate software does not live there",
          "A process whose name is a string of random characters is a red flag",
          "Use 'ps aux | sort -k4 -rn | head' to find memory hogs, which can indicate data exfiltration",
          "kill -9 should be your last resort. Start with kill (SIGTERM) to give the process a chance to clean up",
        ],
        flashcards: [
          { front: "What does ps aux show?", back: "Every running process on the system, from all users, with PID, CPU, memory, and full command" },
          { front: "What is the difference between kill and kill -9?", back: "kill sends SIGTERM (can be caught/ignored). kill -9 sends SIGKILL (cannot be ignored, forces immediate stop)" },
          { front: "What column in ps aux shows who owns the process?", back: "USER (first column)" },
          { front: "Why is a process running from /tmp suspicious?", back: "Legitimate software installs to /usr, /Applications, or similar. Running from /tmp suggests it was dropped there to avoid detection" },
          { front: "What does pkill -f do?", back: "Kills all processes whose full command line matches the given string" },
          { front: "How do you sort ps output to find the most CPU-intensive processes?", back: "ps aux | sort -k3 -rn | head -10 (sort by column 3 which is %CPU, reverse numeric order)" },
        ],
      },
      {
        slug: "filesystem-security",
        title: "The Filesystem: Where Things Live and Where Malware Hides",
        content: `The Unix filesystem has a specific layout and knowing it lets you spot things that do not belong.\n\n**Key Directories**\n\n\`/etc\` — system configuration files. passwd, hosts, sudoers. These control how your system behaves at a fundamental level.\n\n\`/var\` — variable data. Logs live in /var/log. Temporary runtime data lives here. High churn directory.\n\n\`/tmp\` — temporary files, cleared on reboot. Anyone can write here. A common malware staging area.\n\n\`/usr\` — user programs. /usr/bin, /usr/sbin. Most system commands live here.\n\n\`/Applications\` — on macOS, GUI apps. Legitimate ones.\n\n\`/private\` — on macOS, the "real" location of /etc and /var (they're symlinks). Not important operationally but good to know.\n\n**macOS Specific: The Library**\n\nThis is the most important directory for macOS security monitoring.\n\n\`~/Library/LaunchAgents\` — programs that start automatically when you log in. This is where most macOS malware sets up persistence. Any .plist file here runs something on login.\n\n\`/Library/LaunchAgents\` — same, but for all users.\n\n\`/Library/LaunchDaemons\` — system-level startup programs that run even before login.\n\n**Hidden Files**\n\nFiles starting with a dot are hidden from normal \`ls\` and from Finder by default. Attackers abuse this. A dotfile in your home directory that you did not create is worth looking at.\n\n**The find Command**\n\n\`find\` searches the filesystem. The most useful security uses:\n- Find recently modified files: \`find / -mtime -1 2>/dev/null\`\n- Find files in unexpected locations: \`find /tmp -name "*.sh"\`\n- Find world-writable files: \`find / -perm -002 -type f 2>/dev/null\``,
        commands: [
          { cmd: "ls -la ~/Library/LaunchAgents", desc: "List auto-start programs for your user" },
          { cmd: "ls -la /Library/LaunchDaemons", desc: "List system-level auto-start daemons" },
          { cmd: "find /tmp -type f 2>/dev/null", desc: "Find all files in /tmp" },
          { cmd: "find / -mtime -1 -not -path '*/proc/*' 2>/dev/null", desc: "Find files modified in the last 24 hours" },
          { cmd: "ls -la ~/.*", desc: "List hidden dotfiles in your home directory" },
          { cmd: "find / -perm -002 -type f 2>/dev/null | head -20", desc: "Find world-writable files (everyone can modify)" },
        ],
        tips: [
          "Check ~/Library/LaunchAgents after installing anything. Some installers add unexpected entries",
          "find output often includes errors for directories you cannot access. Append '2>/dev/null' to hide those",
          "A .plist file in LaunchAgents that references a binary in /tmp is a serious red flag",
          "World-writable files (-perm -002) are a privilege escalation risk. Any user can modify them",
        ],
        flashcards: [
          { front: "Where does macOS malware most commonly establish persistence?", back: "~/Library/LaunchAgents or /Library/LaunchAgents as .plist files that reference a script or binary to run on login" },
          { front: "What is /tmp used for and why is it a security concern?", back: "/tmp stores temporary files cleared on reboot. It is world-writable, so any user (or malware) can create files there without special permissions" },
          { front: "What does find -mtime -1 find?", back: "Files modified within the last 1 day (24 hours)" },
          { front: "What does 2>/dev/null do?", back: "Redirects error messages (stderr, file descriptor 2) to /dev/null, discarding them silently" },
          { front: "What directory contains system configuration files on Unix?", back: "/etc. Contains passwd, sudoers, hosts, and configuration for most services" },
          { front: "What does find -perm -002 find?", back: "World-writable files, files that any user on the system can modify. A security risk for privilege escalation" },
        ],
      },
    ],
  },
  {
    key: "network-visibility",
    name: "Network Visibility",
    level: "intermediate",
    topics: [
      {
        slug: "networking-fundamentals",
        title: "Networking Fundamentals for Security",
        content: `Before you can spot suspicious network activity, you need to understand what normal looks like.\n\n**IP Addresses**\n\nEvery device on a network has an IP address. Your Mac has at least two: a local one (e.g., 192.168.1.x) for your home network, and your external public IP when you hit the internet.\n\n\`127.0.0.1\` is localhost. Always points to your own machine. A process talking to 127.0.0.1 is talking to itself (common for local services, databases, etc.).\n\n**Ports**\n\nA port is a numbered channel on an IP address. If an IP address is the building, the port is the apartment number. Both the sender and receiver need to agree on which port to use.\n\nWell-known ports to know:\n- \`22\` — SSH (remote terminal access)\n- \`80\` — HTTP (web, unencrypted)\n- \`443\` — HTTPS (web, encrypted)\n- \`3306\` — MySQL database\n- \`5432\` — PostgreSQL database\n- \`8080 / 8443\` — common alternative web ports\n\nPorts below 1024 require root to open. If you see an unfamiliar process listening on a low port, pay attention.\n\n**TCP vs UDP**\n\nTCP is connection-oriented. It does a handshake, confirms delivery, retransmits lost packets. Web browsing, SSH, file transfers.\n\nUDP is fire-and-forget. Faster, no confirmation. DNS, video streaming, games.\n\nFrom a security view: TCP connections leave clear traces (established connections, source/destination, state). UDP is harder to track.\n\n**What Listening Means**\n\nWhen a process "listens" on a port, it is waiting for incoming connections on that port. If you have a service listening on port 22, someone could potentially SSH into your machine from outside.\n\nListening on 127.0.0.1 means local only. Listening on 0.0.0.0 or your external IP means anyone can attempt to connect.`,
        commands: [
          { cmd: "ifconfig", desc: "Show network interface configuration and IP addresses (macOS/Linux)" },
          { cmd: "ip addr", desc: "Show IP addresses (modern Linux)" },
          { cmd: "curl ifconfig.me", desc: "Show your public (external) IP address" },
          { cmd: "ping -c 4 8.8.8.8", desc: "Test connectivity to Google's DNS server" },
          { cmd: "traceroute 8.8.8.8", desc: "Show the network path to a destination" },
          { cmd: "host google.com", desc: "DNS lookup for a domain name" },
        ],
        tips: [
          "0.0.0.0 as a listening address means the process accepts connections on all interfaces. That is exposed to the network",
          "127.0.0.1 (localhost) is only reachable from your own machine. Services bound here are not directly exposed",
          "Ports above 1024 can be opened by any user without root. Be aware of what your own user is listening on",
          "traceroute reveals your network path. The first hop is usually your router (192.168.x.x)",
        ],
        flashcards: [
          { front: "What is 127.0.0.1?", back: "Localhost. Always refers to your own machine. A process connecting to 127.0.0.1 is connecting to itself" },
          { front: "What is the difference between TCP and UDP?", back: "TCP is connection-oriented with delivery confirmation. UDP is fire-and-forget, faster but no confirmation" },
          { front: "What does it mean when a process is 'listening' on a port?", back: "It is waiting for incoming connections on that port. Anyone who can reach that port can attempt to connect" },
          { front: "What port does SSH use by default?", back: "Port 22" },
          { front: "What is the security difference between listening on 0.0.0.0 vs 127.0.0.1?", back: "0.0.0.0 accepts connections from any interface including the network. 127.0.0.1 only accepts connections from localhost" },
          { front: "Why do ports below 1024 require root to open?", back: "They are reserved as well-known service ports. Requiring root prevents unprivileged users from impersonating standard services like HTTP (80) or SSH (22)" },
        ],
      },
      {
        slug: "netstat",
        title: "netstat: Reading the Network State",
        content: `\`netstat\` shows you every network connection and every port your system is listening on. It is one of the most useful commands for spotting unexpected activity.\n\n**Basic Usage**\n\n\`netstat -an\` is the most common form. \`-a\` shows all connections and listening ports. \`-n\` shows raw numbers (IPs and ports instead of hostnames, faster and clearer).\n\n**Reading the Output**\n\nThe columns: Proto, Local Address, Foreign Address, State.\n\n\`Local Address\` is your machine's IP and port. \`Foreign Address\` is who you are connected to. \`State\` tells you the connection status.\n\nConnection states to know:\n- \`LISTEN\` — waiting for incoming connections\n- \`ESTABLISHED\` — active connection, data can flow\n- \`TIME_WAIT\` — connection recently closed, waiting for delayed packets to arrive\n- \`CLOSE_WAIT\` — remote end closed, your side has not yet\n\n**What to Look For**\n\nStart with LISTEN. Those are your exposed services.\n\n\`netstat -an | grep LISTEN\` filters to only listening ports. Look at every entry and ask: do I know what this is?\n\nThen look at ESTABLISHED. Those are active connections right now.\n\n\`netstat -an | grep ESTABLISHED\` shows who you are currently connected to. Unexpected connections to unfamiliar IPs are worth investigating.\n\n**On macOS**\n\nThe \`netstat\` output on macOS looks slightly different. Use \`netstat -anp tcp\` for TCP only or \`netstat -anp udp\` for UDP. The \`-p\` flag on macOS specifies protocol, not process name (unlike Linux where \`-p\` shows the process).`,
        commands: [
          { cmd: "netstat -an", desc: "Show all connections and listening ports (numeric)" },
          { cmd: "netstat -an | grep LISTEN", desc: "Show only listening ports" },
          { cmd: "netstat -an | grep ESTABLISHED", desc: "Show active connections" },
          { cmd: "netstat -anp tcp | grep LISTEN", desc: "TCP listening ports only (macOS)" },
          { cmd: "netstat -rn", desc: "Show the routing table" },
          { cmd: "netstat -an | grep -v '127.0.0.1' | grep LISTEN", desc: "Listening ports exposed beyond localhost" },
        ],
        tips: [
          "grep -v '127.0.0.1' on LISTEN output gives you what is exposed to the network, not just to yourself",
          "TIME_WAIT entries are normal after connections close. Many of them just means high traffic volume",
          "On Linux, netstat -tulpn shows the process name next to each listening port (requires root for all processes)",
          "An ESTABLISHED connection to a foreign IP you do not recognize is worth looking up with 'whois IP'",
        ],
        flashcards: [
          { front: "What does netstat -an show?", back: "All active connections and listening ports on the system, displayed with numeric IPs and ports" },
          { front: "What does a LISTEN state mean in netstat output?", back: "The process is waiting for incoming connections on that port" },
          { front: "What does ESTABLISHED mean in netstat output?", back: "An active connection exists. Data can flow between the two endpoints" },
          { front: "How do you filter netstat output to see only listening ports?", back: "netstat -an | grep LISTEN" },
          { front: "What is the difference between netstat -p on macOS vs Linux?", back: "On macOS, -p specifies the protocol (tcp/udp). On Linux, -p shows the process name and PID associated with each connection" },
          { front: "Why is it significant when a port is listening on 0.0.0.0 vs 127.0.0.1?", back: "0.0.0.0 is reachable from any network interface including external ones. 127.0.0.1 is only reachable from the local machine" },
        ],
      },
      {
        slug: "lsof",
        title: "lsof: Connecting Processes to Network Activity",
        content: `\`lsof\` stands for "list open files." On Unix, everything is a file, including network connections. So lsof shows you everything a process has open: files, directories, sockets, network connections.\n\nFor security work, the most useful part is the network view.\n\n**lsof -i**\n\n\`lsof -i\` lists all processes with open network connections. This is the command that bridges the gap between netstat (which shows connections but not always the process) and ps (which shows processes but not their connections).\n\nOutput columns: COMMAND, PID, USER, FD, TYPE, DEVICE, SIZE, NODE, NAME.\n\nThe NAME column is what you care about. It shows the connection: \`4.3.2.1:443 (ESTABLISHED)\` or \`*:8080 (LISTEN)\`.\n\n**Filtering**\n\n\`lsof -i TCP\` — only TCP connections\n\`lsof -i :443\` — only connections on port 443\n\`lsof -i -P\` — show port numbers instead of service names\n\`lsof -i -n\` — show IPs instead of resolved hostnames (faster)\n\n**Combining with ps**\n\nWhen you spot a suspicious connection in lsof, note the PID. Then run \`ps -p PID -o user,pid,ppid,command\` to get full details on that process: who owns it, what is its parent process, and the full command that started it.\n\n**lsof by process**\n\n\`lsof -p PID\` shows everything a specific process has open: files, libraries, sockets. This is useful after you have identified a suspicious process.\n\n\`lsof -u username\` shows everything open by a specific user.`,
        commands: [
          { cmd: "lsof -i", desc: "List all processes with open network connections" },
          { cmd: "lsof -i -P -n", desc: "Network connections with numeric ports and IPs (no DNS lookup)" },
          { cmd: "lsof -i TCP -P | grep LISTEN", desc: "TCP listening sockets with process names" },
          { cmd: "lsof -i :22", desc: "Show what is using port 22" },
          { cmd: "lsof -p PID", desc: "Show all open files for a specific process" },
          { cmd: "sudo lsof -i -P -n | grep -v '127.0.0.1'", desc: "All non-local network connections with process names" },
        ],
        tips: [
          "Run lsof -i as root (sudo) to see all processes, not just your own",
          "lsof -i -P -n is the version to use for security investigation: no slow DNS lookups, raw port numbers",
          "When you find a suspicious PID in lsof, use 'ps -p PID -o user,pid,ppid,command' to see the full picture",
          "A process connected to an unusual foreign IP on a high port (above 1024) with no explanation is worth digging into",
        ],
        flashcards: [
          { front: "What does lsof stand for?", back: "List Open Files. On Unix, network connections are treated as files, so lsof can show network activity" },
          { front: "What does lsof -i show?", back: "All processes that have open network connections, with the process name, PID, user, and connection details" },
          { front: "How do you find what process is using a specific port?", back: "lsof -i :PORT (e.g., lsof -i :443) or on Linux: ss -tulpn | grep :PORT" },
          { front: "What flags make lsof output faster and cleaner for investigation?", back: "-P (numeric ports) and -n (numeric IPs, no DNS) prevent slow lookups" },
          { front: "How do you see all open files for a specific process?", back: "lsof -p PID" },
          { front: "How do lsof -i and netstat complement each other?", back: "netstat shows connections and states quickly. lsof maps each connection to the exact process name and PID" },
        ],
      },
    ],
  },
  {
    key: "defense-and-hardening",
    name: "Defense and Hardening",
    level: "intermediate",
    topics: [
      {
        slug: "macos-persistence",
        title: "macOS Persistence: LaunchAgents, Daemons, and cron",
        content: `Persistence is how a malicious program survives a reboot. If you remove it from memory but it has a persistence mechanism, it comes back the next time you restart. Understanding persistence locations is one of the most practical defensive skills.\n\n**LaunchAgents**\n\nLaunchAgents are .plist files that tell macOS to run something automatically. They run in the context of a logged-in user.\n\nLocations to check:\n- \`~/Library/LaunchAgents\` — your user only, runs on your login\n- \`/Library/LaunchAgents\` — all users, runs on any user login\n\nThe .plist file contains a \`Program\` or \`ProgramArguments\` key that points to the binary or script to run.\n\n**LaunchDaemons**\n\n\`/Library/LaunchDaemons\` — runs as root, even before any user logs in. Higher privilege, higher risk if abused.\n\n\`/System/Library/LaunchDaemons\` — Apple's own daemons. Do not touch.\n\n**How to check**\n\n\`launchctl list\` shows all currently loaded launch agents and daemons. The \`PID\` column shows which ones are running. A PID of \`-\` means it is loaded but not currently active.\n\nFilter out Apple's entries: \`launchctl list | grep -v com.apple\`. What remains is third-party. Look at each one and verify it is from software you trust.\n\n**cron**\n\n\`cron\` is a scheduler. It runs commands at specified times. \`crontab -l\` shows your scheduled tasks. \`sudo crontab -l\` shows root's scheduled tasks.\n\nA crontab entry looks like: \`* * * * * /path/to/script\`. The five asterisks represent minute, hour, day of month, month, day of week.\n\n\`/etc/crontab\` and \`/etc/cron.d/\` contain system-wide scheduled tasks. On macOS, cron is mostly replaced by launchd but can still be used.`,
        commands: [
          { cmd: "launchctl list", desc: "Show all loaded launch agents and daemons" },
          { cmd: "launchctl list | grep -v com.apple", desc: "Show only non-Apple launch entries" },
          { cmd: "ls -la ~/Library/LaunchAgents", desc: "List user launch agents" },
          { cmd: "ls -la /Library/LaunchDaemons", desc: "List system-level launch daemons" },
          { cmd: "crontab -l", desc: "Show your scheduled cron jobs" },
          { cmd: "sudo crontab -l", desc: "Show root's scheduled cron jobs" },
        ],
        tips: [
          "A new entry in LaunchAgents after installing software is normal. An entry you did not put there is not",
          "Read the ProgramArguments in a suspicious .plist with: cat ~/Library/LaunchAgents/filename.plist",
          "A LaunchAgent pointing to a binary in /tmp, /Users/Shared, or a random path is a strong red flag",
          "Some legitimate software like Little Snitch, 1Password, and Dropbox have LaunchAgents. Know what you have installed",
        ],
        flashcards: [
          { front: "What is the difference between a LaunchAgent and a LaunchDaemon?", back: "LaunchAgents run in the context of a logged-in user. LaunchDaemons run as root even before any user logs in" },
          { front: "Where are user-level LaunchAgents stored?", back: "~/Library/LaunchAgents (current user only) and /Library/LaunchAgents (all users)" },
          { front: "How do you see which LaunchAgents are not from Apple?", back: "launchctl list | grep -v com.apple" },
          { front: "What does crontab -l show?", back: "The scheduled cron tasks for your current user" },
          { front: "What is in a LaunchAgent .plist file?", back: "A Label (unique name), ProgramArguments (the command to run), and timing/trigger settings like RunAtLoad or StartInterval" },
          { front: "Why is a LaunchDaemon more dangerous than a LaunchAgent if abused?", back: "LaunchDaemons run as root before any user logs in, giving them full system access with no user interaction needed" },
        ],
      },
      {
        slug: "users-permissions",
        title: "Users, Permissions, and Privilege Escalation",
        content: `Understanding users and permissions is not just system administration. It is the core of access control, and access control is the core of security.\n\n**Who Are You?**\n\n\`id\` shows your user ID (UID), group ID (GID), and all groups you belong to. If your UID is 0, you are root.\n\n\`who\` shows who is currently logged in to the system. \`w\` shows the same with more detail, including what they are running.\n\n\`last\` shows recent login history. Useful for spotting unexpected logins.\n\n**Users on the System**\n\n\`/etc/passwd\` lists all user accounts. Format: \`username:x:UID:GID:description:home:shell\`. On modern systems the \`x\` means the password is in /etc/shadow.\n\nOn macOS, use \`dscl . -list /Users\` to list users. Hidden system users have UIDs below 500.\n\n**sudo and sudoers**\n\n\`sudo -l\` shows what commands your user is allowed to run with sudo. This tells an attacker (or you) exactly what escalation paths exist.\n\n\`/etc/sudoers\` (or entries in /etc/sudoers.d/) controls who can run what as root. \`NOPASSWD\` entries are particularly sensitive because they allow privilege escalation without a password.\n\n**Privilege Escalation**\n\nPrivilege escalation is when a lower-privileged user gains higher privileges than they should have. Signs to watch for:\n- A process running as root that was started by a non-root user\n- Unexpected entries in sudoers\n- SUID binaries in unusual locations (find / -perm -4000 2>/dev/null)\n- New user accounts you did not create`,
        commands: [
          { cmd: "id", desc: "Show your user ID, group ID, and group memberships" },
          { cmd: "who", desc: "Show who is currently logged in" },
          { cmd: "last | head -20", desc: "Show the 20 most recent login events" },
          { cmd: "sudo -l", desc: "Show what commands your user can run with sudo" },
          { cmd: "find / -perm -4000 -type f 2>/dev/null", desc: "Find SUID binaries (run as their owner)" },
          { cmd: "dscl . -list /Users | grep -v '^_'", desc: "List non-system user accounts on macOS" },
        ],
        tips: [
          "Run 'sudo -l' as your normal user to understand your own escalation paths. An attacker will check this first",
          "SUID binaries run as their owner, not the caller. A SUID root binary that can be abused = root access",
          "New user accounts (especially with UID 0) that you did not create are a serious compromise indicator",
          "'last' reads from /var/log/wtmp. On macOS use 'last -100' to see the last 100 logins",
        ],
        flashcards: [
          { front: "What does the id command show?", back: "Your UID (user ID), GID (primary group ID), and all secondary groups you belong to" },
          { front: "What UID does the root user always have?", back: "0" },
          { front: "What does sudo -l show?", back: "The list of commands your user is permitted to run as root (or other users) via sudo" },
          { front: "What is a SUID binary?", back: "A binary with the Set User ID bit set. It executes with the file owner's privileges (often root) regardless of who runs it" },
          { front: "Where is sudoers configuration stored?", back: "/etc/sudoers and additional files in /etc/sudoers.d/" },
          { front: "What is privilege escalation?", back: "When a user gains more privileges than they should have, for example a regular user gaining root access" },
        ],
      },
      {
        slug: "log-analysis",
        title: "Log Analysis: Reading What Your System Records",
        content: `Logs are your system's memory. Every suspicious event, every failed login, every sudo command leaves a trace. Knowing where to look and what to look for is a core blue team skill.\n\n**Log Locations**\n\nOn Linux: \`/var/log/\` contains most logs.\n- \`/var/log/auth.log\` (Debian/Ubuntu) or \`/var/log/secure\` (RHEL/CentOS) — authentication events, sudo usage, SSH logins\n- \`/var/log/syslog\` or \`/var/log/messages\` — general system events\n- \`/var/log/cron\` — scheduled task execution\n\nOn macOS: Apple uses a unified logging system.\n- \`log show\` is the primary command\n- \`log stream\` gives live output\n- Some legacy logs still exist in \`/private/var/log/\`\n\n**Reading Logs on macOS**\n\n\`log show --last 1h\` shows the last hour of system logs. The output is dense. Pipe it to \`grep\` to filter.\n\n\`log show --predicate 'eventMessage contains "sudo"' --last 1d\` shows all sudo events in the last day.\n\n**Reading Logs on Linux**\n\n\`tail -f /var/log/auth.log\` streams new authentication events in real time. Useful when you want to watch what is happening now.\n\n\`grep "Failed password" /var/log/auth.log\` finds failed SSH login attempts. A large number of them indicates a brute force attack.\n\n\`grep "sudo" /var/log/auth.log\` shows every sudo command executed on the system.\n\n**What to Look For**\n\n- Failed login attempts, especially many in short succession\n- Successful logins from unexpected IPs or at unusual times\n- sudo commands you did not run\n- cron jobs executing things you did not schedule\n- Gaps in logs (logs being cleared is a sign of a cover-up)`,
        commands: [
          { cmd: "log show --last 1h | grep -i error", desc: "macOS: last hour of error logs" },
          { cmd: "log show --predicate 'eventMessage contains \"sudo\"' --last 1d", desc: "macOS: sudo activity in the last day" },
          { cmd: "tail -f /var/log/auth.log", desc: "Linux: stream authentication log in real time" },
          { cmd: "grep 'Failed password' /var/log/auth.log | tail -20", desc: "Linux: last 20 failed SSH attempts" },
          { cmd: "last | head -20", desc: "Last 20 login events" },
          { cmd: "sudo cat /private/var/log/system.log | grep -i 'error\\|warn' | tail -30", desc: "macOS: recent errors and warnings" },
        ],
        tips: [
          "The absence of logs is itself suspicious. If a system should be generating logs but is not, investigate",
          "On Linux, 'grep -c \"Failed password\" /var/log/auth.log' counts total failures. High numbers = brute force",
          "Use 'grep -B 2 -A 2 pattern file' to see 2 lines before and after each match, giving context",
          "Log timestamps are your best friend. Cross-reference suspicious process activity with log events at the same time",
        ],
        flashcards: [
          { front: "Where are authentication logs stored on Debian/Ubuntu?", back: "/var/log/auth.log" },
          { front: "What macOS command shows recent system logs?", back: "log show --last 1h (adjust the time range as needed)" },
          { front: "What grep command finds failed SSH logins?", back: "grep 'Failed password' /var/log/auth.log" },
          { front: "What does tail -f do?", back: "Follows a file in real time, printing new lines as they are added. Useful for watching logs live" },
          { front: "Why are gaps in logs suspicious?", back: "Attackers sometimes clear log files to cover their tracks. A gap where there should be continuous entries suggests tampering" },
          { front: "How do you filter macOS logs to show only sudo activity?", back: "log show --predicate 'eventMessage contains \"sudo\"' --last 1d" },
        ],
      },
      {
        slug: "security-checklist",
        title: "Building a Personal Security Checklist",
        content: `Once you know the individual tools, the next step is building a routine. Systematic checks catch things you would miss if you only looked when something felt wrong.\n\n**A Practical Checklist**\n\nRun through these periodically, especially after installing new software or connecting to unfamiliar networks:\n\n1. Check LaunchAgents: \`launchctl list | grep -v com.apple\`\n2. Check listening ports: \`netstat -an | grep LISTEN | grep -v 127.0.0.1\`\n3. Check active connections: \`sudo lsof -i -P -n | grep ESTABLISHED | grep -v '127.0.0.1'\`\n4. Check running processes: \`ps aux | sort -k3 -rn | head -20\`\n5. Check recent logins: \`last | head -10\`\n6. Check sudo access: \`sudo -l\`\n\n**Simple Bash Script**\n\nYou can wrap these into a script that runs them all at once:\n\n\`\`\`bash\n#!/bin/bash\necho "--- Non-Apple Launch Agents ---"\nlaunchctl list | grep -v com.apple\n\necho ""\necho "--- Listening Ports (not localhost) ---"\nnetstat -an | grep LISTEN | grep -v '127.0.0.1'\n\necho ""\necho "--- Active Network Connections ---"\nlsof -i -P -n | grep ESTABLISHED | grep -v '127.0.0.1'\n\necho ""\necho "--- Top Processes by CPU ---"\nps aux | sort -k3 -rn | head -10\n\necho ""\necho "--- Recent Logins ---"\nlast | head -10\n\`\`\`\n\nSave it as \`check.sh\`, run \`chmod +x check.sh\`, then run it with \`./check.sh\`.\n\n**What Normal Looks Like**\n\nThe most important skill is not knowing what suspicious looks like in a textbook. It is knowing what your specific system looks like when it is normal. Run these checks when everything is fine. Save the output. Then when something looks different, you have a baseline to compare against.`,
        commands: [
          { cmd: "launchctl list | grep -v com.apple", desc: "Show non-Apple auto-start entries" },
          { cmd: "sudo lsof -i -P -n | grep ESTABLISHED | grep -v '127.0.0.1'", desc: "Active non-local network connections with process names" },
          { cmd: "netstat -an | grep LISTEN | grep -v '127.0.0.1'", desc: "Ports listening on non-localhost interfaces" },
          { cmd: "ps aux | sort -k3 -rn | head -20", desc: "Top 20 processes by CPU usage" },
          { cmd: "chmod +x check.sh && ./check.sh", desc: "Make script executable and run it" },
          { cmd: "last | head -10", desc: "Last 10 login events for quick review" },
        ],
        tips: [
          "Run your checklist on a clean, trusted system first. Save the output as your baseline",
          "Diff the output between runs: 'diff baseline.txt current.txt' shows exactly what changed",
          "Add the script to crontab to run it daily and email you the output (if you have mail configured)",
          "The goal is not to memorize every process. It is to notice when something is different from last time",
        ],
        flashcards: [
          { front: "Why is establishing a baseline important for security monitoring?", back: "You cannot spot abnormal behavior if you do not know what normal looks like. A baseline gives you something to compare against" },
          { front: "What chmod command makes a script executable?", back: "chmod +x scriptname.sh" },
          { front: "How do you run a bash script in the current directory?", back: "./scriptname.sh (the ./ specifies the current directory since . is not in $PATH by default)" },
          { front: "What does diff do?", back: "Compares two files line by line and shows what is different between them. Useful for comparing security scan outputs over time" },
          { front: "What is the quick one-liner to see non-local listening ports?", back: "netstat -an | grep LISTEN | grep -v '127.0.0.1'" },
          { front: "What is the purpose of running a security checklist regularly rather than only when suspicious?", back: "Attackers try to stay quiet. Regular checks catch slow changes that would not trigger an obvious alarm" },
        ],
      },
    ],
  },
];

export const UNIX_SECURITY_TOTAL_TOPICS = UNIX_SECURITY_STUDY.reduce(
  (sum, d) => sum + d.topics.length,
  0
);

export const UNIX_SECURITY_TOTAL_FLASHCARDS = UNIX_SECURITY_STUDY.reduce(
  (sum, d) => sum + d.topics.reduce((s, t) => s + t.flashcards.length, 0),
  0
);
