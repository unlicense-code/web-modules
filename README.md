# web-modules a Standard for the Web 4.0
A Web Module Loader can also be used in WInterCG Standard Supporting Runtimes

This Implements a basic Module Loader for Web Runtimes it builds the backbone for the Web 4.0 as this is defined out of
ECMAScript Modules and Asset References. This offers the Basic Loading and Versioning Structure for the Code. 

## Development
I have no plans to publish a incremental runtime at present as chromium exists for the once who need any interop there exists NWJS as Electron in the mean while. At present the main focus is on the development of a working Web 4.0 IDE to build Modules based on this stack. So Main work is to bring VSCodium the telemetry free VSCODE / CODE-OSS IDE into a state where it can work fully in the browser not only the editor part also all feedback interfaces and integrations. All Commits including the direct sockets API Proposal got shipped already inside chromium/chrome/edge safari does not support it at present but that is also not needed we have other interfaces for that kind of stuff. But that is low priority. Main Priority is getting a Solid Dev Expirence. So the ecosystem can evolve.

## Preamble

web-modules has evolved the infrastructure of the Web, with many things we've learned from successful systems, like Zircon, v8, Git, GN, Ninja, Goma, and many, many more. This is the sort of thing that would have come out of ARPA/DARPA, IETF, or Bell Labs in another age. Web 4.0 state 2 after genesis boot so V_ETH2 on top of WebRTC for interop with the existing legacy web. For the tech people who wonder about ETH2 Yes that Means Ethernet v2 the none 1500 MTU Bound Limited version. That you know still exist even with TCP/IP v6 as it is in herent in other places your kernel always joins the packets. This is only one example of old fundamental Flaws that exist since the begining of the Web there we calculated that 1500.

## History of Networking
The MTU (Maximum Transmission Unit) states how big a single packet can be. Generally speaking, when you are talking to devices on your own LAN the MTU will be around 1500 bytes and the internet runs almost universally on 1500 as well. However, this does not mean that these link layer technologies can’t transmit bigger packets.

For example, 802.11 (better known as WiFi) has a MTU of 2304 bytes, or if your network is using FDDI then you have a MTU around 4352 bytes. Ethernet itself has the concept of “jumbo frames”, where the MTU can be set up to 9000 bytes (on supporting NICs, Switches and Routers).

However, almost none of this matters on the internet. Since the backbone of the internet is now mostly made up of ethernet links, the de facto maximum size of a packet is now unofficially set to 1500 bytes to avoid packets being fragmented down links.

On the face of it 1500 is a weird number, we would normally expect a lot of constants in computing to be based around mathematical constants, like powers of 2. 1500, however fits none of those.

So where did 1500 come from, and why are we still using it?

The magic number
Ethernet’s first major break into the world came in the form of 10BASE-2 (cheapernet) and 10BASE-5 (thicknet), the numbers indicating roughly how many hundred meters a single network segment could span over.

Since there were many competing protocols at the time, and hardware limits existed, the original creator notes this in an email that the packet buffer memory requirements had some play in the magic 1500 number. (thanks to @yeled for finding this)

In retrospect, a longer maximum might have been better, but if it increased the cost of NICs during the early days it may have prevented the widespread acceptance of Ethernet, so I’m not really concerned.

However that is not the whole story. The “Ethernet: Distributed Packet Switching for Local Computer Networks” paper from 1980 is a early note of the efficiency cost analysis of larger packets on a network. This being especially important to ethernet at the time, since ethernet networks would ether be sharing the same coax cable between all systems, or there would be ethernet hubs that would only allow one packet at a time to be transmitted around all members of the ethernet segment.

A number had to be picked that would mean that transmission latency on these shared (sometimes busy) segments would not be too high, but also that packet header overhead would not be too much. (see some of the tables on the paper linked above on page 15-16)

It would seem at best that the engineers at the time picked 1500 bytes, or around 12000 bits as the best “safe” value.

