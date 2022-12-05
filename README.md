# web-modules a Standard for the Web 4.0
A Web Module Loader can also be used in WInterCG Standard Supporting Runtimes

This Implements a basic Module Loader for Web Runtimes it builds the backbone for the Web 4.0 as this is defined out of
ECMAScript Modules and Asset References. This offers the Basic Loading and Versioning Structure for the Code. 


web-modules has evolved the infrastructure of the Web, with many things we've learned from successful systems, like Zircon, v8, Git, GN, Ninja, Goma, and many, many more. This is the sort of thing that would have come out of ARPA/DARPA, IETF, or Bell Labs in another age. Web 4.0 state 2 after genesis boot so V_ETH2 on top of WebRTC for interop with the existing legacy web.

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