Since then various other transmission systems have come and gone, but the lowest MTU value of them has still been ethernet at 1500 bytes. Going bigger than lowest MTU on a network will either result in IP fragmentation, or the need to do path MTU detection. Both of which have their own sets of problems. Even if sometimes large OS vendors dropped the default MTU to even lower at times.

watch more: https://blog.benjojo.co.uk/post/why-is-ethernet-mtu-1500

## Module Internals

addressed by content and references so called specifiers. It enables the creation of completely distributed applications, and in doing so aims to make the web faster, safer, and more open.

distributed content system that seeks to connect all computing devices with the same system. In some ways, this is similar to the original aims of the Web, similar to a single BitTorrent swarm exchanging Git objects. You can read more about its origins in the paper of projects like IPFS - Content Addressed, Versioned, P2P File System.

web-modules is the new major system of the internet / web 4.0. If built right, it replaces HTTP3. It could complement or replace even more. Let's go point-by-point into how.


For routing/retrieval, the nodes perform a DHT operations using the Kubo RPC API (/v0/dht/*). querys the DHT for peers and content providers, and then they fetch the content, which they provide for the browser nodes that are connected to them.

contacts the preload (Genesis Boot Nodes) using Kubo RPC API (/v0/refs) to preload the entire dag. The Genesis Boot nodes fetche the data from the browser over Bitswap and then advertises it on the DHT.

Note: Genesis Boot could be understood as ephemeral pinning. The CIDs' data is fetched by a Genesis Boot nodes for a short period during which it is available to the web-modules content address distributed build grid network, and after it is garbage collected.

nodes running in the browser can connect to nodes via the WebRTC Star or other cluster transports.

## web-modules is a protocol:
- Defines a content-addressed device or system
- Coordinates content delivery via a capability based protocol full isolation like vm's
- Combines Kademlia + BitTorrent + Git to supply you out of the box versioning enables world wide shared build grid.
- web-modules can represent a device or a file system:
- supports all kinds of network cluster algos like star and chain 

## web-modules Has directories and files as also devices and modules
- Is a mountable filesystem (via FUSE)
- is a web:

## web-modules Can be used to view documents like the conventional web
- Files are accessible via HTTP at https://ipfs.io/<path>
- Browsers and extensions can use the ipfs:// URL or ipns:// URI schemes directly
- Hash-addressed content guarantees authenticity
- Also it enables direct delivery via existing protocols like http via ECMAscript Modules as a fundation for linking
is a modular:

## web-modules Connection layer over any network protocol
- Routing layer
- Uses a routing layer DHT (Kademlia/Coral)
- Uses a path-based naming service
- Uses a BitTorrent-inspired block exchange

## web-modules uses crypto:
- Cryptographic-hash content addressing
- Block-level deduplication
- File integrity plus versioning
- File-system-level encryption plus signing support
- is p2p:

## web-modules Worldwide peer-to-peer file transfers
- Completely decentralized architecture
- No central point of failure

## web-modules is a CDN:
- Add a file to the file system locally, and it's now available to the world
- Caching-friendly (content-hash naming)
- BitTorrent-based bandwidth distribution

## web-modules is a name service:
- IPNS, an SFS-inspired name system
- Global namespace based on PKI
- It serves to build trust chains
- It's compatible with other NSes
- Can map DNS, .onion, .bit, etc to IPNS


## Some Experimental incremental build artifacts that run indipendent already
- It can Run linux builds in a browser on virtual x86 emulated via a wasm module. 
  - see: https://minimal.idzona.com/emulator
  - see: https://demo.os-js.org/
- https://beakerbrowser.com/ a p2p editor and browser
  - the results of that get merged into code-oss which then offers that out of the box as it self gets a web-module
  - https://github.com/microsoft/vscode/issues/167505

after that you maybe understand what this adds to the web with my new update activity pub standard upgrade based on a unified module format that is auditable and route able via Web 4.0 forms the Web 4.0 no Nativ host needed any more

We decoupled the Platform complet and always remember that is only a slow poc we have that also none published as high performance implementations and even other archs but i am the only one working on the whole ecosystem i need some evangelists and developers to join the effort asap so i can focus on products and not the fundamentals 
